#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SPECIES_PATH = path.join(ROOT, "data", "species.ts");
const OUTPUT_PATH = path.join(ROOT, "data", "inat-species-media.ts");

const TAXA_URL = "https://api.inaturalist.org/v1/taxa";
const OBS_URL = "https://api.inaturalist.org/v1/observations";
const REQUEST_DELAY_MS = 350;
const MAX_RETRIES = 4;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalize(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function requestJson(url) {
  let attempt = 0;
  while (attempt <= MAX_RETRIES) {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "qr-code-website-inat-sync/1.0",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return response.json();
    }

    const retryable = response.status === 429 || response.status >= 500;
    if (!retryable || attempt === MAX_RETRIES) {
      const body = await response.text();
      throw new Error(`Request failed (${response.status}) ${url}\n${body.slice(0, 200)}`);
    }

    const retryAfterHeader = response.headers.get("retry-after");
    const retryAfter = retryAfterHeader ? Number(retryAfterHeader) * 1000 : 0;
    const backoff = Math.max(retryAfter, (attempt + 1) * 1000);
    await sleep(backoff);
    attempt += 1;
  }

  throw new Error(`Request failed after retries: ${url}`);
}

function getSpeciesArray() {
  const text = fs.readFileSync(SPECIES_PATH, "utf8");
  const marker = "const baseSpecies: Species[] = [";
  const start = text.indexOf(marker);
  if (start < 0) {
    throw new Error("Unable to locate baseSpecies array in data/species.ts");
  }
  const end = text.indexOf("];", start);
  if (end < 0) {
    throw new Error("Unable to locate end of baseSpecies array in data/species.ts");
  }
  const arraySource = text.slice(start + marker.length - 1, end + 1);
  const parsed = Function(`return (${arraySource});`)();
  if (!Array.isArray(parsed)) throw new Error("Parsed species content is not an array.");
  return parsed;
}

function taxonScore(taxon, scientificName, commonName) {
  const scientificNorm = normalize(scientificName);
  const commonNorm = normalize(commonName);
  const taxonNameNorm = normalize(taxon.name || "");
  const preferredCommonNorm = normalize(taxon.preferred_common_name || "");
  const matchedTermNorm = normalize(taxon.matched_term || "");
  const rank = (taxon.rank || "").toLowerCase();

  let score = 0;

  if (taxonNameNorm === scientificNorm) score += 150;
  if (taxonNameNorm.startsWith(`${scientificNorm} `) || scientificNorm.startsWith(`${taxonNameNorm} `)) score += 110;
  if (matchedTermNorm === scientificNorm) score += 90;
  if (matchedTermNorm === commonNorm && commonNorm) score += 40;
  if (preferredCommonNorm === commonNorm && commonNorm) score += 30;

  if (["species", "subspecies", "variety", "form"].includes(rank)) score += 25;
  if (taxon.default_photo?.large_url || taxon.default_photo?.medium_url) score += 20;

  return score;
}

function chooseBestTaxon(results, scientificName, commonName) {
  if (!Array.isArray(results) || results.length === 0) return null;
  const ranked = results
    .map((taxon) => ({ taxon, score: taxonScore(taxon, scientificName, commonName) }))
    .sort((a, b) => b.score - a.score);

  const best = ranked[0];
  if (!best || best.score < 110) return null;
  return best.taxon;
}

function toLargePhotoUrl(url) {
  if (!url) return "";
  return url
    .replace("/square.", "/large.")
    .replace("/medium.", "/large.")
    .replace("/small.", "/large.")
    .replace("/thumb.", "/large.");
}

function photoFromTaxon(taxon) {
  const photo = taxon?.default_photo;
  if (!photo) return null;
  const url = photo.large_url || toLargePhotoUrl(photo.medium_url || photo.square_url || "");
  if (!url) return null;
  return {
    url,
    attribution: photo.attribution || "",
    license: photo.license_code || "",
  };
}

function photoFromObservation(observation) {
  const photos = observation?.photos || [];
  if (photos.length === 0) return null;
  const photo = photos[0];
  const base = photo.url || "";
  const url = toLargePhotoUrl(base);
  if (!url) return null;
  return {
    url,
    attribution: photo.attribution || "",
    license: photo.license_code || "",
  };
}

