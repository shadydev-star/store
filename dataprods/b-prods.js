const bprods = [
  {
    id: "20c8d3e5-1d84-4458-87ad-9b511f26cbf4",
    image: "b-prods/adhesive hooks.jpg",
    name: "Adhesive Hooks",
    rating: { stars: 4.5, count: 481 },
    priceCents: 859,
    keywords: ["bathroom", "organizer", "hooks"]
  },
  {
    id: "4fcae8b7-c623-4d77-a47c-6899853c912c",
    image: "b-prods/bathroom rug.jpg",
    name: "Bathroom Rug",
    rating: { stars: 4.5, count: 732 },
    priceCents: 1867,
    keywords: ["bathroom", "rug", "mat"]
  },
  {
    id: "c31a36d2-5e34-42c2-9a8b-52b93e2d68cb",
    image: "b-prods/bathroom shelves.jpg",
    name: "Bathroom Shelves",
    rating: { stars: 4.5, count: 394 },
    priceCents: 2784,
    keywords: ["bathroom", "storage", "organizer"]
  },
  {
    id: "fbc7e329-6db5-4d45-9234-1f5c16597b71",
    image: "b-prods/bathtub and shower maths.jpg",
    name: "Bathtub and Shower Maths",
    rating: { stars: 4.0, count: 308 },
    priceCents: 1576,
    keywords: ["bathroom", "shower", "mat"]
  },
  {
    id: "3b47b3ae-f36d-490c-8c6f-e458a6a77cb6",
    image: "b-prods/cotton swabs dispenser.jpg",
    name: "Cotton Swabs Dispenser",
    rating: { stars: 5, count: 654 },
    priceCents: 1149,
    keywords: ["bathroom", "storage", "cotton", "organizer"]
  },
  {
    id: "175cde1d-9bbf-4a88-8f12-568781a0e184",
    image: "b-prods/night lights plug.jpg",
    name: "Night Lights Plug",
    rating: { stars: 4.5, count: 389 },
    priceCents: 1623,
    keywords: ["bathroom", "light", "safety"]
  },
  {
    id: "2e1a3e7d-e96c-4d1c-9cc6-dfcd7c0c8cbf",
    image: "b-prods/poster for bathroom wall.jpg",
    name: "Poster for Bathroom Wall",
    rating: { stars: 4.5, count: 473 },
    priceCents: 1375,
    keywords: ["bathroom", "poster", "decor"]
  },
  {
    id: "f08f0027-b7b2-4e88-9f57-70b6a08ea0ae",
    image: "b-prods/shower bath organiser.jpg",
    name: "Shower Bath Organiser",
    rating: { stars: 3.5, count: 519 },
    priceCents: 2472,
    keywords: ["bathroom", "shower", "organizer"]
  },
  {
    id: "ec011e3e-e6e6-4e8a-bdd4-ff74f3749e69",
    image: "b-prods/shower curtain.jpg",
    name: "Shower Curtain",
    rating: { stars: 4.5, count: 621 },
    priceCents: 1901,
    keywords: ["bathroom", "shower", "curtain"]
  },
  {
    id: "ab6ff6cf-1966-4c02-b2e2-50e7275a2450",
    image: "b-prods/showerhead with 6 modes.jpg",
    name: "Showerhead with 6 Modes",
    rating: { stars: 4.5, count: 843 },
    priceCents: 3268,
    keywords: ["bathroom", "shower", "showerhead"]
  },
  {
    id: "fa009f52-e989-4767-b1c4-372d4ebc9267",
    image: "b-prods/smart scale.jpg",
    name: "Smart Scale",
    rating: { stars: 4.0, count: 399 },
    priceCents: 2895,
    keywords: ["bathroom", "scale", "fitness"]
  },
  {
    id: "02e7a981-8d7e-412e-9db6-b8f8f8fc52f2",
    image: "b-prods/toilet paper holder.jpg",
    name: "Toilet Paper Holder",
    rating: { stars: 4.5, count: 537 },
    priceCents: 1394,
    keywords: ["bathroom", "toilet", "holder"]
  },
  {
    id: "d93a1863-7430-4be9-a2f3-c3f814efc334",
    image: "b-prods/toilet plunger brush set.jpg",
    name: "Toilet Plunger Brush Set",
    rating: { stars: 4.5, count: 618 },
    priceCents: 2225,
    keywords: ["bathroom", "toilet", "cleaning"]
  },
  {
    id: "6d08d55f-2d56-4a12-85bb-dc88d2020e69",
    image: "b-prods/tootbrush holder.jpg",
    name: "Toothbrush Holder",
    rating: { stars: 4.5, count: 441 },
    priceCents: 1057,
    keywords: ["bathroom", "toothbrush", "organizer"]
  },
  {
    id: "72bbaf61-d5a3-49cc-9d4a-6c2348e77f16",
    image: "b-prods/trash can.jpg",
    name: "Trash Can",
    rating: { stars: 4.5, count: 693 },
    priceCents: 1963,
    keywords: ["bathroom", "trash", "bin"]
  }
];

if (!localStorage.getItem('bprods')) {
  localStorage.setItem('bprods', JSON.stringify(bprods));
}
