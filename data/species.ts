import { Species } from "@/lib/types";

export const species: Species[] = [
  {
    slug: "live-oak",
    commonName: "Live Oak",
    scientificName: "Quercus virginiana",
    category: "Trees",
    nativeStatus: "Native",
    image: "/images/live-oak.svg",
    summary: "A signature shade tree of Central Texas parks and trails.",
    description:
      "Live Oak is an evergreen oak with broad, spreading limbs that create cooling canopy cover along walking trails.",
    habitat: "Open grasslands, limestone soils, and park edges.",
    parkLocation: "Frequently seen near trailheads and picnic lawns.",
    ecologicalRole:
      "Provides shelter and acorns for birds, mammals, and beneficial insects.",
    funFact:
      "Some live oaks can live for centuries and become local landmarks.",
  },
  {
    slug: "texas-sage",
    commonName: "Texas Sage",
    scientificName: "Leucophyllum frutescens",
    category: "Plants",
    nativeStatus: "Native",
    image: "/images/texas-sage.svg",
    summary: "Drought-tolerant shrub known for silver foliage and purple blooms.",
    description:
      "Texas Sage thrives in dry conditions and often blooms after humid weather, adding color to native landscapes.",
    habitat: "Sunny, rocky, and well-drained areas.",
    parkLocation: "Found near native planting beds and sign stops.",
    ecologicalRole:
      "Supports pollinators and stabilizes soil in hot, exposed areas.",
    funFact: "It is sometimes called the Texas barometer plant.",
  },
  {
    slug: "northern-mockingbird",
    commonName: "Northern Mockingbird",
    scientificName: "Mimus polyglottos",
    category: "Birds",
    nativeStatus: "Native",
    image: "/images/mockingbird.svg",
    summary: "State bird of Texas, famous for mimicking many songs.",
    description:
      "The Northern Mockingbird is a bold songbird that adapts well to park settings and sings from exposed perches.",
    habitat: "Shrublands, parks, and open neighborhoods.",
    parkLocation: "Common near parking lots, shrubs, and open lawns.",
    ecologicalRole: "Consumes insects and berries, helping balance food webs.",
    funFact:
      "A single mockingbird can mimic dozens of other bird and urban sounds.",
  },
  {
    slug: "monarch-butterfly",
    commonName: "Monarch Butterfly",
    scientificName: "Danaus plexippus",
    category: "Insects",
    nativeStatus: "Native",
    image: "/images/monarch.svg",
    summary: "Iconic migratory butterfly seen during seasonal migration.",
    description:
      "Monarchs rely on milkweed as host plants and visit nectar-rich flowers across trail habitats.",
    habitat: "Meadows, native gardens, and open sunny corridors.",
    parkLocation: "Most visible near flowering pollinator patches.",
    ecologicalRole:
      "Acts as a pollinator and indicator of habitat quality and connectivity.",
    funFact: "Monarch migration can span thousands of miles across North America.",
  },
  {
    slug: "eastern-cottontail",
    commonName: "Eastern Cottontail",
    scientificName: "Sylvilagus floridanus",
    category: "Mammals",
    nativeStatus: "Native",
    image: "/images/cottontail.svg",
    summary: "A familiar rabbit species active around dawn and dusk.",
    description:
      "Eastern Cottontails feed on grasses and low plants and shelter in brushy cover during the day.",
    habitat: "Edges of fields, brush, and woodland openings.",
    parkLocation: "Seen along quiet side paths and meadow margins.",
    ecologicalRole: "A prey species that supports hawks, foxes, and other predators.",
    funFact: "Their white tail flash helps signal danger to nearby rabbits.",
  },
  {
    slug: "texas-spiny-lizard",
    commonName: "Texas Spiny Lizard",
    scientificName: "Sceloporus olivaceus",
    category: "Reptiles",
    nativeStatus: "Native",
    image: "/images/spiny-lizard.svg",
    summary: "Tree-climbing lizard often seen on trunks and fences.",
    description:
      "This lizard basks in sunny spots and quickly moves up bark surfaces when disturbed.",
    habitat: "Wooded neighborhoods, parks, and riparian zones.",
    parkLocation: "Frequently on trees near shaded trail sections.",
    ecologicalRole:
      "Controls insect populations and contributes to reptile biodiversity.",
    funFact: "Males may show blue patches on the throat and belly during breeding season.",
  },
  {
    slug: "chinaberry",
    commonName: "Chinaberry",
    scientificName: "Melia azedarach",
    category: "Trees",
    nativeStatus: "Invasive",
    image: "/images/chinaberry.svg",
    summary: "An invasive tree that can outcompete native species in riparian areas.",
    description:
      "Chinaberry spreads quickly and can displace native plants needed by local wildlife.",
    habitat: "Disturbed soils and creek corridors.",
    parkLocation: "Occasionally found near unmanaged edges and drainage zones.",
    ecologicalRole:
      "Its spread reduces native habitat quality when left unmanaged.",
    funFact:
      "Education signs often highlight this species to teach invasive management.",
  },
];

export const speciesBySlug = Object.fromEntries(
  species.map((item) => [item.slug, item]),
);
