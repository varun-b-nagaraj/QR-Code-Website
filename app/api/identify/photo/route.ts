import { NextRequest, NextResponse } from "next/server";
import { identifyFromPhoto } from "@/lib/server/photoIdentification";
import { persistSighting } from "@/lib/server/sightingStore";

function toNumberOrUndefined(value: FormDataEntryValue | null): number | undefined {
  if (typeof value !== "string" || !value.trim()) return undefined;
  const num = Number(value);
  return Number.isFinite(num) ? num : undefined;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const modeRaw = formData.get("mode");
    const file = formData.get("image");
    const latitude = toNumberOrUndefined(formData.get("latitude"));
    const longitude = toNumberOrUndefined(formData.get("longitude"));

    const mode = modeRaw === "plant" ? "plant" : "animal";

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Image file is required." }, { status: 400 });
    }

    const result = await identifyFromPhoto(file, mode);
    const uploadedImageUrl = `upload://${encodeURIComponent(file.name || "image-upload")}`;
    const sighting = await persistSighting(result, { uploadedImageUrl, latitude, longitude });
    result.sighting = sighting;
    return NextResponse.json({ result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Photo identification failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
