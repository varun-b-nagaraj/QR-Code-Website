import { NextRequest, NextResponse } from "next/server";
import { identifyFromPhoto } from "@/lib/server/photoIdentification";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const modeRaw = formData.get("mode");
    const file = formData.get("image");

    const mode = modeRaw === "plant" ? "plant" : "animal";

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Image file is required." }, { status: 400 });
    }

    const result = await identifyFromPhoto(file, mode);
    return NextResponse.json({ result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Photo identification failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
