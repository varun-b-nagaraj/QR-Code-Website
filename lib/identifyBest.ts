import { identifyAnimal } from "@/lib/identifyAnimal";
import { identifyPlant } from "@/lib/identifyPlant";
import { IdentificationResult } from "@/lib/types";

export async function identifyBestFromPhoto(file: File): Promise<IdentificationResult> {
  const [animal, plant] = await Promise.allSettled([identifyAnimal(file), identifyPlant(file)]);

  const animalResult = animal.status === "fulfilled" ? animal.value : null;
  const plantResult = plant.status === "fulfilled" ? plant.value : null;

  if (animalResult && plantResult) {
    return animalResult.primary.confidence >= plantResult.primary.confidence ? animalResult : plantResult;
  }

  if (animalResult) return animalResult;
  if (plantResult) return plantResult;

  const animalError = animal.status === "rejected" ? String(animal.reason) : "";
  const plantError = plant.status === "rejected" ? String(plant.reason) : "";
  throw new Error(`Unable to identify image as animal or plant. ${animalError} ${plantError}`.trim());
}