async function fetchTaxonByQuery(query, scientificName, commonName) {
  const url = `${TAXA_URL}?q=${encodeURIComponent(query)}&per_page=30&is_active=true`;
  const json = await requestJson(url);
  return chooseBestTaxon(json?.results || [], scientificName, commonName);
}

async function fetchObservationPhoto({ taxonId, scientificName }) {
  const params = new URLSearchParams({
    photos: "true",
    quality_grade: "research",
    per_page: "20",
    order_by: "votes",
    order: "desc",
  });

  if (taxonId) params.set("taxon_id", String(taxonId));
  else params.set("taxon_name", scientificName);

  const url = `${OBS_URL}?${params.toString()}`;
  const json = await requestJson(url);
  const observations = json?.results || [];
  for (const observation of observations) {
    const photo = photoFromObservation(observation);
    if (photo) return photo;
  }
  return null;
}

function toOutputFileContent(mapping) {
  const lines = [];
  lines.push('export type InatSpeciesMedia = {');
  lines.push("  inat_taxon_id?: number;");
  lines.push("  cover_image_url?: string;");
  lines.push("  cover_image_attribution?: string;");
  lines.push("  cover_image_license?: string;");
  lines.push('  cover_image_source?: "iNaturalist";');
  lines.push("};");
  lines.push("");
  lines.push("export const inatSpeciesMediaBySlug: Record<string, InatSpeciesMedia> = {");

  const slugs = Object.keys(mapping).sort((a, b) => a.localeCompare(b));
  for (const slug of slugs) {
    const media = mapping[slug];
    lines.push(`  "${slug}": {`);
    if (media.inat_taxon_id) lines.push(`    "inat_taxon_id": ${media.inat_taxon_id},`);
    if (media.cover_image_url) lines.push(`    "cover_image_url": ${JSON.stringify(media.cover_image_url)},`);
    if (media.cover_image_attribution) lines.push(`    "cover_image_attribution": ${JSON.stringify(media.cover_image_attribution)},`);
    if (media.cover_image_license) lines.push(`    "cover_image_license": ${JSON.stringify(media.cover_image_license)},`);
    lines.push('    "cover_image_source": "iNaturalist",');
    lines.push("  },");
  }

  lines.push("};");
  lines.push("");
  return lines.join("\n");
}

async function main() {
  const species = getSpeciesArray().filter(
    (item) => item.scientificName && item.scientificName !== "N/A" && item.category !== undefined,
  );

  const mapping = {};
  let processed = 0;

  for (const item of species) {
    processed += 1;
    console.log(`[${processed}/${species.length}] ${item.slug} :: ${item.scientificName}`);

    try {
      let taxon = await fetchTaxonByQuery(item.scientificName, item.scientificName, item.commonName);
      if (!taxon && item.commonName) {
        taxon = await fetchTaxonByQuery(item.commonName, item.scientificName, item.commonName);
      }

      if (!taxon) {
        console.log("  - skipped: no confident taxon match");
        await sleep(REQUEST_DELAY_MS);
        continue;
      }

      const media = {
        inat_taxon_id: taxon.id,
        cover_image_source: "iNaturalist",
      };

      let photo = photoFromTaxon(taxon);
      if (!photo) {
        photo = await fetchObservationPhoto({ taxonId: taxon.id, scientificName: item.scientificName });
      }
      if (!photo) {
        photo = await fetchObservationPhoto({ taxonId: null, scientificName: item.scientificName });
      }

      if (!photo?.url) {
        console.log("  - taxon matched but no usable photo");
        mapping[item.slug] = media;
        await sleep(REQUEST_DELAY_MS);
        continue;
      }

      mapping[item.slug] = {
        ...media,
        cover_image_url: photo.url,
        cover_image_attribution: photo.attribution || "",
        cover_image_license: photo.license || "",
      };

      console.log("  - image ok");
      await sleep(REQUEST_DELAY_MS);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.log(`  - failed: ${message}`);
      await sleep(REQUEST_DELAY_MS);
    }
  }

  const content = toOutputFileContent(mapping);
  fs.writeFileSync(OUTPUT_PATH, content, "utf8");
  console.log(`\nWrote ${Object.keys(mapping).length} iNaturalist media records -> ${OUTPUT_PATH}`);
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
});
