import fs from "node:fs";
import path from "node:path";
import xlsx from "xlsx";

const repoRoot = process.cwd();
const sourcePath = path.join(repoRoot, "data", "species.ts");
const jsonOutPath = path.join(repoRoot, "exports", "species.json");
const xlsxOutPath = path.join(repoRoot, "exports", "species.xlsx");

const source = fs.readFileSync(sourcePath, "utf8");
const startMarker = "const baseSpecies: Species[] = [";
const start = source.indexOf(startMarker);
if (start === -1) {
  throw new Error("Could not find baseSpecies declaration in data/species.ts");
}

const equalsIndex = source.indexOf("=", start);
const arrayStart = source.indexOf("[", equalsIndex);
if (arrayStart === -1) {
  throw new Error("Could not locate species array start in data/species.ts");
}

function findMatchingBracket(text, startIndex) {
  let depth = 0;
  let inString = false;
  let quote = "";
  let escaped = false;

  for (let i = startIndex; i < text.length; i += 1) {
    const char = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        inString = false;
        quote = "";
      }
      continue;
    }

    if (char === "\"" || char === "'" || char === "`") {
      inString = true;
      quote = char;
      continue;
    }

    if (char === "[") depth += 1;
    else if (char === "]") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }

  return -1;
}

const arrayEnd = findMatchingBracket(source, arrayStart);
if (arrayEnd === -1) {
  throw new Error("Could not locate species array end in data/species.ts");
}

const arrayLiteral = source.slice(arrayStart, arrayEnd + 1);
const species = new Function(`return ${arrayLiteral};`)();

if (!Array.isArray(species)) {
  throw new Error("Parsed species payload is not an array");
}

fs.writeFileSync(jsonOutPath, JSON.stringify(species, null, 2) + "\n", "utf8");

const worksheet = xlsx.utils.json_to_sheet(species);
const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, "species");
xlsx.writeFile(workbook, xlsxOutPath);

console.log(`Exported ${species.length} species entries.`);
console.log(`JSON: ${jsonOutPath}`);
console.log(`Excel: ${xlsxOutPath}`);
