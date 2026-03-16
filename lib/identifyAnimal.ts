import { IdentificationResult } from "@/lib/types";

export async function identifyAnimal(file: File): Promise<IdentificationResult> {
  const body = new FormData();
  body.append("image", file, file.name);
  body.append("mode", "animal");

  const response = await fetch("/api/identify/photo", {
    method: "POST",
    body,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "Unable to identify uploaded animal image.");
  }

  return data.result as IdentificationResult;
}
