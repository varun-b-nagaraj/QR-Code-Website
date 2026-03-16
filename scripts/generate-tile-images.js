const fs = require("node:fs");
const path = require("node:path");
const zlib = require("node:zlib");

const width = 1200;
const height = 900;

function rgba(r, g, b, a = 255) {
  return { r, g, b, a };
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function blend(base, over) {
  const alpha = over.a / 255;
  const inv = 1 - alpha;
  return {
    r: Math.round(base.r * inv + over.r * alpha),
    g: Math.round(base.g * inv + over.g * alpha),
    b: Math.round(base.b * inv + over.b * alpha),
    a: 255,
  };
}

function createCanvas() {
  return new Uint8Array(width * height * 4);
}

function getPixel(canvas, x, y) {
  const idx = (y * width + x) * 4;
  return { r: canvas[idx], g: canvas[idx + 1], b: canvas[idx + 2], a: canvas[idx + 3] };
}

function setPixel(canvas, x, y, color) {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const idx = (y * width + x) * 4;
  const current = { r: canvas[idx], g: canvas[idx + 1], b: canvas[idx + 2], a: canvas[idx + 3] || 255 };
  const next = color.a === 255 ? color : blend(current, color);
  canvas[idx] = next.r;
  canvas[idx + 1] = next.g;
  canvas[idx + 2] = next.b;
  canvas[idx + 3] = 255;
}

function verticalGradient(canvas, top, bottom) {
  for (let y = 0; y < height; y += 1) {
    const t = y / (height - 1);
    const row = rgba(
      Math.round(lerp(top.r, bottom.r, t)),
      Math.round(lerp(top.g, bottom.g, t)),
      Math.round(lerp(top.b, bottom.b, t)),
      255,
    );
    for (let x = 0; x < width; x += 1) {
      setPixel(canvas, x, y, row);
    }
  }
}

function addRadialGlow(canvas, cx, cy, radius, color) {
  const minX = Math.max(0, Math.floor(cx - radius));
  const maxX = Math.min(width - 1, Math.ceil(cx + radius));
  const minY = Math.max(0, Math.floor(cy - radius));
  const maxY = Math.min(height - 1, Math.ceil(cy + radius));

  for (let y = minY; y <= maxY; y += 1) {
    for (let x = minX; x <= maxX; x += 1) {
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > radius) continue;
      const falloff = 1 - dist / radius;
      setPixel(canvas, x, y, rgba(color.r, color.g, color.b, Math.round(color.a * falloff * falloff)));
    }
  }
}

function fillRect(canvas, x, y, w, h, color) {
  for (let yy = y; yy < y + h; yy += 1) {
    for (let xx = x; xx < x + w; xx += 1) {
      setPixel(canvas, xx, yy, color);
    }
  }
}

function fillCircle(canvas, cx, cy, radius, color) {
  const minX = Math.max(0, Math.floor(cx - radius));
  const maxX = Math.min(width - 1, Math.ceil(cx + radius));
  const minY = Math.max(0, Math.floor(cy - radius));
  const maxY = Math.min(height - 1, Math.ceil(cy + radius));
  const radiusSq = radius * radius;

  for (let y = minY; y <= maxY; y += 1) {
    for (let x = minX; x <= maxX; x += 1) {
      const dx = x - cx;
      const dy = y - cy;
      if (dx * dx + dy * dy <= radiusSq) {
        setPixel(canvas, x, y, color);
      }
    }
  }
}

function fillEllipse(canvas, cx, cy, rx, ry, color) {
  const minX = Math.max(0, Math.floor(cx - rx));
  const maxX = Math.min(width - 1, Math.ceil(cx + rx));
  const minY = Math.max(0, Math.floor(cy - ry));
  const maxY = Math.min(height - 1, Math.ceil(cy + ry));

  for (let y = minY; y <= maxY; y += 1) {
    for (let x = minX; x <= maxX; x += 1) {
      const dx = (x - cx) / rx;
      const dy = (y - cy) / ry;
      if (dx * dx + dy * dy <= 1) {
        setPixel(canvas, x, y, color);
      }
    }
  }
}

