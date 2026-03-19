export type InatSpeciesMedia = {
  inat_taxon_id?: number;
  cover_image_url?: string;
  cover_image_attribution?: string;
  cover_image_license?: string;
  inat_additional_images?: Array<{
    url: string;
    attribution?: string;
    license?: string;
  }>;
  cover_image_source?: "iNaturalist";
};

export const inatSpeciesMediaBySlug: Record<string, InatSpeciesMedia> = {
  "agarita": {
    "inat_taxon_id": 273862,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14185444/large.jpeg",
    "cover_image_attribution": "(c) Bryan, some rights reserved (CC BY-NC), uploaded by Bryan",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/184653893/large.jpg",
        "attribution": "(c) Chris McCartor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/185295218/large.jpg",
        "attribution": "(c) aprilsee, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/266358120/large.jpg",
        "attribution": "(c) bsaiz10, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/277602642/large.jpeg",
        "attribution": "(c) laurasare, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/78222588/large.jpg",
        "attribution": "(c) Aaron Balam, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/124923865/large.jpeg",
        "attribution": "(c) Laura Gaudette, some rights reserved (CC BY)",
        "license": "cc-by",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "american-badger": {
    "inat_taxon_id": 41789,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/24707764/large.jpg",
    "cover_image_attribution": "(c) Jerry Oldenettel, some rights reserved (CC BY-NC-SA)",
    "cover_image_license": "cc-by-nc-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/163648917/large.png",
        "attribution": "(c) Will Richardson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5946066/large.jpg",
        "attribution": "(c) Marshal Hedin, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/141086075/large.jpg",
        "attribution": "(c) martink3s04, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4742076/large.jpg",
        "attribution": "(c) gbudyk, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/113144748/large.jpg",
        "attribution": "(c) rurik, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/112983329/large.jpeg",
        "attribution": "(c) Krissa Klein, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "american-beautyberry": {
    "inat_taxon_id": 49193,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/225612223/large.jpeg",
    "cover_image_attribution": "(c) Alex Abair, some rights reserved (CC BY), uploaded by Alex Abair",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/96932468/large.jpg",
        "attribution": "(c) Jeremy Ross, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/60796975/large.jpeg",
        "attribution": "(c) Ron Stephens, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/164583655/large.jpg",
        "attribution": "(c) benham_z_907, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/16059129/large.jpg",
        "attribution": "(c) Charlotte Watson Sanders, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/342093756/large.jpg",
        "attribution": "(c) honors_ximenam, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/120898897/large.jpeg",
        "attribution": "(c) Michele, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "american-beaver": {
    "inat_taxon_id": 43794,
    "cover_image_url": "https://static.inaturalist.org/photos/139683466/large.jpeg",
    "cover_image_attribution": "(c) mikeyk730, all rights reserved",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/33528414/large.jpeg",
        "attribution": "(c) John, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5652988/large.jpeg",
        "attribution": "(c) Ron Payne, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/58706507/large.jpg",
        "attribution": "(c) Nathaniel Sharp, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/300544548/large.jpg",
        "attribution": "(c) Susan Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/10837592/large.jpeg",
        "attribution": "(c) Denis Doucet, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/169871054/large.jpg",
        "attribution": "(c) Michael Gallo, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "american-crow": {
    "inat_taxon_id": 8021,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/24115/large.jpg",
    "cover_image_attribution": "(c) Joe McKenna, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/53516042/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/328823209/large.jpeg",
        "attribution": "(c) T.L.Knight, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/250510620/large.jpg",
        "attribution": "(c) Justin Flint, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/184259302/large.jpeg",
        "attribution": "(c) Jason Stovin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/238951261/large.jpg",
        "attribution": "(c) Justin Flint, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/39445115/large.jpeg",
        "attribution": "(c) sea-kangaroo, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "american-goldfinch": {
    "inat_taxon_id": 145310,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/384965723/large.jpg",
    "cover_image_attribution": "(c) Chris Fisher, some rights reserved (CC BY-NC), uploaded by Chris Fisher",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12601499/large.jpg",
        "attribution": "(c) Martin Hall, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/50103614/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/75308956/large.jpg",
        "attribution": "(c) Daniel Segrè, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/430677705/large.jpg",
        "attribution": "(c) John Martin, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177208169/large.jpeg",
        "attribution": "(c) Alexis Williams, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/170647883/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "american-kestrel": {
    "inat_taxon_id": 4665,
    "cover_image_url": "https://static.inaturalist.org/photos/174574440/large.jpg",
    "cover_image_attribution": "(c) Vincent O'Brien, all rights reserved, uploaded by Vincent O'Brien",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27291377/large.jpg",
        "attribution": "(c) George Armistead/Hillstar Nature, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/54661654/large.jpg",
        "attribution": "(c) Tanya Murphy, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/75920516/large.jpg",
        "attribution": "(c) Jonathan Eisen, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14916953/large.jpeg",
        "attribution": "(c) mamu_man, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2318483/large.jpg",
        "attribution": "(c) j_t_searing, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/246479146/large.jpg",
        "attribution": "(c) Tony Ernst, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "american-robin": {
    "inat_taxon_id": 12727,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/34859026/large.jpg",
    "cover_image_attribution": "(c) John D Reynolds, some rights reserved (CC BY-NC), uploaded by John D Reynolds",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/79926412/large.jpeg",
        "attribution": "(c) Sue Janssen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30460286/large.jpg",
        "attribution": "(c) lizlovesnature, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32209619/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/274725361/large.jpg",
        "attribution": "(c) Terri Norris, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/49251954/large.jpg",
        "attribution": "(c) Ольга Курякова, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12989883/large.jpeg",
        "attribution": "(c) Jeremy Barker, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "american-sycamore": {
    "inat_taxon_id": 49662,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/204738082/large.jpg",
    "cover_image_attribution": "no rights reserved, uploaded by Andy Wilson",
    "cover_image_license": "cc0",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/110062476/large.jpeg",
        "attribution": "(c) pinemartyn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/85118079/large.jpeg",
        "attribution": "(c) Tom Norton, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/191419009/large.jpg",
        "attribution": "(c) Dean Lyons, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/149297453/large.jpeg",
        "attribution": "(c) François Plourde - Renard frak, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62262142/large.jpeg",
        "attribution": "(c) Matt Nusstein, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/179887217/large.jpg",
        "attribution": "(c) Sandy Wolkenberg, some rights reserved (CC BY)",
        "license": "cc-by",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "ashe-juniper": {
    "inat_taxon_id": 135927,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/61302560/large.jpg",
    "cover_image_attribution": "(c) e0n_, some rights reserved (CC BY-NC), uploaded by e0n_",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/61302282/large.jpg",
        "attribution": "(c) e0n_, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65529109/large.jpeg",
        "attribution": "(c) El Picaro Azul, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29808047/large.jpeg",
        "attribution": "(c) Zac, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/276472451/large.jpeg",
        "attribution": "(c) Donald Meier, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/351958082/large.jpg",
        "attribution": "(c) Chuck Sexton, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/166485571/large.jpg",
        "attribution": "(c) Kathy McAleese, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "asian-tiger-mosquito": {
    "inat_taxon_id": 62984,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/67195084/large.jpg",
    "cover_image_attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC), uploaded by Thomas Shahan",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/304586895/large.jpg",
        "attribution": "(c) Rafael Carbonell Font, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28569502/large.png",
        "attribution": "(c) haileyleroy2003, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/558144877/large.jpg",
        "attribution": "(c) Timothy Lindsey, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/328524402/large.jpg",
        "attribution": "(c) Liam O, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/177096781/large.jpeg",
        "attribution": "(c) Eric R. Eaton, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "bald-cypress": {
    "inat_taxon_id": 49666,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/295596830/large.jpeg",
    "cover_image_attribution": "(c) Wildlife Habitat Stewards of NE NC, some rights reserved (CC BY-NC), uploaded by Wildlife Habitat Stewards of NE NC",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4952182/large.jpeg",
        "attribution": "(c) Kent C. Jensen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13677297/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/209313442/large.jpg",
        "attribution": "(c) Bill Pranty, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/251646155/large.jpeg",
        "attribution": "(c) William J. Deml, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/29408504/large.jpg",
        "attribution": "(c) jodiboe, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/444857462/large.jpeg",
        "attribution": "(c) Robbie, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "baltimore-oriole": {
    "inat_taxon_id": 9346,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/155708903/large.jpg",
    "cover_image_attribution": "(c) Tom Murray, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/220437024/large.jpeg",
        "attribution": "(c) Simon Tolzmann, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/38902123/large.jpeg",
        "attribution": "(c) Jeremy Hussell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8467192/large.jpeg",
        "attribution": "(c) Tom Preney, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63939361/large.jpg",
        "attribution": "(c) Paul G. Schrijvershof, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/197043868/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/260156273/large.jpg",
        "attribution": "(c) lizamast, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "barn-owl": {
    "inat_taxon_id": 20445,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/165796939/large.jpg",
    "cover_image_attribution": "(c) caroline legg, some rights reserved (CC BY)",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4655351/large.jpg",
        "attribution": "(c) Christian Artuso, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/176593966/large.jpg",
        "attribution": "(c) Alex R, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/54926231/large.jpg",
        "attribution": "(c) jakemellor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/26610958/large.jpg",
        "attribution": "(c) stevencinnes3, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/648232/large.JPG",
        "attribution": "(c) Ahmed Waheed, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/454911327/large.jpg",
        "attribution": "(c) Manuel Raab, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "barn-swallow": {
    "inat_taxon_id": 11901,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/122469139/large.jpg",
    "cover_image_attribution": "(c) Ad Konings, some rights reserved (CC BY-NC), uploaded by Ad Konings",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13758591/large.jpeg",
        "attribution": "(c) Chia⚡aka Cory Chiappone, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/14903150/large.jpeg",
        "attribution": "(c) Luis de Frías, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/22640136/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/575999585/large.jpg",
        "attribution": "(c) Diego González Dopico, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/74309927/large.jpg",
        "attribution": "(c) Marcelo Maux, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29201787/large.jpg",
        "attribution": "(c) Bridget Spencer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "barred-owl": {
    "inat_taxon_id": 19893,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/359094470/large.jpg",
    "cover_image_attribution": "(c) David Yeager, some rights reserved (CC BY-NC), uploaded by David Yeager",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/59742189/large.jpeg",
        "attribution": "(c) Sarah Webb, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/251627354/large.jpeg",
        "attribution": "(c) Chris C, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/54581893/large.png",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29233344/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/258359685/large.jpg",
        "attribution": "(c) Chris C, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/451896409/large.jpg",
        "attribution": "(c) Ryan Van Meter, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "bewicks-wren": {
    "inat_taxon_id": 7576,
    "cover_image_url": "https://static.inaturalist.org/photos/170009691/large.jpg",
    "cover_image_attribution": "(c) Juan Miguel Artigas Azas, all rights reserved, uploaded by Juan Miguel Artigas Azas",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/41407385/large.jpg",
        "attribution": "(c) Mason Maron, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/77306323/large.jpeg",
        "attribution": "(c) Roberto Arreola Alemón, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12287827/large.jpeg",
        "attribution": "(c) TVASQUEZ, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/118344129/large.jpg",
        "attribution": "(c) paulzc, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/106169693/large.jpg",
        "attribution": "(c) Juan Miguel Artigas Azas, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/605951462/large.jpg",
        "attribution": "(c) Lee Adam, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "big-brown-bat": {
    "inat_taxon_id": 40509,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11370649/large.jpg",
    "cover_image_attribution": "(c) Joe Bartok, some rights reserved (CC BY-NC), uploaded by Joe Bartok",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/364935044/large.jpg",
        "attribution": "(c) hobiecat, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/555741689/large.jpg",
        "attribution": "(c) Jillian Roth, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/133405220/large.jpg",
        "attribution": "(c) stephen_buckingham, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29392251/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/485008769/large.jpg",
        "attribution": "(c) Yixiao Liu, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/34938662/large.jpg",
        "attribution": "(c) Lamar, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "black-and-yellow-mud-dauber": {
    "inat_taxon_id": 121821,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/48580792/large.jpg",
    "cover_image_attribution": "(c) Peggy Romfh, some rights reserved (CC BY-NC), uploaded by Peggy Romfh",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/312926499/large.jpg",
        "attribution": "(c) JT Tomaschke, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/131533202/large.jpg",
        "attribution": "(c) Murray Fisher, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/96298380/large.jpg",
        "attribution": "(c) paxendra98, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/145930066/large.jpeg",
        "attribution": "(c) Corinna Herr, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28369754/large.jpg",
        "attribution": "(c) bob15noble, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8716336/large.jpg",
        "attribution": "(c) David Greenberger, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "black-capped-vireo": {
    "inat_taxon_id": 73557,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/133477929/large.jpg",
    "cover_image_attribution": "(c) Ad Konings, some rights reserved (CC BY-NC), uploaded by Ad Konings",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/75599024/large.jpeg",
        "attribution": "(c) dickcannings, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/518581941/large.jpg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/479682551/large.jpg",
        "attribution": "(c) ams75, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/487936811/large.jpg",
        "attribution": "(c) Nick Glover, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/541880437/large.jpg",
        "attribution": "(c) Kaleb Anderson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/74173193/large.jpg",
        "attribution": "(c) Roberto González, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "black-chinned-hummingbird": {
    "inat_taxon_id": 6433,
    "cover_image_url": "https://static.inaturalist.org/photos/79224074/large.jpg",
    "cover_image_attribution": "(c) Michael Gray, all rights reserved, uploaded by Michael Gray",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/45068399/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/290945395/large.jpeg",
        "attribution": "(c) lonnyholmes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/13820361/large.jpg",
        "attribution": "(c) Gordon Dietzman, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/316634466/large.jpeg",
        "attribution": "(c) Kathy Eklund, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/414822950/large.jpeg",
        "attribution": "(c) froggymum, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/50077488/large.jpg",
        "attribution": "(c) iluro, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "black-crested-titmouse": {
    "inat_taxon_id": 13631,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/246488617/large.jpg",
    "cover_image_attribution": "(c) dnvarga, some rights reserved (CC BY-NC), uploaded by dnvarga",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30131079/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/127482537/large.jpeg",
        "attribution": "(c) Ad Johnson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/266745486/large.jpg",
        "attribution": "(c) orangeclownfish, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/277054146/large.jpg",
        "attribution": "(c) krissielw24, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/249720329/large.jpeg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "black-necked-gartersnake": {
    "inat_taxon_id": 28345,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/485764232/large.jpeg",
    "cover_image_attribution": "(c) Yinan Li, some rights reserved (CC BY-NC), uploaded by Yinan Li",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/312022859/large.jpg",
        "attribution": "(c) Maxwell Soell, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/312102108/large.jpeg",
        "attribution": "(c) Jared Shorma, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12197231/large.jpg",
        "attribution": "(c) David Ruíz Domínguez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/192601679/large.jpeg",
        "attribution": "(c) Chris, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/403417838/large.jpg",
        "attribution": "(c) Maxwell Soell, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/84891634/large.jpeg",
        "attribution": "(c) amandafoust, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "black-phoebe": {
    "inat_taxon_id": 17013,
    "cover_image_url": "https://static.inaturalist.org/photos/105821053/large.jpg",
    "cover_image_attribution": "(c) Robyn Waayers, all rights reserved, uploaded by Robyn Waayers",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1856836/large.JPG",
        "attribution": "(c) Miguel Ordeñana, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/70367476/large.jpeg",
        "attribution": "(c) Diego Tamayo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/59689026/large.jpeg",
        "attribution": "(c) sea-kangaroo, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/110040514/large.jpg",
        "attribution": "(c) Erica Fleniken, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/40843660/large.jpeg",
        "attribution": "(c) Lauren Glevanik, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "black-rat": {
    "inat_taxon_id": 44575,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/93494112/large.jpg",
    "cover_image_attribution": "(c) Brett Vercoe, some rights reserved (CC BY-NC), uploaded by Brett Vercoe",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/171022850/large.jpg",
        "attribution": "(c) Emma, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/42717692/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/182731919/large.jpeg",
        "attribution": "(c) Mikie Green, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5977992/large.jpeg",
        "attribution": "(c) Kate Turner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/96804328/large.jpg",
        "attribution": "(c) Fernando Ferreira, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/146317509/large.jpeg",
        "attribution": "(c) E. Raven Teva, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "black-swallowtail": {
    "inat_taxon_id": 58523,
    "cover_image_url": "https://static.inaturalist.org/photos/71573494/large.jpeg",
    "cover_image_attribution": "(c) Juan Carlos Garcia Morales, all rights reserved, uploaded by Juan Carlos Garcia Morales",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/399318090/large.jpeg",
        "attribution": "(c) edwardrooks, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/382751279/large.jpg",
        "attribution": "(c) hobiecat, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/262848199/large.jpeg",
        "attribution": "(c) Jay Brasher, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/227097410/large.jpg",
        "attribution": "(c) Terence Gui, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/407779000/large.jpg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/126441401/large.jpeg",
        "attribution": "(c) Juan Carlos Garcia Morales, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "black-tailed-jackrabbit": {
    "inat_taxon_id": 43130,
    "cover_image_url": "https://static.inaturalist.org/photos/22549628/large.jpg",
    "cover_image_attribution": "(c) Ian Carlson, all rights reserved, uploaded by Ian Carlson",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/5988922/large.jpg",
        "attribution": "(c) Greg Shchepanek, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/298893802/large.jpeg",
        "attribution": "(c) Anne Parsons, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55405834/large.jpeg",
        "attribution": "(c) Lauren Glevanik, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/154615089/large.jpeg",
        "attribution": "(c) Bill Levine, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/210188560/large.jpg",
        "attribution": "(c) Erica Fleniken, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "black-tailed-rattlesnake": {
    "inat_taxon_id": 515948,
    "cover_image_url": "https://static.inaturalist.org/photos/138008635/large.jpg",
    "cover_image_attribution": "(c) Jake Scott, all rights reserved, uploaded by Jake Scott",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/546128835/large.jpg",
        "attribution": "(c) El Chivizcoyo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/30290921/large.jpg",
        "attribution": "(c) Mike Rochford, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/421845793/large.jpeg",
        "attribution": "(c) Yinan Li, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/49125460/large.jpg",
        "attribution": "(c) brandon_dietrich, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/145641073/large.jpeg",
        "attribution": "(c) Díaz Dulce, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/255699998/large.jpg",
        "attribution": "(c) stevewalternature, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "black-vulture": {
    "inat_taxon_id": 4765,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14689662/large.jpg",
    "cover_image_attribution": "(c) llsproat, some rights reserved (CC BY-NC-SA)",
    "cover_image_license": "cc-by-nc-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/166298290/large.jpg",
        "attribution": "(c) Ty Smith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/102846706/large.jpeg",
        "attribution": "(c) Oscar M. Chaves, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/342659116/large.jpeg",
        "attribution": "(c) Cricket Raspet, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/11981232/large.jpg",
        "attribution": "(c) Oscar Amaro, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/255435020/large.jpeg",
        "attribution": "(c) Chris Bentley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/9902895/large.jpg",
        "attribution": "(c) c, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "blue-dasher": {
    "inat_taxon_id": 59774,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28379940/large.jpg",
    "cover_image_attribution": "(c) Cameron Eckert, some rights reserved (CC BY-NC), uploaded by Cameron Eckert",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/45909998/large.jpg",
        "attribution": "(c) Brian Gooding, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/19285230/large.jpg",
        "attribution": "(c) tanager15, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/8275056/large.gif",
        "attribution": "(c) Brian Gooding, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/408980138/large.jpg",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/4361408/large.jpg",
        "attribution": "(c) BJ Stacey, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5454508/large.jpg",
        "attribution": "(c) Meghan Cassidy, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "blue-jay": {
    "inat_taxon_id": 8229,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/530721418/large.jpg",
    "cover_image_attribution": "(c) Judy Gallagher, some rights reserved (CC BY)",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/288034385/large.jpeg",
        "attribution": "(c) Josiah Reed, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57364009/large.jpg",
        "attribution": "(c) Coleen Lawlor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/348613177/large.jpeg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/468162490/large.jpeg",
        "attribution": "(c) froggymum, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/23481865/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/227343082/large.jpg",
        "attribution": "(c) tiller, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "blue-winged-teal": {
    "inat_taxon_id": 558433,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/286292345/large.jpeg",
    "cover_image_attribution": "(c) Ed O'Connor, some rights reserved (CC BY-NC), uploaded by Ed O'Connor",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/33115143/large.jpg",
        "attribution": "(c) Images by Outlaw, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/107477385/large.jpg",
        "attribution": "(c) Ashley M Bradford, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/104946146/large.jpeg",
        "attribution": "(c) John Murnane, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/182041387/large.jpg",
        "attribution": "(c) bwood708, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/523976264/large.jpg",
        "attribution": "(c) Jeremy Hussell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/361706321/large.jpeg",
        "attribution": "(c) Quentin Benet-Cibois, some rights reserved (CC BY)",
        "license": "cc-by",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "bobcat": {
    "inat_taxon_id": 41976,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/60028871/large.jpg",
    "cover_image_attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND), uploaded by Kala Murphy King",
    "cover_image_license": "cc-by-nc-nd",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5713928/large.png",
        "attribution": "(c) Chris Rohrer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/137179196/large.jpeg",
        "attribution": "(c) Mark Greene, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/60027907/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/59647706/large.jpg",
        "attribution": "(c) Luis Mauricio Mena Páramo, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/469339788/large.jpeg",
        "attribution": "(c) Tom Murray, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11808780/large.jpg",
        "attribution": "(c) jamestoney, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "brahminy-blindsnake": {
    "inat_taxon_id": 539844,
    "cover_image_url": "https://static.inaturalist.org/photos/404177966/large.jpeg",
    "cover_image_attribution": "(c) captainjack0000, all rights reserved, uploaded by captainjack0000",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/89695603/large.jpg",
        "attribution": "(c) Colin Chiu, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/471483205/large.jpg",
        "attribution": "(c) Daniel Contaldi, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/69298580/large.gif",
        "attribution": "(c) Alyssa Crittenden, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/557214449/large.jpg",
        "attribution": "(c) Lifeundrglass, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/101612644/large.jpg",
        "attribution": "(c) faluke, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/173764446/large.jpg",
        "attribution": "(c) Eric C. Maxwell, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "broad-banded-copperhead": {
    "inat_taxon_id": 907052,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1392066/large.jpg",
    "cover_image_attribution": "(c) johnwilliams, some rights reserved (CC BY-NC), uploaded by johnwilliams",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/296275089/large.jpg",
        "attribution": "(c) Ashwin Narayanan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/26164371/large.jpg",
        "attribution": "(c) vwm, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/26199364/large.jpeg",
        "attribution": "(c) jmills, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28238254/large.jpeg",
        "attribution": "(c) Robby Deans, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57929466/large.jpeg",
        "attribution": "(c) Michael Price, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/49959253/large.jpg",
        "attribution": "(c) Meghan Cassidy, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "brown-anole": {
    "inat_taxon_id": 116461,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/22869683/large.jpg",
    "cover_image_attribution": "(c) Jill Bazeley, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1907544/large.jpg",
        "attribution": "(c) dnoell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/12983784/large.jpg",
        "attribution": "(c) Suzanne Simpson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/105607450/large.jpeg",
        "attribution": "(c) chloe ⋆˚꩜｡, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/66990301/large.jpeg",
        "attribution": "(c) Jay L. Keller, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/12199360/large.jpeg",
        "attribution": "(c) Margaret Griffis O'Brien, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/129839094/large.jpg",
        "attribution": "(c) chloe ⋆˚꩜｡, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "brown-headed-cowbird": {
    "inat_taxon_id": 10373,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/471179764/large.jpg",
    "cover_image_attribution": "(c) Tom Murray, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/80212756/large.jpg",
        "attribution": "(c) Jason Headley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4210403/large.JPG",
        "attribution": "(c) Warren Cronan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8717139/large.jpeg",
        "attribution": "(c) Shirley Zundell, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/81706792/large.jpeg",
        "attribution": "(c) James Maughn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/400076064/large.jpg",
        "attribution": "(c) Lauren McLaurin, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/79780370/large.jpg",
        "attribution": "(c) Mason Maron, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "bullsnake": {
    "inat_taxon_id": 60347,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/185674776/large.jpg",
    "cover_image_attribution": "(c) Radd Icenoggle, some rights reserved (CC BY-NC), uploaded by Radd Icenoggle",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/58337491/large.jpg",
        "attribution": "(c) Nathanael Herrera, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/293179436/large.jpeg",
        "attribution": "(c) Rory O'Shea, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/225835527/large.jpg",
        "attribution": "(c) Sophiane, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/198640690/large.jpg",
        "attribution": "(c) David Martin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/243436620/large.jpg",
        "attribution": "(c) joakosbirdlife, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/570030397/large.jpg",
        "attribution": "(c) Nate Thokle, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "canada-goose": {
    "inat_taxon_id": 7089,
    "cover_image_url": "https://static.inaturalist.org/photos/181719420/large.jpg",
    "cover_image_attribution": "(c) Dimitris S, all rights reserved, uploaded by Dimitris S",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3239787/large.png",
        "attribution": "(c) NHMLA Community Science Program, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/571709595/large.jpg",
        "attribution": "(c) Robin, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/123908815/large.jpg",
        "attribution": "(c) Leah Fulton, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/33794543/large.jpg",
        "attribution": "(c) Bridget Spencer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/76251050/large.jpg",
        "attribution": "(c) Patrick Leamy, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/105182808/large.jpeg",
        "attribution": "(c) Brice C., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "carolina-chickadee": {
    "inat_taxon_id": 144814,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3053969/large.jpg",
    "cover_image_attribution": "(c) Dan Pancamo, some rights reserved (CC BY-SA)",
    "cover_image_license": "cc-by-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28635206/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/187055185/large.jpg",
        "attribution": "(c) Steve Gallagher, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/607469166/large.jpg",
        "attribution": "(c) John Martin, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/605659063/large.jpg",
        "attribution": "(c) MJ, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/460721887/large.jpg",
        "attribution": "(c) Trung Nguyen, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/106911555/large.jpg",
        "attribution": "(c) William Wise, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "carolina-mantis": {
    "inat_taxon_id": 119989,
    "cover_image_url": "https://static.inaturalist.org/photos/93157972/large.jpg",
    "cover_image_attribution": "(c) William Wise, all rights reserved, uploaded by William Wise",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/92919836/large.jpeg",
        "attribution": "(c) Scott Bolick, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/52952542/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/51980806/large.jpg",
        "attribution": "(c) Rick, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/48855355/large.jpg",
        "attribution": "(c) meredithsanders9, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/47503802/large.jpeg",
        "attribution": "(c) Bo Abernethy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/231255210/large.jpeg",
        "attribution": "(c) Jay Hovis, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "carolina-wren": {
    "inat_taxon_id": 7513,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/461889083/large.jpg",
    "cover_image_attribution": "(c) Tom Murray, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/280967890/large.jpeg",
        "attribution": "(c) cbarba, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/186483298/large.jpg",
        "attribution": "(c) tracminhvu, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/68118703/large.jpg",
        "attribution": "(c) Mark Apgar, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/338504764/large.jpg",
        "attribution": "(c) haley.ann.123, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/109475722/large.jpg",
        "attribution": "(c) rebelgirl73, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177590771/large.jpg",
        "attribution": "(c) Susan Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "cave-myotis": {
    "inat_taxon_id": 40348,
    "cover_image_url": "https://static.inaturalist.org/photos/502111/large.jpg",
    "cover_image_attribution": "(c) Arnulfo Moreno-Valdez, all rights reserved, uploaded by Arnulfo Moreno-Valdez",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/260458653/large.jpeg",
        "attribution": "(c) Jason Brooks, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/423294080/large.jpeg",
        "attribution": "(c) Amelia Tauber, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/224319645/large.jpeg",
        "attribution": "(c) Mike Farley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/165816314/large.png",
        "attribution": "(c) atlasmira, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/493330015/large.jpg",
        "attribution": "(c) Mike Farley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/414445840/large.jpeg",
        "attribution": "(c) kosmickid, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "cedar-elm": {
    "inat_taxon_id": 128823,
    "cover_image_url": "https://static.inaturalist.org/photos/10140569/large.jpg",
    "cover_image_attribution": "(c) Suzette Rogers, all rights reserved",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/305481799/large.jpg",
        "attribution": "(c) Jon McIntyre, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/194466774/large.jpg",
        "attribution": "(c) lindajrm, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/493123532/large.jpg",
        "attribution": "(c) daniel112, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/134678961/large.jpeg",
        "attribution": "(c) Bob O'Kennon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/14232623/large.jpeg",
        "attribution": "(c) gilfranke, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/132845652/large.jpeg",
        "attribution": "(c) Ron Stephens, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "cedar-waxwing": {
    "inat_taxon_id": 7428,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/450146514/large.jpeg",
    "cover_image_attribution": "(c) Manny Salas, some rights reserved (CC BY-NC), uploaded by Manny Salas",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/64327766/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/31524584/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/116182474/large.jpeg",
        "attribution": "(c) hdcooper, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62310832/large.jpeg",
        "attribution": "(c) John Gregoire, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/434952062/large.jpg",
        "attribution": "(c) jchristmann, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/110812374/large.jpeg",
        "attribution": "(c) Shirley Zundell, some rights reserved (CC BY)",
        "license": "cc-by",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "checkered-gartersnake": {
    "inat_taxon_id": 28390,
    "cover_image_url": "https://static.inaturalist.org/photos/412610622/large.jpg",
    "cover_image_attribution": "(c) Benjamin Genter, all rights reserved",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11063331/large.jpg",
        "attribution": "(c) Milton Úbeda, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/25425405/large.jpg",
        "attribution": "(c) jrotzeke, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/37984797/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/395538541/large.jpeg",
        "attribution": "(c) Joe Paysen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/570946357/large.jpg",
        "attribution": "(c) claytonleopold, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/515236096/large.jpg",
        "attribution": "(c) Cheyenne Gonzales, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "chinaberry": {
    "inat_taxon_id": 53720,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/33351307/large.jpeg",
    "cover_image_attribution": "no rights reserved, uploaded by 葉子",
    "cover_image_license": "cc0",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/318425178/large.jpeg",
        "attribution": "(c) meryema, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/32417237/large.jpeg",
        "attribution": "(c) 洪嘉筠, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/51936127/large.jpg",
        "attribution": "(c) kristiefwench, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/100373440/large.jpeg",
        "attribution": "(c) Nick Lambert, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/190067465/large.jpeg",
        "attribution": "(c) chrisl232, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/200731644/large.jpg",
        "attribution": "(c) Konstantinos Kalaentzis, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "chinese-privet": {
    "inat_taxon_id": 128769,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/570026/large.jpg",
    "cover_image_attribution": "(c) Kai Yan,  Joseph Wong, some rights reserved (CC BY-NC-SA)",
    "cover_image_license": "cc-by-nc-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/103599629/large.jpeg",
        "attribution": "(c) MP Zhou, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/126520804/large.jpeg",
        "attribution": "(c) pileatedtree, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/269391414/large.jpeg",
        "attribution": "(c) Jo Roberts, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/371273828/large.jpeg",
        "attribution": "(c) Mason Hunter, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/335774800/large.jpeg",
        "attribution": "(c) Mick parsons, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/67060672/large.jpg",
        "attribution": "(c) Erin M Reeh, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "chinese-tallow-tree": {
    "inat_taxon_id": 79388,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/88816213/large.jpeg",
    "cover_image_attribution": "(c) J. Richard Abbott, some rights reserved (CC BY-NC), uploaded by J. Richard Abbott",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/120316978/large.jpeg",
        "attribution": "(c) Jason J Brunet, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/77763277/large.jpeg",
        "attribution": "(c) J. Richard Abbott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/157065406/large.jpg",
        "attribution": "(c) lwreduina, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/276609769/large.jpeg",
        "attribution": "(c) tnewman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5370728/large.jpeg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/426354777/large.jpeg",
        "attribution": "(c) Talat S., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "chipping-sparrow": {
    "inat_taxon_id": 9135,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/273251789/large.jpg",
    "cover_image_attribution": "(c) Weston Barker, some rights reserved (CC BY-NC), uploaded by Weston Barker",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8717084/large.jpeg",
        "attribution": "(c) Shirley Zundell, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/176697329/large.jpeg",
        "attribution": "(c) Susan Doss, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/371492310/large.jpg",
        "attribution": "(c) Ben Zerante, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2883290/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11801745/large.jpg",
        "attribution": "(c) Sandra Coté, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28321993/large.jpeg",
        "attribution": "(c) Mike Leveille, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "cicada-killer": {
    "inat_taxon_id": 51954,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/9100781/large.jpg",
    "cover_image_attribution": "(c) Judy Gallagher, some rights reserved (CC BY-SA), uploaded by Judy Gallagher",
    "cover_image_license": "cc-by-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/308232004/large.jpeg",
        "attribution": "(c) toxican, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2355204/large.jpg",
        "attribution": "(c) Rob Curtis, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/22618054/large.jpg",
        "attribution": "(c) Andrew Dreelin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/222310800/large.jpeg",
        "attribution": "(c) Tom Norton, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/22644093/large.jpg",
        "attribution": "(c) Danny Goodding, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "cliff-swallow": {
    "inat_taxon_id": 11858,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27372454/large.jpeg",
    "cover_image_attribution": "(c) Dean Hester, some rights reserved (CC BY-NC-ND), uploaded by Dean Hester",
    "cover_image_license": "cc-by-nc-nd",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/21089725/large.jpg",
        "attribution": "(c) Josh van der Meulen, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28275077/large.jpg",
        "attribution": "(c) lisamari, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/532764914/large.jpg",
        "attribution": "(c) Morgan Rodenborg, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/202381024/large.jpeg",
        "attribution": "(c) Sean Cozart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/76267469/large.jpeg",
        "attribution": "(c) mitchm44, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "coachwhip": {
    "inat_taxon_id": 547193,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20338257/large.jpg",
    "cover_image_attribution": "(c) johnwilliams, some rights reserved (CC BY-NC), uploaded by johnwilliams",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/9543103/large.jpg",
        "attribution": "(c) Michael Gray, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/59594720/large.jpg",
        "attribution": "(c) Alice Abela, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/112909308/large.jpeg",
        "attribution": "(c) David DuBois, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/135792080/large.jpg",
        "attribution": "(c) gshrum, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/189380472/large.jpg",
        "attribution": "(c) Kevin Chen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/33514356/large.jpg",
        "attribution": "(c) jtalbert04, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "common-eastern-bumble-bee": {
    "inat_taxon_id": 118970,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/319670408/large.jpeg",
    "cover_image_attribution": "(c) scotstewart, some rights reserved (CC BY-NC), uploaded by scotstewart",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/17767241/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/162081345/large.jpg",
        "attribution": "(c) dgnat, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/233879360/large.jpg",
        "attribution": "(c) Nick Dorian, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/580690822/large.jpg",
        "attribution": "(c) W Rao, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/239367619/large.jpeg",
        "attribution": "(c) prose31415, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/217475187/large.jpg",
        "attribution": "(c) Stephen Barten, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "common-gray-fox": {
    "inat_taxon_id": 42076,
    "cover_image_url": "https://static.inaturalist.org/photos/32504964/large.jpg",
    "cover_image_attribution": "(c) Mike Zarella, all rights reserved, uploaded by Mike Zarella",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/41795717/large.jpg",
        "attribution": "(c) Delmar W. Bachert, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/13152950/large.jpg",
        "attribution": "(c) Michael Gray, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/152143000/large.jpg",
        "attribution": "(c) drtupps, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/120466256/large.jpg",
        "attribution": "(c) Robin Gwen Agarwal, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/42785164/large.jpg",
        "attribution": "(c) Delmar W. Bachert, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2133912/large.JPG",
        "attribution": "(c) Dean Goehring, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "common-green-darner": {
    "inat_taxon_id": 67731,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/374837307/large.jpg",
    "cover_image_attribution": "(c) Kevin, some rights reserved (CC BY-NC), uploaded by Kevin",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6384524/large.jpg",
        "attribution": "(c) Janet Nelson, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/10604112/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/154883429/large.jpeg",
        "attribution": "(c) Michelle W. （鍾偉瑋）, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/150521430/large.jpg",
        "attribution": "(c) Asher Perla, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/332005580/large.jpg",
        "attribution": "(c) Sylvain Eichhorn, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7893125/large.jpg",
        "attribution": "(c) Denis Doucet, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "common-snapping-turtle": {
    "inat_taxon_id": 39682,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/352641070/large.jpg",
    "cover_image_attribution": "(c) \nlwolfartist, some rights reserved (CC BY)",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/276341534/large.jpeg",
        "attribution": "(c) Joey Santore, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/123718908/large.jpeg",
        "attribution": "(c) Dan Treadwell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/150152136/large.jpeg",
        "attribution": "(c) Matthew Ireland, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15849289/large.jpeg",
        "attribution": "(c) Mike Nelson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5202397/large.jpg",
        "attribution": "(c) Nina Carrano, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/4638838/large.jpg",
        "attribution": "(c) Matthieu Berroneau, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "convergent-lady-beetle": {
    "inat_taxon_id": 48987,
    "cover_image_url": "https://static.inaturalist.org/photos/1114606/large.JPG",
    "cover_image_attribution": "(c) Gary McDonald, all rights reserved, uploaded by Gary McDonald",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30045092/large.jpg",
        "attribution": "(c) pmmcnaturalist1, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/14208302/large.jpg",
        "attribution": "(c) Kim, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2504524/large.JPG",
        "attribution": "(c) sidesplotch, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/287796997/large.jpg",
        "attribution": "(c) Ian Wright, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/38515257/large.jpg",
        "attribution": "(c) Laura P., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/79836317/large.jpeg",
        "attribution": "(c) Jim Johnson, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "coopers-hawk": {
    "inat_taxon_id": 1579017,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/170370008/large.jpg",
    "cover_image_attribution": "(c) Abby Sesselberg, some rights reserved (CC BY-NC), uploaded by Abby Sesselberg",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5586681/large.jpeg",
        "attribution": "(c) John Karges, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/43282408/large.jpg",
        "attribution": "(c) Becky Matsubara, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/253819779/large.jpeg",
        "attribution": "(c) mallorydotson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/102883419/large.jpeg",
        "attribution": "(c) karalyn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29244480/large.jpg",
        "attribution": "(c) Alexander Viduetsky, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/123517429/large.png",
        "attribution": "(c) mcraubet, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "coyote": {
    "inat_taxon_id": 42051,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28242510/large.jpg",
    "cover_image_attribution": "(c) Don McCullough, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/109101551/large.jpg",
        "attribution": "(c) Richard Smart (he, him, his), some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/10963085/large.jpg",
        "attribution": "(c) Jorge Velez, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/12026014/large.jpg",
        "attribution": "(c) Jay Bird, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2916298/large.jpg",
        "attribution": "(c) avocat, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/128395433/large.jpg",
        "attribution": "(c) Lloyd Davis, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5017419/large.jpg",
        "attribution": "(c) Todd Fitzgerald, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "diamondback-watersnake": {
    "inat_taxon_id": 29310,
    "cover_image_url": "https://static.inaturalist.org/photos/412666965/large.jpg",
    "cover_image_attribution": "(c) Benjamin Genter, all rights reserved",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6919824/large.jpeg",
        "attribution": "(c) Marissa Little, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/241279/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/236611507/large.jpeg",
        "attribution": "(c) B. P. White, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/10610167/large.jpg",
        "attribution": "(c) Jonah Evans, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/127240607/large.jpeg",
        "attribution": "(c) ncb1221, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/257762247/large.jpg",
        "attribution": "(c) Mike Rochford, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "differential-grasshopper": {
    "inat_taxon_id": 63518,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/478660/large.jpg",
    "cover_image_attribution": "(c) Victor W Fazio III, some rights reserved (CC BY-NC-ND), uploaded by Victor W Fazio III",
    "cover_image_license": "cc-by-nc-nd",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/213751336/large.jpg",
        "attribution": "(c) wildwestnature, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/26293335/large.jpeg",
        "attribution": "(c) Brigitte Geer, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5109027/large.jpg",
        "attribution": "(c) Steven Mlodinow, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4345025/large.jpg",
        "attribution": "(c) Roberto R. Calderón, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/26649397/large.jpg",
        "attribution": "(c) Kayla Echols, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/98369517/large.jpeg",
        "attribution": "(c) Taewoo Kim, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "domestic-cat": {
    "inat_taxon_id": 118552,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/129658776/large.jpg",
    "cover_image_attribution": "(c) Von.grzanka, some rights reserved (CC BY-SA)",
    "cover_image_license": "cc-by-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28155883/large.jpeg",
        "attribution": "(c) Alex J Burchard, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/79420032/large.jpg",
        "attribution": "(c) bio_alchemist, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/250577036/large.jpeg",
        "attribution": "(c) David M. Gascoigne, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/317493496/large.jpg",
        "attribution": "(c) cicada0, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57164293/large.jpg",
        "attribution": "(c) Ehoarn Bidault, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/23861094/large.png",
        "attribution": "(c) mike_cove, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "double-crested-cormorant": {
    "inat_taxon_id": 1454382,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/182713821/large.jpg",
    "cover_image_attribution": "(c) José Antonio Linage Espinosa, some rights reserved (CC BY-NC), uploaded by José Antonio Linage Espinosa",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/369136154/large.gif",
        "attribution": "(c) Josiah Londerée, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/61565469/large.jpeg",
        "attribution": "(c) Jared Gorrell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/591162737/large.jpg",
        "attribution": "(c) vleid001, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/255454786/large.jpg",
        "attribution": "(c) Peter Abrahamsen, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/179325608/large.jpg",
        "attribution": "(c) Isaac Krone, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6791554/large.jpg",
        "attribution": "(c) morganfbs, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "downy-woodpecker": {
    "inat_taxon_id": 792988,
    "cover_image_url": "https://static.inaturalist.org/photos/25544008/large.jpeg",
    "cover_image_attribution": "(c) César Andrés Castillo, all rights reserved, uploaded by César Andrés Castillo",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/116350378/large.jpg",
        "attribution": "(c) javiehweg, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177108982/large.jpeg",
        "attribution": "(c) Alexis Williams, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/140506508/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/355593223/large.gif",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/345893662/large.jpg",
        "attribution": "(c) Roderick Hornby, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/12308589/large.jpg",
        "attribution": "(c) jdheisz, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "eastern-bluebird": {
    "inat_taxon_id": 12942,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/356151567/large.jpeg",
    "cover_image_attribution": "(c) Shreybae, some rights reserved (CC BY-NC), uploaded by Shreybae",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/181193021/large.jpeg",
        "attribution": "(c) Chelsea Carroll, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14657071/large.jpeg",
        "attribution": "(c) Marie Hosch, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5821756/large.jpg",
        "attribution": "(c) Jenn Megyesi, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/181099285/large.jpeg",
        "attribution": "(c) joannerusso, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177719984/large.jpg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57325487/large.jpeg",
        "attribution": "(c) Izabella Farr, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "eastern-carpenter-bee": {
    "inat_taxon_id": 51110,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/33118717/large.jpg",
    "cover_image_attribution": "(c) Christopher Eliot, some rights reserved (CC BY), uploaded by Christopher Eliot",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/130328294/large.jpg",
        "attribution": "(c) Alex Shure, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/99291818/large.jpg",
        "attribution": "(c) Trish Dooling, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/150706871/large.jpg",
        "attribution": "(c) bwhiteley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/122443912/large.jpeg",
        "attribution": "(c) sarahkearney, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/29484621/large.jpg",
        "attribution": "(c) Brad Moon, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/373650065/large.jpeg",
        "attribution": "(c) Brenna Farrell, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "eastern-collared-lizard": {
    "inat_taxon_id": 33135,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/80719988/large.jpeg",
    "cover_image_attribution": "(c) Alexander Harman, Ph. D., some rights reserved (CC BY-NC), uploaded by Alexander Harman, Ph. D.",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4356673/large.jpg",
        "attribution": "(c) Steve Harbula, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/286473484/large.jpeg",
        "attribution": "(c) Matthew Parks, PhD, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/270330050/large.jpg",
        "attribution": "(c) Mark Parker, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1668270/large.JPG",
        "attribution": "(c) Bob McDougall, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/91340294/large.jpg",
        "attribution": "(c) Garrett Frandson, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/34592517/large.jpeg",
        "attribution": "(c) Michael Pierson, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "eastern-cottontail": {
    "inat_taxon_id": 43111,
    "cover_image_url": "https://static.inaturalist.org/photos/17972501/large.jpeg",
    "cover_image_attribution": "(c) Cameron Hartley, all rights reserved, uploaded by Cameron Hartley",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/91229197/large.jpg",
        "attribution": "(c) Bill Keim, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4039231/large.JPG",
        "attribution": "(c) mhajder, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/17972472/large.jpeg",
        "attribution": "(c) Cameron Hartley, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/25617883/large.jpg",
        "attribution": "(c) hoh3, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/248492879/large.jpg",
        "attribution": "(c) Marilynn Miller, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/132827420/large.jpeg",
        "attribution": "(c) Matteo Brambilla, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "eastern-fox-squirrel": {
    "inat_taxon_id": 46020,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/337444041/large.jpeg",
    "cover_image_attribution": "(c) Tobin Brown, some rights reserved (CC BY-NC), uploaded by Tobin Brown",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/68550430/large.jpeg",
        "attribution": "(c) gregslak, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/554899962/large.jpg",
        "attribution": "(c) Gianna Coppola, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11375042/large.jpg",
        "attribution": "(c) Amy Jaecker-Jones, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/385944843/large.jpg",
        "attribution": "(c) ulrichj24, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6535580/large.jpg",
        "attribution": "(c) Anne Glick, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28051730/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "eastern-gray-squirrel": {
    "inat_taxon_id": 46017,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/22144449/large.jpg",
    "cover_image_attribution": "(c) Diliff, some rights reserved (CC BY-SA)",
    "cover_image_license": "cc-by-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/10185825/large.jpeg",
        "attribution": "(c) Mike Leveille, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/67461935/large.jpeg",
        "attribution": "(c) rmccphotography, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11321491/large.jpeg",
        "attribution": "(c) Mark D. Read, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27978208/large.jpg",
        "attribution": "(c) hobiecat, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/49612581/large.jpeg",
        "attribution": "(c) Peter Kikic, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/121686880/large.jpg",
        "attribution": "(c) earnoodles, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "eastern-hognose-snake": {
    "inat_taxon_id": 29925,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/198456500/large.jpg",
    "cover_image_attribution": "(c) evangrimes, some rights reserved (CC BY), uploaded by evangrimes",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/237957763/large.jpg",
        "attribution": "(c) biogeoquest, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/20743032/large.jpg",
        "attribution": "(c) mattbuckingham, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30179513/large.jpg",
        "attribution": "(c) chrissid24, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/138906439/large.jpeg",
        "attribution": "(c) shellimoore, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/81998339/large.jpeg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/366638685/large.jpeg",
        "attribution": "(c) Shreybae, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "eastern-kingbird": {
    "inat_taxon_id": 16782,
    "cover_image_url": "https://static.inaturalist.org/photos/518522154/large.jpg",
    "cover_image_attribution": "(c) Jake Scott, all rights reserved, uploaded by Jake Scott",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/23726266/large.jpg",
        "attribution": "(c) Chris McCreedy, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/46102912/large.jpeg",
        "attribution": "(c) cgbb2004, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/44860371/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/162361503/large.jpg",
        "attribution": "(c) mannac, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/279150903/large.jpg",
        "attribution": "(c) tiller, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/403213021/large.jpeg",
        "attribution": "(c) uconnbirdfish, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "eastern-mole": {
    "inat_taxon_id": 47014,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12428916/large.jpg",
    "cover_image_attribution": "(c) mayfly1963, some rights reserved (CC BY), uploaded by mayfly1963",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/255886314/large.jpg",
        "attribution": "(c) Savannah Colston, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/594364283/large.jpg",
        "attribution": "(c) Misha Zitser, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/378363667/large.jpeg",
        "attribution": "(c) csledge, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/202288627/large.jpeg",
        "attribution": "(c) Todd Fitzgerald, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/187421455/large.jpeg",
        "attribution": "(c) Buddy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/523158029/large.jpg",
        "attribution": "(c) sirflowers, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "eastern-phoebe": {
    "inat_taxon_id": 17008,
    "cover_image_url": "https://static.inaturalist.org/photos/171693341/large.jpg",
    "cover_image_attribution": "(c) j_albright, all rights reserved",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11332440/large.jpg",
        "attribution": "(c) Shelia Hargis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/72988435/large.gif",
        "attribution": "(c) Thomas Koffel, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/454920722/large.jpeg",
        "attribution": "(c) Josh Golden, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/438997119/large.jpeg",
        "attribution": "(c) dontfencemein, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20207164/large.jpg",
        "attribution": "(c) Kerry Carloy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/233778010/large.jpeg",
        "attribution": "(c) Mudgie, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "eastern-red-bat": {
    "inat_taxon_id": 40522,
    "cover_image_url": "https://static.inaturalist.org/photos/174193508/large.jpg",
    "cover_image_attribution": "(c) Dan LaVorgna, all rights reserved, uploaded by Dan LaVorgna",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/326077818/large.jpeg",
        "attribution": "(c) Ed O'Connor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/102397150/large.jpg",
        "attribution": "(c) Kristof Zyskowski, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/165601085/large.jpeg",
        "attribution": "(c) Tiffany Turcotte, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/163580346/large.jpg",
        "attribution": "(c) Richard Land, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11256344/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "eastern-screech-owl": {
    "inat_taxon_id": 19765,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5651/large.jpg",
    "cover_image_attribution": "(c) Michael Hodge, some rights reserved (CC BY-NC-SA)",
    "cover_image_license": "cc-by-nc-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62853099/large.jpg",
        "attribution": "(c) Joanne Muis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/30562672/large.jpg",
        "attribution": "(c) William Wise, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/111231795/large.jpg",
        "attribution": "(c) roy pilcher, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/588123496/large.jpg",
        "attribution": "(c) Roderick Hornby, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11830772/large.jpeg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/341131758/large.jpeg",
        "attribution": "(c) Owen J., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "elbowbush": {
    "inat_taxon_id": 58211,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/17877492/large.jpeg",
    "cover_image_attribution": "(c) Suzette Rogers, some rights reserved (CC BY-NC), uploaded by Suzette Rogers",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/1296167/large.jpg",
        "attribution": "(c) Suzette Rogers, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/61659515/large.jpg",
        "attribution": "(c) randyfu, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/447476162/large.jpeg",
        "attribution": "(c) wwench, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/165959900/large.jpg",
        "attribution": "(c) CK2AZ, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/294409360/large.jpg",
        "attribution": "(c) bbenz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55276499/large.jpg",
        "attribution": "(c) Nido Paras, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "escarpment-live-oak": {
    "inat_taxon_id": 167647,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/56167350/large.jpeg",
    "cover_image_attribution": "(c) Donald Pendleton, some rights reserved (CC BY-NC), uploaded by Donald Pendleton",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/112380144/large.jpg",
        "attribution": "(c) pixifer, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/389433991/large.jpeg",
        "attribution": "(c) anaeliani2, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/308624722/large.jpg",
        "attribution": "(c) Marlys, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15848046/large.jpg",
        "attribution": "(c) Rich Kostecke, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/333248977/large.jpg",
        "attribution": "(c) pinkaxolotl, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/60448093/large.jpg",
        "attribution": "(c) nereydaroman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "eurasian-collared-dove": {
    "inat_taxon_id": 2969,
    "cover_image_url": "https://static.inaturalist.org/photos/61919353/large.jpeg",
    "cover_image_attribution": "(c) Daniel, all rights reserved, uploaded by Daniel",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/20201746/large.jpeg",
        "attribution": "(c) Jay Odell, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/187172704/large.jpeg",
        "attribution": "(c) Jorge A. Pérez Torres, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/68009272/large.jpeg",
        "attribution": "(c) Sean Cozart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/227918360/large.jpeg",
        "attribution": "(c) myxograzina, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/44776011/large.jpeg",
        "attribution": "(c) Rashmiya Hasan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/131858361/large.jpg",
        "attribution": "(c) njjturner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "european-paper-wasp": {
    "inat_taxon_id": 84640,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/64465661/large.jpg",
    "cover_image_attribution": "(c) Bill Keim, some rights reserved (CC BY)",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/102467968/large.jpeg",
        "attribution": "(c) Lisa H. Robinson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/552571973/large.jpg",
        "attribution": "(c) antimatterbee, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/61586240/large.jpeg",
        "attribution": "(c) Paul Abell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/420001587/large.jpg",
        "attribution": "(c) Markus Horrer, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/87481293/large.jpeg",
        "attribution": "(c) Динасафина, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/24295158/large.jpg",
        "attribution": "(c) adriee, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "european-starling": {
    "inat_taxon_id": 14850,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32152001/large.jpg",
    "cover_image_attribution": "(c) Fran Wiesner, some rights reserved (CC BY-NC-ND), uploaded by Fran Wiesner",
    "cover_image_license": "cc-by-nc-nd",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/23635561/large.jpg",
        "attribution": "(c) Lioneska, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/118675313/large.jpg",
        "attribution": "(c) egorbirder, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/129167575/large.jpeg",
        "attribution": "(c) Whitney Mattila, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/64616776/large.jpg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/224984968/large.jpeg",
        "attribution": "(c) camogains, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "eves-necklace": {
    "inat_taxon_id": 289854,
    "cover_image_url": "https://static.inaturalist.org/photos/356509/large.jpg",
    "cover_image_attribution": "(c) Layla, all rights reserved, uploaded by Layla",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/245234828/large.jpeg",
        "attribution": "(c) honeybees2, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/67379123/large.jpg",
        "attribution": "(c) Pearl Gonzalez, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/46104268/large.jpg",
        "attribution": "(c) Lisa Travis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/174763076/large.jpg",
        "attribution": "(c) Rick Travis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/265374840/large.jpeg",
        "attribution": "(c) txwoofus, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/121384199/large.jpg",
        "attribution": "(c) Michelle Norris, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "feral-hog": {
    "inat_taxon_id": 42134,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/414500081/large.jpg",
    "cover_image_attribution": "(c) Nathalie Hausser, some rights reserved (CC BY-NC-ND)",
    "cover_image_license": "cc-by-nc-nd",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/40274907/large.jpg",
        "attribution": "(c) Gökçe Coşkun, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2757456/large.jpg",
        "attribution": "(c) Tom, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/12044202/large.jpg",
        "attribution": "(c) Massimo Rosso, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/60004749/large.jpg",
        "attribution": "(c) Eric, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/169799918/large.jpg",
        "attribution": "(c) filton18, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/270077658/large.jpg",
        "attribution": "(c) Håvard Rosenlund, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "frostweed": {
    "inat_taxon_id": 119982,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13760231/large.jpg",
    "cover_image_attribution": "(c) Mark Fishbein, some rights reserved (CC BY-NC), uploaded by Mark Fishbein",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5844972/large.jpg",
        "attribution": "(c) Chuck Sexton, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5510128/large.jpg",
        "attribution": "(c) Patrick Coin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/156162642/large.jpg",
        "attribution": "(c) cleointhesmokies, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28110717/large.jpeg",
        "attribution": "(c) 🌱 Aaron Lincoln 🌱, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/170972174/large.jpg",
        "attribution": "(c) pridge, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/155447590/large.jpeg",
        "attribution": "(c) tamdsmith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "giant-reed": {
    "inat_taxon_id": 64017,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/9554061/large.jpg",
    "cover_image_attribution": "(c) Josh/Joshua, some rights reserved (CC BY-NC), uploaded by Josh/Joshua",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/378566322/large.jpeg",
        "attribution": "(c) Orlanda Viamonte Póvoa, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/160429764/large.jpeg",
        "attribution": "(c) wormsy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/113634996/large.jpeg",
        "attribution": "(c) Damaris López, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/335619621/large.jpeg",
        "attribution": "(c) Suanne Pyle, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/104486057/large.jpeg",
        "attribution": "(c) Nicole Parks, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/107706773/large.jpg",
        "attribution": "(c) bennybotany85, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "giant-swallowtail": {
    "inat_taxon_id": 85024,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/83941810/large.jpg",
    "cover_image_attribution": "(c) David Alan Rogers, some rights reserved (CC BY-NC), uploaded by David Alan Rogers",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/71623293/large.gif",
        "attribution": "(c) Roger Birkhead, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/413570493/large.jpeg",
        "attribution": "(c) Stuart Tingley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55897132/large.jpeg",
        "attribution": "(c) judywelna, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/440415148/large.jpeg",
        "attribution": "(c) Gianna Coppola, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/217337797/large.jpg",
        "attribution": "(c) kay_gardiner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/125569/large.JPG",
        "attribution": "(c) Rob Curtis, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "golden-cheeked-warbler": {
    "inat_taxon_id": 145257,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6534514/large.jpg",
    "cover_image_attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC), uploaded by Greg Lasley",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3498704/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6534513/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/624979660/large.jpg",
        "attribution": "(c) Brian Vigorito, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3795370/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/117038035/large.jpeg",
        "attribution": "(c) Todd Fitzgerald, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/260179946/large.jpeg",
        "attribution": "(c) shrike2, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "great-blue-heron": {
    "inat_taxon_id": 4956,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65060931/large.jpg",
    "cover_image_attribution": "(c) Dan Roach, some rights reserved (CC BY-NC), uploaded by Dan Roach",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/3101697/large.jpg",
        "attribution": "(c) Jay Keller, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/44775170/large.jpg",
        "attribution": "(c) Pam Piombino, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/283943696/large.jpg",
        "attribution": "(c) Cathy Bester, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/134213334/large.jpg",
        "attribution": "(c) mostbittern, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4962141/large.jpg",
        "attribution": "(c) Mary Keim, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/256415216/large.jpeg",
        "attribution": "(c) kitemongoose, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "great-crested-flycatcher": {
    "inat_taxon_id": 16028,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/202717991/large.jpeg",
    "cover_image_attribution": "no rights reserved, uploaded by Chrissy McClarren and Andy Reago",
    "cover_image_license": "cc0",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/7624575/large.jpg",
        "attribution": "(c) Theresa Bayoud, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/33575674/large.jpg",
        "attribution": "(c) Liam Wolff, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/224198933/large.jpeg",
        "attribution": "(c) corderonature, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/16522031/large.jpg",
        "attribution": "(c) peetje, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/233871471/large.jpeg",
        "attribution": "(c) Mudgie, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/396217551/large.jpg",
        "attribution": "(c) MikeN, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "great-egret": {
    "inat_taxon_id": 144455,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/56653891/large.jpg",
    "cover_image_attribution": "(c) daverowe, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12406141/large.jpeg",
        "attribution": "(c) Jack Leonard, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1870681/large.jpg",
        "attribution": "(c) 360pixual, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/50369455/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/19089669/large.jpeg",
        "attribution": "(c) Jennifer Linde, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/152261604/large.jpg",
        "attribution": "(c) Jonathan Eisen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/56653803/large.jpg",
        "attribution": "(c) daverowe, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "great-horned-owl": {
    "inat_taxon_id": 20044,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14549085/large.jpg",
    "cover_image_attribution": "(c) Paul G. Johnson, some rights reserved (CC BY-NC-SA), uploaded by Paul G. Johnson",
    "cover_image_license": "cc-by-nc-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/35240981/large.jpg",
        "attribution": "(c) Jeff Skrentny, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/6473199/large.jpg",
        "attribution": "(c) Damon Tighe, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/6228873/large.jpeg",
        "attribution": "(c) Kelly Reetz, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/264835127/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/380001332/large.jpg",
        "attribution": "(c) Eric Hough, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/210808546/large.jpg",
        "attribution": "(c) Sequoia Janirella Wrens, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "great-plains-ratsnake": {
    "inat_taxon_id": 73884,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1226072/large.jpg",
    "cover_image_attribution": "(c) johnwilliams, some rights reserved (CC BY-NC), uploaded by johnwilliams",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/221055344/large.jpg",
        "attribution": "(c) benapple, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/47695347/large.jpeg",
        "attribution": "(c) Nathan Gjelsness, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/385214771/large.jpeg",
        "attribution": "(c) Lucas C. Wheeler, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/534098356/large.jpg",
        "attribution": "(c) Dylan Cebulske, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/530144429/large.jpg",
        "attribution": "(c) herphendrie, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "great-tailed-grackle": {
    "inat_taxon_id": 9607,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/191985938/large.jpg",
    "cover_image_attribution": "(c) Ad Konings, some rights reserved (CC BY-NC), uploaded by Ad Konings",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55701587/large.jpg",
        "attribution": "(c) John D Reynolds, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/477059462/large.jpg",
        "attribution": "(c) Paul Ha, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/38781431/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/118608751/large.jpg",
        "attribution": "(c) Csip, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/181672539/large.jpg",
        "attribution": "(c) Peter Grube-Pagola, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/181279693/large.jpg",
        "attribution": "(c) Diego Cordero, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "green-anole": {
    "inat_taxon_id": 36514,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2626904/large.jpg",
    "cover_image_attribution": "(c) Roberto R. Calderón, some rights reserved (CC BY-NC), uploaded by Roberto R. Calderón",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/60271898/large.jpg",
        "attribution": "(c) Lyndsey, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/123291544/large.jpg",
        "attribution": "(c) cfabian, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/523928837/large.jpg",
        "attribution": "(c) Texas Bird Family, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/24540001/large.jpg",
        "attribution": "(c) Van Remsen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/23099554/large.jpeg",
        "attribution": "(c) Robby Deans, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/181124398/large.jpeg",
        "attribution": "(c) Isaac Neeley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "green-heron": {
    "inat_taxon_id": 5020,
    "cover_image_url": "https://static.inaturalist.org/photos/182999416/large.jpg",
    "cover_image_attribution": "(c) Juan Miguel Artigas Azas, all rights reserved, uploaded by Juan Miguel Artigas Azas",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/18460333/large.jpg",
        "attribution": "(c) Ryan Jones, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/2859460/large.jpg",
        "attribution": "(c) Henry Fabian, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/378034684/large.jpeg",
        "attribution": "(c) Isaac Eastland, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/23752859/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/9343496/large.jpg",
        "attribution": "(c) Karen Zeleznik, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/260809469/large.jpeg",
        "attribution": "(c) Carmen Ferreiro, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "ground-skink": {
    "inat_taxon_id": 60349,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/83827281/large.jpeg",
    "cover_image_attribution": "(c) Richard Coldiron, some rights reserved (CC BY-NC), uploaded by Richard Coldiron",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/38796474/large.jpg",
        "attribution": "(c) ksmith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/127249732/large.jpg",
        "attribution": "(c) Amie Lavonn Robison, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/239134832/large.jpg",
        "attribution": "(c) Ty Smith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/282071438/large.jpeg",
        "attribution": "(c) ncb1221, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/119160270/large.jpg",
        "attribution": "(c) Joshua Liverman, some rights reserved (CC BY)",
        "license": "cc-by",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "gulf-fritillary": {
    "inat_taxon_id": 312743,
    "cover_image_url": "https://static.inaturalist.org/photos/1150018/large.jpg",
    "cover_image_attribution": "(c) Julio Alejandro Alvarez Ruiz, all rights reserved, uploaded by Julio Alejandro Alvarez Ruiz",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/2078182/large.png",
        "attribution": "(c) Hugo Álvarez-García, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/125798036/large.jpg",
        "attribution": "(c) elpatitojuan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/339262909/large.jpeg",
        "attribution": "(c) Sue Carnahan, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/157656751/large.jpeg",
        "attribution": "(c) Lucy Cash, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/566645733/large.jpg",
        "attribution": "(c) Kellen Bryant, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/234987145/large.jpg",
        "attribution": "(c) Jose S. Garza Herrera, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "hispid-cotton-rat": {
    "inat_taxon_id": 44902,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7805743/large.jpg",
    "cover_image_attribution": "(c) Scott Buckel, some rights reserved (CC BY-NC), uploaded by Scott Buckel",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/126031108/large.jpg",
        "attribution": "(c) tcantrell52, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4117139/large.jpg",
        "attribution": "(c) Scott Buckel, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/51083947/large.jpeg",
        "attribution": "(c) Alex Salci, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1498084/large.jpg",
        "attribution": "(c) Cullen Hanks, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/181472331/large.jpg",
        "attribution": "(c) Amy P Deatherage, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "hoary-bat": {
    "inat_taxon_id": 40523,
    "cover_image_url": "https://static.inaturalist.org/photos/1338098/large.jpg",
    "cover_image_attribution": "(c) Jose G. Martinez-Fonseca, all rights reserved, uploaded by Jose G. Martinez-Fonseca",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30287323/large.jpg",
        "attribution": "(c) David Bell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/319811270/large.jpg",
        "attribution": "(c) Joseph Connors, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/105451860/large.jpg",
        "attribution": "(c) shawk22, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/104146716/large.jpeg",
        "attribution": "(c) Patricia, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/430357306/large.jpg",
        "attribution": "(c) Dylan Osterhaus, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "honey-mesquite": {
    "inat_taxon_id": 1493134,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/263622625/large.jpg",
    "cover_image_attribution": "(c) alisonbabb, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/447685375/large.jpg",
        "attribution": "(c) Kendyl Osborn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/134085952/large.jpg",
        "attribution": "(c) Chuck Sexton, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/92465408/large.jpg",
        "attribution": "(c) clarama, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/455950461/large.jpeg",
        "attribution": "(c) huntysdead, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/302039197/large.jpg",
        "attribution": "(c) Catherine C. Galley, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/76801311/large.jpeg",
        "attribution": "(c) Linda Jo Conn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "house-finch": {
    "inat_taxon_id": 199840,
    "cover_image_url": "https://static.inaturalist.org/photos/178968933/large.jpg",
    "cover_image_attribution": "(c) Juan Miguel Artigas Azas, all rights reserved, uploaded by Juan Miguel Artigas Azas",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/21525364/large.jpg",
        "attribution": "(c) Torsten Eriksson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57363749/large.jpg",
        "attribution": "(c) Coleen Lawlor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/35114707/large.jpeg",
        "attribution": "(c) Σάββας Ζαφειρίου (Savvas Zafeiriou), some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/354041159/large.jpg",
        "attribution": "(c) shawnann74, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/479788277/large.jpg",
        "attribution": "(c) Yinglun Li, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/533494771/large.jpg",
        "attribution": "(c) L. Ernesto Pérez-Montes, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "house-mouse": {
    "inat_taxon_id": 44705,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/451428522/large.jpeg",
    "cover_image_attribution": "(c) Ty Smith, some rights reserved (CC BY-NC), uploaded by Ty Smith",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30006650/large.jpeg",
        "attribution": "(c) Kim Wagner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1226465/large.",
        "attribution": "(c) Tony Wills, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/22224/large.JPG",
        "attribution": "(c) Johnny Wilson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3019135/large.JPG",
        "attribution": "(c) Jenn Megyesi, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/25666715/large.jpg",
        "attribution": "(c) Steve Collins, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/58808635/large.jpg",
        "attribution": "(c) Carrie Seltzer, some rights reserved (CC BY)",
        "license": "cc-by",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "house-sparrow": {
    "inat_taxon_id": 13858,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4608133/large.jpg",
    "cover_image_attribution": "(c) Ximo Galarza, some rights reserved (CC BY-NC-SA)",
    "cover_image_license": "cc-by-nc-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/212832926/large.jpeg",
        "attribution": "(c) carnifex, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/87381621/large.jpeg",
        "attribution": "(c) Douglas Wiebe, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/116497227/large.jpg",
        "attribution": "(c) vyatka, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/366005721/large.jpeg",
        "attribution": "(c) maxim kobyak, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7393761/large.jpeg",
        "attribution": "(c) amandaandmike, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/29727709/large.jpg",
        "attribution": "(c) Jay Bird, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "inca-dove": {
    "inat_taxon_id": 3544,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1442236/large.jpg",
    "cover_image_attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC), uploaded by Greg Lasley",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/160495747/large.jpg",
        "attribution": "(c) Marco Zozaya, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/192708984/large.jpeg",
        "attribution": "(c) Eduardo Valencia, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/261446751/large.jpeg",
        "attribution": "(c) Elizabeth Esperanza Aragón Piña, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/233138048/large.jpeg",
        "attribution": "(c) Gary Herritz, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/256995078/large.jpeg",
        "attribution": "(c) Jorge A. Pérez Torres, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/344553686/large.jpeg",
        "attribution": "(c) Margaret Brown, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "indian-blanket": {
    "inat_taxon_id": 51768,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/75102458/large.jpg",
    "cover_image_attribution": "(c) TexasEagle, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2525729/large.jpg",
        "attribution": "(c) Roberto R. Calderón, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14262400/large.jpg",
        "attribution": "(c) Gerardo Juan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/91160341/large.jpeg",
        "attribution": "(c) skettiimonster, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/407989/large.jpg",
        "attribution": "(c) Suzanne Cadwell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/101929553/large.jpg",
        "attribution": "(c) Jeff Skrentny, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/516278617/large.jpg",
        "attribution": "(c) Randall Opper, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "indiangrass": {
    "inat_taxon_id": 122608,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4699574/large.jpg",
    "cover_image_attribution": "(c) Erica Fraley, some rights reserved (CC BY-NC), uploaded by Erica Fraley",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/447593478/large.jpeg",
        "attribution": "(c) csledge, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/568358033/large.jpg",
        "attribution": "(c) Michael J. Papay, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/569091563/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/343403004/large.jpg",
        "attribution": "(c) François Rousseu, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/311652008/large.jpeg",
        "attribution": "(c) Chuck Cantley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/574337081/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "johnsongrass": {
    "inat_taxon_id": 58387,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/78416044/large.jpg",
    "cover_image_attribution": "(c) Harry Rose, some rights reserved (CC BY)",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/76608593/large.jpg",
        "attribution": "(c) jrebman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/149328868/large.jpg",
        "attribution": "(c) Norbert Sauberer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/9409197/large.jpeg",
        "attribution": "(c) Travis Jarrell, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/50865012/large.jpeg",
        "attribution": "(c) Benjamin J. Dion, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/161078127/large.jpg",
        "attribution": "(c) mariestone, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/154485533/large.jpeg",
        "attribution": "(c) Becky Brenner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "killdeer": {
    "inat_taxon_id": 4793,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15053771/large.jpg",
    "cover_image_attribution": "(c) world_lineage, some rights reserved (CC BY-NC), uploaded by world_lineage",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/42755328/large.jpg",
        "attribution": "(c) TVASQUEZ, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5799515/large.jpg",
        "attribution": "(c) Steven Mlodinow, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/195105089/large.jpeg",
        "attribution": "(c) Patricia, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/178763914/large.jpeg",
        "attribution": "(c) Donna J. Parry, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/444924530/large.jpg",
        "attribution": "(c) Roderick Hornby, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/505399693/large.jpg",
        "attribution": "(c) Mercedes-Fletcher, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "king-ranch-bluestem": {
    "inat_taxon_id": 75842,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/95847127/large.jpg",
    "cover_image_attribution": "(c) MJ -Blanco TX, some rights reserved (CC BY-NC), uploaded by MJ -Blanco TX",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/486529821/large.jpeg",
        "attribution": "(c) austindude, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/329047403/large.jpg",
        "attribution": "(c) Deborah Bird, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/467084905/large.jpg",
        "attribution": "(c) alexander1951, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/100584935/large.jpg",
        "attribution": "(c) EG, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/88243015/large.jpg",
        "attribution": "(c) Emily Geest, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32253825/large.jpeg",
        "attribution": "(c) pisum, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "kissing-bug": {
    "inat_taxon_id": 271270,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7573946/large.jpeg",
    "cover_image_attribution": "(c) Robby Deans, some rights reserved (CC BY-NC), uploaded by Robby Deans",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/23553530/large.jpg",
        "attribution": "(c) David G. Barker, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/406735735/large.jpg",
        "attribution": "(c) dhasdf, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/147241651/large.jpeg",
        "attribution": "(c) Kristan Battistoni, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/110871328/large.jpeg",
        "attribution": "(c) maria-de-jesus-alanis-salinas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/75557889/large.jpg",
        "attribution": "(c) patisantos, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/76203120/large.jpg",
        "attribution": "(c) backyardmacrophotos, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "ladder-backed-woodpecker": {
    "inat_taxon_id": 792986,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/357732283/large.jpg",
    "cover_image_attribution": "(c) Ad Konings, some rights reserved (CC BY-NC), uploaded by Ad Konings",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/347250207/large.jpg",
        "attribution": "(c) Reximiliano, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7403219/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/183229017/large.jpeg",
        "attribution": "(c) Magali Vázquez Cárcamo, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/348096400/large.jpeg",
        "attribution": "(c) Linda Gettier, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/238606029/large.jpg",
        "attribution": "(c) MarvalPhotography19, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/99239394/large.jpg",
        "attribution": "(c) Ricardo Arredondo T., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "large-milkweed-bug": {
    "inat_taxon_id": 55556,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5873797/large.jpg",
    "cover_image_attribution": "(c) Katja Schulz, some rights reserved (CC BY)",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/379469161/large.jpg",
        "attribution": "(c) Susan J. Hewitt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/183309406/large.jpg",
        "attribution": "(c) marymangiapia, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/160906098/large.jpg",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/434848868/large.jpeg",
        "attribution": "(c) whatarethis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/85116566/large.jpg",
        "attribution": "(c) adventurehiker, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/103926480/large.jpg",
        "attribution": "(c) Teschmacher Teschmacher, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "lesser-goldfinch": {
    "inat_taxon_id": 145308,
    "cover_image_url": "https://static.inaturalist.org/photos/107855775/large.jpg",
    "cover_image_attribution": "(c) Mason Maron, all rights reserved, uploaded by Mason Maron",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/117426725/large.jpeg",
        "attribution": "(c) Jeremy Gatten, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/233690121/large.jpeg",
        "attribution": "(c) guyincognito, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/71681049/large.jpg",
        "attribution": "(c) Alexis Babayan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/339125225/large.jpg",
        "attribution": "(c) dalemeister, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/600088819/large.jpg",
        "attribution": "(c) Evan Zimmerman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/216955406/large.jpg",
        "attribution": "(c) lisak1, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "little-bluestem": {
    "inat_taxon_id": 122603,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/163915824/large.jpg",
    "cover_image_attribution": "(c) Scott E Severs, some rights reserved (CC BY-NC), uploaded by Scott E Severs",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/572509519/large.jpg",
        "attribution": "(c) Audrey Despins, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/543549142/large.jpg",
        "attribution": "(c) Jack Cochran, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/148440826/large.jpeg",
        "attribution": "(c) Annette Le Faive, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/545086482/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/53745588/large.jpg",
        "attribution": "(c) jim_keesling, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/429384972/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "loggerhead-shrike": {
    "inat_taxon_id": 12024,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/223288/large.jpg",
    "cover_image_attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC), uploaded by Greg Lasley",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/268771620/large.jpeg",
        "attribution": "(c) Luke *, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/62640292/large.jpeg",
        "attribution": "(c) Adam Taylor, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/483272037/large.jpg",
        "attribution": "(c) dontfencemein, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14710955/large.jpg",
        "attribution": "(c) shrike2, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/123203406/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/171604270/large.jpg",
        "attribution": "(c) Steve Bentsen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "mallard": {
    "inat_taxon_id": 6930,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/95268822/large.jpg",
    "cover_image_attribution": "(c) anonymous, some rights reserved (CC BY-SA)",
    "cover_image_license": "cc-by-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/10826265/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/19738755/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32774133/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/159258092/large.jpg",
        "attribution": "(c) J. N. Stuart, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62559471/large.jpeg",
        "attribution": "(c) raymie, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/59294244/large.jpg",
        "attribution": "(c) richardjaybee, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "maximilian-sunflower": {
    "inat_taxon_id": 130192,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1456982/large.JPG",
    "cover_image_attribution": "(c) smwhite, some rights reserved (CC BY-NC), uploaded by smwhite",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/438526985/large.jpeg",
        "attribution": "(c) Tom Norton, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/568834546/large.jpg",
        "attribution": "(c) Christopher David Benda, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/438009162/large.jpeg",
        "attribution": "(c) lindseymcknight, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/94019308/large.jpg",
        "attribution": "(c) vcreed119, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/248288052/large.jpg",
        "attribution": "(c) Chris Bryan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/17235721/large.jpeg",
        "attribution": "(c) Christopher Castoro, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "mediterranean-house-gecko": {
    "inat_taxon_id": 34435,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/171801218/large.jpg",
    "cover_image_attribution": "(c) Ty Smith, some rights reserved (CC BY-NC), uploaded by Ty Smith",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/534568/large.jpg",
        "attribution": "(c) flemingsafaris, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/147112888/large.jpeg",
        "attribution": "(c) Court Harding, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/114991375/large.jpg",
        "attribution": "(c) Shannon Foreman, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/50630381/large.jpeg",
        "attribution": "(c) Jakob Fahr, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14595329/large.jpg",
        "attribution": "(c) Bill Wright, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/432318187/large.jpeg",
        "attribution": "(c) Ross Millikan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "mexican-free-tailed-bat": {
    "inat_taxon_id": 41301,
    "cover_image_url": "https://static.inaturalist.org/photos/88332180/large.jpg",
    "cover_image_attribution": "(c) Alan Zavala-Norzagaray, all rights reserved, uploaded by Alan Zavala-Norzagaray",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29057359/large.jpg",
        "attribution": "(c) kempo63, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/97872704/large.jpg",
        "attribution": "(c) annetteprince, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/113812885/large.jpg",
        "attribution": "(c) treybarron, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/5315209/large.jpg",
        "attribution": "(c) Gabby Supertramp, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/246370228/large.jpg",
        "attribution": "(c) philomel, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/82561322/large.jpeg",
        "attribution": "(c) Sean Daniels, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "mississippi-kite": {
    "inat_taxon_id": 5416,
    "cover_image_url": "https://static.inaturalist.org/photos/344019/large.jpg",
    "cover_image_attribution": "(c) Eric Isley, all rights reserved",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/542279521/large.jpg",
        "attribution": "(c) chickadeeeeee, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/421949284/large.jpg",
        "attribution": "(c) gwood5turbo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/140771031/large.jpeg",
        "attribution": "(c) drewe, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/225036980/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/306627023/large.jpg",
        "attribution": "(c) RachelNSloane, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/306931656/large.jpg",
        "attribution": "(c) emmaclarke02, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "monarch-butterfly": {
    "inat_taxon_id": 48662,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/227923335/large.jpeg",
    "cover_image_attribution": "(c) Alejandro Lopez, some rights reserved (CC BY-NC-SA), uploaded by Alejandro Lopez",
    "cover_image_license": "cc-by-nc-sa",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/345693191/large.jpeg",
        "attribution": "(c) Luke Thies, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/25328482/large.jpg",
        "attribution": "(c) Erika Mitchell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/180124383/large.jpg",
        "attribution": "(c) Molly Hanse, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/31970360/large.jpg",
        "attribution": "(c) Don Sutherland, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5217766/large.jpeg",
        "attribution": "(c) suzannetilton, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/93432256/large.jpg",
        "attribution": "(c) burkinstocks, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "monk-parakeet": {
    "inat_taxon_id": 19349,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/101224790/large.jpg",
    "cover_image_attribution": "(c) Juan Emilio, some rights reserved (CC BY-SA)",
    "cover_image_license": "cc-by-sa",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/247209620/large.jpg",
        "attribution": "(c) Chris Rorabaugh, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/288125491/large.jpg",
        "attribution": "(c) Cristian Grijalba, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12756575/large.jpg",
        "attribution": "(c) Soumyajit Ray, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/200609303/large.jpg",
        "attribution": "(c) Bill Hubick, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/128846159/large.jpg",
        "attribution": "(c) Brennan Moore, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/210489785/large.jpg",
        "attribution": "(c) shierandrulist, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "mourning-dove": {
    "inat_taxon_id": 3454,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14015355/large.jpg",
    "cover_image_attribution": "(c) Donna Pomeroy, some rights reserved (CC BY-NC), uploaded by Donna Pomeroy",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/16457309/large.jpg",
        "attribution": "(c) Jacob Saucier, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/365882935/large.jpeg",
        "attribution": "(c) froggymum, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/270945016/large.jpg",
        "attribution": "(c) tiller, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/341164524/large.jpeg",
        "attribution": "(c) David Griswold, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/266737193/large.jpg",
        "attribution": "(c) Grigory Heaton, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/349952461/large.jpeg",
        "attribution": "(c) Mike Leveille, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "neotropic-cormorant": {
    "inat_taxon_id": 1289601,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/23856507/large.jpg",
    "cover_image_attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND), uploaded by Kala Murphy King",
    "cover_image_license": "cc-by-nc-nd",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/35436369/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/187905359/large.jpg",
        "attribution": "(c) Donna Walkuski, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/455941810/large.jpeg",
        "attribution": "(c) Abel Pontoriero, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2415208/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/135711015/large.jpg",
        "attribution": "(c) NINA WENÓLI, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15232178/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "nine-banded-armadillo": {
    "inat_taxon_id": 47075,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/528221418/large.jpg",
    "cover_image_attribution": "(c) javierluque89, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/552761863/large.jpg",
        "attribution": "(c) Bruno Henrique Aranda, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/83854331/large.jpg",
        "attribution": "(c) Patricia Mancilla Iglesias, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/377531436/large.jpg",
        "attribution": "(c) gabrielwertman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/460672124/large.jpeg",
        "attribution": "(c) Fellipe Silva, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/612413229/large.jpg",
        "attribution": "(c) rainbowli, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "northern-cardinal": {
    "inat_taxon_id": 9083,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/189434971/large.jpg",
    "cover_image_attribution": "(c) Laura Keene, some rights reserved (CC BY-NC), uploaded by Laura Keene",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/33033499/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/67009284/large.jpg",
        "attribution": "(c) Tony Gerard, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/133630117/large.jpeg",
        "attribution": "(c) Ashley Bosarge, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/31157474/large.jpg",
        "attribution": "(c) Diane P. Brooks, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/453064789/large.jpeg",
        "attribution": "(c) froggymum, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "northern-flicker": {
    "inat_taxon_id": 18236,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/123812445/large.jpg",
    "cover_image_attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND), uploaded by Kala Murphy King",
    "cover_image_license": "cc-by-nc-nd",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13510053/large.jpg",
        "attribution": "(c) Scott King, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/11270359/large.jpg",
        "attribution": "(c) Ryan S Terrill, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/333277504/large.jpeg",
        "attribution": "(c) Adam, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/24773095/large.jpg",
        "attribution": "(c) Michael Lohr, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/249882497/large.jpg",
        "attribution": "(c) Jeffrey McPheeters, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/202340633/large.jpeg",
        "attribution": "(c) Kendra Dedinsky (she/her), some rights reserved (CC BY-ND)",
        "license": "cc-by-nd",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "northern-house-wren": {
    "inat_taxon_id": 7562,
    "cover_image_url": "https://static.inaturalist.org/photos/103258086/large.jpeg",
    "cover_image_attribution": "(c) Juan Miguel Artigas Azas, all rights reserved, uploaded by Juan Miguel Artigas Azas",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/313822957/large.jpeg",
        "attribution": "(c) R.J. Adams, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/242701038/large.jpg",
        "attribution": "(c) Ben Palmore, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12607414/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/266134098/large.jpg",
        "attribution": "(c) Alejandra Reyna Contreras, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/9539278/large.jpg",
        "attribution": "(c) Bill Keim, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/76245983/large.jpg",
        "attribution": "(c) Randy, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "northern-mockingbird": {
    "inat_taxon_id": 14886,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/101226350/large.jpg",
    "cover_image_attribution": "(c) Ad Konings, some rights reserved (CC BY-NC), uploaded by Ad Konings",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/9049437/large.jpeg",
        "attribution": "(c) tadamcochran, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/23880955/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/37445978/large.jpeg",
        "attribution": "(c) Tania Homayoun, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/38420369/large.jpeg",
        "attribution": "(c) Rose, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/128519246/large.jpg",
        "attribution": "(c) mcathey, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/291211505/large.gif",
        "attribution": "(c) Ana G. West, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "northern-raccoon": {
    "inat_taxon_id": 41663,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/293156528/large.jpg",
    "cover_image_attribution": "(c) jayras, some rights reserved (CC BY-NC), uploaded by jayras",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/50807110/large.jpg",
        "attribution": "(c) Teale Fristoe, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/277920084/large.jpg",
        "attribution": "(c) iheartmollusks, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27321648/large.jpg",
        "attribution": "(c) jlloyd, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/34276682/large.jpg",
        "attribution": "(c) mcburnett, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/38408348/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62235888/large.jpeg",
        "attribution": "(c) killamfarm, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "northern-yellow-bat": {
    "inat_taxon_id": 40527,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/406459/large.jpg",
    "cover_image_attribution": "United States Fish and Wildlife Service, no known copyright restrictions (public domain)",
    "cover_image_license": "pd",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/392371617/large.jpeg",
        "attribution": "(c) birdingbunny, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/33205873/large.jpg",
        "attribution": "(c) Bryan Ames, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/392373963/large.jpeg",
        "attribution": "(c) birdingbunny, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/271664681/large.jpg",
        "attribution": "(c) Edward Perry IV, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/2241731/large.jpg",
        "attribution": "(c) Jose G. Martinez-Fonseca, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/127250218/large.jpg",
        "attribution": "(c) lwenk, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "norway-rat": {
    "inat_taxon_id": 44576,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/344977577/large.jpg",
    "cover_image_attribution": "(c) Nick Talbot, some rights reserved (CC BY-NC), uploaded by Nick Talbot",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/112123484/large.jpeg",
        "attribution": "(c) Mara Christensen, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/227790437/large.jpeg",
        "attribution": "(c) Juan Carlos Caicedo Hernández, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/164637889/large.gif",
        "attribution": "(c) Daniel, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/169741024/large.jpeg",
        "attribution": "(c) Gabriele Vaudano, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/581654085/large.jpg",
        "attribution": "(c) rootfactor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/239729760/large.jpeg",
        "attribution": "(c) Соколков Юрий Павлович, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "nutria": {
    "inat_taxon_id": 43997,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/136260379/large.jpeg",
    "cover_image_attribution": "(c) Bruno R. Möller, some rights reserved (CC BY-NC), uploaded by Bruno R. Möller",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/23154088/large.png",
        "attribution": "(c) sneuffer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/115110166/large.jpg",
        "attribution": "(c) Jen Sanford, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2510329/large.JPG",
        "attribution": "(c) Manuela B, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/212186255/large.jpeg",
        "attribution": "(c) Giampaolo Girardi, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/45481433/large.jpg",
        "attribution": "(c) Chris Goforth, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/129618066/large.jpeg",
        "attribution": "(c) Юлия, some rights reserved (CC BY)",
        "license": "cc-by",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "orange-crowned-warbler": {
    "inat_taxon_id": 979757,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/227039/large.jpg",
    "cover_image_attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC), uploaded by Greg Lasley",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/283471/large.jpg",
        "attribution": "(c) BJ Stacey, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/109018148/large.jpeg",
        "attribution": "(c) John Powers, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/239936898/large.jpg",
        "attribution": "(c) Randy, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/45819399/large.jpg",
        "attribution": "(c) Rich Kostecke, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/238739767/large.jpg",
        "attribution": "(c) brian stahls, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/438146654/large.jpeg",
        "attribution": "(c) K L, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "ornate-box-turtle": {
    "inat_taxon_id": 39807,
    "cover_image_url": "https://static.inaturalist.org/photos/266693413/large.jpg",
    "cover_image_attribution": "(c) Jake Scott, all rights reserved, uploaded by Jake Scott",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/45822117/large.jpg",
        "attribution": "(c) Enrique Perez Carrillo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/61321122/large.jpeg",
        "attribution": "(c) Theo Witsell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/341838627/large.jpeg",
        "attribution": "(c) J. Anne Sylvan, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/479146670/large.jpg",
        "attribution": "(c) gmlise, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/60565921/large.jpeg",
        "attribution": "(c) Justin Quintanilla, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12052930/large.jpeg",
        "attribution": "(c) Libby Gonzalez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "ornate-tree-lizard": {
    "inat_taxon_id": 36107,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/10564552/large.jpg",
    "cover_image_attribution": "(c) Laurens R Halsey, some rights reserved (CC BY-NC), uploaded by Laurens R Halsey",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/10205643/large.jpeg",
        "attribution": "(c) Jorge H. Valdez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/59487134/large.jpg",
        "attribution": "(c) Miguel Gastelum, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/47036046/large.jpeg",
        "attribution": "(c) Miguel Gastelum, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/70651783/large.jpeg",
        "attribution": "(c) Anny Peralta, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/247458469/large.jpg",
        "attribution": "(c) Jennie Duberstein, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/146238574/large.jpg",
        "attribution": "(c) msmerelibrarian, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "painted-bunting": {
    "inat_taxon_id": 10224,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/293862224/large.jpeg",
    "cover_image_attribution": "(c) Balaji Devarajan, some rights reserved (CC BY-NC), uploaded by Balaji Devarajan",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5808544/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/131793595/large.jpeg",
        "attribution": "(c) Simon Tolzmann, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20883772/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3179793/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2040743/large.jpg",
        "attribution": "(c) Marv Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "pecan": {
    "inat_taxon_id": 67593,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/22049/large.jpg",
    "cover_image_attribution": "(c) Tony Rodd, some rights reserved (CC BY-NC-SA)",
    "cover_image_license": "cc-by-nc-sa",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/2390352/large.jpg",
        "attribution": "(c) Jay Keller, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/228292707/large.jpeg",
        "attribution": "(c) Olivia R. Myers, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/88928362/large.jpg",
        "attribution": "(c) Alex Binck, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/83534675/large.jpeg",
        "attribution": "(c) Matt Tomlinson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/134325387/large.jpg",
        "attribution": "(c) Steve Hampton, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/460359999/large.jpg",
        "attribution": "(c) txwoofus, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "pipevine-swallowtail": {
    "inat_taxon_id": 49972,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/25875295/large.jpg",
    "cover_image_attribution": "(c) Jorge Treviño, some rights reserved (CC BY-NC), uploaded by Jorge Treviño",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/112795847/large.jpeg",
        "attribution": "(c) Guadalupe Rivera, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27164885/large.jpg",
        "attribution": "(c) Edward Perry IV, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/234025158/large.gif",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/33693631/large.jpeg",
        "attribution": "(c) Liam O'Brien, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/176991567/large.jpeg",
        "attribution": "(c) kbarylski, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20356226/large.jpeg",
        "attribution": "(c) midwestnaturalist, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "plain-bellied-watersnake": {
    "inat_taxon_id": 29328,
    "cover_image_url": "https://static.inaturalist.org/photos/197650102/large.jpg",
    "cover_image_attribution": "(c) William Wise, all rights reserved, uploaded by William Wise",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20631969/large.jpg",
        "attribution": "(c) Mikael Behrens, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/48729268/large.jpeg",
        "attribution": "(c) Ken Finger, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/354096307/large.jpg",
        "attribution": "(c) Mila Turov, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/508995795/large.jpg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3580624/large.jpg",
        "attribution": "(c) sean_bromley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/476169356/large.jpeg",
        "attribution": "(c) Shreybae, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "plains-lubber-grasshopper": {
    "inat_taxon_id": 122262,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/9202181/large.jpg",
    "cover_image_attribution": "(c) Michael Price, some rights reserved (CC BY-NC-ND), uploaded by Michael Price",
    "cover_image_license": "cc-by-nc-nd",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/199263685/large.jpg",
        "attribution": "(c) disciseda, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/362144831/large.jpeg",
        "attribution": "(c) Aisha Sams, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/607462332/large.jpg",
        "attribution": "(c) rollingplainst, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/21406193/large.jpg",
        "attribution": "(c) MJ Casteel, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/586557038/large.jpg",
        "attribution": "(c) Marleigh Fletcher, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/152510925/large.jpeg",
        "attribution": "(c) danyarq, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "poison-ivy": {
    "inat_taxon_id": 58732,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/61276703/large.jpg",
    "cover_image_attribution": "(c) floricole, some rights reserved (CC BY-NC), uploaded by floricole",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/97888812/large.jpg",
        "attribution": "(c) Alan Rockefeller, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/140070676/large.jpg",
        "attribution": "(c) Theo Witsell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/408894817/large.jpeg",
        "attribution": "(c) Joey Santore, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/41848859/large.jpg",
        "attribution": "(c) Sara Rall, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/285705846/large.jpg",
        "attribution": "(c) Clara Thiel, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/508453680/large.jpg",
        "attribution": "(c) Daughter Dad, some rights reserved (CC BY)",
        "license": "cc-by",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "post-oak": {
    "inat_taxon_id": 119269,
    "cover_image_url": "https://static.inaturalist.org/photos/1351437/large.jpg",
    "cover_image_attribution": "(c) Cosmic Cat, all rights reserved, uploaded by Cosmic Cat",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/329565767/large.jpeg",
        "attribution": "(c) Lee Kelly, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/49138496/large.jpg",
        "attribution": "(c) paddymcg, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/54151108/large.jpeg",
        "attribution": "(c) Theo Witsell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/279560732/large.jpg",
        "attribution": "(c) Sam Gutekanst, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/410554397/large.jpeg",
        "attribution": "(c) Eric M Powell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/24468054/large.jpg",
        "attribution": "(c) Jack Spruill, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "prairie-lizard": {
    "inat_taxon_id": 146413,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1988953/large.jpg",
    "cover_image_attribution": "(c) johnwilliams, some rights reserved (CC BY-NC), uploaded by johnwilliams",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/147078983/large.jpg",
        "attribution": "(c) Brian Genge, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/277443923/large.jpg",
        "attribution": "(c) bobcc, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/485183384/large.jpeg",
        "attribution": "(c) Jeff Percell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/429308846/large.jpeg",
        "attribution": "(c) calebcam, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/124934628/large.jpg",
        "attribution": "(c) David Martin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/413663053/large.jpg",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "purple-martin": {
    "inat_taxon_id": 11867,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4079605/large.jpg",
    "cover_image_attribution": "(c) Bill Carrell, some rights reserved (CC BY-NC-ND), uploaded by Bill Carrell",
    "cover_image_license": "cc-by-nc-nd",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/431834589/large.jpg",
        "attribution": "(c) Steven Wang, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/85356520/large.jpeg",
        "attribution": "(c) dmc43, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13564925/large.jpg",
        "attribution": "(c) B. Phalan, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/353076805/large.jpg",
        "attribution": "(c) Miguel A Mejias, PhD., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/44059768/large.jpg",
        "attribution": "(c) Galen Stewart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/274818281/large.jpeg",
        "attribution": "(c) miramatt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "red-bellied-woodpecker": {
    "inat_taxon_id": 18205,
    "cover_image_url": "https://static.inaturalist.org/photos/383227697/large.jpeg",
    "cover_image_attribution": "(c) Juan Miguel Artigas Azas, all rights reserved, uploaded by Juan Miguel Artigas Azas",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/187697132/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/120359919/large.jpg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/515446864/large.jpg",
        "attribution": "(c) froggymum, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/406649723/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/114659044/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/208232998/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "red-eared-slider": {
    "inat_taxon_id": 51271,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/107072446/large.jpg",
    "cover_image_attribution": "(c) Laurent Lebois ©, some rights reserved (CC BY)",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28808533/large.jpeg",
        "attribution": "(c) Nelson Wisnik, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/258816942/large.jpg",
        "attribution": "(c) Ed Hass, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5518581/large.jpg",
        "attribution": "(c) Laura Clark, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/398301763/large.jpeg",
        "attribution": "(c) Katie Sheppard, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/17853870/large.jpg",
        "attribution": "(c) napoleon1799, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/183278759/large.jpg",
        "attribution": "(c) Gerson Herrera, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "red-imported-fire-ant": {
    "inat_taxon_id": 67598,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/105103282/large.jpg",
    "cover_image_attribution": "(c) Judy Gallagher, some rights reserved (CC BY)",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/10083317/large.jpeg",
        "attribution": "(c) Sandra Lee, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/311518535/large.jpeg",
        "attribution": "(c) Stefano Nicolosi, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30565951/large.jpg",
        "attribution": "(c) Eric Cormier, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/176444736/large.jpeg",
        "attribution": "(c) Lisa Appelbaum, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/466394544/large.jpg",
        "attribution": "(c) johnb_vdacs, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/507633930/large.jpg",
        "attribution": "(c) kkkariih, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "red-shouldered-hawk": {
    "inat_taxon_id": 5206,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5600620/large.jpg",
    "cover_image_attribution": "(c) Richard Wottrich, some rights reserved (CC BY-NC), uploaded by Richard Wottrich",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/160500346/large.gif",
        "attribution": "(c) Linzy L., some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/113715541/large.jpeg",
        "attribution": "(c) meadows_s_21, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/252918635/large.jpg",
        "attribution": "(c) Mark Kenderdine, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14603656/large.jpg",
        "attribution": "(c) Don Loarie, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/377405336/large.jpeg",
        "attribution": "(c) Tom Murray, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/37984746/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "red-tailed-hawk": {
    "inat_taxon_id": 5212,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/101327658/large.jpg",
    "cover_image_attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC), uploaded by Craig K. Hunt",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/256001927/large.jpg",
        "attribution": "(c) tiller, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/344551594/large.jpg",
        "attribution": "(c) Mike Stewart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/13037118/large.jpg",
        "attribution": "(c) Jason Penney, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/72277039/large.jpg",
        "attribution": "(c) Gordo Laidlaw, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63318782/large.jpg",
        "attribution": "(c) Nick Tepper, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/258594403/large.jpg",
        "attribution": "(c) Kent Ross, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "red-winged-blackbird": {
    "inat_taxon_id": 9744,
    "cover_image_url": "https://static.inaturalist.org/photos/368048127/large.jpg",
    "cover_image_attribution": "(c) sdrov, all rights reserved, uploaded by sdrov",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/219226/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/269412202/large.jpeg",
        "attribution": "(c) WWbugsandslugs, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/523958785/large.jpg",
        "attribution": "(c) pfautsch, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13906124/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/354632568/large.jpeg",
        "attribution": "(c) Julie Reid, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/204866246/large.jpg",
        "attribution": "(c) Noam Markus, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "ring-necked-snake": {
    "inat_taxon_id": 26575,
    "cover_image_url": "https://static.inaturalist.org/photos/97648595/large.jpeg",
    "cover_image_attribution": "(c) J. Anne Sylvan, all rights reserved, uploaded by J. Anne Sylvan",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/91239773/large.jpg",
        "attribution": "(c) Noah Frade, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/63265631/large.jpg",
        "attribution": "(c) pinesnake, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/17918517/large.jpg",
        "attribution": "(c) Tony Iwane, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57235506/large.jpg",
        "attribution": "(c) Kory Roberts, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/170696995/large.jpg",
        "attribution": "(c) Alice Abela, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6637921/large.jpg",
        "attribution": "(c) Damon Tighe, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "ringtail": {
    "inat_taxon_id": 41676,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/98571358/large.jpeg",
    "cover_image_attribution": "(c) Kent Miller, some rights reserved (CC BY-ND), uploaded by Kent Miller",
    "cover_image_license": "cc-by-nd",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/35693161/large.jpeg",
        "attribution": "(c) rmyoshihara, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/43309089/large.jpg",
        "attribution": "(c) Lee Hoy, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/116029255/large.jpeg",
        "attribution": "(c) W. Terry Hunefeld, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1224690/large.jpg",
        "attribution": "(c) James Beissel, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/252832831/large.jpg",
        "attribution": "(c) maryannpetulance, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/104905550/large.jpeg",
        "attribution": "(c) froglover_84, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "rock-pigeon": {
    "inat_taxon_id": 3017,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/466776975/large.jpg",
    "cover_image_attribution": "(c) Birds of Gilgit-Baltistan, some rights reserved (CC BY-SA)",
    "cover_image_license": "cc-by-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30533660/large.jpg",
        "attribution": "(c) Susan J. Hewitt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/131366491/large.jpeg",
        "attribution": "(c) Tyler Bishop, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/329405164/large.jpg",
        "attribution": "(c) guillaume testud, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/346817879/large.jpeg",
        "attribution": "(c) taisiam, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6289951/large.jpeg",
        "attribution": "(c) Drew T Henderson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2640382/large.JPG",
        "attribution": "(c) sea-kangaroo, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "rock-squirrel": {
    "inat_taxon_id": 180008,
    "cover_image_url": "https://static.inaturalist.org/photos/180968257/large.jpg",
    "cover_image_attribution": "(c) Juan Miguel Artigas Azas, all rights reserved, uploaded by Juan Miguel Artigas Azas",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51643372/large.jpg",
        "attribution": "(c) Micah Lauer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/157382904/large.jpeg",
        "attribution": "(c) Morgan-Takes-Pictures, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/241617777/large.jpg",
        "attribution": "(c) pseudomyrmex, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14611249/large.jpeg",
        "attribution": "(c) Jennifer Rycenga, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8984565/large.jpeg",
        "attribution": "(c) sea-kangaroo, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/70606675/large.jpeg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "rough-green-snake": {
    "inat_taxon_id": 29200,
    "cover_image_url": "https://static.inaturalist.org/photos/428197714/large.jpg",
    "cover_image_attribution": "(c) Jake Scott, all rights reserved, uploaded by Jake Scott",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/45574722/large.jpeg",
        "attribution": "(c) Max Roberts, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/53522407/large.jpg",
        "attribution": "(c) Grace Manning, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20337053/large.jpg",
        "attribution": "(c) johnwilliams, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20258530/large.jpg",
        "attribution": "(c) Laura Keene, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/386106368/large.jpg",
        "attribution": "(c) John Matthew Erickson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/354018614/large.jpeg",
        "attribution": "(c) hagfish, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "ruby-crowned-kinglet": {
    "inat_taxon_id": 1289388,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/251475181/large.jpg",
    "cover_image_attribution": "(c) Ad Konings, some rights reserved (CC BY-NC), uploaded by Ad Konings",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/186435313/large.jpg",
        "attribution": "(c) S.Wolf, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13159056/large.jpeg",
        "attribution": "(c) Roberto González, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11230588/large.jpeg",
        "attribution": "(c) cgbb2004, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/12524256/large.jpg",
        "attribution": "(c) mountainmop, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/248786304/large.jpg",
        "attribution": "(c) alasdaird, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "ruby-throated-hummingbird": {
    "inat_taxon_id": 6432,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/221352761/large.jpg",
    "cover_image_attribution": "(c) Kent Ross, some rights reserved (CC BY-NC), uploaded by Kent Ross",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/239401590/large.jpg",
        "attribution": "(c) Blake Ross, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/24832711/large.jpeg",
        "attribution": "(c) Linda Jo Conn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63491694/large.jpg",
        "attribution": "(c) robertweeden, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/314800928/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/45587602/large.jpg",
        "attribution": "(c) bwood708, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/221321124/large.jpg",
        "attribution": "(c) Kent Ross, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "saw-greenbrier": {
    "inat_taxon_id": 125677,
    "cover_image_url": "https://static.inaturalist.org/photos/14038317/large.jpg",
    "cover_image_attribution": "(c) Pablo L Ruiz, all rights reserved, uploaded by Pablo L Ruiz",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11849328/large.jpg",
        "attribution": "(c) Janet Wright, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/340095925/large.jpeg",
        "attribution": "(c) Jeff Stauffer, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29873261/large.jpg",
        "attribution": "(c) Janet Wright, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/261634856/large.jpg",
        "attribution": "(c) Ryan Sorrells, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/314346980/large.jpg",
        "attribution": "(c) Ashley M Bradford, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/298967696/large.jpg",
        "attribution": "(c) John W Gruber, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "scissor-tailed-flycatcher": {
    "inat_taxon_id": 16783,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8519117/large.jpg",
    "cover_image_attribution": "(c) Martin Hall, some rights reserved (CC BY-NC), uploaded by Martin Hall",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/439838842/large.jpg",
        "attribution": "(c) Alex Cox, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/19759072/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11485991/large.jpeg",
        "attribution": "(c) Ricardo Arredondo T., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/84650733/large.jpeg",
        "attribution": "(c) Jon McIntyre, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/276896931/large.jpg",
        "attribution": "(c) Chris Collier, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "seminole-bat": {
    "inat_taxon_id": 40521,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28326581/large.jpeg",
    "cover_image_attribution": "(c) Eric Soehren, some rights reserved (CC BY-NC), uploaded by Eric Soehren",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/185445343/large.jpg",
        "attribution": "(c) Tina, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63629637/large.jpeg",
        "attribution": "(c) Michelle Smith, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/79698423/large.jpeg",
        "attribution": "(c) Jason, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8908373/large.jpg",
        "attribution": "(c) Shalana Gray, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/406604863/large.jpeg",
        "attribution": "(c) Jim Ferrari, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/385781594/large.jpeg",
        "attribution": "(c) Sydney Jeffcoat, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "short-lined-skink": {
    "inat_taxon_id": 115981,
    "cover_image_url": "https://static.inaturalist.org/photos/176682/large.JPG",
    "cover_image_attribution": "(c) Paul Freed, all rights reserved, uploaded by Paul Freed",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/183757448/large.jpg",
        "attribution": "(c) cggoss, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/11817187/large.jpg",
        "attribution": "(c) R. Reed McClure, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/13891728/large.jpg",
        "attribution": "(c) R. Reed McClure, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/33504431/large.jpg",
        "attribution": "(c) R. Reed McClure, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/16216951/large.jpg",
        "attribution": "(c) R. Reed McClure, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "sideoats-grama": {
    "inat_taxon_id": 75858,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5329132/large.jpeg",
    "cover_image_attribution": "(c) psweet, some rights reserved (CC BY-SA), uploaded by psweet",
    "cover_image_license": "cc-by-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7665223/large.jpg",
        "attribution": "(c) BJ Stacey, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/2143414/large.JPG",
        "attribution": "(c) Pete Woods, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/568367583/large.jpg",
        "attribution": "(c) Clifton Ladd, C.W.B., some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/178999619/large.jpeg",
        "attribution": "(c) rbartgis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/267243756/large.jpg",
        "attribution": "(c) Josh Klostermann, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/230306410/large.jpg",
        "attribution": "(c) Matt Tomlinson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "six-lined-racerunner": {
    "inat_taxon_id": 717858,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/46936615/large.jpeg",
    "cover_image_attribution": "(c) R Snyder, some rights reserved (CC BY-NC-SA), uploaded by R Snyder",
    "cover_image_license": "cc-by-nc-sa",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/74582822/large.jpg",
        "attribution": "(c) Ryan Cooke, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/9739300/large.jpg",
        "attribution": "(c) Austin Broadwater, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/395188871/large.jpg",
        "attribution": "(c) Benjamin Genter, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/855046/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/281293734/large.jpg",
        "attribution": "(c) mfoster57, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63565582/large.jpg",
        "attribution": "(c) Quinn Sommer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "snowy-egret": {
    "inat_taxon_id": 4940,
    "cover_image_url": "https://static.inaturalist.org/photos/107527504/large.jpeg",
    "cover_image_attribution": "(c) Juan Miguel Artigas Azas, all rights reserved, uploaded by Juan Miguel Artigas Azas",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2415216/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/229582450/large.jpg",
        "attribution": "(c) Karen Straus, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/256960684/large.jpeg",
        "attribution": "(c) Juan Miguel Artigas Azas, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/164343320/large.jpeg",
        "attribution": "(c) Squidpastry, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/258308451/large.jpeg",
        "attribution": "(c) Matt Muir, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/158060121/large.jpeg",
        "attribution": "(c) Luis Mauricio Mena Páramo, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "southern-plains-woodrat": {
    "inat_taxon_id": 44759,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/253475/large.jpg",
    "cover_image_attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC), uploaded by Greg Lasley",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/162329756/large.jpg",
        "attribution": "(c) Marco Zozaya, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/83116425/large.jpg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/55374272/large.jpeg",
        "attribution": "(c) Rubén Alejandro Ramírez García, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/388186227/large.jpg",
        "attribution": "(c) Jessica Kirkendall, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/46942172/large.jpg",
        "attribution": "(c) Clifton Ladd, C.W.B., some rights reserved (CC BY)",
        "license": "cc-by",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "spiny-softshell": {
    "inat_taxon_id": 39556,
    "cover_image_url": "https://static.inaturalist.org/photos/452419/large.jpg",
    "cover_image_attribution": "(c) Filip Tkaczyk, all rights reserved, uploaded by Filip Tkaczyk",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12426898/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/429204507/large.jpeg",
        "attribution": "(c) Below Blue Water Diver, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/50188306/large.jpg",
        "attribution": "(c) Jerónimo Avilés Olguín, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/420110187/large.jpeg",
        "attribution": "(c) Ramón Isaac Miramontes Cinco, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/41485238/large.jpeg",
        "attribution": "(c) cgbb2004, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/10069781/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "striped-skunk": {
    "inat_taxon_id": 41880,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/233452676/large.jpg",
    "cover_image_attribution": "(c) Joe Miller, some rights reserved (CC BY-NC), uploaded by Joe Miller",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/59313359/large.jpeg",
        "attribution": "(c) Jose Alberto Desilos Resendiz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11221766/large.jpeg",
        "attribution": "(c) Matthew Salkiewicz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/79745564/large.jpeg",
        "attribution": "(c) John, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/205636865/large.jpg",
        "attribution": "(c) Preston McDonald, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/45352829/large.jpg",
        "attribution": "(c) Tristan Doyle, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15074497/large.jpg",
        "attribution": "(c) Josh van der Meulen, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "sugarberry": {
    "inat_taxon_id": 81792,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/75312504/large.jpg",
    "cover_image_attribution": "(c) Becky Brenner, some rights reserved (CC BY-NC), uploaded by Becky Brenner",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/89096710/large.jpeg",
        "attribution": "(c) Kimberlie Sasan, some rights reserved (CC BY-ND)",
        "license": "cc-by-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/143043826/large.jpg",
        "attribution": "(c) sirrichardv, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/155870/large.JPG",
        "attribution": "(c) 106584015630019574849, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/77133669/large.jpeg",
        "attribution": "(c) frshaw, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28706730/large.jpeg",
        "attribution": "(c) christian6668, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/134155832/large.jpg",
        "attribution": "(c) dlgrateful, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "superb-dog-day-cicada": {
    "inat_taxon_id": 469277,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/143832550/large.jpeg",
    "cover_image_attribution": "(c) drachau, some rights reserved (CC BY-NC), uploaded by drachau",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20165466/large.jpg",
        "attribution": "(c) Kai Joaquin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/97990074/large.jpg",
        "attribution": "(c) David G. Barker, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/216082400/large.png",
        "attribution": "(c) ghostburglar, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/403507403/large.jpg",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/146036331/large.jpeg",
        "attribution": "(c) Don Troha, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/153181195/large.jpeg",
        "attribution": "(c) Anita E Shaul, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "switchgrass": {
    "inat_taxon_id": 125727,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/9682082/large.jpg",
    "cover_image_attribution": "(c) aarongunnar, some rights reserved (CC BY), uploaded by aarongunnar",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/22271340/large.jpg",
        "attribution": "(c) cassi saari, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12595462/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/53242116/large.jpg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55912741/large.jpg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27322439/large.jpg",
        "attribution": "(c) Graham Buck, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/438223529/large.jpeg",
        "attribution": "(c) Ondřej Obrtlík, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-bluebonnet": {
    "inat_taxon_id": 49564,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1447028/large.JPG",
    "cover_image_attribution": "(c) Annika Lindqvist, some rights reserved (CC BY), uploaded by Annika Lindqvist",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/118084123/large.jpg",
        "attribution": "(c) Michelle W. （鍾偉瑋）, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/63528903/large.jpg",
        "attribution": "(c) HRocks, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/220037972/large.jpg",
        "attribution": "(c) Candice Marie Mottet, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/364679593/large.jpg",
        "attribution": "(c) acroxtheo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2314986/large.jpg",
        "attribution": "(c) Kimberlie Sasan, some rights reserved (CC BY-ND)",
        "license": "cc-by-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/354176988/large.jpeg",
        "attribution": "(c) Clay Thompson, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-brown-snake": {
    "inat_taxon_id": 28562,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/64749622/large.jpg",
    "cover_image_attribution": "(c) Chris Gruenwald Herp.mx, some rights reserved (CC BY-NC), uploaded by Chris Gruenwald Herp.mx",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/266445673/large.png",
        "attribution": "(c) jacqui, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/267606977/large.jpeg",
        "attribution": "(c) Jackson Frost, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/156080147/large.jpg",
        "attribution": "(c) domthebaker, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/480990967/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/245512317/large.jpeg",
        "attribution": "(c) Clayton Koonce, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/94640609/large.jpg",
        "attribution": "(c) jjraff, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-cooter": {
    "inat_taxon_id": 39822,
    "cover_image_url": "https://static.inaturalist.org/photos/1384133/large.jpg",
    "cover_image_attribution": "(c) galen1845, all rights reserved, uploaded by galen1845",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/4733353/large.jpg",
        "attribution": "(c) April Mawson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/164481853/large.jpg",
        "attribution": "(c) Kevin Graham, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/140012176/large.jpg",
        "attribution": "(c) johnwilliams, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/165511472/large.jpeg",
        "attribution": "(c) Alyssa Harvey, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/220215649/large.jpg",
        "attribution": "(c) chrislbelcher, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/167997671/large.jpeg",
        "attribution": "(c) sbeep, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-coralsnake": {
    "inat_taxon_id": 30494,
    "cover_image_url": "https://static.inaturalist.org/photos/336417202/large.jpg",
    "cover_image_attribution": "(c) Jake Scott, all rights reserved, uploaded by Jake Scott",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4184659/large.jpg",
        "attribution": "(c) Ashley Wahlberg, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8263168/large.jpeg",
        "attribution": "(c) Craig McIntyre, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55999838/large.jpg",
        "attribution": "(c) Kory Roberts, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/56805492/large.jpeg",
        "attribution": "(c) dhardy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3492492/large.jpg",
        "attribution": "(c) holland, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/388275781/large.jpg",
        "attribution": "(c) Lindsy Hardy, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-earless-lizard": {
    "inat_taxon_id": 36076,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/405516737/large.jpg",
    "cover_image_attribution": "(c) Yinpeng Zhang, some rights reserved (CC BY-NC), uploaded by Yinpeng Zhang",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/49700960/large.jpeg",
        "attribution": "(c) David Renoult, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/372902420/large.jpeg",
        "attribution": "(c) Gus Garcia, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/392619372/large.jpg",
        "attribution": "(c) jkopachena, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/53154198/large.jpg",
        "attribution": "(c) monsoman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/587471281/large.jpg",
        "attribution": "(c) Dan LaVorgna, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/84921696/large.jpg",
        "attribution": "(c) AlecHenderson, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-horned-lizard": {
    "inat_taxon_id": 73905,
    "cover_image_url": "https://static.inaturalist.org/photos/5992015/large.jpeg",
    "cover_image_attribution": "(c) František Bednár, all rights reserved, uploaded by František Bednár",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/21296626/large.jpg",
        "attribution": "(c) Gabriel Campbell-Martinez, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/213731541/large.jpeg",
        "attribution": "(c) Deb Whitecotton, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/60617722/large.jpg",
        "attribution": "(c) Dan LaVorgna, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/230350905/large.jpeg",
        "attribution": "(c) RJ Baltierra, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/72947468/large.jpg",
        "attribution": "(c) Kelly Reetz, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/145729985/large.jpg",
        "attribution": "(c) Todd Fitzgerald, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-ironclad-beetle": {
    "inat_taxon_id": 205055,
    "cover_image_url": "https://static.inaturalist.org/photos/75281565/large.jpg",
    "cover_image_attribution": "(c) backyardmacrophotos, all rights reserved, uploaded by backyardmacrophotos",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/362621339/large.jpg",
        "attribution": "(c) Seth Shively, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/130487881/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/246856385/large.jpg",
        "attribution": "(c) CompanyInk, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/270501977/large.jpg",
        "attribution": "(c) Jordan Salomon, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4090137/large.JPG",
        "attribution": "(c) Matt Muir, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/16160885/large.jpeg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-leafcutter-ant": {
    "inat_taxon_id": 151794,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/170049018/large.jpeg",
    "cover_image_attribution": "(c) Karen Yukich, some rights reserved (CC BY-NC), uploaded by Karen Yukich",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/486838506/large.jpg",
        "attribution": "(c) buhmane, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/119405028/large.jpg",
        "attribution": "(c) Heather A. Wise, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/16763758/large.jpeg",
        "attribution": "(c) Joseph Connors, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/174045530/large.jpg",
        "attribution": "(c) ekalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/105904786/large.jpeg",
        "attribution": "(c) umueller, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20008975/large.jpeg",
        "attribution": "(c) James Bailey, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-map-turtle": {
    "inat_taxon_id": 39845,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51693088/large.jpg",
    "cover_image_attribution": "(c) texasturtles, some rights reserved (CC BY-NC), uploaded by texasturtles",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/17853145/large.jpeg",
        "attribution": "(c) Michael Price, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/231595354/large.jpeg",
        "attribution": "(c) Michael Wight, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55747017/large.jpeg",
        "attribution": "(c) Clifton Ladd, C.W.B., some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51762468/large.jpg",
        "attribution": "(c) texasturtles, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51466282/large.jpg",
        "attribution": "(c) texasturtles, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/250331563/large.jpeg",
        "attribution": "(c) Sal Scibetta, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-persimmon": {
    "inat_taxon_id": 120505,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62823/large.jpg",
    "cover_image_attribution": "(c) Gravitywave, some rights reserved (CC BY-NC-SA)",
    "cover_image_license": "cc-by-nc-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7172325/large.jpg",
        "attribution": "(c) algowry, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/364825527/large.jpg",
        "attribution": "(c) Briana Rouse, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51446071/large.jpg",
        "attribution": "(c) Nelly Estrada, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51254433/large.jpeg",
        "attribution": "(c) mirmir, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30494947/large.jpg",
        "attribution": "(c) Kathy Cox, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/22729757/large.jpeg",
        "attribution": "(c) Mary, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-ratsnake": {
    "inat_taxon_id": 73888,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/590864724/large.jpg",
    "cover_image_attribution": "(c) jbpeters, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/165926507/large.jpeg",
        "attribution": "(c) Chandler Davis, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27957858/large.jpeg",
        "attribution": "(c) Lisa Appelbaum, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/317226078/large.jpg",
        "attribution": "(c) Erin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29187261/large.jpg",
        "attribution": "(c) jeffweinell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63210026/large.jpg",
        "attribution": "(c) Brittany M, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-red-oak": {
    "inat_taxon_id": 167640,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2530816/large.JPG",
    "cover_image_attribution": "(c) Linda Jo Conn, some rights reserved (CC BY-NC), uploaded by Linda Jo Conn",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/54631167/large.jpeg",
        "attribution": "(c) Linda Brinlee, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/104771974/large.jpg",
        "attribution": "(c) Shelia Hargis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/281049545/large.jpg",
        "attribution": "(c) Garrett Rhyne, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3398938/large.jpeg",
        "attribution": "(c) Rebecca Cowser, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/368366348/large.jpg",
        "attribution": "(c) Sequoia Janirella Wrens, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/9120153/large.jpg",
        "attribution": "(c) Nathan Taylor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-redbud": {
    "inat_taxon_id": 48500,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3841936/large.jpg",
    "cover_image_attribution": "(c) Chuck Sexton, some rights reserved (CC BY-NC), uploaded by Chuck Sexton",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/427629144/large.jpeg",
        "attribution": "(c) Hanfei Zhang, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/305869688/large.jpg",
        "attribution": "(c) Turner Brockman, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/429222430/large.jpeg",
        "attribution": "(c) evvobevvo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/825044/large.JPG",
        "attribution": "(c) markg, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/260585474/large.jpg",
        "attribution": "(c) Rilee, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/61340893/large.jpg",
        "attribution": "(c) memorylag, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-spiny-lizard": {
    "inat_taxon_id": 36202,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/16476904/large.jpeg",
    "cover_image_attribution": "(c) John Brush, some rights reserved (CC BY-NC), uploaded by John Brush",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51327439/large.jpeg",
        "attribution": "(c) Debra Hendricks, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/169953191/large.jpeg",
        "attribution": "(c) Jack Cochran, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/121932895/large.jpg",
        "attribution": "(c) tmorgan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/163106216/large.jpeg",
        "attribution": "(c) Debra Hendricks, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/228439194/large.jpeg",
        "attribution": "(c) Courtney Cloyd, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/137307396/large.jpeg",
        "attribution": "(c) lauradugan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-spotted-whiptail": {
    "inat_taxon_id": 73669,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/89188615/large.jpeg",
    "cover_image_attribution": "(c) Art Mur, some rights reserved (CC BY-NC-ND), uploaded by Art Mur",
    "cover_image_license": "cc-by-nc-nd",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/56117929/large.jpg",
        "attribution": "(c) Fran Hutchins, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12494310/large.jpeg",
        "attribution": "(c) Nicholas Cowey, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/583082461/large.jpg",
        "attribution": "(c) Peggy Rudman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/111321434/large.jpg",
        "attribution": "(c) Aidan Campos, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/16743584/large.jpg",
        "attribution": "(c) Ernesto Herrera, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/128780601/large.jpeg",
        "attribution": "(c) Michelle W. （鍾偉瑋）, some rights reserved (CC BY)",
        "license": "cc-by",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-striped-sweat-bee": {
    "inat_taxon_id": 1581468,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57432372/large.jpg",
    "cover_image_attribution": "(c) C. A. Ivy, some rights reserved (CC BY-NC), uploaded by C. A. Ivy",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/303697031/large.jpg",
        "attribution": "(c) Christopher Wilson, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/254541010/large.jpg",
        "attribution": "(c) Joseph Connors, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/595925217/large.jpg",
        "attribution": "(c) patsykuentz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/106713540/large.jpeg",
        "attribution": "(c) John Brush, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/158444758/large.jpeg",
        "attribution": "(c) Roberto Castillo, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/168760074/large.jpeg",
        "attribution": "(c) Devin Johnston, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-threadsnake": {
    "inat_taxon_id": 32512,
    "cover_image_url": "https://static.inaturalist.org/photos/28721555/large.jpg",
    "cover_image_attribution": "(c) Brad Moon, all rights reserved, uploaded by Brad Moon",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/142321271/large.jpeg",
        "attribution": "(c) Joey Kellner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/74400494/large.jpeg",
        "attribution": "(c) Joey Kellner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/295732409/large.jpg",
        "attribution": "(c) Meghan Cassidy, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/78829123/large.jpg",
        "attribution": "(c) Travis LaDuc, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4622128/large.jpeg",
        "attribution": "(c) choma, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/385034556/large.jpeg",
        "attribution": "(c) Brandon Nguyen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-tortoise": {
    "inat_taxon_id": 40083,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/89600/large.jpg",
    "cover_image_attribution": "(c) Clinton & Charles Robertson, some rights reserved (CC BY-SA)",
    "cover_image_license": "cc-by-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/204259016/large.jpg",
        "attribution": "(c) Cheryl Rosenfeld, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/180138580/large.jpg",
        "attribution": "(c) Clarisse Reid, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/371440373/large.jpeg",
        "attribution": "(c) John Brush, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/369659338/large.jpg",
        "attribution": "(c) Ernesto Herrera, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/241484469/large.jpeg",
        "attribution": "(c) Jack Cochran, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/56653290/large.jpg",
        "attribution": "(c) Heather A. Wise, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "tri-colored-bat": {
    "inat_taxon_id": 183166,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1743114/large.jpg",
    "cover_image_attribution": "(c) Dave Thomas, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/22326411/large.jpeg",
        "attribution": "(c) Alex Lamoreaux, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/263579261/large.jpg",
        "attribution": "(c) mcboatman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/56995639/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/161549558/large.jpeg",
        "attribution": "(c) Cade, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/152739597/large.jpeg",
        "attribution": "(c) Caleb Wardlaw, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/170032800/large.jpg",
        "attribution": "(c) Danielle Gay, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "turkey-vulture": {
    "inat_taxon_id": 4756,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/52277010/large.jpg",
    "cover_image_attribution": "(c) Seig, some rights reserved (CC BY), uploaded by Seig",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/111499368/large.jpeg",
        "attribution": "(c) w_fran, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/13549462/large.jpeg",
        "attribution": "(c) Brenna Farrell, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/50898317/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/56131967/large.jpg",
        "attribution": "(c) Gerben ter Haar, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/483659470/large.jpeg",
        "attribution": "(c) w_fran, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/217159434/large.jpeg",
        "attribution": "(c) tracyhench, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "turks-cap": {
    "inat_taxon_id": 120942,
    "cover_image_url": "https://static.inaturalist.org/photos/57441599/large.jpeg",
    "cover_image_attribution": "(c) Lex García, all rights reserved, uploaded by Lex García",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/17463050/large.jpg",
        "attribution": "(c) stephaniemartin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/82996188/large.jpg",
        "attribution": "(c) Ann Boyce Hutto, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/198828886/large.jpg",
        "attribution": "(c) aimeetaylor240, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/91963144/large.jpg",
        "attribution": "(c) katcruz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/467811913/large.jpg",
        "attribution": "(c) EmilyandNu, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/96122920/large.jpg",
        "attribution": "(c) nicolette-ann, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "virginia-creeper": {
    "inat_taxon_id": 50278,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1688748/large.JPG",
    "cover_image_attribution": "(c) Carolyn Gritzmaker, some rights reserved (CC BY-NC), uploaded by Carolyn Gritzmaker",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/325505968/large.jpeg",
        "attribution": "(c) cb914, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/223281963/large.jpg",
        "attribution": "(c) Douglas Goldman, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/21578937/large.jpeg",
        "attribution": "(c) earl woolsey, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/409483709/large.jpg",
        "attribution": "(c) M. Whitson, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/546496907/large.jpg",
        "attribution": "(c) Gage Sutton, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/572406690/large.jpg",
        "attribution": "(c) Caleb Swecker, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "virginia-opossum": {
    "inat_taxon_id": 42652,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/35041373/large.jpeg",
    "cover_image_attribution": "(c) Michelle Herman, some rights reserved (CC BY-NC), uploaded by Michelle Herman",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/172297424/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/77221508/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/173131417/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/129005930/large.jpg",
        "attribution": "(c) Matthew, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/304242090/large.jpg",
        "attribution": "(c) Adrian Naveda, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/506095142/large.jpg",
        "attribution": "(c) Emma Bago, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "western-cottonmouth": {
    "inat_taxon_id": 904170,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/247847/large.jpg",
    "cover_image_attribution": "(c) Todd Pierson, some rights reserved (CC BY-NC-SA)",
    "cover_image_license": "cc-by-nc-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/34336625/large.jpeg",
        "attribution": "(c) Jared Gorrell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/26199020/large.jpeg",
        "attribution": "(c) jmills, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3505552/large.JPG",
        "attribution": "(c) Luke Pearson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/74336329/large.jpg",
        "attribution": "(c) kirk gardner, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13362287/large.jpg",
        "attribution": "(c) Grover J. Brown, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/315791648/large.gif",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "western-diamondback-rattlesnake": {
    "inat_taxon_id": 30764,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3113494/large.jpg",
    "cover_image_attribution": "(c) Gerson Herrera, some rights reserved (CC BY-NC), uploaded by Gerson Herrera",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/17432999/large.jpeg",
        "attribution": "(c) Danielle Aube, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/89303792/large.jpg",
        "attribution": "(c) dhandler1968, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/47748114/large.jpeg",
        "attribution": "(c) Ryan O'Donnell, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/667140/large.JPG",
        "attribution": "(c) Juan Cruzado Cortés, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/444051853/large.jpeg",
        "attribution": "(c) Nate Barnes, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "western-honey-bee": {
    "inat_taxon_id": 47219,
    "cover_image_url": "https://static.inaturalist.org/photos/2369526/large.jpg",
    "cover_image_attribution": "(c) Georges-Alexandre Cotnoir, all rights reserved, uploaded by Georges-Alexandre Cotnoir",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/883733/large.jpg",
        "attribution": "(c) Cullen Hanks, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51893828/large.jpeg",
        "attribution": "(c) Sequoia Janirella Wrens, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/42092943/large.jpg",
        "attribution": "(c) Laurent Hesemans, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/342351826/large.jpeg",
        "attribution": "(c) plumelet, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/9762752/large.jpg",
        "attribution": "(c) Merav Vonshak, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "western-ribbon-snake": {
    "inat_taxon_id": 60342,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/393929/large.jpg",
    "cover_image_attribution": "(c) Eric Osmundson, some rights reserved (CC BY-NC-SA)",
    "cover_image_license": "cc-by-nc-sa",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/171417785/large.jpg",
        "attribution": "(c) Russell Ramirez, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/178766577/large.jpg",
        "attribution": "(c) Brad Moon, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8112822/large.jpg",
        "attribution": "(c) Joelle Belmonte, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/122350320/large.jpeg",
        "attribution": "(c) John Garrett, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/446163518/large.jpg",
        "attribution": "(c) Erik Huebner, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/109123138/large.jpeg",
        "attribution": "(c) Isaac Lord, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "wheel-bug": {
    "inat_taxon_id": 48957,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13257890/large.jpg",
    "cover_image_attribution": "(c) Vicki  DeLoach, some rights reserved (CC BY-NC-ND)",
    "cover_image_license": "cc-by-nc-nd",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/106357204/large.jpeg",
        "attribution": "(c) Kimberlie Sasan, some rights reserved (CC BY-ND)",
        "license": "cc-by-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/43425372/large.jpg",
        "attribution": "(c) Leila Dasher, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/67121775/large.jpg",
        "attribution": "(c) Clarence Holmes, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/320789296/large.jpg",
        "attribution": "(c) Meghen Miles Tuttle, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/144445680/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/8456461/large.jpg",
        "attribution": "(c) John Ratzlaff, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "white-footed-deermouse": {
    "inat_taxon_id": 44395,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/94086090/large.jpg",
    "cover_image_attribution": "(c) Kristof Zyskowski, some rights reserved (CC BY), uploaded by Kristof Zyskowski",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/383206465/large.jpeg",
        "attribution": "(c) Shreybae, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/70274728/large.jpg",
        "attribution": "(c) Gray Catanzaro, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/332813847/large.jpg",
        "attribution": "(c) Jing-Yi Lu, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/162705269/large.jpeg",
        "attribution": "(c) Dakota Parish, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/345595251/large.jpg",
        "attribution": "(c) Linda W Ruth, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/123104033/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "white-lined-sphinx": {
    "inat_taxon_id": 49348,
    "cover_image_url": "https://static.inaturalist.org/photos/1372348/large.JPG",
    "cover_image_attribution": "(c) Gary McDonald, all rights reserved, uploaded by Gary McDonald",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15247695/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/293862020/large.jpeg",
        "attribution": "(c) Balaji Devarajan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/472424394/large.gif",
        "attribution": "(c) Peter Joseph, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/157961260/large.jpeg",
        "attribution": "(c) John Van Veldhuizen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/260886279/large.jpeg",
        "attribution": "(c) Laura Gaudette, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13381645/large.jpg",
        "attribution": "(c) Robin Gwen Agarwal, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "white-tailed-deer": {
    "inat_taxon_id": 42223,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/110157765/large.jpg",
    "cover_image_attribution": "(c) jefferykarafa, some rights reserved (CC BY-NC), uploaded by jefferykarafa",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/22596815/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/4349538/large.jpg",
        "attribution": "(c) Judd Patterson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1947732/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/593471748/large.jpg",
        "attribution": "(c) TC Riley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27140658/large.jpg",
        "attribution": "(c) bwood708, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51524049/large.jpg",
        "attribution": "(c) navasalfredo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "white-winged-dove": {
    "inat_taxon_id": 3460,
    "cover_image_url": "https://static.inaturalist.org/photos/57871916/large.jpg",
    "cover_image_attribution": "(c) Jerry DeBoer, all rights reserved, uploaded by Jerry DeBoer",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/60068796/large.jpg",
        "attribution": "(c) bkbishop, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/238580120/large.jpeg",
        "attribution": "(c) Jorge A. Pérez Torres, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/426955997/large.jpeg",
        "attribution": "(c) Ramón Isaac Miramontes Cinco, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/306729433/large.jpeg",
        "attribution": "(c) Jorge A. Pérez Torres, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/80548928/large.jpg",
        "attribution": "(c) Rolando Chavez, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/43175135/large.jpeg",
        "attribution": "(c) Andy Bridges, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "widow-skimmer": {
    "inat_taxon_id": 47934,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15608/large.jpg",
    "cover_image_attribution": "(c) John Wright, some rights reserved (CC BY-NC-ND)",
    "cover_image_license": "cc-by-nc-nd",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/44702132/large.jpg",
        "attribution": "(c) scott_makepeace, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/85752430/large.jpeg",
        "attribution": "(c) Gail Taylor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4578980/large.jpg",
        "attribution": "(c) Bryan Pfeiffer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/220728693/large.jpeg",
        "attribution": "(c) jamman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/87309364/large.jpg",
        "attribution": "(c) adventurehiker, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/155606768/large.jpeg",
        "attribution": "(c) Gail Taylor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "yaupon": {
    "inat_taxon_id": 119955,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1280560/large.jpg",
    "cover_image_attribution": "(c) Laura Clark, some rights reserved (CC BY), uploaded by Laura Clark",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/615410338/large.jpg",
        "attribution": "(c) Elias Frank, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/187392016/large.jpeg",
        "attribution": "(c) Nicholas Cowey, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/459466788/large.jpg",
        "attribution": "(c) plantguy757, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/28689034/large.jpeg",
        "attribution": "(c) Teresa Griffin, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/562719096/large.jpg",
        "attribution": "(c) fallonlancaster, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/450899059/large.jpeg",
        "attribution": "(c) Jerry Kosanovich, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "yellow-fever-mosquito": {
    "inat_taxon_id": 155453,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/362299804/large.jpeg",
    "cover_image_attribution": "(c) Dan Mendelowitz, some rights reserved (CC BY), uploaded by Dan Mendelowitz",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/72068993/large.jpeg",
        "attribution": "(c) Gustavo Fernando Brahamian, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5509411/large.jpg",
        "attribution": "(c) Brendan Rajah-Boyer, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/52061181/large.jpg",
        "attribution": "(c) Sandra H Statner, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/258396733/large.jpeg",
        "attribution": "(c) c, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/213527449/large.jpg",
        "attribution": "(c) Miguel Gastelum, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/122816743/large.jpg",
        "attribution": "(c) picioarelungi, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "yellow-mud-turtle": {
    "inat_taxon_id": 39742,
    "cover_image_url": "https://static.inaturalist.org/photos/4374521/large.jpg",
    "cover_image_attribution": "(c) Judd Patterson, all rights reserved, uploaded by Judd Patterson",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/9372061/large.jpg",
        "attribution": "(c) Keegan Smith, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30121323/large.jpg",
        "attribution": "(c) Brandon Caswell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/501246540/large.jpg",
        "attribution": "(c) Brian Genge, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/24460332/large.jpeg",
        "attribution": "(c) Todd Fitzgerald, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/143902751/large.jpeg",
        "attribution": "(c) Fishes of Texas team, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/285356554/large.jpg",
        "attribution": "(c) Grover J. Brown, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "yellow-rumped-warbler": {
    "inat_taxon_id": 145245,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/128439522/large.jpg",
    "cover_image_attribution": "(c) Zane Shantz, some rights reserved (CC BY-NC-ND), uploaded by Zane Shantz",
    "cover_image_license": "cc-by-nc-nd",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/109843994/large.jpg",
        "attribution": "(c) Janice Goetz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/69782409/large.jpeg",
        "attribution": "(c) pointrond, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/252031775/large.jpg",
        "attribution": "(c) Jonathan Eisen, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14331975/large.jpg",
        "attribution": "(c) David Govoni, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/10565082/large.jpg",
        "attribution": "(c) Janet Wright, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/34497326/large.jpg",
        "attribution": "(c) Mason Maron, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
};
