import { IdentificationResult } from "@/lib/types";

export async function identifyPlant(file: File): Promise<IdentificationResult> {
  const body = new FormData();
  body.append("image", file, file.name);
  body.append("mode", "plant");

  const response = await fetch("/api/identify/photo", {
    method: "POST",
    body,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "Unable to identify uploaded plant image.");
  }

  return data.result as IdentificationResult;
}
