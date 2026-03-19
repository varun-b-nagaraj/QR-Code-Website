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
        "url": "https://static.inaturalist.org/photos/78222588/large.jpg",
        "attribution": "(c) Aaron Balam, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/183817620/large.jpg",
        "attribution": "(c) ecofriend123, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/314457607/large.jpg",
        "attribution": "(c) elizabethompson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/277602642/large.jpeg",
        "attribution": "(c) laurasare, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/94000578/large.jpeg",
        "attribution": "(c) Edmundo Zarate, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/116215805/large.jpg",
        "attribution": "(c) Rick Hammer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/335782562/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/348680839/large.jpeg",
        "attribution": "(c) Tibernut null, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/124923865/large.jpeg",
        "attribution": "(c) Laura Gaudette, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/31495484/large.jpg",
        "attribution": "(c) Joy Killough, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/345845225/large.jpg",
        "attribution": "(c) natureboynb, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/258629987/large.jpg",
        "attribution": "(c) George Afghan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/266358120/large.jpg",
        "attribution": "(c) bsaiz10, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65794824/large.jpeg",
        "attribution": "(c) ssmcclain, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/368129438/large.jpeg",
        "attribution": "(c) sfortmuller, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/339627986/large.jpeg",
        "attribution": "(c) Ulises Pinedo, some rights reserved (CC BY)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12379337/large.jpeg",
        "attribution": "(c) Danny Mccamish, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/82218969/large.jpeg",
        "attribution": "(c) Matt Wallace, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/224343279/large.jpg",
        "attribution": "(c) Vishal Subramanyan, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/260282281/large.jpg",
        "attribution": "(c) Jack McDonough, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/261833378/large.jpg",
        "attribution": "(c) bobbowhay, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/38905559/large.jpeg",
        "attribution": "(c) Jaime Marcelo Aranda Sánchez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/159664224/large.jpg",
        "attribution": "(c) tyler_mcclain925, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/248945970/large.jpeg",
        "attribution": "(c) aj_ira, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/446551973/large.jpeg",
        "attribution": "(c) Erik Huebner, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/92603397/large.gif",
        "attribution": "(c) Tom Rickman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/486988352/large.jpeg",
        "attribution": "(c) Alex Handler, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/58332361/large.jpeg",
        "attribution": "(c) Todd Fitzgerald, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/156502371/large.jpg",
        "attribution": "(c) shadoxas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/58742783/large.jpeg",
        "attribution": "(c) plsommer, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/20453247/large.jpeg",
        "attribution": "(c) Patrick J Bohlen, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/26902385/large.jpg",
        "attribution": "(c) alontour, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/27070940/large.jpg",
        "attribution": "(c) John Souva III, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/23138576/large.jpeg",
        "attribution": "(c) kimberlysykes, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2477387/large.jpg",
        "attribution": "(c) AJ Wacaser, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1400281/large.jpg",
        "attribution": "(c) Annika Lindqvist, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/41698243/large.jpg",
        "attribution": "(c) Ky Cordts, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/437695945/large.jpeg",
        "attribution": "(c) prairieboy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/434918496/large.jpeg",
        "attribution": "(c) bcu_adapt_ei, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14525964/large.jpg",
        "attribution": "(c) Mark Fishbein, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13825818/large.jpeg",
        "attribution": "(c) Carlos G Velazco-Macias, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/567390743/large.jpg",
        "attribution": "(c) dennisharveyjackson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/184650458/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/70364552/large.jpeg",
        "attribution": "(c) Bridget Spencer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/192663386/large.jpeg",
        "attribution": "(c) Wendy Walker, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/255181988/large.jpeg",
        "attribution": "(c) Belinda Gallagher, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6178987/large.jpeg",
        "attribution": "(c) Carlos G Velazco-Macias, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/118193232/large.jpg",
        "attribution": "(c) Kevin Pace, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/365595671/large.jpeg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/59793632/large.jpg",
        "attribution": "(c) Zach Berry, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/457114969/large.jpeg",
        "attribution": "(c) Erica Fleniken, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/166484039/large.jpg",
        "attribution": "(c) touchstone, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "american-bullfrog": {
    "inat_taxon_id": 65979,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4654051/large.jpg",
    "cover_image_attribution": "(c) bubbacho, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/64288448/large.jpeg",
        "attribution": "(c) Ty Smith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/162208673/large.jpg",
        "attribution": "(c) Ty Smith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/49416500/large.jpg",
        "attribution": "(c) Randy Dzenkiw, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/9029227/large.jpg",
        "attribution": "(c) Pat Deacon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/208204220/large.jpg",
        "attribution": "(c) kclinevell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/161936314/large.jpg",
        "attribution": "(c) Nell Cant, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/571854453/large.jpg",
        "attribution": "(c) anomalocarys, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5306831/large.jpg",
        "attribution": "(c) Heather Pickard, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/157616465/large.jpg",
        "attribution": "(c) David Martin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/10479915/large.jpg",
        "attribution": "(c) Kim Moore, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/193242902/large.jpg",
        "attribution": "(c) Kuoni W, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4654051/large.jpg",
        "attribution": "(c) bubbacho, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/251155066/large.jpg",
        "attribution": "(c) tiller, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/515840033/large.jpg",
        "attribution": "(c) selenet01, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/16285871/large.jpg",
        "attribution": "(c) mrphillipsk, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/499927290/large.jpg",
        "attribution": "(c) Coreen Gruppuso, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/175768293/large.jpg",
        "attribution": "(c) ldburek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/516931573/large.jpg",
        "attribution": "(c) gordgadsden, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/54355665/large.jpg",
        "attribution": "(c) chezasaurus, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/483180028/large.jpg",
        "attribution": "(c) Justin Flint, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/463781594/large.jpeg",
        "attribution": "(c) M, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/32618490/large.jpg",
        "attribution": "(c) Mason Maron, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/288751007/large.jpg",
        "attribution": "(c) Justin Flint, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/228073879/large.jpg",
        "attribution": "(c) Justin Flint, some rights reserved (CC BY)",
        "license": "cc-by",
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
      {
        "url": "https://static.inaturalist.org/photos/89281037/large.jpeg",
        "attribution": "(c) Meghan, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/574943078/large.jpg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/597588495/large.jpg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/601638468/large.jpg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/178312611/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/178312750/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/591584206/large.jpg",
        "attribution": "(c) Roderick Hornby, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/128491769/large.jpg",
        "attribution": "(c) dplawrance, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/31728009/large.jpg",
        "attribution": "(c) Sharon Watson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/43185823/large.jpg",
        "attribution": "(c) Dan Riskin, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12537450/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/616256451/large.jpg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/254347950/large.jpg",
        "attribution": "(c) katalinacarretta, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/43756258/large.jpeg",
        "attribution": "(c) Mariah, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/455126766/large.jpeg",
        "attribution": "(c) Ryan T, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/612542017/large.jpg",
        "attribution": "(c) Mike Stewart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/106504913/large.jpg",
        "attribution": "(c) Bernardo Zorrilla, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/242858194/large.jpg",
        "attribution": "(c) Adam Olsen, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/243113560/large.jpeg",
        "attribution": "(c) Todd Fitzgerald, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6133418/large.jpeg",
        "attribution": "(c) Dave Sutherland, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/183608114/large.jpeg",
        "attribution": "(c) cgbb2004, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/246898110/large.jpeg",
        "attribution": "(c) Luis Prevedel, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/496022723/large.jpg",
        "attribution": "(c) matthew_wills, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/18416402/large.jpg",
        "attribution": "(c) jltucker, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/54491275/large.jpeg",
        "attribution": "(c) Joe, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2541739/large.jpg",
        "attribution": "(c) roy pilcher, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/277554690/large.jpeg",
        "attribution": "(c) Grant McKercher, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/370528121/large.jpg",
        "attribution": "(c) Mila Turov, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/128258714/large.jpg",
        "attribution": "(c) petermaksimow, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/179245681/large.jpg",
        "attribution": "(c) Libby Morris, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/201140907/large.jpeg",
        "attribution": "(c) Osiel Flores, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/197593034/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/178235362/large.jpg",
        "attribution": "(c) Malcolm Kurtz, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/362614025/large.jpg",
        "attribution": "(c) John Martin, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/59017462/large.jpg",
        "attribution": "(c) Bill Carrell, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/621276563/large.jpg",
        "attribution": "(c) MK, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/294684508/large.jpg",
        "attribution": "(c) Misha Zitser, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/395394883/large.jpeg",
        "attribution": "(c) Audrey Lux, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/257013082/large.jpg",
        "attribution": "(c) Misha Zitser, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/16642894/large.jpg",
        "attribution": "(c) Cleveland Museum of Natural History, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3150464/large.jpeg",
        "attribution": "(c) lynnparsons, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/339982575/large.jpeg",
        "attribution": "(c) csledge, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/218198075/large.jpg",
        "attribution": "(c) brendaspitzer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/568626841/large.jpg",
        "attribution": "(c) makelikeanapeman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/179999594/large.jpg",
        "attribution": "(c) Chuck Thomas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/439834990/large.jpeg",
        "attribution": "(c) GillieBrook, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/611797205/large.jpg",
        "attribution": "(c) Jim Natale, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/67522513/large.jpg",
        "attribution": "(c) Bill Stitt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/367489060/large.jpg",
        "attribution": "(c) Christopher J. Earle, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/109006943/large.jpeg",
        "attribution": "(c) Sal Scibetta, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20507845/large.jpg",
        "attribution": "(c) Elizabeth McGreevy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/156669636/large.jpg",
        "attribution": "(c) Josh/Joshua, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/34511640/large.jpg",
        "attribution": "(c) Josh/Joshua, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/268222531/large.jpg",
        "attribution": "(c) Josh/Joshua, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/219197366/large.jpg",
        "attribution": "(c) Brady S. Dunaway, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/338925019/large.jpg",
        "attribution": "(c) Wesley Strong, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/136059188/large.jpeg",
        "attribution": "(c) Ron Stephens, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12539480/large.jpg",
        "attribution": "(c) Bob O'Kennon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/234573471/large.jpeg",
        "attribution": "(c) saltyhiker, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/101987602/large.jpg",
        "attribution": "(c) alyssarochelle, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/226340472/large.jpeg",
        "attribution": "(c) Danio Miserocchi, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/213081303/large.jpg",
        "attribution": "(c) Chris Kreussling, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/66157220/large.jpeg",
        "attribution": "(c) Andrew🌲🍁, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/181621155/large.jpeg",
        "attribution": "(c) Kyle Warnecke, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/564827273/large.jpg",
        "attribution": "(c) Thiago Carvalho, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/459712327/large.jpg",
        "attribution": "(c) Matthew Lindsey, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/81351038/large.jpg",
        "attribution": "(c) domthescholarr, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/494223896/large.jpeg",
        "attribution": "(c) apusaffinis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/167205306/large.jpg",
        "attribution": "(c) briannaant, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/87219530/large.jpg",
        "attribution": "(c) Jurisdiccion_Huejutla, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/360753382/large.jpg",
        "attribution": "(c) Yap Ee Hean, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/621709274/large.jpg",
        "attribution": "(c) Fathima Hanna, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "austin-blind-salamander": {
    "inat_taxon_id": 27090,
    "cover_image_url": "https://static.inaturalist.org/photos/224838/large.jpg",
    "cover_image_attribution": "(с) deeann, все права защищены",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/346719/large.jpg",
        "attribution": "(c) Nathan Bendik, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13601977/large.jpg",
        "attribution": "(c) Romey Swanson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
        "url": "https://static.inaturalist.org/photos/32276888/large.jpeg",
        "attribution": "(c) John, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/444857462/large.jpeg",
        "attribution": "(c) Robbie, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/94199870/large.jpeg",
        "attribution": "(c) mfeaver, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/170681971/large.jpeg",
        "attribution": "(c) Janet Wright, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/333205246/large.jpeg",
        "attribution": "(c) Tessa Pemrick, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/58270324/large.jpg",
        "attribution": "(c) wavelinks, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/42031020/large.png",
        "attribution": "(c) finneganswaif, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/340269700/large.jpg",
        "attribution": "(c) Dan LaVorgna, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/308827873/large.jpeg",
        "attribution": "(c) maricel patino, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/13336071/large.jpg",
        "attribution": "(c) brad4944, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/182397559/large.jpg",
        "attribution": "(c) Marv Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2795369/large.JPG",
        "attribution": "(c) Annika Lindqvist, some rights reserved (CC BY)",
        "license": "cc-by",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/38283254/large.jpeg",
        "attribution": "(c) Daniel Onea, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/260156273/large.jpg",
        "attribution": "(c) lizamast, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/130297522/large.jpeg",
        "attribution": "(c) Weston Barker, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/145445553/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/248093230/large.jpeg",
        "attribution": "(c) Stefan Westberg, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/396910656/large.jpeg",
        "attribution": "(c) sfreeman7, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/563334921/large.jpg",
        "attribution": "(c) Mike Stewart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/197276614/large.jpg",
        "attribution": "(c) Karl Kroeker, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/392711068/large.jpg",
        "attribution": "(c) Gabriel Diggs, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/378152688/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/378719455/large.jpeg",
        "attribution": "(c) Warren Lussier, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/357060787/large.jpeg",
        "attribution": "(c) Clément panisse, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65132160/large.jpeg",
        "attribution": "(c) raymie, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/231265641/large.jpeg",
        "attribution": "(c) shachar_alterman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/614250426/large.jpg",
        "attribution": "(c) Valia Pavlou, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/605881613/large.jpg",
        "attribution": "(c) José Jiménez Higuera, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/46844275/large.jpeg",
        "attribution": "(c) Qush, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/424245031/large.jpeg",
        "attribution": "(c) Valia Pavlou, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/201223324/large.jpg",
        "attribution": "(c) İsmail hakkı Yilmaz, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/380579018/large.jpg",
        "attribution": "(c) Marc Henrion, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/76325758/large.jpeg",
        "attribution": "(c) Alexander Sena Kodjokuma, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/75240422/large.jpg",
        "attribution": "(c) Vyacheslav Luzanov, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/231390656/large.jpeg",
        "attribution": "(c) shachar_alterman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/345689825/large.jpeg",
        "attribution": "(c) Michael Stocker, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/264484705/large.jpg",
        "attribution": "(c) Jimmy Parker, all rights reserved",
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
      {
        "url": "https://static.inaturalist.org/photos/126813322/large.jpeg",
        "attribution": "(c) Charles Zimmerman, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/91234376/large.jpg",
        "attribution": "(c) Ad Konings, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/172505503/large.jpeg",
        "attribution": "(c) Adedotun Ajibade, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/246595193/large.jpg",
        "attribution": "(c) ocbiggs1, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/279850731/large.jpg",
        "attribution": "(c) brian stahls, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/87216066/large.jpg",
        "attribution": "(c) Don-Jean Leandri-Breton, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/192629447/large.jpg",
        "attribution": "(c) mbplantsandstuff, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/260335853/large.jpg",
        "attribution": "(c) Leslie S, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/326606761/large.jpeg",
        "attribution": "(c) Nelson Chu Pavlosky, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/214544245/large.jpeg",
        "attribution": "(c) Titouan Roguet, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/226330809/large.jpg",
        "attribution": "(c) Gil Ewing, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57625057/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51087634/large.jpg",
        "attribution": "(c) ldingram, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/291869158/large.jpeg",
        "attribution": "(c) Lexy Reinhardt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/381943906/large.jpg",
        "attribution": "(c) Susan Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/67927494/large.jpeg",
        "attribution": "(c) Bridget Spencer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/249660251/large.jpeg",
        "attribution": "(c) Chris C, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29233325/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/441902014/large.jpg",
        "attribution": "(c) Ryan Van Meter, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55705032/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/158271680/large.jpg",
        "attribution": "(c) Cynthia Crawford, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/464374794/large.jpeg",
        "attribution": "(c) Bernie Paquette, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/54581964/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "barred-tiger-salamander": {
    "inat_taxon_id": 26765,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/431853404/large.jpeg",
    "cover_image_attribution": "(c) Yinan Li, some rights reserved (CC BY-NC), uploaded by Yinan Li",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177507200/large.jpeg",
        "attribution": "(c) Jason Shaw, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/303541056/large.jpg",
        "attribution": "(c) Anya Sukiennicki, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/347191925/large.jpg",
        "attribution": "(c) Yinan Li, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/127346390/large.jpg",
        "attribution": "(c) rbbrummitt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/83194047/large.jpeg",
        "attribution": "(c) Isaac Lord, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57483157/large.jpg",
        "attribution": "(c) shanebanes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/363874188/large.jpg",
        "attribution": "(c) oldjon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/467388679/large.jpg",
        "attribution": "(c) Elijah Short, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/475018072/large.jpg",
        "attribution": "(c) bigskyclovis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/428865484/large.jpg",
        "attribution": "(c) Leslie S, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/155369859/large.jpg",
        "attribution": "(c) Matt Rasmussen, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/431853404/large.jpeg",
        "attribution": "(c) Yinan Li, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "barton-springs-salamander": {
    "inat_taxon_id": 27128,
    "cover_image_url": "https://static.inaturalist.org/photos/350347/large.jpg",
    "cover_image_attribution": "(c) Nathan Bendik, all rights reserved, uploaded by Nathan Bendik",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/610677/large.jpg",
        "attribution": "(c) Nathan Bendik, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/77141794/large.jpg",
        "attribution": "(c) dherd, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27854712/large.jpg",
        "attribution": "(c) Ryan Collister, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/385719321/large.jpeg",
        "attribution": "(c) Reid Hardin, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/572353205/large.jpg",
        "attribution": "(c) Kaela Champlin, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/292377822/large.jpg",
        "attribution": "(c) Nancy Rabensburg, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/542023915/large.jpg",
        "attribution": "(c) Aaron Scherz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/288534136/large.jpg",
        "attribution": "(c) Ashwin Narayanan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/393818825/large.jpeg",
        "attribution": "(c) mtallent04, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14742861/large.jpg",
        "attribution": "(c) Romey Swanson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/171148377/large.jpeg",
        "attribution": "(c) timoteo_b, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/385778912/large.jpg",
        "attribution": "(c) ticonderoga-, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/615620997/large.jpg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/282708873/large.png",
        "attribution": "(c) Emily Banno, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/171796934/large.jpg",
        "attribution": "(c) Kathleen L. Ryan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/246123472/large.jpg",
        "attribution": "(c) michaelmacc, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/198781107/large.jpeg",
        "attribution": "(c) S. Queen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/178766858/large.jpeg",
        "attribution": "(c) Gavin Slater, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/374800676/large.jpg",
        "attribution": "(c) Tom Benson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/24340298/large.jpg",
        "attribution": "(c) Brian Starzomski, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/319389809/large.jpeg",
        "attribution": "(c) Gavin Slater, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/334699537/large.jpg",
        "attribution": "(c) Michael Long, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/111644204/large.jpg",
        "attribution": "(c) Tony Iwane, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/114842104/large.jpg",
        "attribution": "(c) Juan Miguel Artigas Azas, all rights reserved",
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
      {
        "url": "https://static.inaturalist.org/photos/122246374/large.jpg",
        "attribution": "(c) Wendy Holman, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/194669916/large.jpg",
        "attribution": "(c) Gina Murphy, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/279346996/large.jpg",
        "attribution": "(c) Alex, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/202419849/large.jpeg",
        "attribution": "(c) Evan &amp; Liam Houlahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/241067757/large.jpeg",
        "attribution": "(c) ReBecca Paterson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/525546338/large.jpg",
        "attribution": "(c) sheerwater, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/46088036/large.jpeg",
        "attribution": "(c) Kevin Swope, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/508114021/large.jpg",
        "attribution": "(c) Lisa Saffell, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/241482385/large.jpeg",
        "attribution": "(c) Lily M, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/79893594/large.jpeg",
        "attribution": "(c) nina fogel, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/98918177/large.jpeg",
        "attribution": "(c) Brandon C., all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/257887869/large.jpg",
        "attribution": "(c) Robert Campion, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11209206/large.jpg",
        "attribution": "(c) Patrick Coin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/279869982/large.jpeg",
        "attribution": "(c) KristieH, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/188577093/large.jpg",
        "attribution": "(c) Brandon Ortiz Arenas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20071534/large.jpeg",
        "attribution": "(c) Marco Rizzo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/43421179/large.jpg",
        "attribution": "(c) Brigette Brinton, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/256164602/large.jpg",
        "attribution": "(c) manimiranda, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/188585966/large.jpg",
        "attribution": "(c) Brandon Ortiz Arenas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14973699/large.jpeg",
        "attribution": "(c) Ricardo Arredondo T., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/407072658/large.jpeg",
        "attribution": "(c) sarahjunie, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/406366230/large.jpg",
        "attribution": "(c) John Fausett, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/293821515/large.jpg",
        "attribution": "(c) djbich, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/212643090/large.jpg",
        "attribution": "(c) John Rosford, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/565982101/large.jpg",
        "attribution": "(c) Brady Schwab, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14594395/large.jpg",
        "attribution": "(c) Susan Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/549202288/large.jpg",
        "attribution": "(c) ams75, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/136365704/large.jpg",
        "attribution": "(c) Nick Glover, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/185462784/large.jpg",
        "attribution": "(c) Roberto González, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/382526961/large.jpg",
        "attribution": "(c) Nick Glover, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/68090412/large.jpeg",
        "attribution": "(c) Bill Carrell, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/74326368/large.jpg",
        "attribution": "(c) Roberto González, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/402882034/large.jpeg",
        "attribution": "(c) centex, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/120525899/large.jpeg",
        "attribution": "(c) Eric Carpenter, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/43853361/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/560533525/large.jpg",
        "attribution": "(c) billygigoza, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/43259466/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/487300758/large.jpeg",
        "attribution": "(c) shepherd001, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/468550800/large.jpg",
        "attribution": "(c) Chris, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/424983618/large.jpg",
        "attribution": "(c) Mayve, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/409888091/large.jpg",
        "attribution": "(c) Ad Konings, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/543389701/large.jpg",
        "attribution": "(c) Roderick Hornby, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/138586041/large.jpg",
        "attribution": "(c) Ad Konings, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/479784927/large.jpeg",
        "attribution": "(c) Roberto González, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/109063229/large.jpeg",
        "attribution": "(c) Miriam Vaughn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/302484696/large.jpeg",
        "attribution": "(c) Dave Drum, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "black-crappie": {
    "inat_taxon_id": 49594,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/441025140/large.jpg",
    "cover_image_attribution": "\nEric Engbretson, U.S. Fish and Wildlife Service, no known copyright restrictions (public domain)",
    "cover_image_license": "pd",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/239196242/large.jpeg",
        "attribution": "(c) Dimitris S, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/358398695/large.jpg",
        "attribution": "(c) ndherper, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/475912600/large.jpg",
        "attribution": "(c) vilanophoto, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/383733517/large.jpeg",
        "attribution": "(c) Quinn, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/601845348/large.jpg",
        "attribution": "(c) Jackson Quitel, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/587798148/large.jpg",
        "attribution": "(c) mrjmorris, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/516694904/large.jpg",
        "attribution": "(c) eleggua, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/171707506/large.jpg",
        "attribution": "(c) Bettina Harvey, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/178482949/large.jpg",
        "attribution": "(c) Joe MacIndewar, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/320677549/large.png",
        "attribution": "(c) cmmteixeira, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/63241458/large.jpeg",
        "attribution": "(c) Outdoor Expressions, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/60206821/large.jpeg",
        "attribution": "(c) CJ Campbell, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/277054146/large.jpg",
        "attribution": "(c) krissielw24, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/249720329/large.jpeg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12717716/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/484451141/large.jpeg",
        "attribution": "(c) edporopat, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/566080117/large.jpg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/599843089/large.jpg",
        "attribution": "(c) Ken Butler, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/390848287/large.jpeg",
        "attribution": "(c) Roberto González, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/468096378/large.jpeg",
        "attribution": "(c) johndickinson68, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/107293032/large.jpeg",
        "attribution": "(c) Amaryll S., all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/349392163/large.jpg",
        "attribution": "(c) Antonio Aguilar, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/612974004/large.jpg",
        "attribution": "(c) dnvarga, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/600451641/large.jpg",
        "attribution": "(c) gardenhen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32625529/large.jpeg",
        "attribution": "(c) Tommy Farquhar, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/30185549/large.jpg",
        "attribution": "(c) Mike Zarella, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/541329900/large.jpg",
        "attribution": "(c) Chris Harrison, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1952129/large.JPG",
        "attribution": "(c) letebile, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/538755395/large.jpg",
        "attribution": "(c) Briana Paxton, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2765643/large.JPG",
        "attribution": "(c) Robby Deans, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/548279239/large.jpg",
        "attribution": "(c) Kellen Bryant, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/528936490/large.jpg",
        "attribution": "(c) Sue Keefer, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8688510/large.jpeg",
        "attribution": "(c) Carlos Domínguez-Rodríguez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/592031491/large.jpg",
        "attribution": "(c) Ryan Collister, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/263099578/large.jpg",
        "attribution": "(c) elizabethhikes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/93739552/large.jpg",
        "attribution": "(c) MJ -Blanco TX, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/45761661/large.jpeg",
        "attribution": "(c) naturegirlkh, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/83825603/large.jpeg",
        "attribution": "(c) Will, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/459773333/large.jpg",
        "attribution": "(c) dontfencemein, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/414976118/large.jpeg",
        "attribution": "(c) avidhiker, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/343540300/large.jpeg",
        "attribution": "(c) Lily Ji, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/28742742/large.jpg",
        "attribution": "(c) Ingrid Gago, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/174719412/large.jpeg",
        "attribution": "(c) Bill Levine, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/285226392/large.jpeg",
        "attribution": "(c) Bill Levine, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/165049648/large.jpg",
        "attribution": "(c) Amy T, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/468483619/large.jpg",
        "attribution": "(c) Damon Haan, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/462976832/large.jpg",
        "attribution": "(c) M.R. Perry, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/25831133/large.jpeg",
        "attribution": "(c) Hannah Adams, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/109685890/large.jpeg",
        "attribution": "(c) Esteban Poveda, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/350266193/large.jpeg",
        "attribution": "(c) Ryan, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/305536451/large.jpeg",
        "attribution": "(c) JeffreyGammon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/208473694/large.jpg",
        "attribution": "(c) rdsage, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/391060892/large.jpg",
        "attribution": "(c) Raewyn Adams, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/563653765/large.jpg",
        "attribution": "(c) Emma Adams, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/170377907/large.jpg",
        "attribution": "(c) Kim Moore, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/407925334/large.jpeg",
        "attribution": "(c) inshaallah, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/249263785/large.jpeg",
        "attribution": "(c) Titouan Roguet, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/609444986/large.jpg",
        "attribution": "(c) Gabriele, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/173514511/large.jpg",
        "attribution": "(c) Laura Mae, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/462379586/large.jpeg",
        "attribution": "(c) Валерия Ковалева, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/526321742/large.jpg",
        "attribution": "(c) Goro Saber Animal, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://static.inaturalist.org/photos/147393909/large.jpeg",
        "attribution": "(c) Kathryn Bowden, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/422020625/large.jpg",
        "attribution": "(c) kkt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/399974394/large.jpeg",
        "attribution": "(c) Jack Cochran, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/19976705/large.jpg",
        "attribution": "(c) Anna, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/22631078/large.jpg",
        "attribution": "(c) Susan Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/135112204/large.jpeg",
        "attribution": "(c) Caleb Helsel, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/339403438/large.jpg",
        "attribution": "(c) Van Truan, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/399334289/large.jpg",
        "attribution": "(c) selwynq, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/77091306/large.jpeg",
        "attribution": "(c) Heather Pickard, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/137741957/large.jpg",
        "attribution": "(c) Claire O'Neill, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/300505788/large.jpeg",
        "attribution": "(c) stomlins701, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/397374896/large.jpeg",
        "attribution": "(c) jeanh, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://static.inaturalist.org/photos/253688373/large.jpg",
        "attribution": "(c) Bob Schallmann, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/26017640/large.jpg",
        "attribution": "(c) Rowdy White, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/391015658/large.jpeg",
        "attribution": "(c) Lisa H. Robinson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/135384368/large.jpeg",
        "attribution": "(c) Carlos Mata, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/231542337/large.jpg",
        "attribution": "(c) juanloredo, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30699544/large.jpg",
        "attribution": "(c) filton18, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/353647228/large.jpeg",
        "attribution": "(c) lonnyholmes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7450615/large.jpg",
        "attribution": "(c) Lindsey Smith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/181469528/large.jpeg",
        "attribution": "(c) Sondra K Glider, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/207726025/large.jpeg",
        "attribution": "(c) Oscar Johnson, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/427038470/large.jpeg",
        "attribution": "(c) Michael Wight, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/329765784/large.jpg",
        "attribution": "(c) Aidan Campos, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/546176074/large.jpg",
        "attribution": "(c) Kevin Meza, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/233141798/large.jpeg",
        "attribution": "(c) arizonarattlesnakehunter, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28189219/large.jpeg",
        "attribution": "(c) R_Rodríguez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/239749790/large.jpg",
        "attribution": "(c) Katiya (Yekaterina Pavlova), some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/190513404/large.jpeg",
        "attribution": "(c) Kevin W Smith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/457516416/large.jpg",
        "attribution": "(c) Luis Stevens, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/6491900/large.jpeg",
        "attribution": "(c) Nathan, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30101293/large.jpg",
        "attribution": "(c) Dabeath Ghlz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/236209561/large.jpeg",
        "attribution": "(c) Jesús Juárez Reyes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/4230670/large.jpg",
        "attribution": "(c) Rafa Lara, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/246213643/large.jpeg",
        "attribution": "(c) Vojtěch Víta, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/109237052/large.jpg",
        "attribution": "(c) mariookami, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5463324/large.jpg",
        "attribution": "(c) Cullen Hanks, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/423015863/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/267358066/large.jpg",
        "attribution": "(c) vulturemom, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/458557945/large.jpeg",
        "attribution": "(c) Michael Gallo, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/13396832/large.jpeg",
        "attribution": "(c) Brenna Farrell, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/255647872/large.jpg",
        "attribution": "(c) Brennan Moore, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/35263943/large.jpeg",
        "attribution": "(c) Sue Wetmore, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/176419188/large.jpg",
        "attribution": "(c) eduardovieira17, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/167645849/large.jpg",
        "attribution": "(c) Danny Martin, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/385726766/large.jpg",
        "attribution": "(c) Brendan Muscalu, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/272508904/large.jpg",
        "attribution": "(c) Wendy McCrady, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/118270635/large.jpeg",
        "attribution": "(c) JUAN ROMERO, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "blanchards-cricket-frog": {
    "inat_taxon_id": 70421,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32531/large.jpg",
    "cover_image_attribution": "(c) Andy Kraemer, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/101000984/large.jpg",
        "attribution": "(c) Koaw Nature, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/62706855/large.jpg",
        "attribution": "(c) Brad Moon, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/98746692/large.jpg",
        "attribution": "(c) teeland, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/247713074/large.jpg",
        "attribution": "(c) johnasl, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/541542791/large.jpg",
        "attribution": "(c) Alex Uematsu, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/99136228/large.jpeg",
        "attribution": "(c) Jeff Skrentny, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/262294378/large.jpg",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51688440/large.jpg",
        "attribution": "(c) Bill Schur, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/252725838/large.jpg",
        "attribution": "(c) Russ Jones, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/26745225/large.jpg",
        "attribution": "(c) Kimmie Paxton, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/331110285/large.jpg",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/235718526/large.jpg",
        "attribution": "(c) Mike Abel, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "blue-catfish": {
    "inat_taxon_id": 103276,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13010379/large.jpeg",
    "cover_image_attribution": "(c) pmk00001, some rights reserved (CC BY-NC), uploaded by pmk00001",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/169492079/large.jpg",
        "attribution": "(c) Brandon Brooke, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/466683789/large.jpg",
        "attribution": "(c) Jason E. Avery, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/244463549/large.jpg",
        "attribution": "(c) Cody Cromer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/393493730/large.jpeg",
        "attribution": "(c) Miciah McNels, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14631299/large.jpg",
        "attribution": "(c) mgbean, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2827826/large.jpg",
        "attribution": "(c) Roberto R. Calderón, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/35877380/large.jpeg",
        "attribution": "(c) Jason Naivar, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/25390243/large.jpg",
        "attribution": "(c) Jorge Bogantes Montero, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/481123025/large.jpeg",
        "attribution": "(c) Drew, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/185933909/large.jpg",
        "attribution": "(c) graysontucker, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/18479489/large.jpg",
        "attribution": "(c) Tucker101, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/385500985/large.jpg",
        "attribution": "(c) heymadz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/538481922/large.jpg",
        "attribution": "(c) Denis Doucet, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/47585367/large.jpeg",
        "attribution": "(c) matthewschmalz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/38246608/large.jpg",
        "attribution": "(c) Judy Gallagher, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4460241/large.jpg",
        "attribution": "(c) John Carlson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/153887818/large.jpeg",
        "attribution": "(c) John Klymko, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/550143849/large.jpg",
        "attribution": "(c) Claus Giloi, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/211800427/large.jpeg",
        "attribution": "(c) Rebecca McCluskey, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/87164579/large.jpg",
        "attribution": "(c) Claire O'Neill, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/398405744/large.jpeg",
        "attribution": "(c) Bernie Paquette, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/88144436/large.jpeg",
        "attribution": "(c) cgb25, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/248209260/large.png",
        "attribution": "(c) Gail Taylor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/25152912/large.jpg",
        "attribution": "(c) Chris McCreedy, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/449158965/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/73226733/large.jpg",
        "attribution": "(c) Roberto R. Calderón, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/131559330/large.jpeg",
        "attribution": "(c) Catherine Hamilton, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/457627885/large.jpeg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15579273/large.jpg",
        "attribution": "(c) Katja Schulz, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/257980423/large.jpg",
        "attribution": "(c) srikau5, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/5805032/large.jpg",
        "attribution": "(c) Becca Engdahl, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/12110142/large.jpg",
        "attribution": "(c) Jay Bird, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/618590858/large.jpg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/601659542/large.jpg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/248588382/large.jpg",
        "attribution": "(c) Blake Ross, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/594565367/large.jpg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/170345377/large.jpg",
        "attribution": "(c) Ken Butler, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/279606977/large.jpg",
        "attribution": "(c) Ad Konings, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/17855992/large.jpg",
        "attribution": "(c) manuelfernando, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/346067597/large.jpeg",
        "attribution": "(c) Rosa González Alcalde, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/346193624/large.jpg",
        "attribution": "(c) Álvaro Alemany, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/615947351/large.jpg",
        "attribution": "(c) cindyvigil4, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65525360/large.jpg",
        "attribution": "(c) Joshua Doby, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/396876028/large.jpg",
        "attribution": "(c) David Barros Cardona, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/38142295/large.jpg",
        "attribution": "(c) nicosalino, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/563871842/large.jpg",
        "attribution": "(c) Ad Konings, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/465750882/large.jpeg",
        "attribution": "(c) kccardif, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/347820278/large.jpg",
        "attribution": "(c) Deborah Freeman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "bluegill-sunfish": {
    "inat_taxon_id": 49591,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/339074/large.png",
    "cover_image_attribution": "(c) Kristiina Hurme, some rights reserved (CC BY), uploaded by Kristiina Hurme",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/339074/large.png",
        "attribution": "(c) Kristiina Hurme, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/60943436/large.jpg",
        "attribution": "(c) Robin, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/181990215/large.jpeg",
        "attribution": "(c) Cameron Layne, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/170771782/large.jpg",
        "attribution": "(c) Bryan Ames, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/114774233/large.jpg",
        "attribution": "(c) Peter Wilson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/189135779/large.jpg",
        "attribution": "(c) arachphotobia, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/263212051/large.jpg",
        "attribution": "(c) Vince Golder, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/96265805/large.jpg",
        "attribution": "(c) snakehawk163, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/435808200/large.jpeg",
        "attribution": "(c) Calvin McDowell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/75348735/large.jpg",
        "attribution": "(c) averytribbett, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/225715598/large.jpg",
        "attribution": "(c) jayce-the-creature-creator, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/71305213/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/100193777/large.jpg",
        "attribution": "(c) Sarah Webb, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/576205/large.jpg",
        "attribution": "(c) Karin Saucedo, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/105339694/large.jpeg",
        "attribution": "(c) kpbhwc, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5924559/large.jpg",
        "attribution": "(c) deandsusan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/102919544/large.jpeg",
        "attribution": "(c) Tonia Erickson, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/204263076/large.jpg",
        "attribution": "(c) Chris McCreedy, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13783624/large.jpeg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/114692751/large.jpg",
        "attribution": "(c) Leslie S, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/259234182/large.jpg",
        "attribution": "(c) jim22lawrence, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32938388/large.jpg",
        "attribution": "(c) KT Thalin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57730149/large.jpg",
        "attribution": "(c) David Govatski, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/262524875/large.jpg",
        "attribution": "(c) Leslie S, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "bowfin": {
    "inat_taxon_id": 58611,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/38473528/large.jpg",
    "cover_image_attribution": "(c) Phil's 1stPix, some rights reserved (CC BY-NC-SA)",
    "cover_image_license": "cc-by-nc-sa",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/470801818/large.jpg",
        "attribution": "(c) peter_r, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55453428/large.jpg",
        "attribution": "(c) Phil's 1stPix, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/41757333/large.jpg",
        "attribution": "(c) Ben Grizzle, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/71576108/large.jpg",
        "attribution": "(c) Phil's 1stPix, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/270223902/large.jpeg",
        "attribution": "(c) john_plunket, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/423971184/large.jpeg",
        "attribution": "(c) Theodor Igor Ottinger, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/59148422/large.jpeg",
        "attribution": "(c) Michael Keys, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/147695145/large.jpg",
        "attribution": "(c) Phil's 1stPix, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/243693786/large.jpg",
        "attribution": "(c) wap0026, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/126407313/large.jpeg",
        "attribution": "(c) Kerry Cobb, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/470827978/large.jpg",
        "attribution": "(c) peter_r, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/568641951/large.jpg",
        "attribution": "(c) jesse russell, all rights reserved",
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
      {
        "url": "https://static.inaturalist.org/photos/31027534/large.jpeg",
        "attribution": "(c) ricardorocha, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/298821132/large.jpg",
        "attribution": "(c) ajmcg, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14301839/large.jpg",
        "attribution": "(c) Josh van der Meulen, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/33321235/large.jpg",
        "attribution": "(c) Jay L. Keller, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/607424961/large.jpg",
        "attribution": "(c) Mudassar Basri, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/78984280/large.jpg",
        "attribution": "(c) Nestor Herrera, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/350373772/large.jpg",
        "attribution": "(c) andnature, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3819445/large.jpg",
        "attribution": "(c) Jacky Lau, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/609696550/large.jpg",
        "attribution": "(c) Ahmed Junaid, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/163029853/large.jpg",
        "attribution": "(c) kleuschner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/225648137/large.jpg",
        "attribution": "(c) cory-pittman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/107535806/large.jpg",
        "attribution": "(c) madge, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/509365779/large.jpg",
        "attribution": "(c) Yinan Li, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/141396591/large.jpeg",
        "attribution": "(c) Ashwin Narayanan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32710630/large.jpeg",
        "attribution": "(c) Maryellen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/37727028/large.jpeg",
        "attribution": "(c) dannysanders, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/2549461/large.jpg",
        "attribution": "(c) marksanders, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/62121941/large.jpg",
        "attribution": "(c) reno marquez, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/74125959/large.jpg",
        "attribution": "(c) stanrice, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/379901291/large.jpeg",
        "attribution": "(c) tjhathcock, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/302561731/large.jpg",
        "attribution": "(c) Gerry Salmon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/242529476/large.jpeg",
        "attribution": "(c) Bill Thomas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/227609248/large.jpg",
        "attribution": "(c) jsharma06, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/119070286/large.jpeg",
        "attribution": "(c) niall, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/162061370/large.jpeg",
        "attribution": "(c) steven, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/533455064/large.jpg",
        "attribution": "(c) Isabella Danaher, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/157643586/large.jpg",
        "attribution": "(c) Bruce Bennett, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27225760/large.jpg",
        "attribution": "(c) Luiz Puodzius, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/449952581/large.jpeg",
        "attribution": "(c) Squidpastry, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/183945200/large.jpg",
        "attribution": "(c) Nikki Kidd, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/183888732/large.jpeg",
        "attribution": "(c) Lucy Keith-Diagne, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/27619628/large.jpeg",
        "attribution": "(c) Caitlin Jarvis, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/180344951/large.jpeg",
        "attribution": "(c) ecoloveryael, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/595354904/large.jpg",
        "attribution": "(c) willfaus, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177289257/large.jpeg",
        "attribution": "(c) Isaac Lord, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/46828950/large.jpeg",
        "attribution": "(c) Joe MDO, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/19076404/large.jpg",
        "attribution": "(c) Paul Mindeman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/521361070/large.jpg",
        "attribution": "(c) MK, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/74741783/large.jpg",
        "attribution": "(c) Dan Fitzgerald (Fitz), some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/60414102/large.jpeg",
        "attribution": "(c) Sam Koski Jones, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/345845642/large.jpg",
        "attribution": "(c) theslavking, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/67789422/large.jpeg",
        "attribution": "(c) hb2000, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57203706/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/376793149/large.jpg",
        "attribution": "(c) Ad Konings, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/378780816/large.jpg",
        "attribution": "(c) Celeste, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/43546515/large.jpg",
        "attribution": "(c) Mason Maron, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/278142859/large.jpeg",
        "attribution": "(c) Dave Drum, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/375957308/large.jpg",
        "attribution": "(c) brian stahls, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://static.inaturalist.org/photos/396352378/large.jpeg",
        "attribution": "(c) Matthew Sidor, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/302001599/large.jpeg",
        "attribution": "(c) Jeff LeClere, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/324750200/large.jpg",
        "attribution": "(c) finnward, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/508771133/large.jpg",
        "attribution": "(c) Matt Wallace, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/126724015/large.jpg",
        "attribution": "(c) VALENTINA ROUMI, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/284711528/large.jpg",
        "attribution": "(c) cdlucas27, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/123458339/large.jpg",
        "attribution": "(c) dakotahhenn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/79665923/large.jpeg",
        "attribution": "(c) Robin, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/391572115/large.jpg",
        "attribution": "(c) Erin H Strasser, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/546681292/large.jpg",
        "attribution": "(c) calebcam, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/53089965/large.jpeg",
        "attribution": "(c) Jared Gorrell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/328763189/large.jpg",
        "attribution": "(c) Simon Tolzmann, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/18427263/large.jpeg",
        "attribution": "(c) biologistdave3, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/461470206/large.jpg",
        "attribution": "(c) Randall English, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/460250357/large.jpg",
        "attribution": "(c) Christopher Laszlo Bonis, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/190542572/large.jpg",
        "attribution": "(c) John Defede, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/319483760/large.jpg",
        "attribution": "(c) Justin Flint, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/37800057/large.jpeg",
        "attribution": "(c) Henry Van T. Cotter, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/203638672/large.jpg",
        "attribution": "(c) Robert Levy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/228083773/large.jpg",
        "attribution": "(c) Justin Flint, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/190740709/large.png",
        "attribution": "(c) KF, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32108403/large.jpeg",
        "attribution": "(c) William Van Hemessen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/175251251/large.jpeg",
        "attribution": "(c) Isabelle Joy, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/195254124/large.jpg",
        "attribution": "(c) Michel NOEL, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "canyon-treefrog": {
    "inat_taxon_id": 1668926,
    "cover_image_url": "https://static.inaturalist.org/photos/968071/large.jpg",
    "cover_image_attribution": "(c) James N. Stuart, all rights reserved, uploaded by James N. Stuart",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/70345383/large.jpeg",
        "attribution": "(c) Tim Shortell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/27475426/large.jpeg",
        "attribution": "(c) Eduardo Badillo Guzmán, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/515469682/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/553513839/large.jpg",
        "attribution": "(c) Chiara Paleari, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/210367114/large.jpeg",
        "attribution": "(c) colocritters, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/86234235/large.jpg",
        "attribution": "(c) Robert Dobbs, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/103213185/large.jpg",
        "attribution": "(c) ryand, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2845682/large.jpg",
        "attribution": "(c) Colin Barrows, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/594914591/large.jpg",
        "attribution": "(c) Maximiliano Campos, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/156868032/large.jpeg",
        "attribution": "(c) Osorio Michl, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/98854595/large.jpg",
        "attribution": "(c) Bruno Eduardo Aceves Alejandre, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/547128793/large.jpg",
        "attribution": "(c) Andrew Claassen, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29872259/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/276075078/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/233948591/large.jpg",
        "attribution": "(c) William Wise, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/473272432/large.jpeg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65733496/large.jpg",
        "attribution": "(c) sperkinson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3953188/large.JPG",
        "attribution": "(c) Michael Price, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/348140197/large.jpeg",
        "attribution": "(c) Juan Miguel Artigas Azas, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/270307664/large.jpg",
        "attribution": "(c) Brayan T, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/346686303/large.jpg",
        "attribution": "(c) Sam Ivande, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/244397174/large.jpg",
        "attribution": "(c) mjanson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/176028406/large.jpg",
        "attribution": "(c) Evan C, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/37366906/large.jpg",
        "attribution": "(c) Eric Blomberg, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/184087445/large.jpg",
        "attribution": "(c) Kimberly R Fleming, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/604551035/large.jpg",
        "attribution": "(c) Liam, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/572880436/large.jpg",
        "attribution": "(c) Adrienne van den Beemt, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/168371191/large.jpg",
        "attribution": "(c) tate_yawitz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51750963/large.jpeg",
        "attribution": "(c) Vijay Barve, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/52641594/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/50206670/large.jpg",
        "attribution": "(c) Trey Wardlaw, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/331339918/large.jpg",
        "attribution": "(c) Celeste, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/422774627/large.jpeg",
        "attribution": "(c) Amanda Plante, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/329437708/large.jpg",
        "attribution": "(c) R Snyder, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/593232032/large.jpg",
        "attribution": "(c) MK, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/354886918/large.jpg",
        "attribution": "(c) ToeKneeR, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/116848463/large.jpeg",
        "attribution": "(c) Jessee J. Smith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14000636/large.jpeg",
        "attribution": "(c) Andrew Core, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/82246593/large.jpg",
        "attribution": "(c) dogs4ever, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/95382849/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/451942870/large.jpeg",
        "attribution": "(c) diana schwartz, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30832380/large.jpg",
        "attribution": "(c) darontansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/184468377/large.jpg",
        "attribution": "(c) John Martin, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/58706492/large.jpg",
        "attribution": "(c) Nathaniel Sharp, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/450260861/large.jpeg",
        "attribution": "(c) Tom Murray, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/623678742/large.jpg",
        "attribution": "(c) MK, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/596440634/large.jpg",
        "attribution": "(c) MK, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4209871/large.JPG",
        "attribution": "(c) John Karges, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/414445840/large.jpeg",
        "attribution": "(c) kosmickid, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/493330015/large.jpg",
        "attribution": "(c) Mike Farley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/220814166/large.jpg",
        "attribution": "(c) jcwaller, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/126151641/large.jpg",
        "attribution": "(c) falco, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/368379486/large.jpeg",
        "attribution": "(c) Issachar Leonardo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/56489973/large.jpeg",
        "attribution": "(c) Krysta Demere, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/185202509/large.png",
        "attribution": "(c) atlasmira, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/21261066/large.jpg",
        "attribution": "(c) Romeo A. Saldaña Vázquez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/101611350/large.jpeg",
        "attribution": "(c) M. C. Gerardo Eusebio Valdes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/223266758/large.jpg",
        "attribution": "(c) Mike Farley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4888060/large.jpeg",
        "attribution": "(c) Juan Cruzado Cortés, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/76424244/large.jpeg",
        "attribution": "(c) Jorge Santiago, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/246408038/large.jpg",
        "attribution": "(c) Mike Farley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/16774063/large.jpg",
        "attribution": "(c) rcooper_coa, all rights reserved",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/194466774/large.jpg",
        "attribution": "(c) lindajrm, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/14232623/large.jpeg",
        "attribution": "(c) gilfranke, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/113800816/large.jpeg",
        "attribution": "(c) Jesús Niño C., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/17049861/large.jpeg",
        "attribution": "(c) Baldomero Hernández, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/233812963/large.jpg",
        "attribution": "(c) James G, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/132845652/large.jpeg",
        "attribution": "(c) Ron Stephens, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/134678961/large.jpeg",
        "attribution": "(c) Bob O'Kennon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/54547305/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/493123532/large.jpg",
        "attribution": "(c) daniel112, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/305481799/large.jpg",
        "attribution": "(c) Jon McIntyre, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55783517/large.jpg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/103928511/large.jpg",
        "attribution": "(c) jhaskin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/48531494/large.jpg",
        "attribution": "(c) assmann, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/193132743/large.jpg",
        "attribution": "(c) bighubert, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/275485033/large.jpeg",
        "attribution": "(c) sahi2018, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/331116428/large.jpg",
        "attribution": "(c) Kristie Thompson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/336528394/large.jpg",
        "attribution": "(c) Víctor Garza, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/172577609/large.jpg",
        "attribution": "(c) Douglas Goldman, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/170848062/large.jpg",
        "attribution": "(c) Christian Back, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/6593364/large.jpeg",
        "attribution": "(c) robin_g, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177093261/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/31678223/large.jpg",
        "attribution": "(c) darontansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/82774602/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/115115411/large.jpg",
        "attribution": "(c) Susan Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/200598715/large.jpeg",
        "attribution": "(c) Roberto Peredo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/104093578/large.jpg",
        "attribution": "(c) Arnold Joe, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/331727057/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/605135208/large.jpg",
        "attribution": "(c) kindjay, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/247574390/large.jpg",
        "attribution": "(c) Laura Ibarra, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/31185020/large.jpeg",
        "attribution": "(c) Jerry Cannon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "channel-catfish": {
    "inat_taxon_id": 81554,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/455557089/large.jpeg",
    "cover_image_attribution": "(c) Mitchel Buckner, some rights reserved (CC BY-NC), uploaded by Mitchel Buckner",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/18681763/large.jpg",
        "attribution": "(c) gewb, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/216370776/large.jpg",
        "attribution": "(c) Eric Hicks, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/604718102/large.jpg",
        "attribution": "(c) Jordan, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/241706507/large.jpeg",
        "attribution": "(c) Наталья Бондарева, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/595732313/large.jpg",
        "attribution": "(c) kary, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/56555690/large.jpg",
        "attribution": "(c) Jeffrey Smith, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/106271990/large.jpeg",
        "attribution": "(c) Kathy Balman, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/444400205/large.jpeg",
        "attribution": "(c) patti p., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/309592705/large.jpeg",
        "attribution": "(c) akaa, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/582803415/large.jpg",
        "attribution": "(c) Кураев Михаил, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/455557089/large.jpeg",
        "attribution": "(c) Mitchel Buckner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/400952942/large.jpeg",
        "attribution": "(c) Druv Spruce, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://static.inaturalist.org/photos/321188069/large.jpeg",
        "attribution": "(c) Lorenzo, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/171604595/large.jpg",
        "attribution": "(c) Ally Couch, some rights reserved (CC BY-ND)",
        "license": "cc-by-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/223218972/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/304935266/large.jpg",
        "attribution": "(c) bjacoby, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/17375954/large.jpeg",
        "attribution": "(c) Jordan Broadhead, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/100568099/large.jpg",
        "attribution": "(c) naturebugs, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/98888845/large.jpg",
        "attribution": "(c) Travis W. Taggart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/152464298/large.jpeg",
        "attribution": "(c) Sue Weissinger, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/607369300/large.jpg",
        "attribution": "(c) Oscar Bermúdez, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/390422620/large.jpg",
        "attribution": "(c) Gerry Salmon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5570085/large.jpg",
        "attribution": "(c) Gerry Salmon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5316015/large.jpeg",
        "attribution": "(c) Matthew Salkiewicz, some rights reserved (CC BY-NC)",
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
        "url": "https://static.inaturalist.org/photos/51936127/large.jpg",
        "attribution": "(c) kristiefwench, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/200731644/large.jpg",
        "attribution": "(c) Konstantinos Kalaentzis, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/190067465/large.jpeg",
        "attribution": "(c) chrisl232, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/318425178/large.jpeg",
        "attribution": "(c) meryema, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/100373440/large.jpeg",
        "attribution": "(c) Nick Lambert, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/32417237/large.jpeg",
        "attribution": "(c) 洪嘉筠, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/483315690/large.jpg",
        "attribution": "(c) babbling-brook, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/63256764/large.jpeg",
        "attribution": "(c) Jennifer Ragsdale, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/164883420/large.jpeg",
        "attribution": "(c) recall79, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/356740529/large.jpeg",
        "attribution": "(c) M, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/262960398/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/33941665/large.jpg",
        "attribution": "(c) bethanyyy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/496463738/large.jpg",
        "attribution": "(c) 陳暘潪, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6655079/large.jpg",
        "attribution": "(c) plectrudis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/156868807/large.jpg",
        "attribution": "(c) charley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/35063017/large.jpeg",
        "attribution": "(c) María Eugenia Mendiola González, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/200433633/large.jpeg",
        "attribution": "(c) Michail Michalakopoulos, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/334947882/large.jpg",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/529802929/large.jpg",
        "attribution": "(c) Jerry Levenson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/537592050/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/5147362/large.jpg",
        "attribution": "(c) Cassie Phillips, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/103110386/large.jpeg",
        "attribution": "(c) naturalist_ck, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/17624732/large.jpeg",
        "attribution": "(c) Hippytiger, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/76023326/large.jpeg",
        "attribution": "(c) Alicia Ofsak, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/234744125/large.jpg",
        "attribution": "(c) ipatel228, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/414650727/large.jpeg",
        "attribution": "(c) thaven, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/171913294/large.jpg",
        "attribution": "(c) Josh/Joshua, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57565807/large.jpeg",
        "attribution": "(c) John C., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/434910249/large.jpeg",
        "attribution": "(c) verdure02, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/326449511/large.jpeg",
        "attribution": "(c) Nature Boi, all rights reserved",
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
        "url": "https://static.inaturalist.org/photos/504168533/large.jpg",
        "attribution": "(c) Adam Saffles, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/381453674/large.jpeg",
        "attribution": "(c) Michael Jamail, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/274766092/large.jpg",
        "attribution": "(c) Jose Roberto Palmos, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/435580524/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/17860221/large.jpg",
        "attribution": "(c) michaelgold, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/149929689/large.jpg",
        "attribution": "(c) D.J. McNeil, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/426354777/large.jpeg",
        "attribution": "(c) Talat S., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/257431416/large.jpg",
        "attribution": "(c) Douglas Goldman, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/252812156/large.jpeg",
        "attribution": "(c) alcee_aleena_010, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/28589977/large.jpg",
        "attribution": "(c) Jenni Bird, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/119057966/large.jpeg",
        "attribution": "(c) Jason J Brunet, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/583525523/large.jpg",
        "attribution": "(c) gg_copen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/39850834/large.jpg",
        "attribution": "(c) jeremyrhodes, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/279616087/large.jpeg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/198992636/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/353912973/large.jpeg",
        "attribution": "(c) Branson Khounvichith, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/376793833/large.jpg",
        "attribution": "(c) Ad Konings, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/463551364/large.jpg",
        "attribution": "(c) MJ, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/196179666/large.jpeg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/508138981/large.jpg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/377669696/large.jpeg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13568021/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/198927460/large.jpeg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/348602399/large.jpg",
        "attribution": "(c) Pete Followill, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/616038708/large.jpg",
        "attribution": "(c) David B Jackson, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://static.inaturalist.org/photos/21868536/large.jpg",
        "attribution": "(c) Jonathan Hoskins, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/107002920/large.jpeg",
        "attribution": "(c) Donna J. Parry, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/308182152/large.jpg",
        "attribution": "(c) dadrummond, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/421677119/large.jpeg",
        "attribution": "(c) W Rao, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/10350063/large.jpg",
        "attribution": "(c) laurenver, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/221050660/large.jpg",
        "attribution": "(c) Julian Fuchs, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/91416838/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/309621856/large.jpg",
        "attribution": "(c) Misha Zitser, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/8807301/large.jpg",
        "attribution": "(c) Jamie, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/147065447/large.jpg",
        "attribution": "(c) David Beadle, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/89341750/large.jpg",
        "attribution": "(c) David Jeffrey Ringer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/213160926/large.jpg",
        "attribution": "(c) Susan J. Hewitt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/76267469/large.jpeg",
        "attribution": "(c) mitchm44, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/202381024/large.jpeg",
        "attribution": "(c) Sean Cozart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/202040186/large.jpg",
        "attribution": "(c) Kent Ross, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/572030129/large.jpg",
        "attribution": "(c) Jim Hilgartner, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20610349/large.jpg",
        "attribution": "(c) Josh van der Meulen, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/259610952/large.jpg",
        "attribution": "(c) jim22lawrence, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15004045/large.jpg",
        "attribution": "(c) Norman Welsh, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/313762545/large.jpg",
        "attribution": "(c) Andrew Campbell, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/443729568/large.jpg",
        "attribution": "(c) Kent Ross, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/126201398/large.jpg",
        "attribution": "(c) Derick Carss, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/139307982/large.jpeg",
        "attribution": "(c) Anna Hess, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/113308713/large.jpg",
        "attribution": "(c) John Scharpen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/275323897/large.jpeg",
        "attribution": "(c) blanchegarde, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/424619912/large.jpg",
        "attribution": "(c) Jason Headley, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/19699858/large.jpg",
        "attribution": "(c) Steve Jones, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/33514356/large.jpg",
        "attribution": "(c) jtalbert04, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/67604997/large.jpg",
        "attribution": "(c) Robert Howell, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/64219013/large.jpg",
        "attribution": "(c) pbsands, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/538650869/large.jpg",
        "attribution": "(c) Eoghan Irwin, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2936253/large.jpg",
        "attribution": "(c) dryan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/19272902/large.jpg",
        "attribution": "(c) mattbuckingham, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/320072945/large.jpg",
        "attribution": "(c) yukioz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/316902885/large.jpg",
        "attribution": "(c) Cheryl Millett, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/322605085/large.jpg",
        "attribution": "(c) Maxwell Soell, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/95161138/large.jpg",
        "attribution": "(c) Mike Rochford, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/369917194/large.jpg",
        "attribution": "(c) Kevin Chen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/375948563/large.jpg",
        "attribution": "(c) Ryan Singer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "common-carp": {
    "inat_taxon_id": 53911,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2754663/large.JPG",
    "cover_image_attribution": "(c) lonnyholmes, some rights reserved (CC BY-NC), uploaded by lonnyholmes",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/175650416/large.jpg",
        "attribution": "(c) Tatiana Svidskaia, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/156268710/large.jpg",
        "attribution": "(c) Brayden Paulk, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2754663/large.JPG",
        "attribution": "(c) lonnyholmes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/384516310/large.jpg",
        "attribution": "(c) Roderick Hornby, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/58277904/large.jpg",
        "attribution": "(c) Gianmaria Marchese, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/115776891/large.jpeg",
        "attribution": "(c) Daniel Wieferich, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/484856767/large.jpg",
        "attribution": "(c) uconnbirdfish, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/534172748/large.jpg",
        "attribution": "(c) Khemthong Tonsakulrungruang, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/279998979/large.jpg",
        "attribution": "(c) Greg Frie, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/280608519/large.jpeg",
        "attribution": "(c) dawnborchardt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/153364436/large.jpeg",
        "attribution": "(c) Carol Garrison, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/317739750/large.jpg",
        "attribution": "(c) Kim Falck, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/107670219/large.jpg",
        "attribution": "(c) kevindb, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/385249294/large.gif",
        "attribution": "(c) bdagley, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/227805361/large.jpeg",
        "attribution": "(c) Alma C. Schrage, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/315591082/large.jpg",
        "attribution": "(c) Marion, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/322669018/large.jpg",
        "attribution": "(c) Molly Hanse, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/163663328/large.jpeg",
        "attribution": "(c) Anthony Snyder, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/132999766/large.jpeg",
        "attribution": "(c) Jeremy Gatten, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/97433501/large.jpeg",
        "attribution": "(c) Rick Barricklow, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/301511758/large.jpeg",
        "attribution": "(c) David Mantack, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/444690111/large.jpeg",
        "attribution": "(c) tanker-aviator-naturalist, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/26319588/large.jpeg",
        "attribution": "(c) Zac Cota, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/526436174/large.jpg",
        "attribution": "(c) nyx_shade, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/339278100/large.jpeg",
        "attribution": "(c) Ruth Ann Pearsons, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/78842358/large.jpg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/357235033/large.jpg",
        "attribution": "(c) olivia2001, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/432801672/large.jpg",
        "attribution": "(c) Miguel A. Chavez Caballero, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/50269820/large.jpg",
        "attribution": "(c) rangerjohn621, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/384352953/large.jpg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/107265523/large.jpg",
        "attribution": "(c) Michael J. Papay, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/297266323/large.jpeg",
        "attribution": "(c) mamiles, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/16218486/large.jpg",
        "attribution": "(c) Aaron Echols, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11021522/large.jpg",
        "attribution": "(c) Todd Fitzgerald, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/33002659/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/232157759/large.jpeg",
        "attribution": "(c) nemesio_torres, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/34412637/large.jpg",
        "attribution": "(c) Judy Gallagher, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/330587169/large.jpg",
        "attribution": "(c) Jaro Schacht, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/55626672/large.jpg",
        "attribution": "(c) Brian Gooding, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/50795519/large.jpg",
        "attribution": "(c) Kim Moore, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28123154/large.jpeg",
        "attribution": "(c) Rob Van Epps, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/394007124/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/40931007/large.jpg",
        "attribution": "(c) Brian Gooding, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/155762126/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/430512765/large.jpg",
        "attribution": "(c) Lauren Pitt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/585498394/large.jpg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/40417640/large.jpeg",
        "attribution": "(c) Denis Doucet, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/314420815/large.jpg",
        "attribution": "(c) ken_ohio, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/154155613/large.jpeg",
        "attribution": "(c) Phyllis Holst, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/78630799/large.jpeg",
        "attribution": "(c) stephen, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/107339891/large.jpeg",
        "attribution": "(c) wildexxposure, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/235101817/large.jpg",
        "attribution": "(c) Beth Burrous, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/153467975/large.jpeg",
        "attribution": "(c) Elizabeth Dejean, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/45782280/large.jpg",
        "attribution": "(c) Don, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/122742109/large.jpg",
        "attribution": "(c) Julie Reid, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/233383029/large.jpeg",
        "attribution": "(c) J Thompson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/247558377/large.jpg",
        "attribution": "(c) danipetting, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11462731/large.jpeg",
        "attribution": "(c) barrettrp, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/125760205/large.jpeg",
        "attribution": "(c) Dan Treadwell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/387353156/large.jpeg",
        "attribution": "(c) Siddarth Machado, some rights reserved (CC BY)",
        "license": "cc-by",
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
      {
        "url": "https://static.inaturalist.org/photos/300858692/large.jpg",
        "attribution": "(c) azveronika, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/423512373/large.jpeg",
        "attribution": "(c) Mason Salem, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/113829167/large.jpg",
        "attribution": "(c) Adam J. Searcy, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/177565455/large.jpg",
        "attribution": "(c) Timothy Reichard, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/138005379/large.jpg",
        "attribution": "(c) Jody, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/124758823/large.jpeg",
        "attribution": "(c) Juan Carlos Corani, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/123749239/large.jpeg",
        "attribution": "(c) Linda Jo Conn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/427992355/large.jpeg",
        "attribution": "(c) Gavin Slater, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/196891992/large.jpg",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/845747/large.jpg",
        "attribution": "(c) Justin Johnsen, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6270776/large.jpg",
        "attribution": "(c) Ken-ichi Ueda, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/185468460/large.jpg",
        "attribution": "(c) Dan Antonaccio, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32948726/large.jpeg",
        "attribution": "(c) Annika Lindqvist, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12774999/large.jpg",
        "attribution": "(c) willem9, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/94034792/large.jpg",
        "attribution": "(c) terence zahner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/266914604/large.jpg",
        "attribution": "(c) Mark Faherty, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/597700067/large.jpg",
        "attribution": "(c) Damon Tighe, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/28884287/large.jpg",
        "attribution": "(c) skylerewing, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/191414186/large.jpg",
        "attribution": "(c) Andrea Carpio, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/462693534/large.jpg",
        "attribution": "(c) laurenwestendorf, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/350410866/large.jpg",
        "attribution": "(c) Mike Stewart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/183457401/large.jpg",
        "attribution": "(c) Mike Stewart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/141942000/large.jpg",
        "attribution": "(c) Robin Gwen Agarwal, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/187541819/large.jpg",
        "attribution": "(c) thejasperpatch, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63301364/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/253372107/large.jpg",
        "attribution": "(c) Matt and Kaysea Bruce, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/85975211/large.jpg",
        "attribution": "(c) Ty Smith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30428940/large.jpg",
        "attribution": "(c) Adam Azarchs, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30103624/large.jpeg",
        "attribution": "(c) Cat Abbott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/500832122/large.jpeg",
        "attribution": "(c) beastsofthebayarea, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/432311956/large.jpg",
        "attribution": "(c) Gordon Karre, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/61403705/large.jpg",
        "attribution": "(c) Kevin Lynch, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/89792084/large.jpg",
        "attribution": "(c) Joshua Liverman, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/445930836/large.jpg",
        "attribution": "(c) alexsngai, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/49434023/large.jpeg",
        "attribution": "(c) P Holroyd, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/55018642/large.jpg",
        "attribution": "(c) Declan Troy, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/253318670/large.jpeg",
        "attribution": "(c) Eric N. Rittmeyer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/356821484/large.jpeg",
        "attribution": "(c) Rich Hoyer, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4505994/large.jpg",
        "attribution": "(c) Cullen Hanks, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/71174852/large.jpg",
        "attribution": "(c) abramnilsen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/574024653/large.jpg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/205329590/large.jpeg",
        "attribution": "(c) Carlos García Casanova, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/161830366/large.jpeg",
        "attribution": "(c) Bill Carrell, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/231311731/large.jpeg",
        "attribution": "(c) Mike Farley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/459749516/large.jpg",
        "attribution": "(c) thesnakefromthelemma, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/86831852/large.jpeg",
        "attribution": "(c) isidro732, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/21158992/large.jpeg",
        "attribution": "(c) pisum, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1076782/large.JPG",
        "attribution": "(c) Nick Ellis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/98845789/large.jpg",
        "attribution": "(c) kateco4, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/26627816/large.jpeg",
        "attribution": "(c) Susanna Heideman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/5533030/large.jpg",
        "attribution": "(c) Marco Serrano, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/147930955/large.jpg",
        "attribution": "(c) Joe Sexton, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/51232475/large.jpg",
        "attribution": "(c) Murray Fisher, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/154592484/large.jpeg",
        "attribution": "(c) Terri Norris, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/48809452/large.jpeg",
        "attribution": "(c) Ansel Oommen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/157607832/large.jpg",
        "attribution": "(c) davidszoo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/162583342/large.jpeg",
        "attribution": "(c) Lilly Blase, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/229150239/large.jpeg",
        "attribution": "(c) Lindsay Anderson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/423798099/large.jpeg",
        "attribution": "(c) Tobias Thrien, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/456522820/large.jpg",
        "attribution": "(c) Todd Council, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://static.inaturalist.org/photos/231028381/large.jpg",
        "attribution": "(c) David Hernandez, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/118019762/large.jpeg",
        "attribution": "(c) chloe ⋆˚꩜｡, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/111300988/large.jpg",
        "attribution": "(c) Alexander Fateryga, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/11243466/large.jpeg",
        "attribution": "(c) Flown Kimmerling, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/167176550/large.jpeg",
        "attribution": "(c) Christine Williams, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/174527955/large.jpg",
        "attribution": "(c) wingwatcher48, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/59625488/large.jpeg",
        "attribution": "(c) Ann Victory, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/152054857/large.jpeg",
        "attribution": "(c) hikefunm, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/129680660/large.jpg",
        "attribution": "(c) Steve Raduns, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/318608629/large.jpg",
        "attribution": "(c) camogains, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12990648/large.jpeg",
        "attribution": "(c) pfaucher, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/470719733/large.jpeg",
        "attribution": "(c) Zachary Meeks, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/182713584/large.jpg",
        "attribution": "(c) José Antonio Linage Espinosa, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/109804011/large.jpg",
        "attribution": "(c) Aaron Echols, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/115901838/large.jpg",
        "attribution": "(c) Mason Maron, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/444050932/large.jpeg",
        "attribution": "(c) Below Blue Water Diver, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/173884349/large.png",
        "attribution": "(c) Eridan Xharahi, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/263500742/large.jpg",
        "attribution": "(c) John Guerin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/21144467/large.jpg",
        "attribution": "(c) Sarah Towne, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/182501981/large.jpg",
        "attribution": "(c) Bridget Spencer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/69413152/large.jpeg",
        "attribution": "(c) Dad is finally uploading observations, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/23524935/large.jpg",
        "attribution": "(c) Alexis Tinker-Tsavalas, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/622992548/large.jpg",
        "attribution": "(c) Daniel, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/174712326/large.jpeg",
        "attribution": "(c) Kristin M. Tolle, some rights reserved (CC BY)",
        "license": "cc-by",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/107395752/large.jpg",
        "attribution": "(c) Mary Keim, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/402494560/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/242985800/large.jpg",
        "attribution": "(c) Cathy Bester, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/257751299/large.jpeg",
        "attribution": "(c) Jon Zabowski, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/169943089/large.jpeg",
        "attribution": "(c) Mila C., some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/237739185/large.jpeg",
        "attribution": "(c) Daniel Onea, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/31579590/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/576159420/large.jpg",
        "attribution": "(c) kitsun3, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/598778698/large.jpg",
        "attribution": "(c) monichar, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/91179741/large.jpg",
        "attribution": "(c) nuiesser, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/322656891/large.jpeg",
        "attribution": "(c) Juan Miguel Artigas Azas, all rights reserved",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177719984/large.jpg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/181099285/large.jpeg",
        "attribution": "(c) joannerusso, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57325487/large.jpeg",
        "attribution": "(c) Izabella Farr, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/272475766/large.jpeg",
        "attribution": "(c) Win Goddard, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/166444302/large.jpg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/337467154/large.gif",
        "attribution": "(c) tom ward, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/298315330/large.jpg",
        "attribution": "(c) John Martin, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/42235011/large.jpg",
        "attribution": "(c) Michelle Reynolds, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/596139640/large.jpg",
        "attribution": "(c) Josh Baker, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/168408341/large.jpg",
        "attribution": "(c) kitemongoose, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/252998062/large.jpeg",
        "attribution": "(c) Tom Murray, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/447720022/large.jpeg",
        "attribution": "(c) Kay Dantzler, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32402789/large.jpg",
        "attribution": "(c) Chris McAnlis, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/246053124/large.jpg",
        "attribution": "(c) janeabel, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177705899/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/56069020/large.jpg",
        "attribution": "(c) laurenjansensimpson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/71248011/large.jpg",
        "attribution": "(c) noahelieve, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/90362757/large.jpg",
        "attribution": "(c) baxter2018, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51024210/large.jpg",
        "attribution": "(c) maryyott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/197591548/large.jpg",
        "attribution": "(c) Sequoia Janirella Wrens, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/356762896/large.jpeg",
        "attribution": "(c) Matthew Lindsey, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/374826008/large.jpeg",
        "attribution": "(c) janeabel, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/127909163/large.jpg",
        "attribution": "(c) pha1016, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/427566409/large.jpeg",
        "attribution": "(c) tdloyd, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/152047475/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/13720976/large.jpg",
        "attribution": "(c) Jamie, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/113729944/large.jpg",
        "attribution": "(c) CJ Reilly III, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2388608/large.JPG",
        "attribution": "(c) Bob O'Kennon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/34592517/large.jpeg",
        "attribution": "(c) Michael Pierson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/244468310/large.jpeg",
        "attribution": "(c) RJ Baltierra, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/463874130/large.jpeg",
        "attribution": "(c) Creed Clayton, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/43162432/large.jpeg",
        "attribution": "(c) Sean Cozart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32032839/large.jpeg",
        "attribution": "(c) Creed Clayton, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/305895404/large.jpeg",
        "attribution": "(c) herper47, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/283949017/large.jpg",
        "attribution": "(c) Janice Goetz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/80719466/large.jpeg",
        "attribution": "(c) Alexander Harman, Ph. D., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/70646156/large.jpeg",
        "attribution": "(c) B. P. White, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/111207577/large.jpeg",
        "attribution": "(c) sholin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/306492209/large.jpeg",
        "attribution": "(c) Mila C., some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/80870688/large.jpg",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://static.inaturalist.org/photos/286007083/large.jpeg",
        "attribution": "(c) J., all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/196644643/large.jpg",
        "attribution": "(c) tiller, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/58801963/large.jpg",
        "attribution": "(c) Bryan Box, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/667137/large.JPG",
        "attribution": "(c) Juan Cruzado Cortés, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/258976334/large.jpeg",
        "attribution": "(c) Bernie Paquette, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/534000712/large.jpg",
        "attribution": "(c) Lauren Kovanko, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/388647454/large.jpeg",
        "attribution": "(c) Emily Dunning, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/263219042/large.jpg",
        "attribution": "(c) Ashley M Bradford, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/324600760/large.jpg",
        "attribution": "(c) Liz Soria, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/93581184/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/195207850/large.jpg",
        "attribution": "(c) Sandy Wolkenberg, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/83302009/large.jpeg",
        "attribution": "(c) butterfly546, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/72783154/large.jpg",
        "attribution": "(c) russell321, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/467254266/large.jpeg",
        "attribution": "(c) j vleming, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11777556/large.jpg",
        "attribution": "(c) Kerry Carloy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/173898495/large.jpg",
        "attribution": "(c) Randy, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1017001/large.JPG",
        "attribution": "(c) 101724807574796438015, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/147076271/large.jpg",
        "attribution": "(c) backyard_bug, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/511996734/large.jpg",
        "attribution": "(c) davis0117, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/162197172/large.jpg",
        "attribution": "(c) jammasterjim, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/164507571/large.jpeg",
        "attribution": "(c) gpete, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3398006/large.jpg",
        "attribution": "(c) Roberto R. Calderón, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/113503761/large.jpg",
        "attribution": "(c) Kim Moore, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/199252355/large.jpeg",
        "attribution": "(c) Jameson Christiansen, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/107537094/large.jpg",
        "attribution": "(c) mollydoc1123, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/337403600/large.jpeg",
        "attribution": "(c) Sharon Nethercott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/320176472/large.jpg",
        "attribution": "(c) jorobertson1, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/176240255/large.jpg",
        "attribution": "(c) cavann, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/442134072/large.png",
        "attribution": "(c) bio1egamendez007, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/193349957/large.jpeg",
        "attribution": "(c) Natalie Rudkins, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/194578671/large.jpeg",
        "attribution": "(c) Jophophora, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/322058009/large.jpg",
        "attribution": "(c) Marie, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/469945121/large.jpg",
        "attribution": "(c) Ryan Schwab, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/108707785/large.jpeg",
        "attribution": "(c) joannerusso, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/176023576/large.jpeg",
        "attribution": "(c) Mila C., some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12250146/large.jpeg",
        "attribution": "(c) Greg Hanisek, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/366638685/large.jpeg",
        "attribution": "(c) Shreybae, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/81998339/large.jpeg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/183711787/large.jpeg",
        "attribution": "(c) Jennifer Glover, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15101068/large.jpg",
        "attribution": "(c) annagypsy, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/563906822/large.jpg",
        "attribution": "(c) Stephanie Lyon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/131007383/large.jpg",
        "attribution": "(c) rollingplainst, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/562121093/large.jpg",
        "attribution": "(c) Laura Attarian, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/564605460/large.jpg",
        "attribution": "(c) Marcus Porter, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/384629368/large.jpg",
        "attribution": "(c) Eric Keith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/197976317/large.jpeg",
        "attribution": "(c) Dimitris S, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/331110318/large.jpg",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/502659457/large.jpg",
        "attribution": "(c) Ty Smith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2182568/large.jpg",
        "attribution": "(c) Diana-Terry Hibbitts, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/387510318/large.jpg",
        "attribution": "(c) Dylan Osterhaus, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/42547595/large.jpg",
        "attribution": "(c) rbbrummitt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/508521683/large.jpg",
        "attribution": "(c) Malcolm Kurtz, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/26210699/large.jpeg",
        "attribution": "(c) Laura Mae, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/211995843/large.jpeg",
        "attribution": "(c) Mark Dennis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/417280364/large.jpeg",
        "attribution": "(c) Carrie Lefebvre, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/318712391/large.jpeg",
        "attribution": "(c) ecovore, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/39053392/large.jpg",
        "attribution": "(c) Susan Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/127912329/large.jpeg",
        "attribution": "(c) Nicolas Baca Castex, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/505496311/large.jpg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/86589925/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/167548963/large.jpg",
        "attribution": "(c) Alain Maire, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/203990118/large.jpg",
        "attribution": "(c) Kristen M, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/378363667/large.jpeg",
        "attribution": "(c) csledge, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/594364283/large.jpg",
        "attribution": "(c) Misha Zitser, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://static.inaturalist.org/photos/54110694/large.jpeg",
        "attribution": "(c) Steven Traina, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/167137197/large.jpg",
        "attribution": "(c) Aaron Crowell, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177740459/large.jpg",
        "attribution": "(c) Robby Deans, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/563015188/large.jpg",
        "attribution": "(c) bluecrab, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/64208268/large.jpeg",
        "attribution": "(c) Adam Silwick, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/258245206/large.jpg",
        "attribution": "(c) johnwilliams, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/1564456/large.jpg",
        "attribution": "(c) Jonah Evans, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/575948729/large.jpg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/584471824/large.jpg",
        "attribution": "(c) cglauf, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/41446004/large.jpg",
        "attribution": "(c) Alexander Harman, Ph. D., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/431674972/large.jpg",
        "attribution": "(c) Cindi Fitzgerald, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/617476814/large.jpg",
        "attribution": "(c) Madelyn Snyder, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/465365295/large.jpeg",
        "attribution": "(c) gena of Jesus, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/576763136/large.jpg",
        "attribution": "(c) Ian Goddard, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11186316/large.jpg",
        "attribution": "(c) Antonia Bookbinder, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/387827469/large.jpg",
        "attribution": "(c) bugcatcherjameson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/101232322/large.jpeg",
        "attribution": "(c) raymie, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/232210868/large.jpg",
        "attribution": "(c) earnoodles, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/290138625/large.jpeg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/573236967/large.jpg",
        "attribution": "(c) wildmaven, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/373609629/large.jpeg",
        "attribution": "(c) Corey Hayes, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/98339126/large.jpg",
        "attribution": "(c) phiditude, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/452312461/large.jpeg",
        "attribution": "(c) Margaret Brown, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/520277653/large.jpg",
        "attribution": "(c) grinnin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://static.inaturalist.org/photos/38073528/large.jpeg",
        "attribution": "(c) Eric Holden, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/58712322/large.jpg",
        "attribution": "(c) Sarah Richer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63227827/large.jpg",
        "attribution": "(c) Judy Gallagher, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/267269718/large.jpg",
        "attribution": "(c) mancat, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/105292661/large.jpg",
        "attribution": "(c) Calista McRae, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7946643/large.jpeg",
        "attribution": "(c) Bill Stitt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/121090678/large.jpg",
        "attribution": "(c) William (Bill) Lamond, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/185340456/large.jpg",
        "attribution": "(c) Lexie, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/347862418/large.jpeg",
        "attribution": "(c) Peyton Phelps, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/354096119/large.jpg",
        "attribution": "(c) jdrol, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32534131/large.jpg",
        "attribution": "(c) Green-Wood, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/105302920/large.jpg",
        "attribution": "(c) Farley Sullivan, all rights reserved",
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
      {
        "url": "https://static.inaturalist.org/photos/26374545/large.jpg",
        "attribution": "(c) khalen, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27480277/large.jpg",
        "attribution": "(c) Doug D., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/587394374/large.jpg",
        "attribution": "(c) Roderick Hornby, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29877283/large.jpg",
        "attribution": "(c) Josh van der Meulen, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/62074913/large.jpg",
        "attribution": "(c) Katie Guerin Haegele, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/512102069/large.jpg",
        "attribution": "(c) nikonglass, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/31268371/large.jpg",
        "attribution": "(c) wtobin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/462541997/large.jpg",
        "attribution": "(c) Brice C., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/412229243/large.jpeg",
        "attribution": "(c) Brady O'Brien, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/350365757/large.jpg",
        "attribution": "(c) Susan Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14045970/large.jpg",
        "attribution": "(c) Doug D., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/64229922/large.jpg",
        "attribution": "(c) Liam Norton, all rights reserved",
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
        "url": "https://static.inaturalist.org/photos/61659515/large.jpg",
        "attribution": "(c) randyfu, all rights reserved",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/447476162/large.jpeg",
        "attribution": "(c) wwench, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/1296167/large.jpg",
        "attribution": "(c) Suzette Rogers, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/438840511/large.jpeg",
        "attribution": "(c) Svetlana Iachkova, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/488514710/large.jpeg",
        "attribution": "(c) taramhuynh, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55276499/large.jpg",
        "attribution": "(c) Nido Paras, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/48462255/large.jpeg",
        "attribution": "(c) Ron Stephens, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/82473490/large.jpg",
        "attribution": "(c) CompanyInk, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/112367394/large.jpg",
        "attribution": "(c) George Afghan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/31530727/large.jpeg",
        "attribution": "(c) Bob O'Kennon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/115495522/large.jpg",
        "attribution": "(c) Héctor Sánchez, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/252449469/large.jpg",
        "attribution": "(c) Rick Travis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/220692322/large.jpg",
        "attribution": "(c) osodad, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3048290/large.JPG",
        "attribution": "(c) kevinhintsa, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/765718/large.jpg",
        "attribution": "(c) Kim Fike, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/38172003/large.jpg",
        "attribution": "(c) candelariaconde, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/60448093/large.jpg",
        "attribution": "(c) nereydaroman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/333248977/large.jpg",
        "attribution": "(c) pinkaxolotl, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/260387512/large.jpeg",
        "attribution": "(c) Joey Santore, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/158279635/large.jpeg",
        "attribution": "(c) Jo Roberts, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/125460264/large.jpg",
        "attribution": "(c) selene_ramirez_olivas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/6012874/large.jpeg",
        "attribution": "(c) Gabby Roman, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/10206707/large.jpg",
        "attribution": "(c) Lisa Winnett-Pequeno, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/171596132/large.jpg",
        "attribution": "(c) vnettle, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/195487937/large.jpg",
        "attribution": "(c) Priscilla Crawford, Biologist Ok BioSurvey, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/328516119/large.jpeg",
        "attribution": "(c) Sean Winkler, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/228478218/large.jpg",
        "attribution": "(c) scottpettengill1, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/599848065/large.jpg",
        "attribution": "(c) haleydreis22, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/9742970/large.jpg",
        "attribution": "(c) Kai Joaquin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/127166701/large.jpg",
        "attribution": "(c) Erika Guadalupe Sariñana Flores, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/68009213/large.jpeg",
        "attribution": "(c) Sean Cozart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/213110179/large.jpg",
        "attribution": "(c) Puzankov Aleksei, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/176078209/large.jpeg",
        "attribution": "(c) Jorge A. Pérez Torres, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2265912/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/350223/large.JPG",
        "attribution": "(c) sea-kangaroo, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/238280/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/184547894/large.jpeg",
        "attribution": "(c) Stephen Taylor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/35561438/large.jpg",
        "attribution": "(c) Karl, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/341407385/large.jpeg",
        "attribution": "(c) Jorge A. Pérez Torres, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/15037811/large.jpg",
        "attribution": "(c) Margaret Griffis O'Brien, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/37884103/large.jpg",
        "attribution": "(c) Alex Aldanese, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/208830475/large.jpg",
        "attribution": "(c) M. Goff, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/109605807/large.jpeg",
        "attribution": "(c) aliaska, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/479753767/large.jpeg",
        "attribution": "(c) Alexandria 'Alex' Wenninger, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/449801927/large.jpeg",
        "attribution": "(c) Josiah Smith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/59788098/large.jpeg",
        "attribution": "(c) Jeffery Heizer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/46234652/large.jpg",
        "attribution": "(c) Murray Fisher, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/610948640/large.jpg",
        "attribution": "(c) shapomacro, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/82066816/large.jpeg",
        "attribution": "(c) Tina, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/100923723/large.jpg",
        "attribution": "(c) biofueled, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/305708719/large.jpeg",
        "attribution": "(c) Gavin Slater, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/307010606/large.jpg",
        "attribution": "(c) Ирина Бортникова, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/19228583/large.jpg",
        "attribution": "(c) dickwood, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/358542578/large.jpeg",
        "attribution": "(c) Yulia Glazunova, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/66490655/large.jpg",
        "attribution": "(c) Jon J. Laysell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/447303905/large.jpeg",
        "attribution": "(c) Valia Pavlou, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/111972528/large.jpeg",
        "attribution": "(c) Pedram Türkoğlu, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/545688021/large.jpg",
        "attribution": "(c) arr05, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/219119412/large.jpg",
        "attribution": "(c) sullyken23, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/247202631/large.jpg",
        "attribution": "(c) Мария Ушакова, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/194641029/large.jpg",
        "attribution": "(c) naturecandids, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/336687589/large.jpeg",
        "attribution": "(c) Desmond Ney, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/185384513/large.jpg",
        "attribution": "(c) Yacine Nemri, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/239225136/large.jpg",
        "attribution": "(c) Marilyn Campbell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/514416531/large.jpg",
        "attribution": "(c) BlackFern, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12171377/large.jpg",
        "attribution": "(c) Kathryn Wells, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/103056195/large.jpg",
        "attribution": "(c) sweetcultist, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/482242526/large.jpeg",
        "attribution": "(c) Daphne X Blevins, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/13508690/large.jpg",
        "attribution": "(c) soonerrose, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15585778/large.jpeg",
        "attribution": "(c) C. Mallory, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/290331493/large.jpg",
        "attribution": "(c) ugiebraan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/123697769/large.jpg",
        "attribution": "(c) ayushvajhala, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/484256206/large.jpg",
        "attribution": "(c) tallpaultheforester, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2748573/large.JPG",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/407111224/large.jpeg",
        "attribution": "(c) Jean H., some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/65060792/large.jpg",
        "attribution": "(c) Stan Drezek, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/14505958/large.jpeg",
        "attribution": "(c) Aaron Swink, all rights reserved",
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
      {
        "url": "https://static.inaturalist.org/photos/254654906/large.gif",
        "attribution": "(c) Marko Doboš, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/98977871/large.jpg",
        "attribution": "(c) gary1776, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/182128644/large.jpg",
        "attribution": "(c) mc_photo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/452182767/large.jpeg",
        "attribution": "(c) Anonimous Pug, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/557581273/large.jpg",
        "attribution": "(c) Sam Schaack, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/47205870/large.png",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/259197247/large.jpg",
        "attribution": "(c) Paolo Mazzei, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/369077953/large.jpeg",
        "attribution": "(c) anselmus, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/440893291/large.gif",
        "attribution": "(c) Josué Orfão, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/182021806/large.jpg",
        "attribution": "(c) Susan Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/513508614/large.jpg",
        "attribution": "(c) Tom, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/186106012/large.jpg",
        "attribution": "(c) NoNiSs, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "flathead-catfish": {
    "inat_taxon_id": 81552,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/469085060/large.jpg",
    "cover_image_attribution": "\nEngbretson, Eric / U.S. Fish and Wildlife Service, no known copyright restrictions (public domain)",
    "cover_image_license": "pd",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/310512406/large.jpg",
        "attribution": "(c) ethan_58, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/326694665/large.jpg",
        "attribution": "(c) ecota55, some rights reserved (CC BY-ND)",
        "license": "cc-by-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/560630308/large.jpg",
        "attribution": "(c) Emilio Concari, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/553966789/large.jpg",
        "attribution": "(c) Logan Hallstrom, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/405141993/large.jpeg",
        "attribution": "(c) heididewit, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/423640598/large.jpeg",
        "attribution": "(c) Mark Schwalm, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/564293580/large.jpg",
        "attribution": "(c) generalfishing, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/9138164/large.jpg",
        "attribution": "(c) Dan, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/579542275/large.jpg",
        "attribution": "(c) Owen Reeves, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/213105197/large.jpg",
        "attribution": "(c) salvelinus, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/419806763/large.jpeg",
        "attribution": "(c) Jacob Hann, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/603831296/large.jpg",
        "attribution": "(c) lefua, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "florida-longear-sunfish": {
    "inat_taxon_id": 104253,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/142674249/large.jpg",
    "cover_image_attribution": "(c) Koaw Nature, some rights reserved (CC BY-NC), uploaded by Koaw Nature",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/44464553/large.jpg",
        "attribution": "(c) mackelroy, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/57240040/large.jpg",
        "attribution": "(c) Russ Jones, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/356984392/large.jpeg",
        "attribution": "(c) jntsestrout, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/210702540/large.jpeg",
        "attribution": "(c) Aaron Ludwig, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/380271186/large.jpeg",
        "attribution": "(c) Michi Tobler, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/142674249/large.jpg",
        "attribution": "(c) Koaw Nature, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/304318080/large.jpeg",
        "attribution": "(c) Matthew Thompson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/148526840/large.jpeg",
        "attribution": "(c) kenopsia, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/94883589/large.jpeg",
        "attribution": "(c) canders, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/49296108/large.jpg",
        "attribution": "(c) David Weyers, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/440223626/large.jpeg",
        "attribution": "(c) los-a, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/573540305/large.jpg",
        "attribution": "(c) Matthew Kvam, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/170972174/large.jpg",
        "attribution": "(c) pridge, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28110717/large.jpeg",
        "attribution": "(c) 🌱 Aaron Lincoln 🌱, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/155447590/large.jpeg",
        "attribution": "(c) tamdsmith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/352280417/large.jpg",
        "attribution": "(c) Hill Craddock, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12683194/large.jpeg",
        "attribution": "(c) Russell Pfau, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/92719361/large.jpg",
        "attribution": "(c) kvonalt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/447474995/large.jpeg",
        "attribution": "(c) elizabethompson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/46223504/large.jpg",
        "attribution": "(c) Brady S. Dunaway, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/158513561/large.jpeg",
        "attribution": "(c) Sarah Kervin Otto, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/152283475/large.jpeg",
        "attribution": "(c) Lauren LeCroy May, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/152090177/large.jpeg",
        "attribution": "(c) Lauren LeCroy May, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51142081/large.jpg",
        "attribution": "(c) lillybyrd, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/90004306/large.jpeg",
        "attribution": "(c) Lauren LeCroy May, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/92897309/large.jpeg",
        "attribution": "(c) Cheryl Howard, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/99693888/large.jpeg",
        "attribution": "(c) honeyblackdog, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "georgetown-salamander": {
    "inat_taxon_id": 27088,
    "cover_image_url": "https://static.inaturalist.org/photos/399534243/large.jpg",
    "cover_image_attribution": "(с) Jake Scott, все права защищены, загрузил Jake Scott",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/253429405/large.jpg",
        "attribution": "(c) johnwilliams, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/346062269/large.jpeg",
        "attribution": "(c) Reid Hardin, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/285897434/large.gif",
        "attribution": "(c) Isaac Lord, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/373403915/large.jpg",
        "attribution": "(c) Alex Karasoulos, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/346746/large.jpg",
        "attribution": "(c) Nathan Bendik, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/4608062/large.jpeg",
        "attribution": "(c) Connor Adams, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/402350/large.jpg",
        "attribution": "(c) Nathan Bendik, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/58528284/large.jpeg",
        "attribution": "(c) Paul Crump, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/348428331/large.jpg",
        "attribution": "(c) Erik Atwell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/392867302/large.jpeg",
        "attribution": "(c) Alex Karasoulos, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/258137110/large.jpg",
        "attribution": "(c) Ian Meloni, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2872927/large.jpg",
        "attribution": "(c) scottwahlberg, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://static.inaturalist.org/photos/17340196/large.jpg",
        "attribution": "(c) Davida Blanton, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/504413698/large.jpg",
        "attribution": "(c) Jordan Brown, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/499904180/large.jpeg",
        "attribution": "(c) David Claro, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/328906670/large.jpg",
        "attribution": "(c) Ольга, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/79679448/large.jpg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/191025973/large.jpg",
        "attribution": "(c) Emilio Romero, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2645721/large.jpg",
        "attribution": "(c) lynnettebower, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/603525902/large.jpg",
        "attribution": "(c) zebedeugalinha, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/608522054/large.jpg",
        "attribution": "(c) zebedeugalinha, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/610210994/large.jpg",
        "attribution": "(c) sage04, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/611990770/large.jpg",
        "attribution": "(c) Hayden King, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/341228426/large.jpg",
        "attribution": "(c) naturalistchu, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/190327220/large.jpeg",
        "attribution": "(c) coontie12345, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/219270558/large.jpg",
        "attribution": "(c) Ad Konings, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/89100501/large.jpg",
        "attribution": "(c) Ryan Cooke, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/24577448/large.jpg",
        "attribution": "(c) christopherswan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/554415594/large.jpg",
        "attribution": "(c) Cody Limber, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/309487736/large.jpeg",
        "attribution": "(c) Evan Hessels, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/157413282/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/156645038/large.jpeg",
        "attribution": "(c) Georgia Dabinett, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/3014493/large.jpg",
        "attribution": "(c) Suzette Rogers, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/90575233/large.jpeg",
        "attribution": "(c) Alan Liang, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/222768842/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/88139778/large.jpg",
        "attribution": "(c) mapecha, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/518062034/large.jpg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/296107176/large.jpg",
        "attribution": "(c) Rich Kostecke, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14040788/large.jpg",
        "attribution": "(c) Mike Stewart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/122259704/large.jpg",
        "attribution": "(c) Ken Butler, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/360468256/large.jpeg",
        "attribution": "(c) Cody Stricker, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/480847276/large.jpg",
        "attribution": "(c) acoma1, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/480165082/large.jpg",
        "attribution": "(c) Katherine Benbow Daniels, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/479698420/large.jpg",
        "attribution": "(c) n8tive_texun, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/183898174/large.jpeg",
        "attribution": "(c) gwmn_ash, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/390402385/large.jpeg",
        "attribution": "(c) Balaji Devarajan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/187746803/large.jpg",
        "attribution": "(c) nancynorman, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/479721493/large.jpg",
        "attribution": "(c) dontfencemein, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "grass-carp": {
    "inat_taxon_id": 128500,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/49052039/large.jpg",
    "cover_image_attribution": "(c) Phil's 1stPix, some rights reserved (CC BY-NC-SA)",
    "cover_image_license": "cc-by-nc-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/42925227/large.jpeg",
        "attribution": "(c) Tyler Bishop, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/303079483/large.jpeg",
        "attribution": "(c) evgeniq_benihanov, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/601549472/large.jpg",
        "attribution": "(c) lily, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/466137167/large.jpeg",
        "attribution": "(c) ethanpeters, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/99140799/large.jpg",
        "attribution": "(c) Ania Fields, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/391894819/large.jpg",
        "attribution": "(c) operculum_ben, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/180229821/large.jpg",
        "attribution": "(c) Michael Kanzlemar, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/305499086/large.jpeg",
        "attribution": "(c) gfylstra, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/98815941/large.jpg",
        "attribution": "(c) michbruv127, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/411095484/large.jpeg",
        "attribution": "(c) Milli Vedder, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/447325387/large.jpeg",
        "attribution": "(c) devlin61, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/184731326/large.jpg",
        "attribution": "(c) Steve Purdon, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62429013/large.jpg",
        "attribution": "(c) belyykit, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177938904/large.jpg",
        "attribution": "(c) Cathy Bester, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/604680261/large.jpg",
        "attribution": "(c) Danielle Bussell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/243292510/large.jpg",
        "attribution": "(c) Steven R. Stadler, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/507422703/large.jpg",
        "attribution": "(c) Michael J. Papay, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/16700835/large.jpeg",
        "attribution": "(c) Kyle Jones, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11775258/large.jpg",
        "attribution": "(c) Kerry Carloy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/233242411/large.jpeg",
        "attribution": "(c) Joanne Muis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/615774281/large.gif",
        "attribution": "(c) zimmwisdom, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/256956794/large.jpg",
        "attribution": "(c) taarnersuaq, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/35974380/large.jpg",
        "attribution": "(c) Úrsula Oberg, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/506833681/large.jpg",
        "attribution": "(c) scottgillingwater, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/396217551/large.jpg",
        "attribution": "(c) MikeN, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/43077861/large.jpeg",
        "attribution": "(c) duckswim2, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/392708540/large.jpeg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/41100671/large.jpg",
        "attribution": "(c) Dixie, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/561645902/large.jpg",
        "attribution": "(c) Diana Handy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/504158116/large.jpeg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/87722282/large.jpeg",
        "attribution": "(c) Meghan, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/234269966/large.jpeg",
        "attribution": "(c) Luis Trinchan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/496114925/large.jpeg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/517438065/large.jpg",
        "attribution": "(c) mhalsted, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/18823881/large.jpg",
        "attribution": "(c) Mark Conboy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29457575/large.jpg",
        "attribution": "(c) Andy, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/347231060/large.jpeg",
        "attribution": "(c) ghostangel, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/170789420/large.jpeg",
        "attribution": "(c) Guille Ivan Spajic, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/170522394/large.jpeg",
        "attribution": "(c) JeffreyGammon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/103268077/large.jpg",
        "attribution": "(c) lyndyphotos, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/177395300/large.jpg",
        "attribution": "(c) William Wise, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/275473119/large.jpg",
        "attribution": "(c) Matt and Kaysea Bruce, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/344466819/large.jpeg",
        "attribution": "(c) Антон Виноградов, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55838382/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/287496148/large.jpg",
        "attribution": "(c) Ben Ackerley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/310877400/large.jpeg",
        "attribution": "(c) Squidpastry, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/353292681/large.jpeg",
        "attribution": "(c) Matthieu Gauvain, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/493469366/large.jpeg",
        "attribution": "(c) William Harland, some rights reserved (CC BY)",
        "license": "cc-by",
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
      {
        "url": "https://static.inaturalist.org/photos/3833655/large.jpg",
        "attribution": "(c) Tony Bernatonis, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/408807127/large.jpg",
        "attribution": "(c) Michael Warner, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/320016634/large.jpeg",
        "attribution": "(c) Cam Stewart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/7003341/large.jpeg",
        "attribution": "(c) VM Campbell, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/427724222/large.jpg",
        "attribution": "(c) Michael Warner, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/588722881/large.jpg",
        "attribution": "(c) Terri Norris, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/67610374/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/319977392/large.jpg",
        "attribution": "(c) Vishal Subramanyan, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/187336043/large.jpg",
        "attribution": "(c) Robert Yochem, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/253187859/large.jpg",
        "attribution": "(c) jim22lawrence, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/601205359/large.jpg",
        "attribution": "(c) Nelson Balcar, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/392667630/large.jpeg",
        "attribution": "(c) Cindy &amp; Artie Krasniewicz, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "great-plains-narrow-mouthed-toad": {
    "inat_taxon_id": 134277,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2877626/large.jpg",
    "cover_image_attribution": "(c) Chris Harrison, some rights reserved (CC BY-NC), uploaded by Chris Harrison",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/370429008/large.jpeg",
        "attribution": "(c) Paul Tardie, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/86231848/large.jpg",
        "attribution": "(c) Robert Dobbs, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/387234138/large.jpg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/90564307/large.jpeg",
        "attribution": "(c) roacha914, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/509229187/large.jpg",
        "attribution": "(c) jcowdog, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7450155/large.jpeg",
        "attribution": "(c) Aaron Goodwin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/330761376/large.jpg",
        "attribution": "(c) billyburrito, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/304205759/large.jpg",
        "attribution": "(c) coltonjfarra, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/90018108/large.jpg",
        "attribution": "(c) Kristin Gaddis, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/321258983/large.jpeg",
        "attribution": "(c) Dylan Mermis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/44618227/large.jpg",
        "attribution": "(c) Debra Hendricks, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/25037276/large.jpeg",
        "attribution": "(c) Robby Deans, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/74045878/large.jpg",
        "attribution": "(c) Michael Price, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14237505/large.jpeg",
        "attribution": "(c) Buddy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/530387951/large.jpg",
        "attribution": "(c) Zeev NG, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/75484484/large.jpg",
        "attribution": "(c) Kate Tynan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/294728508/large.jpeg",
        "attribution": "(c) brentcess, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12923832/large.jpg",
        "attribution": "(c) Creed Clayton, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2066965/large.jpg",
        "attribution": "(c) johnwilliams, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/480505462/large.jpeg",
        "attribution": "(c) Gerson Herrera, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/20785091/large.jpg",
        "attribution": "(c) mattbuckingham, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/535693579/large.jpg",
        "attribution": "(c) Dylan Cebulske, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/25869548/large.jpg",
        "attribution": "(c) Stirling, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/380852582/large.jpg",
        "attribution": "(c) dustinhuth, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "great-plains-toad": {
    "inat_taxon_id": 64973,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1226736/large.jpg",
    "cover_image_attribution": "(c) johnwilliams, some rights reserved (CC BY-NC), uploaded by johnwilliams",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/133948281/large.jpg",
        "attribution": "(c) possumfish98, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29677517/large.jpg",
        "attribution": "(c) Flaxington, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/308183817/large.jpg",
        "attribution": "(c) Miles Ward, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/467615677/large.jpeg",
        "attribution": "(c) Carroll Perkins, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/287688469/large.jpg",
        "attribution": "(c) Drew R. Davis, Ph.D., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57507381/large.jpg",
        "attribution": "(c) EcoNaturalist.com, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/300208412/large.jpg",
        "attribution": "(c) Amiel Hopkins, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/43963750/large.jpeg",
        "attribution": "(c) Jill Pickett, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/86451789/large.jpg",
        "attribution": "(c) arcticparrot, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/145841956/large.jpg",
        "attribution": "(c) tommygatz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/508538962/large.jpg",
        "attribution": "(c) jbpeters, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/313245428/large.jpg",
        "attribution": "(c) dezertratt, all rights reserved",
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
      {
        "url": "https://static.inaturalist.org/photos/30379422/large.jpg",
        "attribution": "(c) Luis Mauricio Mena Páramo, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/295716343/large.jpeg",
        "attribution": "(c) joushog, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/16730251/large.jpeg",
        "attribution": "(c) Marilyn Castillo Muñoz, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/258207847/large.jpeg",
        "attribution": "(c) b3ugaz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/31209416/large.jpg",
        "attribution": "(c) Scott E Severs, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/114846426/large.jpg",
        "attribution": "(c) Juan Rodolfo Lillo Lobos, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/611962457/large.jpg",
        "attribution": "(c) Marv Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4965165/large.jpg",
        "attribution": "(c) Nate Martineau, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/339079568/large.jpeg",
        "attribution": "(c) cesar bazan, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27583557/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/109461208/large.jpeg",
        "attribution": "(c) Rodrigo Izquierdo, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/16465753/large.jpg",
        "attribution": "(c) Elaine White, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/105338461/large.jpg",
        "attribution": "(c) launi, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/194820728/large.jpg",
        "attribution": "(c) Mars Rodriguez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4689212/large.jpg",
        "attribution": "(c) Gerry Salmon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/110327262/large.jpeg",
        "attribution": "(c) chloe ⋆˚꩜｡, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/89441356/large.jpg",
        "attribution": "(c) Ty Smith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/186351040/large.jpg",
        "attribution": "(c) Caleb Paul, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/72396171/large.jpg",
        "attribution": "(c) Luz Andrea Rincon, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6094478/large.jpg",
        "attribution": "(c) Sasha Azevedo, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/22502257/large.jpg",
        "attribution": "(c) Janson Jones, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/46268304/large.jpeg",
        "attribution": "(c) Carol Oeller, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/50762697/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/19509468/large.jpeg",
        "attribution": "(c) Margaret Griffis O'Brien, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/175307926/large.jpg",
        "attribution": "(c) jdsommer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/530448237/large.jpg",
        "attribution": "(c) Roderick Hornby, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/50374941/large.jpg",
        "attribution": "(c) saswat panda, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/88407546/large.jpg",
        "attribution": "(c) sapsbks, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/47571181/large.jpeg",
        "attribution": "(c) Jan Meerman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/96387577/large.jpg",
        "attribution": "(c) Jonathan Eisen, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/275474127/large.jpg",
        "attribution": "(c) Matt and Kaysea Bruce, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65823695/large.jpeg",
        "attribution": "(c) Andrea Kreuzhage, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/222740594/large.jpeg",
        "attribution": "(c) Josiah Londerée, some rights reserved (CC BY)",
        "license": "cc-by",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/606049644/large.jpg",
        "attribution": "(c) Joshua Almansa, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/499436490/large.png",
        "attribution": "(c) Eddie Long-Von Droch, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/451363941/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/209361975/large.jpg",
        "attribution": "(c) Alexander Harman, Ph. D., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/187289144/large.jpg",
        "attribution": "(c) ethanroyal, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/155716167/large.jpeg",
        "attribution": "(c) Matt Keene, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57527059/large.jpeg",
        "attribution": "(c) Daniel Folds, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/46343909/large.jpg",
        "attribution": "(c) bobbyfingers, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/123531487/large.jpg",
        "attribution": "(c) Jeff Skrentny, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/126616720/large.jpeg",
        "attribution": "(c) k8thegr8, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/446544485/large.jpeg",
        "attribution": "(c) Peyton Phelps, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3460639/large.JPG",
        "attribution": "(c) rrichter, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "gulf-coast-toad": {
    "inat_taxon_id": 65849,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/487180/large.jpg",
    "cover_image_attribution": "(c) Jeromi Hefner, some rights reserved (CC BY)",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/76296170/large.jpg",
        "attribution": "(c) Jorden Perrett, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/51245046/large.jpg",
        "attribution": "(c) Danielle Strain, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/252428465/large.jpg",
        "attribution": "(c) Marley Diehl, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/45319073/large.jpeg",
        "attribution": "(c) Trevor Tanner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/155141519/large.jpeg",
        "attribution": "(c) Jack Cochran, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7220976/large.jpeg",
        "attribution": "(c) jonesfamily, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11131772/large.jpg",
        "attribution": "(c) Mel Silvas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/511728044/large.jpg",
        "attribution": "(c) Nicholas Barth, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/155001529/large.jpeg",
        "attribution": "(c) Jack Cochran, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8615038/large.jpg",
        "attribution": "(c) Daniel Carter, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/189140759/large.jpg",
        "attribution": "(c) sidneyvergil, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/18226180/large.jpg",
        "attribution": "(c) ants-in-my-plants, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/539272438/large.jpg",
        "attribution": "(c) Luis Trinchan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/336216610/large.jpeg",
        "attribution": "(c) Jorge A. Pérez Torres, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/583682897/large.jpg",
        "attribution": "(c) Joren van Schie, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/585175931/large.jpg",
        "attribution": "(c) Brayam Adael Hernández Jerónimo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/231344833/large.jpg",
        "attribution": "(c) Diego Roldán Piña, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/428791377/large.jpeg",
        "attribution": "(c) Eva D L Torre, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/526846600/large.jpg",
        "attribution": "(c) Luis Maya, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/531428269/large.jpg",
        "attribution": "(c) Valeria CR, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/235862178/large.jpg",
        "attribution": "(c) Rebecca Kohn, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/390613526/large.jpg",
        "attribution": "(c) Yari, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/35856642/large.jpg",
        "attribution": "(c) helenacam, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/138453039/large.jpg",
        "attribution": "(c) Laura Josefina Sanabria Collantes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/619567315/large.jpg",
        "attribution": "(c) Jonathan Poppele, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/613295615/large.jpg",
        "attribution": "(c) Kevin Metcalf, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/176419303/large.jpg",
        "attribution": "(c) pat, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/325417899/large.jpg",
        "attribution": "(c) pisum, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/121774022/large.jpg",
        "attribution": "(c) Jordan Rodes, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62967716/large.jpeg",
        "attribution": "(c) Mike Farley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/267157009/large.jpeg",
        "attribution": "(c) DaveK, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/275696502/large.jpg",
        "attribution": "(c) jhartg44, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/137961048/large.jpg",
        "attribution": "(c) mdorgan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/111459424/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/30593324/large.jpg",
        "attribution": "(c) species_spotlight, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/406281141/large.jpg",
        "attribution": "(c) Travis Cooper, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/106045463/large.jpg",
        "attribution": "(c) selwynq, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/31962363/large.jpg",
        "attribution": "(c) blardiere, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/149690919/large.jpeg",
        "attribution": "(c) trevcis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/365591300/large.jpg",
        "attribution": "(c) Catherine McNally, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/332582035/large.jpg",
        "attribution": "(c) armandoramosflores, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/50132696/large.jpg",
        "attribution": "(c) Jason Headley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/516248152/large.jpg",
        "attribution": "(c) José G. Martínez-Fonseca, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/83603372/large.jpeg",
        "attribution": "(c) Victoria Mann, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15565332/large.jpg",
        "attribution": "(c) barryn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/39475598/large.jpg",
        "attribution": "(c) Dan Lory, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/78799030/large.jpg",
        "attribution": "(c) Carl-Adam Wegenschimmel, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/190248030/large.jpg",
        "attribution": "(c) Aiva Noringseth, some rights reserved (CC BY)",
        "license": "cc-by",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/76801311/large.jpeg",
        "attribution": "(c) Linda Jo Conn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/302039197/large.jpg",
        "attribution": "(c) Catherine C. Galley, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/455950461/large.jpeg",
        "attribution": "(c) huntysdead, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3872411/large.jpg",
        "attribution": "(c) Bill Carrell, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/486580621/large.jpeg",
        "attribution": "(c) Linda Jo Conn, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/239131539/large.jpg",
        "attribution": "(c) Frances, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/406007319/large.jpeg",
        "attribution": "(c) penpenpen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/274096927/large.jpeg",
        "attribution": "(c) debogey, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2361635/large.jpg",
        "attribution": "(c) Chuck Sexton, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/212160840/large.jpg",
        "attribution": "(c) mblampe, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/195732879/large.jpeg",
        "attribution": "(c) Candi Welliver, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/204125716/large.jpeg",
        "attribution": "(c) Jacob C. Cooper, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/18584488/large.jpg",
        "attribution": "(c) John Garrett, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/110975744/large.jpg",
        "attribution": "(c) Roberto R. Calderón, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/34972175/large.jpg",
        "attribution": "(c) Emily M, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/354041159/large.jpg",
        "attribution": "(c) shawnann74, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/35114707/large.jpeg",
        "attribution": "(c) Σάββας Ζαφειρίου (Savvas Zafeiriou), some rights reserved (CC BY-NC)",
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
      {
        "url": "https://static.inaturalist.org/photos/453380934/large.jpeg",
        "attribution": "(c) froggymum, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30409081/large.jpg",
        "attribution": "(c) Jennifer Snyder, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/472644083/large.jpeg",
        "attribution": "(c) froggymum, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/254255014/large.jpeg",
        "attribution": "(c) Leonardo Guzmán, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/373218484/large.jpeg",
        "attribution": "(c) mxkinoko, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/149265632/large.jpeg",
        "attribution": "(c) Jorge A. Pérez Torres, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/77680959/large.jpg",
        "attribution": "(c) dennisvo, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/108758320/large.jpeg",
        "attribution": "(c) Jaime R Briseño, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/349711219/large.jpg",
        "attribution": "(c) Conor McMahon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28532402/large.jpg",
        "attribution": "(c) Kadi E, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/448630116/large.jpg",
        "attribution": "(c) plantmandrew, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/28854319/large.jpg",
        "attribution": "(c) mvpolo11, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/413593371/large.jpeg",
        "attribution": "(c) SillyFella Inc., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/507374525/large.jpg",
        "attribution": "(c) nikola_g, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/455185409/large.jpeg",
        "attribution": "(c) David Jeffrey Ringer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55471415/large.jpg",
        "attribution": "(c) whinaem, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1738155/large.jpg",
        "attribution": "(c) Grahame, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/324240397/large.jpg",
        "attribution": "(c) Carrie Seltzer, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/620479520/large.jpg",
        "attribution": "(c) Robby Holmes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12553875/large.jpeg",
        "attribution": "(c) Vijay Barve, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/92229836/large.jpeg",
        "attribution": "(c) Jeff Skrentny, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27580466/large.jpg",
        "attribution": "(c) Paul Reeves, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/75328263/large.jpg",
        "attribution": "(c) thackers, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/255967080/large.jpg",
        "attribution": "(c) littlegranola, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/171844667/large.jpeg",
        "attribution": "(c) Anton Tananykin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57971929/large.jpg",
        "attribution": "(c) Sara Alcalá Jiménez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/467543991/large.jpeg",
        "attribution": "(c) William Harland, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/66891482/large.jpg",
        "attribution": "(c) Andy Pearce 🕊, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/251362637/large.jpeg",
        "attribution": "(c) Adrián Pina, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/188813127/large.jpg",
        "attribution": "(c) Абакумов Николай Викторович, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177949148/large.jpg",
        "attribution": "(c) Sascha Nunheim, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/192993300/large.jpg",
        "attribution": "(c) vyatka, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/169752931/large.jpeg",
        "attribution": "(c) Thorsten Stegmann, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/153/large.jpg",
        "attribution": "(c) ap2il, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/461882459/large.jpeg",
        "attribution": "(c) hchavez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/238729794/large.jpg",
        "attribution": "(c) Zoe Kanga, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/441835045/large.jpeg",
        "attribution": "(c) Carlos Domínguez-Rodríguez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/199407633/large.jpeg",
        "attribution": "(c) Jorge A. Pérez Torres, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/483944355/large.jpeg",
        "attribution": "(c) Bastian Zarza, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/460084166/large.jpg",
        "attribution": "(c) MJ, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/606975337/large.jpg",
        "attribution": "(c) Ivan Morales, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/418413789/large.jpg",
        "attribution": "(c) Eduardo Prieto Ochoa, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/486024366/large.jpg",
        "attribution": "(c) Beetroot, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/610834848/large.jpg",
        "attribution": "(c) Jorge A. Pérez Torres, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/489826230/large.jpeg",
        "attribution": "(c) Heather A. Wise, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/270410132/large.jpg",
        "attribution": "(c) Alexis Salazar, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/344365787/large.jpg",
        "attribution": "(c) Andrew Newmark, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/594768647/large.jpg",
        "attribution": "(c) FABIAN EDUARDO CHAVEZ JUAREZ, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
        "url": "https://static.inaturalist.org/photos/37795066/large.jpg",
        "attribution": "(c) Jean Pascual, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/279487553/large.jpg",
        "attribution": "(c) Mayve, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/298884691/large.jpg",
        "attribution": "(c) Grace Payne, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/298909341/large.jpeg",
        "attribution": "(c) darrenspot, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/481778992/large.jpg",
        "attribution": "(c) 弘易, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/141041225/large.jpeg",
        "attribution": "(c) John Boldt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/407989/large.jpg",
        "attribution": "(c) Suzanne Cadwell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/516278617/large.jpg",
        "attribution": "(c) Randall Opper, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/377499087/large.jpg",
        "attribution": "(c) angelicareeyes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/372811887/large.jpg",
        "attribution": "(c) gallafin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/284639498/large.jpeg",
        "attribution": "(c) Brooke Smith, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/403419211/large.jpeg",
        "attribution": "(c) natecfields, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/403808963/large.jpg",
        "attribution": "(c) renee595, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/439837731/large.jpeg",
        "attribution": "(c) Jeff Quayle, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/101929553/large.jpg",
        "attribution": "(c) Jeff Skrentny, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/93051666/large.jpeg",
        "attribution": "(c) mercuriooo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/574337081/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/585719539/large.jpg",
        "attribution": "(c) Allie P, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/96773878/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/233813365/large.jpg",
        "attribution": "(c) James G, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63788823/large.jpeg",
        "attribution": "(c) kdouthat, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/226053175/large.jpeg",
        "attribution": "(c) Bonnie Semmling, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/222311276/large.jpg",
        "attribution": "(c) Brad Winckelmann, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/54330870/large.jpg",
        "attribution": "(c) smeyer41, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/169497516/large.jpeg",
        "attribution": "(c) Andy Blair, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/437355607/large.jpeg",
        "attribution": "(c) lnboulianne, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/98834002/large.jpg",
        "attribution": "(c) Jed Morrison, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/51320553/large.jpg",
        "attribution": "(c) banddbaby1961, all rights reserved",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/154485533/large.jpeg",
        "attribution": "(c) Becky Brenner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/161078127/large.jpg",
        "attribution": "(c) mariestone, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/431290538/large.jpg",
        "attribution": "(c) Patrascu Lucian-Marius, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/584946843/large.jpg",
        "attribution": "(c) zebedeugalinha, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/513433457/large.jpg",
        "attribution": "(c) David Claro, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/221054851/large.jpg",
        "attribution": "(c) Josué Orfão, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/577031395/large.jpg",
        "attribution": "(c) Francisco Clamote, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/333147724/large.jpg",
        "attribution": "(c) elizabethompson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30505079/large.jpeg",
        "attribution": "(c) 傻子, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/145373484/large.jpg",
        "attribution": "(c) Jason Nelson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/240363577/large.jpg",
        "attribution": "(c) Magnolia, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/220478527/large.jpeg",
        "attribution": "(c) txwoofus, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/440195800/large.jpeg",
        "attribution": "(c) Rain L. Grace, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/103062630/large.jpg",
        "attribution": "(c) bradydawson101, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "jollyville-plateau-salamander": {
    "inat_taxon_id": 27089,
    "cover_image_url": "https://static.inaturalist.org/photos/394002562/large.jpg",
    "cover_image_attribution": "(c) Jake Scott, all rights reserved, uploaded by Jake Scott",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/349279/large.jpg",
        "attribution": "(c) Nathan Bendik, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/254339/large.jpg",
        "attribution": "(c) Todd Jackson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/260313293/large.jpg",
        "attribution": "(c) Chuck Sexton, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/44116471/large.jpeg",
        "attribution": "(c) Eric Knight, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/260546299/large.jpeg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/280835404/large.jpeg",
        "attribution": "(c) James Bailey, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/165490771/large.jpg",
        "attribution": "(c) holland, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/367873252/large.jpeg",
        "attribution": "(c) Reid Hardin, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/261966323/large.jpeg",
        "attribution": "(c) Annika Lindqvist, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1988310/large.jpg",
        "attribution": "(c) johnwilliams, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/367771599/large.jpeg",
        "attribution": "(c) Alex Karasoulos, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/394002562/large.jpg",
        "attribution": "(c) Jake Scott, all rights reserved",
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
      {
        "url": "https://static.inaturalist.org/photos/5270338/large.jpg",
        "attribution": "(c) saxzimbog, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/81897614/large.jpg",
        "attribution": "(c) Luis Agosto, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/247705771/large.jpg",
        "attribution": "(c) Mike Dayton, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/390973667/large.jpeg",
        "attribution": "(c) Dan Treadwell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/53733124/large.jpg",
        "attribution": "(c) Paul Bowyer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62819454/large.jpeg",
        "attribution": "(c) shelleoreagan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/249397840/large.jpg",
        "attribution": "(c) Juan Miguel Artigas Azas, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/191947990/large.jpg",
        "attribution": "(c) rangelillo, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/447762504/large.jpeg",
        "attribution": "(c) Davis Provan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/370022156/large.jpg",
        "attribution": "(c) Matt Felperin, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/133500791/large.jpeg",
        "attribution": "(c) Troy B, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/67100327/large.jpeg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/88243015/large.jpg",
        "attribution": "(c) Emily Geest, some rights reserved (CC BY)",
        "license": "cc-by",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32253825/large.jpeg",
        "attribution": "(c) pisum, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/246978945/large.jpeg",
        "attribution": "(c) Linda Jo Conn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/76763182/large.jpg",
        "attribution": "(c) jasonrcrosby, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/84640837/large.jpg",
        "attribution": "(c) Tyler Cannon, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/406444849/large.jpeg",
        "attribution": "(c) wresy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/142103728/large.jpeg",
        "attribution": "(c) Иван Ковтун Ivan Kovtun, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29340045/large.jpeg",
        "attribution": "(c) Kuan-Chieh (Chuck) Hung, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/39906327/large.jpg",
        "attribution": "(c) Cheng-Tao Lin, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/170394627/large.jpg",
        "attribution": "(c) SpyingNaturalist, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/567007310/large.jpg",
        "attribution": "(c) Damon Corvelo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/100426546/large.jpeg",
        "attribution": "(c) Kevin Meredith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/318480073/large.jpg",
        "attribution": "(c) naturalistchu, all rights reserved",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/75557889/large.jpg",
        "attribution": "(c) patisantos, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/110871328/large.jpeg",
        "attribution": "(c) maria-de-jesus-alanis-salinas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/76203120/large.jpg",
        "attribution": "(c) backyardmacrophotos, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/204957062/large.jpeg",
        "attribution": "(c) Marco Zozaya, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/274204699/large.jpg",
        "attribution": "(c) jaimesamano, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/122390705/large.jpeg",
        "attribution": "(c) Francisco Hernández Hilario, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/120921776/large.jpg",
        "attribution": "(c) patisantos, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/80197047/large.jpeg",
        "attribution": "(c) Román Castañeda Vázquez, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/357144513/large.jpg",
        "attribution": "(c) koahernim, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/128710227/large.jpeg",
        "attribution": "(c) Francisco Hernández Hilario, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/396651449/large.jpg",
        "attribution": "(c) Briana O'Sullivan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/282355313/large.jpeg",
        "attribution": "(c) MARTHA ELENA VAZQUEZ ONTIVEROS, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14976754/large.jpeg",
        "attribution": "(c) Janet Guardiola, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/11168871/large.jpg",
        "attribution": "(c) Raquel, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/132047602/large.jpeg",
        "attribution": "(c) Libni Joseph, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177203935/large.jpeg",
        "attribution": "(c) Ben Horstmann, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/595577313/large.jpg",
        "attribution": "(c) Sergio Rivero Beneitez, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/392966506/large.jpeg",
        "attribution": "(c) Gustavo torres, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/468155520/large.jpeg",
        "attribution": "(c) docprt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1387640/large.JPG",
        "attribution": "(c) gerziz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/233600126/large.jpg",
        "attribution": "(c) Mason Maron, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/465457/large.jpg",
        "attribution": "(c) Juan Cruzado Cortés, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/195471468/large.jpeg",
        "attribution": "(c) Emmanuel Teyssier Teutli, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/616244710/large.jpg",
        "attribution": "(c) danielller, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62386020/large.jpg",
        "attribution": "(c) Paul Mindeman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/459147525/large.jpeg",
        "attribution": "(c) Chris Evers, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/110202252/large.jpg",
        "attribution": "(c) Todd Council, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/103754790/large.jpeg",
        "attribution": "(c) sandrae34242, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/264057367/large.jpg",
        "attribution": "(c) The_cool_moth, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/10201253/large.jpg",
        "attribution": "(c) Johannes, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/65692115/large.jpeg",
        "attribution": "(c) Rich Wolfert, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/253146737/large.jpg",
        "attribution": "(c) Ilona, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/73315366/large.jpeg",
        "attribution": "(c) vinckymarie, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/61450040/large.jpg",
        "attribution": "(c) Jim Moore, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/99358038/large.jpg",
        "attribution": "(c) Claire O'Neill, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/417907727/large.jpeg",
        "attribution": "(c) megumickd, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63262165/large.jpg",
        "attribution": "(c) entomolocee, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/181465429/large.jpeg",
        "attribution": "(c) Bernie Paquette, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/79703269/large.jpg",
        "attribution": "(c) Coronado Govaerts, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "largemouth-bass": {
    "inat_taxon_id": 49587,
    "cover_image_url": "https://static.inaturalist.org/photos/126577823/large.jpg",
    "cover_image_attribution": "(c) species_spotlight, all rights reserved, uploaded by species_spotlight",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/174714735/large.jpg",
        "attribution": "(c) Chase Carlson, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/406022805/large.jpg",
        "attribution": "(c) srichard89, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/593158472/large.jpg",
        "attribution": "(c) Lynn Marie, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/446565253/large.jpeg",
        "attribution": "(c) Caleb Sun, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2303709/large.jpg",
        "attribution": "(c) David Gardner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/248102992/large.jpg",
        "attribution": "(c) Nathan Hewitt, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/32290862/large.jpg",
        "attribution": "(c) tripp_spon, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/596710001/large.jpg",
        "attribution": "(c) Vladimir Dinets, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/332780156/large.jpg",
        "attribution": "(c) Leonardo Merçon, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/333258205/large.jpg",
        "attribution": "(c) Nick Tobler (Cowturtle), some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/69852091/large.jpeg",
        "attribution": "(c) Dad is finally uploading observations, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/351606156/large.jpg",
        "attribution": "(c) Rylan Floto, all rights reserved",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/339125225/large.jpg",
        "attribution": "(c) dalemeister, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/71681049/large.jpg",
        "attribution": "(c) Alexis Babayan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/216955406/large.jpg",
        "attribution": "(c) lisak1, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/600088819/large.jpg",
        "attribution": "(c) Evan Zimmerman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/106254385/large.jpeg",
        "attribution": "(c) David Anderson, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/182483824/large.jpeg",
        "attribution": "(c) fallriver22, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/589250997/large.jpg",
        "attribution": "(c) itazura, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/337899864/large.jpg",
        "attribution": "(c) dalemeister, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/116146072/large.jpeg",
        "attribution": "(c) Sam Hough, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/339641354/large.jpg",
        "attribution": "(c) dalemeister, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/598820407/large.jpg",
        "attribution": "(c) Egidio, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/64457616/large.jpg",
        "attribution": "(c) chestersimpson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/519578963/large.jpg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/339084148/large.jpg",
        "attribution": "(c) naturephotosuze, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/181842373/large.jpeg",
        "attribution": "(c) Pincher Science Family, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/340336221/large.jpg",
        "attribution": "(c) dalemeister, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://static.inaturalist.org/photos/55168317/large.jpg",
        "attribution": "(c) Bret Steven Williamson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/103310661/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/93836651/large.jpg",
        "attribution": "(c) Kayla Brown, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/257237148/large.jpg",
        "attribution": "(c) Theo Witsell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/332687125/large.jpeg",
        "attribution": "(c) Sebastian, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/331747293/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/22223852/large.jpeg",
        "attribution": "(c) cassi saari, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/422220089/large.jpeg",
        "attribution": "(c) bdoro1, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/60495003/large.jpeg",
        "attribution": "(c) mikeakresh, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/445872640/large.jpeg",
        "attribution": "(c) botanicalblue, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/108558932/large.jpeg",
        "attribution": "(c) Matt Tomlinson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4104578/large.JPG",
        "attribution": "(c) Justyn Stahl, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/17365117/large.jpeg",
        "attribution": "(c) Chris Evers, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/19678455/large.jpg",
        "attribution": "(c) Brent Johnson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/281151394/large.jpg",
        "attribution": "(c) Karlyn H. Lewis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5679657/large.jpeg",
        "attribution": "(c) elsaleal, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/524643879/large.jpg",
        "attribution": "(c) Magali Vázquez Cárcamo, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/229181187/large.jpeg",
        "attribution": "(c) Patricia Tiller, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/519637406/large.jpg",
        "attribution": "(c) M.R. Perry, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/252826088/large.jpg",
        "attribution": "(c) MarvalPhotography19, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/72406779/large.jpg",
        "attribution": "(c) Jonathan Eisen, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/30319828/large.jpeg",
        "attribution": "(c) Juan Carlos Garcia Morales, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65804867/large.jpg",
        "attribution": "(c) Daniel Palmer, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/116793572/large.jpeg",
        "attribution": "(c) Michel Langeveld, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/242443435/large.png",
        "attribution": "(c) KF, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/250637155/large.jpg",
        "attribution": "(c) Bert Filemyr, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/332307629/large.jpeg",
        "attribution": "(c) b3ugaz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/124710229/large.jpeg",
        "attribution": "(c) Steven Schulting, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/344374722/large.jpg",
        "attribution": "(c) KF, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/200810392/large.jpeg",
        "attribution": "(c) Amanda Cogan Barber, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30754325/large.jpg",
        "attribution": "(c) Jessica Peruzzo, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/176829217/large.jpg",
        "attribution": "(c) Vyacheslav Luzanov, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/212006986/large.jpeg",
        "attribution": "(c) Stephane Le Tirant, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/152058977/large.jpeg",
        "attribution": "(c) Nils Helstrom, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/440473097/large.jpg",
        "attribution": "(c) KF, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/94019308/large.jpg",
        "attribution": "(c) vcreed119, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/438009162/large.jpeg",
        "attribution": "(c) lindseymcknight, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2466649/large.jpg",
        "attribution": "(c) Cullen Hanks, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/53084862/large.jpeg",
        "attribution": "(c) Ken Rea, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/151310900/large.jpg",
        "attribution": "(c) Sue Kacines, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/156878618/large.jpg",
        "attribution": "(c) hpullin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/154013727/large.jpeg",
        "attribution": "(c) Linda Jo Conn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/125960144/large.jpg",
        "attribution": "(c) Avon Burton, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/435881504/large.jpeg",
        "attribution": "(c) txnaturewatch, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/388559819/large.jpg",
        "attribution": "(c) chadharrison, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/102323101/large.jpg",
        "attribution": "(c) jieliang731, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/138533256/large.jpg",
        "attribution": "(c) Ruthie Wetzel, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/76430620/large.jpeg",
        "attribution": "(c) plsommer, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/92856134/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
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
      {
        "url": "https://static.inaturalist.org/photos/4519115/large.jpeg",
        "attribution": "(c) Rigo Aguilar, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/455188073/large.jpg",
        "attribution": "(c) hexapoda, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/163404992/large.jpg",
        "attribution": "(c) Danny Claridge, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/109684149/large.jpg",
        "attribution": "(c) bobzappalorti, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/485022935/large.jpg",
        "attribution": "(c) Katherine L., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/44565894/large.jpg",
        "attribution": "(c) kevindick, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2736390/large.jpg",
        "attribution": "(c) gaddi, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/48315290/large.jpg",
        "attribution": "(c) oldbizmark, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/113278587/large.jpg",
        "attribution": "(c) mattia_zagami, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/41013826/large.jpg",
        "attribution": "(c) Cynthia Bardouka-Large, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/526406065/large.jpg",
        "attribution": "(c) coredatum, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/455396018/large.jpeg",
        "attribution": "(c) Texas Bird Family, some rights reserved (CC BY)",
        "license": "cc-by",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/70303784/large.jpg",
        "attribution": "(c) Jonathan Eisen, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/252877601/large.jpg",
        "attribution": "(c) mtbellew, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30010737/large.jpeg",
        "attribution": "(c) Robby Deans, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/230701640/large.jpg",
        "attribution": "(c) William J. Deml, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/236991545/large.jpeg",
        "attribution": "(c) Dave Manley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/20318874/large.jpeg",
        "attribution": "(c) Cameron, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/152846076/large.jpeg",
        "attribution": "(c) captainjack0000, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/423714/large.jpg",
        "attribution": "(c) Juan Ramirez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/539096307/large.jpg",
        "attribution": "(c) Christian Long, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/429352879/large.jpeg",
        "attribution": "(c) Fard machine, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/301591727/large.jpeg",
        "attribution": "(c) Joshua Ekrut, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/114007094/large.jpeg",
        "attribution": "(c) corey_maritza, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "mexican-mosquitofish": {
    "inat_taxon_id": 59115,
    "cover_image_url": "https://static.inaturalist.org/photos/553681986/large.jpg",
    "cover_image_attribution": "(c) Natthaphat Chotjuckdikul, all rights reserved, uploaded by Natthaphat Chotjuckdikul",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/369172180/large.jpg",
        "attribution": "(c) Larry Halverson, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/292790061/large.jpeg",
        "attribution": "(c) Judy W, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/405815553/large.jpeg",
        "attribution": "(c) Michi Tobler, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11147317/large.jpg",
        "attribution": "(c) Justin Garwood, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/553681986/large.jpg",
        "attribution": "(c) Natthaphat Chotjuckdikul, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/378088681/large.jpg",
        "attribution": "(c) Christian Louie, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/35365852/large.jpeg",
        "attribution": "(c) Mason Maron, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/108422181/large.jpg",
        "attribution": "(c) Steven Wang, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/46463343/large.jpg",
        "attribution": "(c) Michael Verdirame, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/473914913/large.jpg",
        "attribution": "(c) Andaman Kaosung, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/448030267/large.jpeg",
        "attribution": "(c) Craig BroussardL, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/614053787/large.jpg",
        "attribution": "(c) Greg Predmore, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/557900261/large.jpg",
        "attribution": "(c) Jonathan M. Branco, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/217241646/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/210659630/large.jpg",
        "attribution": "(c) richard, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/414429285/large.jpeg",
        "attribution": "(c) MJ, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/532443100/large.jpg",
        "attribution": "(c) Ad Konings, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/412741153/large.jpeg",
        "attribution": "(c) Karen L. Johnson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/513594745/large.jpg",
        "attribution": "(c) Michael J. Papay, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/294550965/large.jpg",
        "attribution": "(c) laxgirl715, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/422300611/large.jpeg",
        "attribution": "(c) Laura Mae, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/131947378/large.jpeg",
        "attribution": "(c) Ken, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/415212589/large.jpeg",
        "attribution": "(c) Chris Sanders, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/8940392/large.jpeg",
        "attribution": "(c) Janette Johnson, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/74425428/large.jpg",
        "attribution": "(c) colleendieter, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/348252279/large.jpg",
        "attribution": "(c) Jose S. Garza Herrera, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/50074612/large.jpg",
        "attribution": "(c) Susan Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/68143439/large.jpg",
        "attribution": "(c) dramirezmgv20, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20622477/large.jpg",
        "attribution": "(c) Kara Okonewski, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/139017460/large.jpg",
        "attribution": "(c) Ad Konings, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2676656/large.JPG",
        "attribution": "(c) Liam O'Brien, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5182222/large.jpg",
        "attribution": "(c) CAROLYN LANGLINAIS, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/217475413/large.jpeg",
        "attribution": "(c) Peeter Poldre, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1181829/large.jpg",
        "attribution": "(c) Jon Sullivan, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/93881665/large.jpeg",
        "attribution": "(c) Jay McGowan, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/234018147/large.gif",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/377515720/large.jpg",
        "attribution": "(c) Liam Huber, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/342197512/large.jpeg",
        "attribution": "(c) Filippo Melis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/78391/large.jpg",
        "attribution": "(c) cyric, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/450253179/large.jpeg",
        "attribution": "(c) burkh4rt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/619621284/large.jpg",
        "attribution": "(c) Colby Baker, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/178233218/large.jpeg",
        "attribution": "(c) Victor Calatayud Espin, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57888071/large.gif",
        "attribution": "(c) Diego Almendras G., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/352218694/large.jpeg",
        "attribution": "(c) Colby Baker, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/221151370/large.jpeg",
        "attribution": "(c) mmontaner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28586628/large.jpeg",
        "attribution": "(c) Jeff Skrentny, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/148362440/large.jpeg",
        "attribution": "(c) Jonathan Layman, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/110297794/large.jpg",
        "attribution": "(c) Corinna Herr, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/562171586/large.jpg",
        "attribution": "(c) stomlins701, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/262317962/large.jpeg",
        "attribution": "(c) Owen J., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/75017955/large.jpg",
        "attribution": "(c) simon_graesboell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/258470673/large.jpg",
        "attribution": "(c) Chris McCreedy, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/339071885/large.jpeg",
        "attribution": "(c) Joe Balestreri, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/324610938/large.jpg",
        "attribution": "(c) minnis5, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/77910324/large.jpeg",
        "attribution": "(c) Rob Curtis, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/354482739/large.jpeg",
        "attribution": "(c) Owen J., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30789251/large.jpg",
        "attribution": "(c) Susan Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/546155789/large.jpg",
        "attribution": "(c) Emily Banno, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/348847357/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/352106857/large.jpeg",
        "attribution": "(c) Yifei, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "neosho-madtom-stonecat": {
    "inat_taxon_id": 107295,
    "cover_image_url": "https://static.inaturalist.org/photos/187381745/large.jpeg",
    "cover_image_attribution": "(c) Michael Tobler, all rights reserved, uploaded by Michael Tobler",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/309092696/large.jpg",
        "attribution": "(c) Brandon Brooke, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/309092192/large.jpg",
        "attribution": "(c) Brandon Brooke, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/122513064/large.jpg",
        "attribution": "(c) EC, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/187381745/large.jpeg",
        "attribution": "(c) Michi Tobler, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/276785923/large.jpg",
        "attribution": "(c) aliciamn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/277134049/large.jpeg",
        "attribution": "(c) Andrew George, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/387946862/large.jpeg",
        "attribution": "(c) Dylan Osterhaus, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/277130677/large.jpeg",
        "attribution": "(c) Andrew George, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/187396003/large.jpeg",
        "attribution": "(c) Michi Tobler, all rights reserved",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15232178/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/135711015/large.jpg",
        "attribution": "(c) NINA WENÓLI, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/243462205/large.jpg",
        "attribution": "(c) Ivani Martínez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14285833/large.jpeg",
        "attribution": "(c) Roberto González, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/61348041/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/179140588/large.jpeg",
        "attribution": "(c) Esteban Poveda, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/33863392/large.jpg",
        "attribution": "(c) daniel112, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/56117659/large.jpg",
        "attribution": "(c) Juan Miguel Artigas Azas, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/339281069/large.jpg",
        "attribution": "(c) Nicole Neira Mena, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/496657150/large.jpeg",
        "attribution": "(c) Cornelio Chablé, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13934308/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/158436120/large.jpeg",
        "attribution": "(c) Luis Mauricio Mena Páramo, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/117543142/large.jpeg",
        "attribution": "(c) Riley-Brendan Walsh, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/451999178/large.jpg",
        "attribution": "(c) Leonardo Breder Passalacqua, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/267511175/large.jpeg",
        "attribution": "(c) Pedro Silva, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/166872225/large.jpeg",
        "attribution": "(c) Marcelo Schmidt Roberti, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/449891089/large.jpg",
        "attribution": "(c) Surya Ramachandran, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/451831023/large.jpeg",
        "attribution": "(c) Arthur Oliveira, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/450120639/large.jpeg",
        "attribution": "(c) Juan Rodriguez, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/616091041/large.jpg",
        "attribution": "(c) Pedro Paz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/129628301/large.jpeg",
        "attribution": "(c) Pedro Henrique Maloso Ramos, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/185280664/large.jpeg",
        "attribution": "(c) André Perez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/463424617/large.jpeg",
        "attribution": "(c) Maria Fernanda Schelck, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/599249174/large.jpg",
        "attribution": "(c) Núcleo Palmero Aceites Morichal S.A.S., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/599249296/large.jpg",
        "attribution": "(c) Núcleo Palmero Aceites Morichal S.A.S., some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12512316/large.jpg",
        "attribution": "(c) griff, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/517002723/large.jpg",
        "attribution": "(c) Daughter Dad, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/181610059/large.jpg",
        "attribution": "(c) Andrés León-Reyes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14829351/large.jpg",
        "attribution": "(c) John Beetham, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8988493/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/39455305/large.jpg",
        "attribution": "(c) Nathaniel Sharp, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/347101391/large.jpg",
        "attribution": "(c) Alaina Friedrich, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/219025287/large.jpg",
        "attribution": "(c) Bill Pranty, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/41346256/large.jpeg",
        "attribution": "(c) Nature Guy, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/225193/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/453353585/large.jpeg",
        "attribution": "(c) Jayden Ward, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/187469365/large.jpg",
        "attribution": "(c) Alain Mreches, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/58080451/large.jpg",
        "attribution": "(c) Alan R. Biggs, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/107691645/large.jpg",
        "attribution": "(c) William Wise, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/323891112/large.jpg",
        "attribution": "(c) Jonathan Irons, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/489477060/large.jpg",
        "attribution": "(c) Roderick Hornby, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/458524521/large.jpg",
        "attribution": "(c) Robin Gwen Agarwal, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/196784609/large.jpg",
        "attribution": "(c) Deb Carter, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/335816594/large.jpg",
        "attribution": "(c) ብልጫ (Bilcha), all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/250021408/large.jpg",
        "attribution": "(c) maticus, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/235039768/large.jpg",
        "attribution": "(c) Steve Bonn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/119711212/large.jpg",
        "attribution": "(c) Mindy McCutchan, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/265768563/large.jpg",
        "attribution": "(c) Jordan🌻, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://static.inaturalist.org/photos/168910266/large.jpg",
        "attribution": "(c) Therese Davis, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/318991081/large.jpeg",
        "attribution": "(c) Corey Hayes, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/565075945/large.jpg",
        "attribution": "(c) Neil Vinson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/565799848/large.jpg",
        "attribution": "(c) Denis Doucet, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/82605279/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/216079021/large.jpg",
        "attribution": "(c) dplawrance, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/208326850/large.jpg",
        "attribution": "(c) tiller, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14556394/large.jpeg",
        "attribution": "(c) Nature Ali, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/277992285/large.jpeg",
        "attribution": "(c) Madeleine Claire, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/201999417/large.jpg",
        "attribution": "(c) Cat Chang, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/205332778/large.jpg",
        "attribution": "(c) tiller, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://static.inaturalist.org/photos/261249236/large.jpg",
        "attribution": "(c) Reaghan Maier, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/170353889/large.jpeg",
        "attribution": "(c) Jeffrey Harris, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/252250405/large.jpg",
        "attribution": "(c) Doug Wechsler, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/254528743/large.jpeg",
        "attribution": "(c) sfreeman7, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/469213287/large.jpeg",
        "attribution": "(c) Rob Lang, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/606201427/large.jpg",
        "attribution": "(c) hr_dragonfly, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/340690491/large.jpg",
        "attribution": "(c) colinrobinson87, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/340518887/large.jpeg",
        "attribution": "(c) Michael Gallo, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/186849897/large.jpg",
        "attribution": "(c) tqdang27, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/69610873/large.jpeg",
        "attribution": "(c) vanwest, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/237889574/large.jpeg",
        "attribution": "(c) samzhang, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/247114857/large.jpg",
        "attribution": "(c) Juan Miguel Artigas Azas, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/470342858/large.jpg",
        "attribution": "(c) sofiaaa1999, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/35415054/large.jpeg",
        "attribution": "(c) cgbb2004, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62635095/large.jpeg",
        "attribution": "(c) Todd Fitzgerald, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/244073456/large.gif",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/146276004/large.jpg",
        "attribution": "(c) Paul Steeves, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/575750818/large.jpg",
        "attribution": "(c) comradejon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/512864956/large.jpg",
        "attribution": "(c) avidhiker, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/140933105/large.jpg",
        "attribution": "(c) Andrew Simon, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/176725142/large.jpg",
        "attribution": "(c) Jack, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/345212169/large.jpeg",
        "attribution": "(c) Cos van Wermeskerken, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2679010/large.jpg",
        "attribution": "(c) Michael D Fox, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/87560602/large.jpeg",
        "attribution": "(c) Troy B, some rights reserved (CC BY)",
        "license": "cc-by",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/168559953/large.png",
        "attribution": "(c) Mike Farley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/42150627/large.jpg",
        "attribution": "(c) Jay L. Keller, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/387145698/large.jpeg",
        "attribution": "(c) masonpierce, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/108045255/large.jpeg",
        "attribution": "(c) Jay L. Keller, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/487517166/large.jpeg",
        "attribution": "(c) beckythebatlady, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/113977442/large.jpg",
        "attribution": "(c) ar_maclaren, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30977408/large.jpeg",
        "attribution": "(c) trina, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/153843217/large.jpeg",
        "attribution": "(c) Robert Rios Jr., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/59006584/large.jpg",
        "attribution": "(c) Abhishek N. Prasad, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/232218009/large.jpg",
        "attribution": "(c) jmebanks, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/167929347/large.png",
        "attribution": "(c) gwmn_ash, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/113822632/large.jpg",
        "attribution": "(c) Vernon Barnett, all rights reserved",
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
      {
        "url": "https://static.inaturalist.org/photos/279112406/large.jpeg",
        "attribution": "(c) Мария Извольская, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1231451/large.",
        "attribution": "(c) Tony Wills, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/179642986/large.jpg",
        "attribution": "(c) Марина Горбунова-Ëлкина, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1229486/large.",
        "attribution": "(c) Tony Wills, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/470636321/large.jpg",
        "attribution": "(c) Taylor Murray, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29484639/large.jpg",
        "attribution": "(c) Tamsin Carlisle, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/462748811/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/609719740/large.jpg",
        "attribution": "(c) Sam Schaack, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/56732030/large.jpeg",
        "attribution": "(c) Steven Bodzin, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/307468628/large.jpeg",
        "attribution": "(c) pevel65, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/184567148/large.jpeg",
        "attribution": "(c) Соколков Юрий Павлович, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/348095327/large.jpg",
        "attribution": "(c) Марина Горбунова-Ëлкина, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13316711/large.jpg",
        "attribution": "(c) Kevin Schafer, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/377935201/large.jpeg",
        "attribution": "(c) Pablo Maass Zepeda, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/77152571/large.jpeg",
        "attribution": "(c) Robbie Lowe, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65985251/large.jpg",
        "attribution": "(c) Martin Vohralík, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/40724675/large.jpeg",
        "attribution": "(c) Ochinchin-des, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/121254429/large.jpg",
        "attribution": "(c) Katherine Sanhueza Bravo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/351495054/large.jpg",
        "attribution": "(c) keiraboehle, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/128025006/large.jpeg",
        "attribution": "(c) John Kahl, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/285547199/large.jpg",
        "attribution": "(c) eliegaget, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/35390283/large.jpg",
        "attribution": "(c) Taylor McCrary, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/183288549/large.jpeg",
        "attribution": "(c) Casey H. Richart, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/209951332/large.jpeg",
        "attribution": "(c) Damián Ganime, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/438146654/large.jpeg",
        "attribution": "(c) K L, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/238739767/large.jpg",
        "attribution": "(c) brian stahls, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/269102666/large.jpeg",
        "attribution": "(c) Jamie Simmons, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/593931864/large.jpg",
        "attribution": "(c) Kim Moore, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/307639695/large.jpeg",
        "attribution": "(c) Jamie Simmons, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/108646541/large.jpeg",
        "attribution": "(c) Juan Miguel Artigas Azas, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/180074878/large.jpeg",
        "attribution": "(c) David Remsen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/72496433/large.jpg",
        "attribution": "(c) mary_johnson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/598037948/large.jpg",
        "attribution": "(c) brian stahls, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/346634990/large.jpeg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/442995081/large.jpg",
        "attribution": "(c) chickadeeeeee, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/442979896/large.jpg",
        "attribution": "(c) chickadeeeeee, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/244019437/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/270661730/large.jpeg",
        "attribution": "(c) Cindy Pencek, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12466417/large.jpg",
        "attribution": "(c) Enrique Perez Carrillo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/384259608/large.jpg",
        "attribution": "(c) Caden Myers, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/61442259/large.jpeg",
        "attribution": "(c) Dr. Ryne D. Rutherford, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/25014975/large.jpeg",
        "attribution": "(c) Andy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/233326768/large.jpeg",
        "attribution": "(c) Corey, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5027736/large.jpeg",
        "attribution": "(c) Michael Price, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/68862089/large.jpg",
        "attribution": "(c) j_albright, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/75438364/large.jpeg",
        "attribution": "(c) evangrimes, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/233015439/large.jpeg",
        "attribution": "(c) Sue Janssen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/87483512/large.jpeg",
        "attribution": "(c) Ismael Perez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/17648853/large.jpg",
        "attribution": "(c) graceowen, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/18197160/large.jpg",
        "attribution": "(c) Larry, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/70651783/large.jpeg",
        "attribution": "(c) Anny Peralta, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/47036046/large.jpeg",
        "attribution": "(c) Miguel Gastelum, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/146238574/large.jpg",
        "attribution": "(c) msmerelibrarian, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/247458469/large.jpg",
        "attribution": "(c) Jennie Duberstein, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30388362/large.jpeg",
        "attribution": "(c) Agustin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/63219119/large.jpg",
        "attribution": "(c) davidmcleod, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/206418532/large.jpg",
        "attribution": "(c) paulmadueno9, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32735737/large.jpeg",
        "attribution": "(c) kilawea, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/10995698/large.jpg",
        "attribution": "(c) gbadass, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/467345637/large.jpeg",
        "attribution": "(c) Micah Kipple, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/219256474/large.jpg",
        "attribution": "(c) Omar Ramos Carreón, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/145867497/large.jpeg",
        "attribution": "(c) Clay Gibbons, some rights reserved (CC BY-ND)",
        "license": "cc-by-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/52159471/large.jpeg",
        "attribution": "(c) James Maughn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/51818165/large.jpg",
        "attribution": "(c) Danielle Olivarez, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/50634942/large.jpg",
        "attribution": "(c) Alex Tulei, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/25794021/large.jpeg",
        "attribution": "(c) John Anderson, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/286272760/large.jpg",
        "attribution": "(c) Mayve, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2040743/large.jpg",
        "attribution": "(c) Marv Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/510553984/large.jpg",
        "attribution": "(c) Ad Konings, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/128768672/large.jpeg",
        "attribution": "(c) Russ Hoverman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/225195/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/449917466/large.jpg",
        "attribution": "(c) Chris Kreussling, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5808552/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/587714516/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/204450908/large.jpeg",
        "attribution": "(c) Octavio Lemuel Cruz Santiago, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/175145350/large.jpg",
        "attribution": "(c) Elizabeth Fox, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/114045095/large.jpg",
        "attribution": "(c) armandoramosflores, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/601056281/large.jpg",
        "attribution": "(c) searching4critters, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/112488148/large.jpeg",
        "attribution": "(c) Iván Reséndiz Cruz, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/70017961/large.jpg",
        "attribution": "(c) zetina26, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/549037201/large.jpg",
        "attribution": "(c) im425leothelion425, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/104239024/large.jpg",
        "attribution": "(c) ernstes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/106225817/large.jpg",
        "attribution": "(c) Craig Brown, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/252549971/large.jpg",
        "attribution": "(c) ryland_weaver, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/293864626/large.jpeg",
        "attribution": "(c) chilaquilesverdes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/292407604/large.jpeg",
        "attribution": "(c) Jesús Niño C., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/94697086/large.jpg",
        "attribution": "(c) Vance Jacobsen, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/331331136/large.jpg",
        "attribution": "(c) pilgrim123, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51858917/large.jpeg",
        "attribution": "(c) María Eugenia Mendiola González, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/53374877/large.jpg",
        "attribution": "(c) David Rabenau, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57709587/large.jpeg",
        "attribution": "(c) León Felipe, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20356226/large.jpeg",
        "attribution": "(c) midwestnaturalist, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/176991567/large.jpeg",
        "attribution": "(c) kbarylski, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7748312/large.jpeg",
        "attribution": "(c) Damon Tighe, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/19014452/large.jpeg",
        "attribution": "(c) Kimberlie Sasan, some rights reserved (CC BY-ND)",
        "license": "cc-by-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/547229970/large.jpg",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/160011875/large.jpg",
        "attribution": "(c) vmcintee, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/68187672/large.jpg",
        "attribution": "(c) Arantxa Coboh, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/421137077/large.jpg",
        "attribution": "(c) Craig Simmons, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/40934221/large.jpeg",
        "attribution": "(c) renateelster, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/280790715/large.jpeg",
        "attribution": "(c) Wendy Feltham, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/152087/large.jpg",
        "attribution": "(c) Stephen Durrenberger, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/47032730/large.jpg",
        "attribution": "(c) Navin Sasikumar, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/10980360/large.jpeg",
        "attribution": "(c) evonnmarie, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/76292880/large.jpg",
        "attribution": "(c) ehsunn, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://static.inaturalist.org/photos/44341115/large.jpg",
        "attribution": "(c) Ryan Krautheim, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/17853617/large.jpeg",
        "attribution": "(c) John A Jackson, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/11524778/large.jpg",
        "attribution": "(c) markkrist, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/482846707/large.jpeg",
        "attribution": "(c) Shreybae, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/46812829/large.jpg",
        "attribution": "(c) William Wise, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/247698352/large.jpg",
        "attribution": "(c) Benjamin Genter, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/499281445/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/56511637/large.jpeg",
        "attribution": "(c) J.D. Willson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/327039060/large.jpeg",
        "attribution": "(c) Chris Bentley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/560612724/large.jpg",
        "attribution": "(c) MK, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/23101828/large.jpeg",
        "attribution": "(c) Robby Deans, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "plains-leopard-frog": {
    "inat_taxon_id": 65976,
    "cover_image_url": "https://static.inaturalist.org/photos/344531107/large.jpg",
    "cover_image_attribution": "(c) Jake Scott, all rights reserved, uploaded by Jake Scott",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/338703712/large.jpg",
        "attribution": "(c) Maxwell Soell, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/102173033/large.jpg",
        "attribution": "(c) madelena, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/99303059/large.jpeg",
        "attribution": "(c) S. Queen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/179545361/large.jpg",
        "attribution": "(c) Kyran Leeker, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/300008721/large.jpg",
        "attribution": "(c) Maxwell Soell, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/563576733/large.jpg",
        "attribution": "(c) stamos-tahas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/228083855/large.jpg",
        "attribution": "(c) KristenM, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/46475977/large.jpeg",
        "attribution": "(c) S. Queen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/234793060/large.jpg",
        "attribution": "(c) Diana-Terry Hibbitts, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/234804288/large.jpeg",
        "attribution": "(c) anneepierce, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6099624/large.jpg",
        "attribution": "(c) Nick Moore, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/162011791/large.jpeg",
        "attribution": "(c) Bill Carrell, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/424462781/large.jpeg",
        "attribution": "(c) claytonleopold, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/152510925/large.jpeg",
        "attribution": "(c) danyarq, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/21406193/large.jpg",
        "attribution": "(c) MJ Casteel, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/362144831/large.jpeg",
        "attribution": "(c) Aisha Sams, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/152560408/large.jpg",
        "attribution": "(c) Courtney Christie, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/607462332/large.jpg",
        "attribution": "(c) rollingplainst, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/231301218/large.jpg",
        "attribution": "(c) Katherine Parys, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/246234482/large.jpeg",
        "attribution": "(c) Jay K Goldberg, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/586557038/large.jpg",
        "attribution": "(c) Marleigh Fletcher, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/533443453/large.jpg",
        "attribution": "(c) Joe Paysen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/240714921/large.jpeg",
        "attribution": "(c) Clint Clinton, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/157205656/large.jpg",
        "attribution": "(c) Eileen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/159282986/large.jpeg",
        "attribution": "(c) Alexa Colorado H, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/563406551/large.jpg",
        "attribution": "(c) osvalduchiis, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/167795859/large.jpg",
        "attribution": "(c) dawnlee525, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/389249902/large.jpg",
        "attribution": "(c) Shelia Hargis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/285857594/large.jpg",
        "attribution": "(c) chrissysmith981, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "plains-spadefoot": {
    "inat_taxon_id": 26699,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/400961985/large.jpg",
    "cover_image_attribution": "(c) jbpeters, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20368380/large.jpg",
        "attribution": "(c) Charles R. Peterson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/528715326/large.jpg",
        "attribution": "(c) Maxwell Soell, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/78873932/large.jpg",
        "attribution": "(c) Brian Genge, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/49351674/large.jpg",
        "attribution": "(c) Randy Dzenkiw, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/248106596/large.jpeg",
        "attribution": "(c) Kevin Metcalf, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/409910124/large.jpeg",
        "attribution": "(c) gibrokich, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/396701455/large.jpg",
        "attribution": "(c) Charles R. Peterson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/426905350/large.jpeg",
        "attribution": "(c) Chris Fisher, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/139637102/large.jpg",
        "attribution": "(c) Molly Geppert, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63955628/large.jpeg",
        "attribution": "(c) Chris Fisher, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/84306786/large.jpeg",
        "attribution": "(c) Chris Fisher, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/401562487/large.jpg",
        "attribution": "(c) quarrelswithsquirrels, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/398845349/large.jpg",
        "attribution": "(c) Lance Caldwell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/58905100/large.jpg",
        "attribution": "(c) Sequoia Janirella Wrens, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/89673543/large.jpeg",
        "attribution": "(c) LewLew, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/16502969/large.jpg",
        "attribution": "(c) Phil Plank, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/64125587/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/401980440/large.jpeg",
        "attribution": "(c) Gary James, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27627301/large.jpg",
        "attribution": "(c) Sandy Wolkenberg, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/123970055/large.jpg",
        "attribution": "(c) Patrick Hanly, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/96512198/large.jpg",
        "attribution": "(c) Aidan Campos, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/436977588/large.jpeg",
        "attribution": "(c) Ken Potter, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/314608160/large.jpg",
        "attribution": "(c) Patrick Kerr, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/417880557/large.jpg",
        "attribution": "(c) Dustin Lynch, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/441732879/large.jpg",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/560065656/large.jpg",
        "attribution": "(c) cathylang, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/111158053/large.jpg",
        "attribution": "(c) kaylarose23, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/244165521/large.jpg",
        "attribution": "(c) Misha Zitser, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20019090/large.jpeg",
        "attribution": "(c) Scott Schuette, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/163481482/large.jpg",
        "attribution": "(c) lkfreidenburg, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/576155528/large.jpg",
        "attribution": "(c) ryan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/539823/large.jpg",
        "attribution": "(c) Andrew Dufault, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/66322185/large.jpg",
        "attribution": "(c) drewe, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/94063663/large.jpeg",
        "attribution": "(c) Rachel, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/595906175/large.jpg",
        "attribution": "(c) ellac444, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/43434366/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/124934628/large.jpg",
        "attribution": "(c) David Martin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/429308846/large.jpeg",
        "attribution": "(c) calebcam, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/557374574/large.jpg",
        "attribution": "(c) Alex Merryman, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/413663053/large.jpg",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/31910341/large.jpeg",
        "attribution": "(c) Pam Piombino, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/84963388/large.jpeg",
        "attribution": "(c) Jane Pietrangelo, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/392203187/large.jpg",
        "attribution": "(c) Maxwell Soell, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/196430035/large.jpg",
        "attribution": "(c) Nathalie S, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/379331871/large.jpg",
        "attribution": "(c) christine_campisi, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/77480767/large.jpeg",
        "attribution": "(c) Erik Ostrum, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/427092455/large.jpg",
        "attribution": "(c) John Rosford, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/486953703/large.jpg",
        "attribution": "(c) David Martin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/27685446/large.jpg",
        "attribution": "(c) mrcreeper156, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/86630983/large.jpg",
        "attribution": "(c) jhicks5, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/115012907/large.jpeg",
        "attribution": "(c) Emily Geest, some rights reserved (CC BY)",
        "license": "cc-by",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/274818281/large.jpeg",
        "attribution": "(c) miramatt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/44059768/large.jpg",
        "attribution": "(c) Galen Stewart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/76750008/large.jpg",
        "attribution": "(c) David Yeany, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/302636996/large.png",
        "attribution": "(c) smeckert, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/269809951/large.jpeg",
        "attribution": "(c) Levi, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/555798278/large.jpg",
        "attribution": "(c) Chelsea, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/220867664/large.jpg",
        "attribution": "(c) deantroi, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/403311900/large.jpg",
        "attribution": "(c) tiller, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/401998488/large.jpeg",
        "attribution": "(c) j_appleget, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/376463518/large.jpeg",
        "attribution": "(c) Matt Wallace, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/496183328/large.jpeg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/555292298/large.jpg",
        "attribution": "(c) Brenna Farrell, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/322905773/large.jpg",
        "attribution": "(c) solariansnails, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/417349127/large.jpg",
        "attribution": "(c) Gary Neilson, all rights reserved",
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
      {
        "url": "https://static.inaturalist.org/photos/458557077/large.jpeg",
        "attribution": "(c) Michael Gallo, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/21924254/large.jpeg",
        "attribution": "(c) Christina Moresi, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/115912373/large.jpeg",
        "attribution": "(c) Mark Nofsinger, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/469789258/large.jpg",
        "attribution": "(c) klmockingbird, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/247557095/large.jpeg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/93482473/large.jpg",
        "attribution": "(c) Martin Dellwo, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12655422/large.jpeg",
        "attribution": "(c) Kai Joaquin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/216234541/large.jpg",
        "attribution": "(c) Dylan Buell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27684733/large.jpg",
        "attribution": "(c) Paul Reeves, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/241137023/large.jpeg",
        "attribution": "(c) Tom Murray, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/96835017/large.jpeg",
        "attribution": "(c) eandree, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/258148165/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177836196/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/500537169/large.jpeg",
        "attribution": "(c) Daniel R., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/120834277/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15501625/large.jpg",
        "attribution": "(c) ungerlord, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/95411371/large.jpeg",
        "attribution": "(c) Sky Roberts, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/251794597/large.jpg",
        "attribution": "(c) Alex Castelein, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/186335856/large.jpeg",
        "attribution": "(c) Andrew Orgill, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3691005/large.jpg",
        "attribution": "(c) llamaface247, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/183984618/large.jpg",
        "attribution": "(c) rgm66, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/112072136/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/141927070/large.jpeg",
        "attribution": "(c) Joe Rich, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/109713514/large.jpeg",
        "attribution": "(c) Patricia, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://static.inaturalist.org/photos/556656634/large.jpg",
        "attribution": "(c) Eoghan Irwin, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/21163395/large.jpeg",
        "attribution": "(c) Taewoo Kim, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/340789061/large.jpg",
        "attribution": "(c) deborahrowan, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/319073305/large.jpeg",
        "attribution": "(c) Enrico Schifani, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/272030727/large.jpg",
        "attribution": "(c) jrmagahey, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/111906700/large.jpeg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/60363946/large.jpg",
        "attribution": "(c) Meghan Cassidy, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/75634827/large.jpeg",
        "attribution": "(c) pauladdn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/235383681/large.jpg",
        "attribution": "(c) usernamethatisnottaken, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/350755714/large.jpg",
        "attribution": "(c) 二班的螺蛳粉, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/344211881/large.jpg",
        "attribution": "(c) Emmett Collins-Sussman, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/250517122/large.jpeg",
        "attribution": "(c) PRSonnen, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/351073669/large.jpg",
        "attribution": "(c) iggiotto, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/327389955/large.jpg",
        "attribution": "(c) basidio-subbedhunter, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/263740132/large.jpg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62217537/large.jpeg",
        "attribution": "(c) Tommy Farquhar, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/94034813/large.jpg",
        "attribution": "(c) terence zahner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/20564407/large.jpeg",
        "attribution": "(c) Brenna Farrell, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/246441529/large.jpg",
        "attribution": "(c) Mike Stewart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/181792697/large.jpg",
        "attribution": "(c) James Spitznas, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/179707305/large.jpg",
        "attribution": "(c) Cynthia Crawford, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/234909340/large.jpg",
        "attribution": "(c) Bill Pranty, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14598470/large.jpg",
        "attribution": "(c) Donna Pomeroy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/163981204/large.jpeg",
        "attribution": "(c) sdw32701, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/214183027/large.jpeg",
        "attribution": "(c) rosemont, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6098083/large.jpeg",
        "attribution": "(c) Michael West, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/28619809/large.jpeg",
        "attribution": "(c) charley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/2915019/large.jpg",
        "attribution": "(c) Shelly Spriggs, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/219223156/large.jpg",
        "attribution": "(c) Leo G. Nico, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/272209965/large.jpg",
        "attribution": "(c) Devon Bradley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/107842820/large.jpg",
        "attribution": "(c) darontansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/64035869/large.jpg",
        "attribution": "(c) f felici, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/330461854/large.jpg",
        "attribution": "(c) Nat Bel, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/276208423/large.jpeg",
        "attribution": "(c) Sandy Thomas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/73218438/large.jpg",
        "attribution": "(c) nne999, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/236676280/large.jpg",
        "attribution": "(c) Liam Huber, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/91141838/large.jpeg",
        "attribution": "(c) Bridget Spencer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/183907220/large.jpeg",
        "attribution": "(c) Dave Drum, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/173017753/large.jpg",
        "attribution": "(c) Jonathan Eisen, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/40716010/large.jpg",
        "attribution": "(c) Alexander Viduetsky, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/256251312/large.jpg",
        "attribution": "(c) jayras, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/115713521/large.jpg",
        "attribution": "(c) Heather A. Wise, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/354323482/large.jpg",
        "attribution": "(c) Matt Felperin, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/137233980/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/352607844/large.jpg",
        "attribution": "(c) dplawrance, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/259998906/large.jpeg",
        "attribution": "(c) HUGO REDONA, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/278246194/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/217909550/large.jpg",
        "attribution": "(c) Dan Watson, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/75306741/large.jpeg",
        "attribution": "(c) Rich Hoyer, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/87099550/large.jpg",
        "attribution": "(c) Brian Hinds, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/31369605/large.jpg",
        "attribution": "(c) spencer_riffle, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2553407/large.jpg",
        "attribution": "(c) Fraser Watson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/114699976/large.jpg",
        "attribution": "(c) Aaron Jones, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/110657034/large.jpg",
        "attribution": "(c) Dave Zeldin, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/50780151/large.jpg",
        "attribution": "(c) Tina To, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/82766627/large.jpg",
        "attribution": "(c) Kristen Garrison, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/125983576/large.jpg",
        "attribution": "(c) Marcia Carter, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/418426762/large.jpeg",
        "attribution": "(c) jduns29, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/42412124/large.jpg",
        "attribution": "(c) wasatch_hunter, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12135177/large.png",
        "attribution": "(c) NHMLA Community Science Program, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57209003/large.jpeg",
        "attribution": "(c) Isabel Herrera, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3212516/large.jpg",
        "attribution": "(c) Amelia Ryan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/46305785/large.jpg",
        "attribution": "(c) ehulani, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65391170/large.jpg",
        "attribution": "(c) jdanielson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/257592979/large.jpeg",
        "attribution": "(c) a-geoman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1280283/large.jpg",
        "attribution": "(c) Bonnie Bradshaw, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2148263/large.jpg",
        "attribution": "(c) Robby Deans, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/266994575/large.jpg",
        "attribution": "(c) Dan Fitzgerald (Fitz), some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65124505/large.jpg",
        "attribution": "(c) Paisley Ramstead, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/134015097/large.jpeg",
        "attribution": "(c) Andrew Newmark, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/457583212/large.jpg",
        "attribution": "(c) Marshal Hedin, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/571614880/large.jpg",
        "attribution": "(c) Sadie Hine, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "rio-grande-cichlid": {
    "inat_taxon_id": 102649,
    "cover_image_url": "https://static.inaturalist.org/photos/579921741/large.jpg",
    "cover_image_attribution": "(c) mattbuckingham, all rights reserved, uploaded by mattbuckingham",
    "cover_image_license": "cc-by-sa",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/359040163/large.jpeg",
        "attribution": "(c) Fishes of Texas team, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14517107/large.jpg",
        "attribution": "(c) manny2496, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/579921741/large.jpg",
        "attribution": "(c) mattbuckingham, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/357338625/large.jpg",
        "attribution": "(c) taiwan_su, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/70698898/large.jpg",
        "attribution": "(c) plsommer, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/207282848/large.jpg",
        "attribution": "(c) embrenhar, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/546489859/large.jpg",
        "attribution": "(c) ekalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/589920359/large.jpg",
        "attribution": "(c) Paige Wood, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/662760/large.JPG",
        "attribution": "(c) Michi Tobler, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/19537991/large.jpg",
        "attribution": "(c) albarr, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/542242358/large.jpg",
        "attribution": "(c) Rodrigo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/505116703/large.jpg",
        "attribution": "(c) Samuel Cardona Garza, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "rio-grande-leopard-frog": {
    "inat_taxon_id": 65975,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2243020/large.jpg",
    "cover_image_attribution": "(c) John Brush, some rights reserved (CC BY-NC)",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/70392176/large.jpg",
        "attribution": "(c) Steven A Lovelace, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5570003/large.jpg",
        "attribution": "(c) Gerry Salmon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/46750260/large.jpg",
        "attribution": "(c) Robert Salinas, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/1337458/large.jpg",
        "attribution": "(c) BJ Stacey, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/499475599/large.jpg",
        "attribution": "(c) David M. Hillis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6270520/large.jpg",
        "attribution": "(c) Sue Anderson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/42725586/large.jpg",
        "attribution": "(c) Adrián González-Martínez, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/469720980/large.jpg",
        "attribution": "(c) José Roberto Muñoz Martínez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6261825/large.jpg",
        "attribution": "(c) k_mccormack, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65908160/large.jpeg",
        "attribution": "(c) Omar Carax, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/178172201/large.jpeg",
        "attribution": "(c) Monitoreo comunitario \"Vergel de Bernalejo\", some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177975012/large.jpeg",
        "attribution": "(c) Monitoreo comunitario \"Vergel de Bernalejo\", some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/346321552/large.jpg",
        "attribution": "(c) diego zárate-aldrete, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/178699687/large.jpeg",
        "attribution": "(c) luoyara, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/106619240/large.jpeg",
        "attribution": "(c) Swarochi Tathagath, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/247312741/large.jpg",
        "attribution": "(c) Mac Marzolini, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/41641071/large.jpg",
        "attribution": "(c) Andrew Garn, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/249799606/large.jpeg",
        "attribution": "(c) juttep, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/22732676/large.jpg",
        "attribution": "(c) Carrie Seltzer, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/176538893/large.jpeg",
        "attribution": "(c) abcdefgewing, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13352008/large.jpg",
        "attribution": "(c) Kala Murphy King, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/427193605/large.jpeg",
        "attribution": "(c) Matt_984, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27167011/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32080300/large.jpg",
        "attribution": "(c) Alec Cowles, some rights reserved (CC BY-NC-ND)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/38533995/large.jpeg",
        "attribution": "(c) Kathy Claypole Biggs, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/24536921/large.jpeg",
        "attribution": "(c) Todd Fitzgerald, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/59985468/large.jpg",
        "attribution": "(c) Catriona Leven, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/208716270/large.jpg",
        "attribution": "(c) Lexi Amico, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/247921335/large.jpeg",
        "attribution": "(c) L. Ernesto Pérez-Montes, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30989490/large.jpg",
        "attribution": "(c) Casey Weissburg, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/100492753/large.jpeg",
        "attribution": "(c) Daniel Martínez Galíndez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/373444142/large.jpg",
        "attribution": "(c) Rodolfo Salinas Villarreal, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/79516219/large.png",
        "attribution": "(c) annifiesta, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/465294424/large.jpeg",
        "attribution": "(c) markli, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/428595630/large.jpeg",
        "attribution": "(c) leoxyz-z75, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/428038449/large.jpeg",
        "attribution": "(c) Sam Anderson, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15561026/large.jpeg",
        "attribution": "(c) bobbyfingers, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/394237448/large.jpeg",
        "attribution": "(c) Shreybae, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/128334872/large.jpeg",
        "attribution": "(c) kristicallat, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/239369255/large.jpg",
        "attribution": "(c) William Wise, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/161992901/large.jpg",
        "attribution": "(c) Dan LaVorgna, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/586201466/large.jpg",
        "attribution": "(c) Steven Wang, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/21468880/large.jpg",
        "attribution": "(c) Teresa Murr, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/82874579/large.jpg",
        "attribution": "(c) Joseph McPhail, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/34069312/large.jpeg",
        "attribution": "(c) Joshua Sands, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/292043617/large.jpeg",
        "attribution": "(c) Shreybae, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/289082386/large.jpeg",
        "attribution": "(c) Brett Jackson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/17652487/large.jpeg",
        "attribution": "(c) Ray Whitson, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/248786304/large.jpg",
        "attribution": "(c) alasdaird, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/12524256/large.jpg",
        "attribution": "(c) mountainmop, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/60807214/large.jpg",
        "attribution": "(c) Jonathan Eisen, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/326206830/large.jpg",
        "attribution": "(c) ብልጫ (Bilcha), all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/116359371/large.jpeg",
        "attribution": "(c) abcdefgewing, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/370429295/large.jpeg",
        "attribution": "(c) bekka_, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/191207722/large.jpg",
        "attribution": "(c) Matthew Thompson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/102934691/large.jpg",
        "attribution": "(c) selwynq, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/100474395/large.jpg",
        "attribution": "(c) adventurehiker, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/235958003/large.jpg",
        "attribution": "(c) Paul Reeves, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/59284710/large.jpeg",
        "attribution": "(c) Justin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/457109118/large.jpg",
        "attribution": "(c) Eli S. Harris, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/176519083/large.jpg",
        "attribution": "(c) Nell Cant, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/329542474/large.jpg",
        "attribution": "(c) amyvcousins, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/47442194/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/16258546/large.jpg",
        "attribution": "(c) fiddleman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/44499619/large.jpeg",
        "attribution": "(c) Nick Block, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/455090726/large.jpg",
        "attribution": "(c) Beau Cotter, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/222333859/large.jpg",
        "attribution": "(c) Daniel Onea, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/593589770/large.jpg",
        "attribution": "(c) Mario, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/558986944/large.jpg",
        "attribution": "(c) Mike, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/328083547/large.jpg",
        "attribution": "(c) Juan Miguel Artigas Azas, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/52442702/large.jpeg",
        "attribution": "(c) Ricardo Arredondo T., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/237691570/large.jpg",
        "attribution": "(c) justinbrods, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/549965815/large.jpg",
        "attribution": "(c) David Yeager, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/221595091/large.jpeg",
        "attribution": "(c) Robert Blackmore, some rights reserved (CC BY)",
        "license": "cc-by",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/164791/large.jpg",
        "attribution": "(c) botanygirl, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/239954291/large.jpeg",
        "attribution": "(c) Aubrey Ballard, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/240076056/large.jpg",
        "attribution": "(c) Arnan Pawawongsak, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/253921236/large.jpg",
        "attribution": "(c) bbass01, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/9617027/large.jpg",
        "attribution": "(c) Mary Johnson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/106027828/large.jpg",
        "attribution": "(c) tenaya33, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/603401178/large.jpg",
        "attribution": "(c) galdrin, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/12393167/large.jpg",
        "attribution": "(c) jaclyn_nicole, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/23365998/large.jpg",
        "attribution": "(c) hannahoswalt, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11833051/large.jpg",
        "attribution": "(c) Jason Travis Watanabe Medaris, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/354396509/large.jpg",
        "attribution": "(c) fish_narc, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/244330123/large.jpg",
        "attribution": "(c) alison2812, some rights reserved (CC BY-NC)",
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
        "url": "https://static.inaturalist.org/photos/276896931/large.jpg",
        "attribution": "(c) Chris Collier, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/84650733/large.jpeg",
        "attribution": "(c) Jon McIntyre, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/71481821/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/71160456/large.jpg",
        "attribution": "(c) Hannah Willars, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/306761867/large.jpeg",
        "attribution": "(c) Jennifer Linde, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/195108655/large.jpg",
        "attribution": "(c) Vincent O'Brien, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/287173079/large.jpg",
        "attribution": "(c) Mason Maron, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/103190176/large.jpg",
        "attribution": "(c) hdcooper, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/513452965/large.jpg",
        "attribution": "(c) Brice C., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/71687977/large.jpeg",
        "attribution": "(c) Brady Schwab, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/10917577/large.jpg",
        "attribution": "(c) Stephen Pollard, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/510695356/large.jpg",
        "attribution": "(c) Ian Cruickshank, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/27072169/large.jpeg",
        "attribution": "(c) César Andrés Castillo, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/28576523/large.jpeg",
        "attribution": "(c) Iván Reséndiz Cruz, all rights reserved",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63629637/large.jpeg",
        "attribution": "(c) Michelle Smith, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/185445343/large.jpg",
        "attribution": "(c) Tina, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/50551016/large.jpg",
        "attribution": "(c) maryfrazer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/157436648/large.jpg",
        "attribution": "(c) brice-crum, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/151881768/large.jpeg",
        "attribution": "(c) Em, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/206371590/large.jpg",
        "attribution": "(c) Ned Grassi, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/296952366/large.jpg",
        "attribution": "(c) Nick Tobler (Cowturtle), some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/580975441/large.jpg",
        "attribution": "(c) setophagablue, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/43040265/large.jpg",
        "attribution": "(c) karleejean, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/81077256/large.jpeg",
        "attribution": "(c) Sam Smith, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/187390586/large.jpeg",
        "attribution": "(c) Ed Corey, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/446889540/large.jpeg",
        "attribution": "(c) mandykins, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/31011535/large.jpg",
        "attribution": "(c) Molly B.Moon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/549170698/large.jpg",
        "attribution": "(c) Nina Carlile, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/264465619/large.jpeg",
        "attribution": "(c) Ashwin Narayanan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/155937049/large.jpeg",
        "attribution": "(c) Donna Dittmann, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/33504431/large.jpg",
        "attribution": "(c) R. Reed McClure, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/42051507/large.jpg",
        "attribution": "(c) geogurl, all rights reserved",
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
        "url": "https://static.inaturalist.org/photos/16216951/large.jpg",
        "attribution": "(c) R. Reed McClure, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5767900/large.jpeg",
        "attribution": "(c) Michael Price, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3209357/large.JPG",
        "attribution": "(c) Kenneth Bader, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/2057890/large.jpg",
        "attribution": "(c) stwhitener, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/183757448/large.jpg",
        "attribution": "(c) cggoss, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/8494241/large.jpg",
        "attribution": "(c) Simon Scarpetta, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/86203025/large.jpeg",
        "attribution": "(c) ellyssas, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7011839/large.jpg",
        "attribution": "(c) David, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6577988/large.jpg",
        "attribution": "(c) Nancye Saunders Drukker, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/17674083/large.jpg",
        "attribution": "(c) andrew_mac, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5767917/large.jpg",
        "attribution": "(c) Michael Price, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/230306410/large.jpg",
        "attribution": "(c) Matt Tomlinson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/447399274/large.jpeg",
        "attribution": "(c) Koby Kilgore, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/455775792/large.jpg",
        "attribution": "(c) jeffwitters, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/411937751/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/46904110/large.jpg",
        "attribution": "(c) aarongunnar, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/448726531/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/140669948/large.jpg",
        "attribution": "(c) Deborah Rosenthal, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4453517/large.jpeg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2229813/large.jpg",
        "attribution": "(c) bendingtree, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/240349657/large.jpg",
        "attribution": "(c) Joy Ruth, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/134823715/large.jpg",
        "attribution": "(c) eflinchbaugh, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/426529007/large.jpeg",
        "attribution": "(c) Anders Hastings, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/540183063/large.jpg",
        "attribution": "(c) David Martin, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/272242967/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/43453611/large.jpg",
        "attribution": "(c) Martin R. Lucas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/8837425/large.jpg",
        "attribution": "(c) Stephen Durrenberger, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/231031511/large.jpg",
        "attribution": "(c) Robert Langstroth, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/405876724/large.jpeg",
        "attribution": "(c) Joe Brewer, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/420949275/large.jpeg",
        "attribution": "(c) Robert Langstroth, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/227397267/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/294780773/large.jpeg",
        "attribution": "(c) cricketgreen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/70594676/large.jpg",
        "attribution": "(c) jdmanthey, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/87522418/large.jpeg",
        "attribution": "(c) C. A. Ivy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/187829450/large.jpeg",
        "attribution": "(c) Justin LeClaire, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/118713249/large.jpg",
        "attribution": "(c) hdmiller, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/258308451/large.jpeg",
        "attribution": "(c) Matt Muir, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/164343320/large.jpeg",
        "attribution": "(c) Squidpastry, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/158060121/large.jpeg",
        "attribution": "(c) Luis Mauricio Mena Páramo, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/422470645/large.jpeg",
        "attribution": "(c) biomule, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/485607211/large.jpg",
        "attribution": "(c) eleggua, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/370590161/large.jpeg",
        "attribution": "(c) francisco, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/107527498/large.jpeg",
        "attribution": "(c) Juan Miguel Artigas Azas, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/431821711/large.jpg",
        "attribution": "(c) Leslie S, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/94331722/large.jpeg",
        "attribution": "(c) Amanda Bullington, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/234350293/large.jpeg",
        "attribution": "(c) wildexxposure, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/243821008/large.jpg",
        "attribution": "(c) jimangelo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/400338525/large.jpeg",
        "attribution": "(c) JeffreyGammon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/282132173/large.jpg",
        "attribution": "(c) Royle Safaris, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/330856973/large.jpeg",
        "attribution": "(c) Bill Levine, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14512111/large.jpg",
        "attribution": "(c) Marv Elliott, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
        "url": "https://static.inaturalist.org/photos/388186227/large.jpg",
        "attribution": "(c) Jessica Kirkendall, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/55374272/large.jpeg",
        "attribution": "(c) Rubén Alejandro Ramírez García, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/46942172/large.jpg",
        "attribution": "(c) Clifton Ladd, C.W.B., some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/46892001/large.jpeg",
        "attribution": "(c) Chris Harrison, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/504140173/large.jpeg",
        "attribution": "(c) Kenneth Bader, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/460180190/large.jpeg",
        "attribution": "(c) Jane Dixon, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/338954837/large.jpg",
        "attribution": "(c) theaquaholic, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/74725/large.JPG",
        "attribution": "(c) Dan, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6235255/large.jpeg",
        "attribution": "(c) Javi Gonzalez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/131577312/large.jpeg",
        "attribution": "(c) David Baake, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4938980/large.jpeg",
        "attribution": "(c) Gerson Herrera, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/160615913/large.jpg",
        "attribution": "(c) Marco Zozaya, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/66706262/large.jpg",
        "attribution": "(c) Juan Cruzado Cortés, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/171786937/large.jpg",
        "attribution": "(c) Steve Bentsen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/93699600/large.jpeg",
        "attribution": "(c) Eric Knight, some rights reserved (CC BY)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/493030203/large.jpg",
        "attribution": "(c) sophyfields, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/275489891/large.jpeg",
        "attribution": "(c) Juan Miguel Artigas Azas, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51044504/large.jpeg",
        "attribution": "(c) rando_boyo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/97607298/large.jpg",
        "attribution": "(c) Jean-Marc Vallières, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/16801322/large.jpg",
        "attribution": "(c) salamanderdance, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/408356317/large.jpeg",
        "attribution": "(c) viperidae4ever, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/83813033/large.jpg",
        "attribution": "(c) Tim Warfel, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/252932414/large.jpg",
        "attribution": "(c) Alon Robbins, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4049405/large.jpg",
        "attribution": "(c) Benjamin Schwartz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62469727/large.jpg",
        "attribution": "(c) Eric R Lichtwardt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57469882/large.jpeg",
        "attribution": "(c) James Holdsworth, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "spotted-gar": {
    "inat_taxon_id": 104249,
    "cover_image_url": "https://static.inaturalist.org/photos/569249126/large.jpg",
    "cover_image_attribution": "(c) Dustin Lynch, all rights reserved, uploaded by Dustin Lynch",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2822747/large.JPG",
        "attribution": "(c) Kristiina Hurme, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/542773225/large.jpg",
        "attribution": "(c) jbelback, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/66059135/large.jpg",
        "attribution": "(c) Kevin Gevaert, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/370414612/large.jpg",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/3075070/large.jpg",
        "attribution": "(c) Mikael Behrens, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/147700129/large.jpg",
        "attribution": "(c) Wendy McCrady, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/272569479/large.jpg",
        "attribution": "(c) Kainoa Lee, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/381590869/large.jpeg",
        "attribution": "(c) Jared Davidson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/147656266/large.jpeg",
        "attribution": "(c) Aan_an_Adventure, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/490447476/large.jpg",
        "attribution": "(c) Thomas Shahan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/1627570/large.JPG",
        "attribution": "(c) Solomon David, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/16266613/large.jpg",
        "attribution": "(c) Greg Silva, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "streckers-chorus-frog": {
    "inat_taxon_id": 24257,
    "cover_image_url": "https://static.inaturalist.org/photos/3221524/large.JPG",
    "cover_image_attribution": "(c) Toby Hibbitts, all rights reserved, uploaded by Toby Hibbitts",
    "cover_image_license": "cc-by",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65933050/large.jpg",
        "attribution": "(c) Cody Stricker, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/345096650/large.jpg",
        "attribution": "(c) Analisa Shields-Estrada, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/371374811/large.jpeg",
        "attribution": "(c) Jack Cochran, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/115707933/large.jpeg",
        "attribution": "(c) George Zimmer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/660886/large.jpg",
        "attribution": "(c) Cullen Hanks, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/121066771/large.jpeg",
        "attribution": "(c) George Zimmer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/480744569/large.jpeg",
        "attribution": "(c) crotrox, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/360891890/large.jpg",
        "attribution": "(c) kayaclover, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/347942486/large.jpg",
        "attribution": "(c) ztrueloc, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/56068327/large.jpg",
        "attribution": "(c) Lauren Parker, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/469562300/large.jpeg",
        "attribution": "(c) Reid Hardin, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/614818431/large.jpg",
        "attribution": "(c) Katherine McElveen, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/114379861/large.jpg",
        "attribution": "(c) Kyle Tansley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8942907/large.jpg",
        "attribution": "(c) Jenn Megyesi, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/140923985/large.jpeg",
        "attribution": "(c) jayras, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/13000684/large.jpg",
        "attribution": "(c) Lynn McMenamin Kolenkiewicz, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/66330139/large.jpg",
        "attribution": "(c) juniper_likethetree, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/107281662/large.jpeg",
        "attribution": "(c) sea-kangaroo, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2076866/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/272802846/large.jpeg",
        "attribution": "(c) Bridget Spencer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/186427674/large.jpeg",
        "attribution": "(c) Ali Campbell, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/79054454/large.jpg",
        "attribution": "(c) Nathan Payne, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/59873040/large.jpg",
        "attribution": "(c) Kate Sherman, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/108082326/large.jpeg",
        "attribution": "(c) Geoff Hoese, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
        "url": "https://static.inaturalist.org/photos/330842920/large.jpeg",
        "attribution": "(c) Barbara Merrill, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/91922829/large.jpg",
        "attribution": "(c) Cody Stricker, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/228119350/large.jpeg",
        "attribution": "(c) Joseph Aubert, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/472056399/large.jpg",
        "attribution": "(c) crobin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/102497868/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55098225/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/432883308/large.jpeg",
        "attribution": "(c) Linda Jo Conn, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/225880306/large.jpg",
        "attribution": "(c) Eric Keith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/8722299/large.jpg",
        "attribution": "(c) Mary Johnson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/238300708/large.jpg",
        "attribution": "(c) carter_mcguffee, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/70192058/large.jpeg",
        "attribution": "(c) Carolyn Ann Lane, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/39114319/large.jpg",
        "attribution": "(c) Carlos Gabriel Leos, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/561211068/large.jpg",
        "attribution": "(c) joycp89, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/149564511/large.jpeg",
        "attribution": "(c) Cindy Mills, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/47272313/large.jpg",
        "attribution": "(c) Zinogre, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/20039815/large.jpg",
        "attribution": "(c) zlalonde, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/135853380/large.jpeg",
        "attribution": "(c) atomiclauren, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/9389049/large.jpeg",
        "attribution": "(c) johnkulas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/290741863/large.jpeg",
        "attribution": "(c) Donald Coggins, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/295607690/large.jpg",
        "attribution": "(c) Meghan Cassidy, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://static.inaturalist.org/photos/140422123/large.jpeg",
        "attribution": "(c) L, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/214374302/large.jpeg",
        "attribution": "(c) Heather Williams, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/394182391/large.jpg",
        "attribution": "(c) Andrew Heckmann, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/515972215/large.jpg",
        "attribution": "(c) Aaron Scherz, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27322439/large.jpg",
        "attribution": "(c) Graham Buck, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55912741/large.jpg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/53242116/large.jpg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/438223529/large.jpeg",
        "attribution": "(c) Ondřej Obrtlík, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/235153781/large.jpg",
        "attribution": "(c) obramlet, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/64570457/large.jpg",
        "attribution": "(c) Peter Chen 2.0, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/93346490/large.jpg",
        "attribution": "(c) Denis Tétreault, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/397537990/large.jpg",
        "attribution": "(c) Senna Bryce Robeson, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/8355859/large.jpg",
        "attribution": "(c) Laura \"Lulu\" Bunton, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/23498859/large.jpg",
        "attribution": "(c) Elizabeth Ogren Erickson, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/23323951/large.jpg",
        "attribution": "(c) Peter S. Burke, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2484582/large.jpg",
        "attribution": "(c) Kimberlie Sasan, some rights reserved (CC BY-ND)",
        "license": "cc-by-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1418357/large.jpg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/411113427/large.jpeg",
        "attribution": "(c) Brett Laabs, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4638218/large.jpeg",
        "attribution": "(c) Andy Newman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/404089311/large.jpeg",
        "attribution": "(c) mclay100, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2314986/large.jpg",
        "attribution": "(c) Kimberlie Sasan, some rights reserved (CC BY-ND)",
        "license": "cc-by-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/364679593/large.jpg",
        "attribution": "(c) acroxtheo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/354176988/large.jpeg",
        "attribution": "(c) Clay Thompson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/359549600/large.jpg",
        "attribution": "(c) JenniferGTX, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/187835504/large.jpg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/3232365/large.JPG",
        "attribution": "(c) Deborah, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/541209639/large.jpg",
        "attribution": "(c) kls572000, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/254058362/large.jpg",
        "attribution": "(c) joeymnewcomb, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/177273095/large.jpg",
        "attribution": "(c) Rosy Badillo (TzotzRox), all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/66161413/large.jpg",
        "attribution": "(c) okaytobesmart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/411647275/large.jpg",
        "attribution": "(c) bambiraptor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/190539356/large.jpg",
        "attribution": "(c) samanthalnava, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/64449499/large.jpeg",
        "attribution": "(c) April Botkin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/460289721/large.jpg",
        "attribution": "(c) Tais Gomez, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/122370329/large.jpg",
        "attribution": "(c) adammosdef, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/426953433/large.jpeg",
        "attribution": "(c) amywarnock, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/66575604/large.jpeg",
        "attribution": "(c) bobbyfingers, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/15969748/large.jpeg",
        "attribution": "(c) Russ Jones, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/199537785/large.jpeg",
        "attribution": "(c) Dimitris S, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/39249407/large.jpeg",
        "attribution": "(c) Tigran Tadevosyan, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/422007190/large.jpeg",
        "attribution": "(c) Michael J. Papay, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/309417720/large.jpeg",
        "attribution": "(c) Sarah, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/219573133/large.jpg",
        "attribution": "(c) Thistledew, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65958831/large.jpeg",
        "attribution": "(c) bobbyfingers, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/48580908/large.jpg",
        "attribution": "(c) Robert Wiuff, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/428232881/large.jpeg",
        "attribution": "(c) Flore du quartier, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/491500237/large.jpg",
        "attribution": "(c) Jacob Weston, some rights reserved (CC BY)",
        "license": "cc-by",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/353642472/large.jpg",
        "attribution": "(c) Alicia Di Rado, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/60054868/large.jpg",
        "attribution": "(c) Ken Butler, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/353851398/large.jpg",
        "attribution": "(c) Julia, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/117554112/large.jpg",
        "attribution": "(c) rolandwirth, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/123860909/large.jpeg",
        "attribution": "(c) Michael Price, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/122076072/large.jpeg",
        "attribution": "(c) Jean Solana, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/137355894/large.jpeg",
        "attribution": "(c) dannysanders, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/41870329/large.jpg",
        "attribution": "(c) Nathan Bendik, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/46951983/large.jpeg",
        "attribution": "(c) Cody Stricker, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/16935702/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/180292588/large.jpg",
        "attribution": "(c) texasturtles, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/71725687/large.jpeg",
        "attribution": "(c) Curren Frasch, some rights reserved (CC BY-NC)",
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
        "url": "https://static.inaturalist.org/photos/388275781/large.jpg",
        "attribution": "(c) Lindsy Hardy, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3492492/large.jpg",
        "attribution": "(c) holland, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/147290243/large.jpg",
        "attribution": "(c) Reid Hardin, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/39793780/large.jpg",
        "attribution": "(c) poonchum81, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/598535120/large.jpg",
        "attribution": "(c) Dan Hayes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/15101050/large.jpg",
        "attribution": "(c) annagypsy, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2913232/large.jpg",
        "attribution": "(c) Chris Harrison, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/84093709/large.jpg",
        "attribution": "(c) Roberto Galindo, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/18162489/large.jpg",
        "attribution": "(c) hollywesberry, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/82696500/large.jpg",
        "attribution": "(c) Brad Moon, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57258322/large.jpg",
        "attribution": "(c) Kory Roberts, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/390018866/large.jpg",
        "attribution": "(c) drepanolobium, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/348780447/large.jpeg",
        "attribution": "(c) Trey M, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/102331980/large.jpeg",
        "attribution": "(c) Cesar A. Arcadia-Hernández, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/173612361/large.jpg",
        "attribution": "(c) quiltedquetzal, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/174081031/large.jpg",
        "attribution": "(c) quiltedquetzal, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/268382785/large.jpeg",
        "attribution": "(c) biomule, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/460291046/large.jpg",
        "attribution": "(c) ramonsita625, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/389261359/large.jpeg",
        "attribution": "(c) Cody Stricker, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/86620893/large.jpg",
        "attribution": "(c) Robert Dobbs, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/160761903/large.jpg",
        "attribution": "(c) Dan LaVorgna, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/420117132/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/563669546/large.jpg",
        "attribution": "(c) Jerry Holycross, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/22970323/large.jpg",
        "attribution": "(c) Josh Benavidez, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/22773155/large.jpeg",
        "attribution": "(c) alexb0000, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/119671432/large.jpeg",
        "attribution": "(c) Michael Price, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/68624033/large.jpg",
        "attribution": "(c) bryanfdz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/28181845/large.jpeg",
        "attribution": "(c) Mauricio Hernández Sánchez, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/127001237/large.jpeg",
        "attribution": "(c) Crystal, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/288741924/large.jpg",
        "attribution": "(c) David Hernandez, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/528524258/large.jpg",
        "attribution": "(c) dupreej, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/89348593/large.jpg",
        "attribution": "(c) chrisfrazier, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/526928195/large.jpg",
        "attribution": "(c) Joey Santore, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/23264211/large.jpg",
        "attribution": "(c) Manuel Nevárez, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/496109952/large.jpg",
        "attribution": "(c) Lynn Seman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/244555651/large.jpg",
        "attribution": "(c) Sara Boggan, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4237674/large.PNG",
        "attribution": "(c) mcsulliva, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1873377/large.jpg",
        "attribution": "(c) rmills12, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/88670589/large.jpeg",
        "attribution": "(c) Cody Stricker, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/504490851/large.jpeg",
        "attribution": "(c) Marianna Stasney, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/366216705/large.jpg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/9695156/large.jpeg",
        "attribution": "(c) johnkulas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/77160763/large.jpeg",
        "attribution": "(c) Cody Stricker, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/107353936/large.jpg",
        "attribution": "(c) saramele, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/496301957/large.jpeg",
        "attribution": "(c) SparklesPikachu, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3315627/large.jpg",
        "attribution": "(c) Stephen Betzen, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14524183/large.jpg",
        "attribution": "(c) Stephanie Marsh, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/216603264/large.jpeg",
        "attribution": "(c) Sir Blue, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/306650/large.jpg",
        "attribution": "(c) Eric Isley, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/96155836/large.jpg",
        "attribution": "(c) Anne, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/17447854/large.jpg",
        "attribution": "(c) Alex Wild, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/191456671/large.jpg",
        "attribution": "(c) ellasowers, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51380784/large.jpg",
        "attribution": "(c) Seth Welliver Sr, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/64174702/large.jpeg",
        "attribution": "(c) Abby Whipple, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7804323/large.jpeg",
        "attribution": "(c) Steven Barney, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/19676187/large.jpg",
        "attribution": "(c) mattbuckingham, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/61179971/large.jpeg",
        "attribution": "(c) Theo Witsell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/378944938/large.jpeg",
        "attribution": "(c) Christen Warkoczewski, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/104004332/large.jpeg",
        "attribution": "(c) umueller, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/18356769/large.jpg",
        "attribution": "(c) Donnie Marshall, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/34365152/large.jpeg",
        "attribution": "(c) trevorjohnson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/34429974/large.jpg",
        "attribution": "(c) pablopicante, all rights reserved",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55747017/large.jpeg",
        "attribution": "(c) Clifton Ladd, C.W.B., some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/231595354/large.jpeg",
        "attribution": "(c) Michael Wight, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51762468/large.jpg",
        "attribution": "(c) texasturtles, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/137355740/large.jpeg",
        "attribution": "(c) dannysanders, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2759100/large.jpg",
        "attribution": "(c) Chris Harrison, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/228064001/large.jpg",
        "attribution": "(c) texasturtles, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/111800802/large.jpg",
        "attribution": "(c) texasturtles, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/89904175/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/228063975/large.jpg",
        "attribution": "(c) texasturtles, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/26448742/large.jpeg",
        "attribution": "(c) Michael Price, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/572099032/large.jpg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51502396/large.jpg",
        "attribution": "(c) texasturtles, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/100837977/large.jpg",
        "attribution": "(c) John Wesley Haughton, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/8144869/large.jpeg",
        "attribution": "(c) jeffrey jenkerson, all rights reserved",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/205006608/large.jpeg",
        "attribution": "(c) Cristy &amp; Jim Wade, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/210077604/large.jpg",
        "attribution": "(c) bita, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/408686280/large.jpeg",
        "attribution": "(c) Frances, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/21526478/large.jpg",
        "attribution": "(c) Zach DuFran, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/14577422/large.jpg",
        "attribution": "(c) Deborah M, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/24701313/large.jpeg",
        "attribution": "(c) Michele Papan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/22729757/large.jpeg",
        "attribution": "(c) Mary, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/34819798/large.jpeg",
        "attribution": "(c) Dennis Hodapp, all rights reserved",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/175561546/large.jpeg",
        "attribution": "(c) Debbie M. Giroux, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62629531/large.jpg",
        "attribution": "(c) Gary Rogers, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/246591364/large.jpg",
        "attribution": "(c) lisar21, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/355842141/large.jpg",
        "attribution": "(c) flayser, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/38969840/large.jpg",
        "attribution": "(c) holdendb, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/38137760/large.jpg",
        "attribution": "(c) William Wimley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/368898961/large.jpg",
        "attribution": "(c) Fred Loxsom, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/263637565/large.jpeg",
        "attribution": "(c) Randy Moody, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/101246173/large.jpg",
        "attribution": "(c) Rich Kostecke, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/48533151/large.jpeg",
        "attribution": "(c) kari_dawn, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/10430981/large.jpg",
        "attribution": "(c) mntxjen, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/505504587/large.jpg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/362140486/large.jpg",
        "attribution": "(c) Kevin Graham, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3668242/large.JPG",
        "attribution": "(c) Robby Deans, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/304866231/large.jpg",
        "attribution": "(c) Amy Prentice, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/523410005/large.jpg",
        "attribution": "(c) Cesar Pollo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/596309110/large.jpg",
        "attribution": "(c) Zeev NG, all rights reserved",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/572341957/large.jpg",
        "attribution": "(c) Earnie Lehman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/9120153/large.jpg",
        "attribution": "(c) Nathan Taylor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/455582982/large.jpeg",
        "attribution": "(c) José G. Flores Ventura, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/244568721/large.jpeg",
        "attribution": "(c) Laura Haynes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/306175293/large.jpg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/162479557/large.jpg",
        "attribution": "(c) farco474, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/31965050/large.jpg",
        "attribution": "(c) Wesley Mathis, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/173014375/large.jpg",
        "attribution": "(c) mille773, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/82307615/large.jpg",
        "attribution": "(c) jon_merz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/248002989/large.jpg",
        "attribution": "(c) Noelle M. Brooks, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/188742476/large.jpeg",
        "attribution": "(c) colton_flage03, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/6455394/large.jpg",
        "attribution": "(c) mikeintyler, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/332922098/large.jpeg",
        "attribution": "(c) Joey Santore, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3086499/large.jpg",
        "attribution": "(c) Diana-Terry Hibbitts, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/261945662/large.jpeg",
        "attribution": "(c) Reid Hardin, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/55022631/large.jpg",
        "attribution": "(c) benolda, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/192949226/large.jpg",
        "attribution": "(c) Mary Walsh, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/54307951/large.jpg",
        "attribution": "(c) Donovan Moxley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/330000092/large.jpeg",
        "attribution": "(c) Frances, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/157010529/large.jpeg",
        "attribution": "(c) Bob O'Kennon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/275645956/large.jpeg",
        "attribution": "(c) Mike Farley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/276369525/large.jpeg",
        "attribution": "(c) blake hendon, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/238316509/large.jpg",
        "attribution": "(c) KWood, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/242423488/large.jpg",
        "attribution": "(c) Cody Stricker, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65740267/large.jpg",
        "attribution": "(c) cdrliz, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/121932895/large.jpg",
        "attribution": "(c) tmorgan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/169953191/large.jpeg",
        "attribution": "(c) Jack Cochran, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/228439194/large.jpeg",
        "attribution": "(c) Courtney Cloyd, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/163106216/large.jpeg",
        "attribution": "(c) Debra Hendricks, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/137307396/large.jpeg",
        "attribution": "(c) lauradugan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/111159144/large.jpg",
        "attribution": "(c) GayleIsTired, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/4812009/large.jpg",
        "attribution": "(c) Lindsay Hall, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/476601236/large.jpg",
        "attribution": "(c) Genna Raphel, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/353846400/large.jpg",
        "attribution": "(c) Alissa, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/20210477/large.jpg",
        "attribution": "(c) Jim Deis, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/298690253/large.jpeg",
        "attribution": "(c) River Ahlquist, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/451140914/large.jpeg",
        "attribution": "(c) Bo Zaremba, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/50842302/large.jpg",
        "attribution": "(c) San Ju Hernandez, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/4276720/large.jpg",
        "attribution": "(c) Eric Wesley, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/129546687/large.jpeg",
        "attribution": "(c) Cody Stricker, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/132003922/large.jpg",
        "attribution": "(c) kat_nightingale, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1808410/large.jpg",
        "attribution": "(c) lmenaturalist, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/367311197/large.jpg",
        "attribution": "(c) lwoods211, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/503525463/large.jpg",
        "attribution": "(c) Adrian Torres B., some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/191726398/large.jpeg",
        "attribution": "(c) Eber Chavez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/195744671/large.jpeg",
        "attribution": "(c) Bob Nieman, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/252991386/large.jpg",
        "attribution": "(c) Byron D. Augustin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/1927262/large.jpg",
        "attribution": "(c) carlos mancilla, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/483751465/large.jpg",
        "attribution": "(c) Antonio Rojas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/20851359/large.jpg",
        "attribution": "(c) JD James, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/70917412/large.jpg",
        "attribution": "(c) Joe Webb, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/96120629/large.jpeg",
        "attribution": "(c) Jamie Maraman, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/503068211/large.jpg",
        "attribution": "(c) Cin-Ty Lee, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/169737179/large.jpeg",
        "attribution": "(c) sarinole, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/516759428/large.jpg",
        "attribution": "(c) Jean H., some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/543636051/large.jpg",
        "attribution": "(c) Kristy Baker, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/425942421/large.jpeg",
        "attribution": "(c) Frankie Simmons, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/428374987/large.jpeg",
        "attribution": "(c) erynw, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/198273791/large.jpeg",
        "attribution": "(c) A. Rector, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/398295183/large.jpg",
        "attribution": "(c) Susie Doe, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/537782505/large.jpg",
        "attribution": "(c) Susan Anderson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/306280487/large.jpeg",
        "attribution": "(c) raunl, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/395736300/large.jpeg",
        "attribution": "(c) Jack Cochran, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/396309626/large.jpg",
        "attribution": "(c) Constance Rossiter, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/405886565/large.jpeg",
        "attribution": "(c) themisfitgarden, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/384541822/large.jpg",
        "attribution": "(c) Turner Brockman, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/74749718/large.jpg",
        "attribution": "(c) Benjamin Schwartz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3702113/large.JPG",
        "attribution": "(c) Michael D Fox, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/367052971/large.jpg",
        "attribution": "(c) Sequoia Janirella Wrens, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/210931385/large.jpeg",
        "attribution": "(c) Hannah Girgente, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/307625617/large.jpg",
        "attribution": "(c) Madi Stessman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/189716/large.jpg",
        "attribution": "(c) Diana-Terry Hibbitts, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/357347772/large.jpg",
        "attribution": "(c) Ian Meloni, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/487351976/large.jpg",
        "attribution": "(c) michaelkalisek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7474999/large.jpg",
        "attribution": "(c) Marissa Little, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/90963917/large.jpeg",
        "attribution": "(c) Gabriel Ortiz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/364955944/large.jpg",
        "attribution": "(c) mm-littledeer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "texas-toad": {
    "inat_taxon_id": 64987,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3342471/large.jpg",
    "cover_image_attribution": "(c) Melody Lytle, some rights reserved (CC BY-NC), uploaded by Melody Lytle",
    "cover_image_license": "cc-by-nc",
    "inat_additional_images": [
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/338941764/large.jpg",
        "attribution": "(c) egs-_-, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/397177771/large.jpg",
        "attribution": "(c) Franz Schmidt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/622749060/large.jpg",
        "attribution": "(c) Jorge Anzures Gómez, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1660975/large.jpg",
        "attribution": "(c) Chris Harrison, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/908975/large.JPG",
        "attribution": "(c) CH Hemphill, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12573405/large.jpeg",
        "attribution": "(c) Sam Kieschnick, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/320752986/large.jpg",
        "attribution": "(c) af03, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/26169526/large.jpg",
        "attribution": "(c) frankiew3, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/49348828/large.jpeg",
        "attribution": "(c) Jon McIntyre, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/39471597/large.jpg",
        "attribution": "(c) sheriffgator, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/246857099/large.jpeg",
        "attribution": "(c) Austin R. Kelly, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/370986290/large.jpeg",
        "attribution": "(c) vanessadelga, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/149291400/large.jpeg",
        "attribution": "(c) Chia⚡aka Cory Chiappone, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/92462076/large.jpg",
        "attribution": "(c) teresitag, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/167199220/large.jpg",
        "attribution": "(c) Drew R. Davis, Ph.D., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/137280747/large.jpeg",
        "attribution": "(c) Michael Orgill, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/63768131/large.jpg",
        "attribution": "(c) Bill Hubick, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/492775377/large.jpg",
        "attribution": "(c) stephwnek, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/336070017/large.jpg",
        "attribution": "(c) mickeydylan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/143883221/large.jpg",
        "attribution": "(c) O.j. Carranco, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/80380502/large.jpg",
        "attribution": "(c) rubbertoerichie, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/230777777/large.jpg",
        "attribution": "(c) jdcardenas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/189231153/large.jpeg",
        "attribution": "(c) Sarab Seth, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/160379137/large.jpeg",
        "attribution": "(c) Cynthia Cepeda, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/570756095/large.jpg",
        "attribution": "(c) Zella W., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/194595445/large.jpg",
        "attribution": "(c) eleonorelc, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/253953453/large.jpg",
        "attribution": "(c) steven_bach, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/74048986/large.jpg",
        "attribution": "(c) hollydenise4, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/180098435/large.jpeg",
        "attribution": "(c) JaguarGozandoSelva, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/190752500/large.jpeg",
        "attribution": "(c) Robby Deans, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/470108651/large.jpg",
        "attribution": "(c) Alec Karcz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/269428654/large.jpg",
        "attribution": "(c) Sydney Dragon, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/31412420/large.jpg",
        "attribution": "(c) hunter_hill, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/17574991/large.jpg",
        "attribution": "(c) Cassie Kay, some rights reserved (CC BY-ND)",
        "license": "cc-by-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62140921/large.jpg",
        "attribution": "(c) brolee, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/466052809/large.jpg",
        "attribution": "(c) Erik Atwell, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://static.inaturalist.org/photos/5490305/large.jpg",
        "attribution": "(c) Len Mazur, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13241688/large.jpeg",
        "attribution": "(c) Fabien Terrade, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/13051261/large.jpeg",
        "attribution": "(c) Carla, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65452443/large.jpeg",
        "attribution": "(c) Paul Bartels, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/28778761/large.jpg",
        "attribution": "(c) Luis Mauricio Mena Páramo, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/422134817/large.jpg",
        "attribution": "(c) Kevin Snair, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/264307704/large.jpeg",
        "attribution": "(c) Abigail Nelson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/263981348/large.jpg",
        "attribution": "(c) Andrew Murray, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5140972/large.jpeg",
        "attribution": "(c) judywelna, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/390787388/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/330622350/large.jpeg",
        "attribution": "(c) dclump, all rights reserved",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/442691580/large.jpeg",
        "attribution": "(c) KristieH, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/91963144/large.jpg",
        "attribution": "(c) katcruz, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/428615895/large.jpeg",
        "attribution": "(c) sethdeaton, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/35274423/large.jpg",
        "attribution": "(c) Manuel, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/198828886/large.jpg",
        "attribution": "(c) aimeetaylor240, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/82996188/large.jpg",
        "attribution": "(c) Ann Boyce Hutto, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/239308695/large.jpeg",
        "attribution": "(c) Luis Trinchan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/24732682/large.jpg",
        "attribution": "(c) bifstabaloni, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/161573862/large.jpg",
        "attribution": "(c) Dima 02, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/467811913/large.jpg",
        "attribution": "(c) EmilyandNu, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/491350259/large.jpeg",
        "attribution": "(c) Vivero Forestal Riviera Maya, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/96122920/large.jpg",
        "attribution": "(c) nicolette-ann, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/103445872/large.jpg",
        "attribution": "(c) jbnc11, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/370162038/large.jpeg",
        "attribution": "(c) payhops, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/374155209/large.jpeg",
        "attribution": "(c) Robbie Robbins, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/625697271/large.jpg",
        "attribution": "(c) lillybyrd, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/312092431/large.jpg",
        "attribution": "(c) feiche, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/364997153/large.jpg",
        "attribution": "(c) Zachary Lang, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/329474979/large.jpeg",
        "attribution": "(c) Robert Langellier, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/308561032/large.jpg",
        "attribution": "(c) Mark Horton-Sacha, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/39462335/large.jpg",
        "attribution": "(c) sehnature, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/355450159/large.jpg",
        "attribution": "(c) Tom Scavo, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/51554707/large.jpeg",
        "attribution": "(c) Sara Rall, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/154784754/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/148942042/large.jpeg",
        "attribution": "(c) kaylageserick, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/144466781/large.jpg",
        "attribution": "(c) dhall519, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/154212751/large.jpeg",
        "attribution": "(c) vio1ets, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/155668990/large.jpeg",
        "attribution": "(c) Megan Sibray, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/125267820/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30425724/large.jpg",
        "attribution": "(c) Max Allen, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/460836216/large.jpeg",
        "attribution": "(c) Sonorabee, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/111578284/large.jpeg",
        "attribution": "(c) sdrov, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2443002/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/41876462/large.jpeg",
        "attribution": "(c) echobravosierra, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/9085008/large.jpg",
        "attribution": "(c) Millie Basden, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/114750328/large.jpeg",
        "attribution": "(c) brookieb, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/228904433/large.jpg",
        "attribution": "(c) Caleb Swecker, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/298740635/large.jpg",
        "attribution": "(c) ca_photo_hobbyist, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/612880984/large.jpg",
        "attribution": "(c) Sydney Penner, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/513247693/large.jpg",
        "attribution": "(c) alltheanimals, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65643040/large.jpeg",
        "attribution": "(c) Steven Kurniawidjaja, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/310878712/large.jpg",
        "attribution": "(c) Mila Turov, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/25942303/large.jpg",
        "attribution": "(c) Joshua Liverman, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/72223751/large.jpeg",
        "attribution": "(c) Jennifer Linde, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/481257478/large.jpeg",
        "attribution": "(c) Josiah Smith, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/4476011/large.jpg",
        "attribution": "(c) Morgan Wyatt, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/7737252/large.jpg",
        "attribution": "(c) Tara Ciavarella, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/576205840/large.gif",
        "attribution": "(c) Chris Stahl, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/607820380/large.jpg",
        "attribution": "(c) Dayne Jordan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/322318850/large.jpeg",
        "attribution": "(c) Kristin A. Bakkegard, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/33739185/large.jpg",
        "attribution": "(c) Laura Mae, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5821314/large.jpg",
        "attribution": "(c) johnwilliams, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/14826193/large.jpg",
        "attribution": "(c) kfeeney, all rights reserved",
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
      {
        "url": "https://static.inaturalist.org/photos/431325057/large.jpeg",
        "attribution": "(c) cricri210, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/490369558/large.png",
        "attribution": "(c) Dylan Osterhaus, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/9426557/large.jpg",
        "attribution": "(c) duckswim2, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/118177268/large.jpg",
        "attribution": "(c) John Van Veldhuizen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/70796419/large.jpg",
        "attribution": "(c) Fred Melgert / Carla Hoegen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/43055037/large.jpg",
        "attribution": "(c) Daniel Burr, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11117631/large.jpeg",
        "attribution": "(c) captainmagpie1, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/48958748/large.jpg",
        "attribution": "(c) Patrick Dockens, some rights reserved (CC BY-NC-SA)",
        "license": "cc-by-nc-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/44773469/large.jpg",
        "attribution": "(c) Bryan Box, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/81883978/large.jpg",
        "attribution": "(c) stercorariidae, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13197889/large.jpeg",
        "attribution": "(c) Cheyenne Herzog-Lowrance, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2020204/large.jpg",
        "attribution": "(c) Corey Lange, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/319767530/large.jpeg",
        "attribution": "(c) Nathaniel Sharp, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/217394043/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/520148/large.JPG",
        "attribution": "(c) sea-kangaroo, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/107618412/large.jpg",
        "attribution": "(c) Joe MDO, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/67970909/large.jpeg",
        "attribution": "(c) Albertus Horn, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/479588880/large.jpeg",
        "attribution": "(c) kademae, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57636585/large.jpg",
        "attribution": "(c) tatyana_kolesnikova, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/491655448/large.jpeg",
        "attribution": "(c) calliopegirl, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/64498283/large.jpg",
        "attribution": "(c) deborod, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/216784874/large.jpeg",
        "attribution": "(c) stjohns9, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/485263880/large.jpg",
        "attribution": "(c) Kieran Hanrahan, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/315081813/large.jpg",
        "attribution": "(c) dalemeister, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/174035286/large.jpeg",
        "attribution": "(c) Sue Stutzman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/88778420/large.jpg",
        "attribution": "(c) Susan J. Hewitt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/8486972/large.jpg",
        "attribution": "(c) Ross Byerly, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/10319310/large.jpg",
        "attribution": "(c) Tony Iwane, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/397593819/large.jpg",
        "attribution": "(c) Drew R. Davis, Ph.D., some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/7366890/large.jpg",
        "attribution": "(c) Philip Woods, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/31455593/large.jpg",
        "attribution": "(c) M.L. Watson, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8388853/large.jpg",
        "attribution": "(c) Adam Cohen, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4217977/large.JPG",
        "attribution": "(c) andrewdavies9000, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/231009352/large.jpeg",
        "attribution": "(c) Kristen Warren, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/419172790/large.jpeg",
        "attribution": "(c) Ximena Zuniga, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/184938866/large.jpeg",
        "attribution": "(c) Pete A, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/117900236/large.jpeg",
        "attribution": "(c) Kimberlie Sasan, some rights reserved (CC BY-ND)",
        "license": "cc-by-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/43048732/large.jpg",
        "attribution": "(c) cymbre, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/66513197/large.gif",
        "attribution": "(c) Joshua Sands, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/212167743/large.jpg",
        "attribution": "(c) bergamot15, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/463623625/large.jpg",
        "attribution": "(c) RLM, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/48435743/large.jpeg",
        "attribution": "(c) S. Queen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/134495428/large.jpg",
        "attribution": "(c) Nash Turley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/345822505/large.jpeg",
        "attribution": "(c) Matthew Lindsey, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/21957468/large.jpeg",
        "attribution": "(c) Pedro Nájera Quezada, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/42637791/large.jpeg",
        "attribution": "(c) S. Queen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/102112049/large.jpeg",
        "attribution": "(c) Mike Hensley, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/216233935/large.jpg",
        "attribution": "(c) Luke Grabow, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4697164/large.jpg",
        "attribution": "(c) Jonathan Layman, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/269705063/large.jpeg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://static.inaturalist.org/photos/71530682/large.jpg",
        "attribution": "(c) Colin Hewitt, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/611969140/large.gif",
        "attribution": "(c) Misha Zitser, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/443795599/large.jpeg",
        "attribution": "(c) Misha Zitser, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/56354498/large.jpeg",
        "attribution": "(c) Roy, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/606589066/large.jpg",
        "attribution": "(c) Bobby McCabe, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/564820208/large.jpg",
        "attribution": "(c) quasrepo, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/482151345/large.jpg",
        "attribution": "(c) Kurt Weitendorf, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/165476691/large.jpg",
        "attribution": "(c) Mel Sovay, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/611966112/large.jpg",
        "attribution": "(c) Misha Zitser, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/481392707/large.jpeg",
        "attribution": "(c) Dave Odd, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/190246563/large.jpeg",
        "attribution": "(c) Grant Wang, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/325664233/large.jpeg",
        "attribution": "(c) Barbara Peck, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/587196175/large.jpg",
        "attribution": "(c) Edy Maciel, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/316473373/large.jpg",
        "attribution": "(c) Craig K. Hunt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/10933346/large.jpeg",
        "attribution": "(c) joannerusso, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/183616387/large.jpg",
        "attribution": "(c) Renee Grayson, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/348948872/large.jpg",
        "attribution": "(c) Melanie J. Davis, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/538562109/large.jpg",
        "attribution": "(c) Karen Szafrajda, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/233874732/large.jpg",
        "attribution": "(c) Ross Millikan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/233817725/large.jpeg",
        "attribution": "(c) Sandy Thomas, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/284363278/large.jpg",
        "attribution": "(c) Gavin Noyes, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/311715150/large.jpg",
        "attribution": "(c) Tara Rose Littlefield, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1947732/large.jpg",
        "attribution": "(c) Greg Lasley, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/4349538/large.jpg",
        "attribution": "(c) Judd Patterson, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/232040348/large.jpg",
        "attribution": "(c) skytheanimalman, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/57974273/large.jpg",
        "attribution": "(c) Jenny Warren, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/24624866/large.jpg",
        "attribution": "no rights reserved",
        "license": "cc0",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/27499090/large.jpeg",
        "attribution": "(c) Nathaniel Sharp, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/185061464/large.jpeg",
        "attribution": "(c) Alex Karasoulos, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/58166047/large.jpg",
        "attribution": "(c) Whitney Mattila, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/156595284/large.jpg",
        "attribution": "(c) Blake Ross, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/260766252/large.jpg",
        "attribution": "(c) Fenner Morse, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/350534563/large.jpeg",
        "attribution": "(c) Matthew Cozart, some rights reserved (CC BY-ND)",
        "license": "cc-by-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/205650166/large.jpg",
        "attribution": "(c) barber5, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/257684990/large.jpg",
        "attribution": "(c) jim22lawrence, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/340836397/large.jpeg",
        "attribution": "(c) Brian Wulker, some rights reserved (CC BY-NC)",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/163849435/large.jpeg",
        "attribution": "(c) Jeremy Gatten, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://static.inaturalist.org/photos/129831078/large.jpg",
        "attribution": "(c) Rodrigo Izquierdo, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/10500666/large.jpeg",
        "attribution": "(c) ellen hildebrandt, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/65421313/large.jpeg",
        "attribution": "(c) Jorge Leirana Alcocer, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/86707662/large.jpeg",
        "attribution": "(c) Joseph Connors, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/326764907/large.jpg",
        "attribution": "(c) Kim Springer, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/164241739/large.jpeg",
        "attribution": "(c) Rubén Alejandro Ramírez García, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/530487866/large.jpg",
        "attribution": "(c) José Martín Ceja Medina, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/531623801/large.jpg",
        "attribution": "(c) ara_macao, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/358904858/large.jpg",
        "attribution": "(c) René Durocher, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8173539/large.jpg",
        "attribution": "(c) Roberto R. Calderón, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/273793487/large.jpg",
        "attribution": "(c) Michael Gray, all rights reserved",
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
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/211887141/large.jpg",
        "attribution": "(c) Zach Kemp, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/295118848/large.jpeg",
        "attribution": "(c) Gavin Slater, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/155606768/large.jpeg",
        "attribution": "(c) Gail Taylor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/57441794/large.jpg",
        "attribution": "(c) Guy Lemelin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63019656/large.jpg",
        "attribution": "(c) skitterbug, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/155606812/large.jpeg",
        "attribution": "(c) Gail Taylor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/86992538/large.jpg",
        "attribution": "(c) adventurehiker, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/26046756/large.jpg",
        "attribution": "(c) Rick Nirschl, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/528082705/large.jpg",
        "attribution": "(c) Jimmy Dee, some rights reserved (CC BY-SA)",
        "license": "cc-by-sa",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/215107577/large.jpeg",
        "attribution": "(c) Bex Goreham, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/262561994/large.jpg",
        "attribution": "(c) Gail Taylor, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/217046149/large.jpg",
        "attribution": "(c) Roberto R. Calderón, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/206967239/large.jpeg",
        "attribution": "(c) John Matthew Erickson, all rights reserved",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
  "woodhouses-toad": {
    "inat_taxon_id": 64989,
    "cover_image_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/299916920/large.jpg",
    "cover_image_attribution": "(c) Hunter West, some rights reserved (CC BY-NC-ND), uploaded by Hunter West",
    "cover_image_license": "cc-by-nc-nd",
    "inat_additional_images": [
      {
        "url": "https://static.inaturalist.org/photos/322257444/large.jpg",
        "attribution": "(c) Caden Myers, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/402843918/large.jpg",
        "attribution": "(c) cabbagehinjabi, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/85357210/large.jpg",
        "attribution": "(c) Lisa Michot, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/285866453/large.jpg",
        "attribution": "(c) emilyealarsen, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/285333375/large.jpeg",
        "attribution": "(c) Abigail Skoda, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/310244425/large.jpg",
        "attribution": "(c) Sichtopher Chrisko, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/301716212/large.jpg",
        "attribution": "(c) Hunter D. Johnson, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/306857253/large.jpg",
        "attribution": "(c) Jing-Yi Lu, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/283778752/large.jpeg",
        "attribution": "(c) Hayden Lewis, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/93526054/large.jpg",
        "attribution": "(c) Lee Stark, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/10180465/large.jpeg",
        "attribution": "(c) cushingnw, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/144479670/large.jpeg",
        "attribution": "(c) andyp82, all rights reserved",
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
        "url": "https://static.inaturalist.org/photos/459491894/large.jpeg",
        "attribution": "(c) andrew2285, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/450899059/large.jpeg",
        "attribution": "(c) Jerry Kosanovich, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/112363349/large.jpeg",
        "attribution": "(c) dkucera, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/121324210/large.jpeg",
        "attribution": "(c) Ashley De Leon, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/594513683/large.jpg",
        "attribution": "(c) allenbryan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/477699415/large.jpg",
        "attribution": "(c) Clara Thiel, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/50652327/large.jpg",
        "attribution": "(c) trevorsumlin, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/435458821/large.jpeg",
        "attribution": "(c) Meagan Combs, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/552951069/large.jpg",
        "attribution": "(c) gizzardscout, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/582654329/large.jpg",
        "attribution": "(c) mmkimberly, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/583658582/large.jpg",
        "attribution": "(c) christinahite, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/104012598/large.jpeg",
        "attribution": "(c) Philip Woods, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/101252660/large.jpg",
        "attribution": "(c) huichaoyang, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://static.inaturalist.org/photos/61098511/large.jpeg",
        "attribution": "(c) Joseph Connors, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/242233958/large.jpeg",
        "attribution": "(c) waimeamiddleschool, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/464987829/large.jpeg",
        "attribution": "(c) Roberto Rojo, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/320607093/large.jpeg",
        "attribution": "(c) Kyle Eaton, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/169697717/large.jpeg",
        "attribution": "(c) Vinícius Rodrigues de Souza, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/601516787/large.jpg",
        "attribution": "(c) Alex Echenberg, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3175464/large.jpg",
        "attribution": "(c) donkephart, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/70433041/large.jpg",
        "attribution": "(c) Giovanny esteban zapata usuga, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/160493226/large.jpeg",
        "attribution": "(c) Nature Lover, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/4761824/large.jpg",
        "attribution": "(c) susan_ifr, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/455116683/large.jpg",
        "attribution": "(c) Rodolfo Salinas Villarreal, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/23144997/large.jpg",
        "attribution": "(c) crayshack, some rights reserved (CC BY-NC)",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/414019630/large.jpeg",
        "attribution": "(c) Paul Crump, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/259063615/large.jpg",
        "attribution": "(c) Ashwin Narayanan, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/208674395/large.jpeg",
        "attribution": "(c) Michelle W. （鍾偉瑋）, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/3543734/large.JPG",
        "attribution": "(c) Krystin Schaack, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://static.inaturalist.org/photos/402128005/large.jpg",
        "attribution": "(c) Michael Gray, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/290698289/large.jpg",
        "attribution": "(c) Dan Kirmer - DNR, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/437381089/large.jpg",
        "attribution": "(c) Ad Konings, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/5024021/large.jpeg",
        "attribution": "(c) Michael Price, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/142131666/large.jpeg",
        "attribution": "(c) Todd M, all rights reserved",
      },
      {
        "url": "https://static.inaturalist.org/photos/30274607/large.jpeg",
        "attribution": "(c) stoat77, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65987137/large.jpeg",
        "attribution": "(c) Nick Block, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://static.inaturalist.org/photos/736677/large.jpg",
        "attribution": "(c) J. N. Stuart, all rights reserved",
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
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/610892541/large.jpg",
        "attribution": "(c) d3lewis, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/255984421/large.jpg",
        "attribution": "(c) Evan C, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/612023814/large.jpg",
        "attribution": "(c) Olivia LaRochelle, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/408742214/large.jpeg",
        "attribution": "(c) Matt Felperin, some rights reserved (CC BY)",
        "license": "cc-by",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/168986673/large.jpg",
        "attribution": "(c) Nancy Baumeister, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://static.inaturalist.org/photos/106580697/large.jpg",
        "attribution": "(c) Juan Miguel Artigas Azas, all rights reserved",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/102336450/large.jpg",
        "attribution": "(c) Sarah Webb, some rights reserved (CC BY-NC-ND)",
        "license": "cc-by-nc-nd",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/1001270/large.jpg",
        "attribution": "(c) Juan Carlos Pérez Magaña, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/270574265/large.jpg",
        "attribution": "(c) Kris Cu, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/245875181/large.jpg",
        "attribution": "(c) cotinga, some rights reserved (CC BY-NC)",
        "license": "cc-by-nc",
      },
      {
        "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/602123141/large.jpg",
        "attribution": "(c) Tommy Andriollo, some rights reserved (CC BY)",
        "license": "cc-by",
      },
    ],
    "cover_image_source": "iNaturalist",
  },
};
