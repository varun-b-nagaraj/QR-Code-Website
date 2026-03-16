import { IdentificationResult, SightingRecordPayload } from "@/lib/types";

interface SightingMetadata {
  uploadedImageUrl: string;
  latitude?: number;
  longitude?: number;
}

function buildAnimalSightingPayload(result: IdentificationResult, metadata: SightingMetadata): SightingRecordPayload {
  const enrichment = result.enrichment;
  return {
    uploaded_image_url: metadata.uploadedImageUrl,
    detected_label: result.detection?.detectedLabel || result.primary.commonName.toLowerCase(),
    detection_confidence: result.primary.confidence,
    bounding_box: result.detection?.boundingBox || null,
    inaturalist_taxon_id: enrichment?.taxonId ?? null,
    common_name: enrichment?.commonName || result.primary.commonName,
    scientific_name: enrichment?.scientificName || result.primary.scientificName,
    reference_image_url: enrichment?.referenceImageUrl ?? null,
    taxonomy: enrichment?.taxonomy ?? null,
    description_summary: enrichment?.descriptionSummary ?? result.primary.summary,
    latitude: metadata.latitude ?? null,
    longitude: metadata.longitude ?? null,
    created_at: new Date().toISOString(),
    status: enrichment?.taxonId ? "enriched" : "detected_only",
    source_type: "ai_detection_plus_inaturalist_read",
  };
}

export async function persistSighting(result: IdentificationResult, metadata: SightingMetadata): Promise<{
  status: "saved" | "skipped" | "failed";
  id?: string | number;
  message?: string;
}> {
  if (result.type !== "animal") {
    return { status: "skipped", message: "Sighting persistence is only enabled for wildlife flow." };
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
  const table = process.env.SUPABASE_SIGHTINGS_TABLE || "sightings";

  if (!supabaseUrl || !supabaseKey) {
    return { status: "skipped", message: "Supabase env not configured." };
  }

  const payload = buildAnimalSightingPayload(result, metadata);
  const endpoint = `${supabaseUrl.replace(/\/$/, "")}/rest/v1/${table}`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      return { status: "failed", message: `Supabase insert failed (${response.status}): ${text || "No response body"}` };
    }

    const rows = (await response.json()) as Array<{ id?: string | number }>;
    return { status: "saved", id: rows[0]?.id };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Supabase persistence error.";
    return { status: "failed", message };
  }
}
