#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const SPECIES_PATH = path.join(ROOT, "data", "species.ts");
const INAT_MEDIA_PATH = path.join(ROOT, "data", "inat-species-media.ts");
const PUBLIC_DIR = path.join(ROOT, "public");
const OUTPUT_DIR = path.join(ROOT, "pictures");
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1200;

const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const clean = args.has("--clean");
const limitArg = process.argv.find((arg) => arg.startsWith("--limit="));
const limit = limitArg ? Number(limitArg.split("=")[1]) : null;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function extractLiteralFromFile(filePath, marker) {
  const text = fs.readFileSync(filePath, "utf8");
  const start = text.indexOf(marker);
  if (start < 0) throw new Error(`Unable to locate marker in ${filePath}: ${marker}`);
  const end = text.indexOf("};", start);
  if (end < 0) throw new Error(`Unable to locate object/array end in ${filePath} for marker: ${marker}`);

  if (marker.includes("baseSpecies")) {
    const arrayEnd = text.indexOf("];", start);
    if (arrayEnd < 0) throw new Error("Unable to locate end of baseSpecies array");
    const arraySource = text.slice(start + marker.length - 1, arrayEnd + 1);
    return Function(`return (${arraySource});`)();
  }

  const objectSource = text.slice(start + marker.length - 1, end + 1);
  return Function(`return (${objectSource});`)();
}

function getMergedSpecies() {
  const baseSpecies = extractLiteralFromFile(SPECIES_PATH, "const baseSpecies: Species[] = [");
  const inatMap = extractLiteralFromFile(
    INAT_MEDIA_PATH,
    "export const inatSpeciesMediaBySlug: Record<string, InatSpeciesMedia> = {",
  );

  return baseSpecies.map((item) => {
    const media = inatMap[item.slug] || {};
    return {
      ...item,
      ...media,
      image: media.cover_image_url || item.image,
    };
  });
}

function sanitizeFolderName(value, fallback) {
  const cleaned = (value || "")
    .replace(/[\\/:*?"<>|]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned || fallback;
}

function scientificSlug(value) {
  return (value || "species")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "species";
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function fetchBufferWithRetry(url) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "qr-code-website-media-export/1.0",
          Accept: "image/*,*/*;q=0.8",
        },
      });

      if (!response.ok) {
        const retryable = response.status === 429 || response.status >= 500;
        if (!retryable || attempt === MAX_RETRIES) {
          throw new Error(`HTTP ${response.status}`);
        }
        await sleep(RETRY_DELAY_MS * (attempt + 1));
        continue;
      }

      const arr = await response.arrayBuffer();
      return Buffer.from(arr);
    } catch (error) {
      if (attempt === MAX_RETRIES) throw error;
      await sleep(RETRY_DELAY_MS * (attempt + 1));
    }
  }

  throw new Error(`Failed to fetch image after retries: ${url}`);
}

function inferTempExt(source) {
  const pathname = source.startsWith("http") ? new URL(source).pathname : source;
  const ext = path.extname(pathname).toLowerCase();
  if (ext) return ext;
  return ".img";
}

function convertToJpeg(inputPath, outputPath) {
  try {
    execFileSync("sips", ["-s", "format", "jpeg", inputPath, "--out", outputPath], {
      stdio: "ignore",
    });
    return;
  } catch {
    const ext = path.extname(inputPath).toLowerCase();
    if (ext === ".jpg" || ext === ".jpeg") {
      fs.copyFileSync(inputPath, outputPath);
      return;
    }
    throw new Error(`Conversion failed for ${inputPath}. Install/enable 'sips' (macOS) for image conversion.`);
  }
}

async function getSourceToTempFile(source, tempDir) {
  const ext = inferTempExt(source);
  const tempPath = path.join(tempDir, `src-${Date.now()}-${Math.random().toString(16).slice(2)}${ext}`);

  if (source.startsWith("http://") || source.startsWith("https://")) {
    const data = await fetchBufferWithRetry(source);
    fs.writeFileSync(tempPath, data);
    return tempPath;
  }

  if (source.startsWith("/")) {
    const localPath = path.join(PUBLIC_DIR, source.slice(1));
    if (!fs.existsSync(localPath)) throw new Error(`Local image not found: ${localPath}`);
    fs.copyFileSync(localPath, tempPath);
    return tempPath;
  }

  throw new Error(`Unsupported source path: ${source}`);
}

async function downloadForSpecies(item) {
  const categoryName = sanitizeFolderName(item.category || "Uncategorized", "Uncategorized");
  const subcategoryName = sanitizeFolderName(item.subcategory || "Uncategorized", "Uncategorized");
  const scientificFolder = sanitizeFolderName(item.scientificName || item.slug, item.slug);
  const sciSlug = scientificSlug(item.scientificName || item.slug);

  const speciesDir = path.join(OUTPUT_DIR, categoryName, subcategoryName, scientificFolder);
  ensureDir(speciesDir);

  const extras = Array.isArray(item.inat_additional_images)
    ? item.inat_additional_images.map((img) => img?.url).filter(Boolean)
    : [];

  if (dryRun) {
    return { extrasCount: extras.length };
  }

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "species-pictures-"));
  try {
    const mainSource = item.cover_image_url || item.image;
    if (mainSource) {
      const tempMain = await getSourceToTempFile(mainSource, tempDir);
      const mainOut = path.join(speciesDir, `${sciSlug}-mainImage.jpg`);
      convertToJpeg(tempMain, mainOut);
    }

    for (let i = 0; i < extras.length; i += 1) {
      const tempExtra = await getSourceToTempFile(extras[i], tempDir);
      const extraOut = path.join(speciesDir, `${sciSlug}-image${i + 1}.jpg`);
      convertToJpeg(tempExtra, extraOut);
    }

    return { extrasCount: extras.length };
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

async function main() {
  const hasSips = (() => {
    try {
      execFileSync("which", ["sips"], { stdio: "ignore" });
      return true;
    } catch {
      return false;
    }
  })();

  if (!hasSips) {
    console.warn("Warning: 'sips' not found. Non-JPEG images may fail conversion.");
  }

  const merged = getMergedSpecies().filter((item) => item.scientificName && item.scientificName !== "N/A");
  const target = limit && Number.isFinite(limit) && limit > 0 ? merged.slice(0, limit) : merged;

  if (clean && fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  }

  ensureDir(OUTPUT_DIR);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < target.length; i += 1) {
    const item = target[i];
    process.stdout.write(`[${i + 1}/${target.length}] ${item.scientificName} ... `);

    try {
      const result = await downloadForSpecies(item);
      success += 1;
      process.stdout.write(`ok (extras: ${result.extrasCount})\n`);
    } catch (error) {
      failed += 1;
      process.stdout.write(`failed\n`);
      console.error(`  -> ${item.slug}: ${error.message}`);
    }
  }

  console.log("\nDone.");
  console.log(`Output directory: ${OUTPUT_DIR}`);
  console.log(`Species processed: ${target.length}`);
  console.log(`Succeeded: ${success}`);
  console.log(`Failed: ${failed}`);
  console.log(`Mode: ${dryRun ? "dry-run" : "write"}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
