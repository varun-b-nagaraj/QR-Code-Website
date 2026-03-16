const DEFAULT_FALLBACK_BY_LABEL: Record<string, string> = {
  canine: "coyote",
  "dog-like animal": "coyote",
  bird: "hawk",
  "big cat": "bobcat",
};

const KNOWN_LABELS = new Set(["coyote", "fox", "deer", "raccoon", "bobcat", "skunk", "hawk"]);

export interface NormalizedLabelResult {
  detectedLabel: string;
  normalizedLabel: string;
}

export function normalizeAnimalLabel(rawLabel: string): NormalizedLabelResult {
  const detectedLabel = rawLabel.trim().toLowerCase();
  if (!detectedLabel) {
    return { detectedLabel: "unknown", normalizedLabel: "animal" };
  }

  const alias = DEFAULT_FALLBACK_BY_LABEL[detectedLabel];
  if (alias) {
    return { detectedLabel, normalizedLabel: alias };
  }

  if (KNOWN_LABELS.has(detectedLabel)) {
    return { detectedLabel, normalizedLabel: detectedLabel };
  }

  if (detectedLabel.includes("bird")) {
    return { detectedLabel, normalizedLabel: "hawk" };
  }
  if (detectedLabel.includes("fox")) {
    return { detectedLabel, normalizedLabel: "fox" };
  }
  if (detectedLabel.includes("deer")) {
    return { detectedLabel, normalizedLabel: "deer" };
  }
  if (detectedLabel.includes("cat")) {
    return { detectedLabel, normalizedLabel: "bobcat" };
  }

  return { detectedLabel, normalizedLabel: "animal" };
}