function fillPolygon(canvas, points, color) {
  let minY = height - 1;
  let maxY = 0;
  for (const [, y] of points) {
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }

  for (let y = Math.max(0, Math.floor(minY)); y <= Math.min(height - 1, Math.ceil(maxY)); y += 1) {
    const nodes = [];
    let j = points.length - 1;
    for (let i = 0; i < points.length; i += 1) {
      const [xi, yi] = points[i];
      const [xj, yj] = points[j];
      if ((yi < y && yj >= y) || (yj < y && yi >= y)) {
        nodes.push(xi + ((y - yi) / (yj - yi)) * (xj - xi));
      }
      j = i;
    }
    nodes.sort((a, b) => a - b);
    for (let i = 0; i < nodes.length; i += 2) {
      const start = Math.max(0, Math.floor(nodes[i]));
      const end = Math.min(width - 1, Math.ceil(nodes[i + 1]));
      for (let x = start; x <= end; x += 1) {
        setPixel(canvas, x, y, color);
      }
    }
  }
}

function addNoise(canvas, amount) {
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const idx = (y * width + x) * 4;
      const n = Math.round((Math.sin(x * 0.13 + y * 0.071) + Math.cos(x * 0.047 - y * 0.11)) * amount);
      canvas[idx] = Math.max(0, Math.min(255, canvas[idx] + n));
      canvas[idx + 1] = Math.max(0, Math.min(255, canvas[idx + 1] + n));
      canvas[idx + 2] = Math.max(0, Math.min(255, canvas[idx + 2] + n));
      canvas[idx + 3] = 255;
    }
  }
}

function drawConservation() {
  const canvas = createCanvas();
  verticalGradient(canvas, rgba(213, 233, 217), rgba(111, 160, 115));
  addRadialGlow(canvas, 930, 130, 230, rgba(255, 236, 177, 170));
  fillPolygon(canvas, [
    [0, 500],
    [230, 330],
    [430, 440],
    [650, 260],
    [900, 420],
    [1200, 310],
    [1200, 900],
    [0, 900],
  ], rgba(69, 103, 61, 255));
  fillPolygon(canvas, [
    [0, 640],
    [250, 510],
    [490, 620],
    [760, 450],
    [1200, 610],
    [1200, 900],
    [0, 900],
  ], rgba(90, 133, 76, 255));
  fillPolygon(canvas, [
    [0, 700],
    [160, 660],
    [310, 720],
    [480, 650],
    [760, 760],
    [980, 690],
    [1200, 770],
    [1200, 900],
    [0, 900],
  ], rgba(150, 187, 122, 255));
  fillPolygon(canvas, [
    [490, 900],
    [620, 540],
    [680, 540],
    [560, 900],
  ], rgba(55, 95, 110, 255));
  fillCircle(canvas, 845, 540, 85, rgba(72, 115, 61, 255));
  fillRect(canvas, 828, 540, 34, 190, rgba(84, 67, 44, 255));
  fillCircle(canvas, 765, 565, 68, rgba(80, 126, 69, 255));
  fillRect(canvas, 754, 565, 24, 165, rgba(89, 72, 48, 255));
  fillCircle(canvas, 945, 595, 62, rgba(80, 126, 69, 255));
  fillRect(canvas, 935, 595, 22, 145, rgba(89, 72, 48, 255));
  addNoise(canvas, 7);
  return canvas;
}

function drawHistory() {
  const canvas = createCanvas();
  verticalGradient(canvas, rgba(222, 201, 166), rgba(126, 108, 87));
  addRadialGlow(canvas, 880, 170, 260, rgba(245, 210, 144, 145));
  fillPolygon(canvas, [
    [0, 610],
    [190, 550],
    [350, 585],
    [600, 500],
    [810, 590],
    [1200, 520],
    [1200, 900],
    [0, 900],
  ], rgba(92, 78, 62, 255));
  fillPolygon(canvas, [
    [0, 700],
    [200, 660],
    [390, 720],
    [640, 650],
    [850, 760],
    [1200, 700],
    [1200, 900],
    [0, 900],
  ], rgba(130, 108, 80, 255));
  fillRect(canvas, 240, 280, 26, 360, rgba(91, 62, 42, 255));
  fillRect(canvas, 514, 280, 26, 360, rgba(91, 62, 42, 255));
  fillRect(canvas, 245, 275, 290, 28, rgba(91, 62, 42, 255));
  fillRect(canvas, 275, 330, 235, 150, rgba(190, 160, 118, 255));
  fillRect(canvas, 295, 350, 195, 110, rgba(169, 141, 102, 255));
  fillRect(canvas, 702, 390, 60, 280, rgba(91, 62, 42, 255));
  fillRect(canvas, 665, 370, 135, 22, rgba(91, 62, 42, 255));
  fillRect(canvas, 686, 332, 92, 38, rgba(176, 150, 110, 255));
  fillEllipse(canvas, 732, 305, 70, 26, rgba(75, 66, 53, 210));
  fillEllipse(canvas, 336, 516, 92, 28, rgba(67, 60, 49, 180));
  fillEllipse(canvas, 915, 602, 118, 30, rgba(67, 60, 49, 180));
  addNoise(canvas, 10);
  return canvas;
}

function drawAbout() {
  const canvas = createCanvas();
  verticalGradient(canvas, rgba(207, 227, 233), rgba(103, 140, 155));
  addRadialGlow(canvas, 240, 120, 230, rgba(243, 249, 252, 170));
  fillPolygon(canvas, [
    [0, 690],
    [220, 640],
    [460, 710],
    [720, 640],
    [960, 740],
    [1200, 670],
    [1200, 900],
    [0, 900],
  ], rgba(51, 84, 95, 255));
  fillRect(canvas, 165, 220, 440, 300, rgba(244, 246, 244, 255));
  fillRect(canvas, 195, 250, 380, 240, rgba(231, 235, 232, 255));
  fillRect(canvas, 260, 525, 260, 20, rgba(73, 119, 66, 255));
  fillRect(canvas, 300, 260, 215, 18, rgba(76, 112, 123, 255));
  fillRect(canvas, 300, 297, 180, 10, rgba(122, 145, 150, 255));
  fillRect(canvas, 300, 325, 220, 10, rgba(122, 145, 150, 255));
  fillRect(canvas, 300, 353, 165, 10, rgba(122, 145, 150, 255));
  fillCircle(canvas, 790, 420, 118, rgba(84, 127, 72, 255));
  fillRect(canvas, 775, 520, 30, 145, rgba(88, 67, 48, 255));
  fillCircle(canvas, 940, 468, 82, rgba(103, 151, 88, 255));
  fillRect(canvas, 930, 548, 22, 118, rgba(88, 67, 48, 255));
  fillCircle(canvas, 900, 208, 58, rgba(255, 236, 199, 190));
  addNoise(canvas, 6);
  return canvas;
}

function crcTable() {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c >>> 0;
  }
  return table;
}

const CRC_TABLE = crcTable();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i += 1) {
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0);
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function encodePng(canvas) {
  const rows = [];
  for (let y = 0; y < height; y += 1) {
    const row = Buffer.alloc(1 + width * 4);
    row[0] = 0;
    const start = y * width * 4;
    Buffer.from(canvas.subarray(start, start + width * 4)).copy(row, 1);
    rows.push(row);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(Buffer.concat(rows), { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const outputDir = path.join(process.cwd(), "public", "images");
const outputs = [
  ["conservation.png", drawConservation()],
  ["history.png", drawHistory()],
  ["about.png", drawAbout()],
];

for (const [name, canvas] of outputs) {
  fs.writeFileSync(path.join(outputDir, name), encodePng(canvas));
  console.log(`Wrote ${name}`);
}
