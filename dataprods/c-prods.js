const cprods = [
  {
    id: "145ea206-9e4f-476b-9e60-68138b9ff8b7",
    image: "c-prods/anti slip skaeboard shoes.jpg",
    name: "Anti Slip Skateboard Shoes",
    rating: { stars: 4.5, count: 291 },
    priceCents: 4199,
    keywords: ["shoes", "skateboard", "sneakers"]
  },
  {
    id: "a3b173c6-3df1-4d32-911b-b9f85c2802e2",
    image: "c-prods/black all stars sneakers.jpg",
    name: "Black All Stars Sneakers",
    rating: { stars: 4.5, count: 754 },
    priceCents: 4895,
    keywords: ["shoes", "sneakers", "black"]
  },
  {
    id: "2d15b238-bdd9-4033-b872-d77a6e15f9b3",
    image: "c-prods/fashion distreessed jeans.jpg",
    name: "Fashion Distressed Jeans",
    rating: { stars: 4, count: 512 },
    priceCents: 3678,
    keywords: ["clothing", "jeans", "fashion"]
  },
  {
    id: "f6cb4144-6a9c-49c5-8544-58df3e22291c",
    image: "c-prods/FZUU street sneakers.jpg",
    name: "FZUU Street Sneakers",
    rating: { stars: 4.5, count: 439 },
    priceCents: 4320,
    keywords: ["shoes", "sneakers", "streetwear"]
  },
  {
    id: "309c72f9-9dc9-4f30-938a-01fd86c14be4",
    image: "c-prods/high waisted bikini.jpg",
    name: "High Waisted Bikini",
    rating: { stars: 4.5, count: 298 },
    priceCents: 2195,
    keywords: ["clothing", "bikini", "swimwear"]
  },
  {
    id: "204c83ae-b3ee-4ec3-b06d-31aa35802942",
    image: "c-prods/mens casual sneakers.jpg",
    name: "Men's Casual Sneakers",
    rating: { stars: 4.5, count: 501 },
    priceCents: 3980,
    keywords: ["shoes", "mens", "sneakers"]
  },
  {
    id: "74ef6827-5f14-4c35-9c63-3532a3ab3b29",
    image: "c-prods/mens joggers.jpg",
    name: "Men's Joggers",
    rating: { stars: 4, count: 409 },
    priceCents: 2965,
    keywords: ["clothing", "pants", "joggers"]
  },
  {
    id: "eb1a0f30-b0ee-4f59-b9aa-87a4e3519e95",
    image: "c-prods/muscle t shirts.jpg",
    name: "Muscle T-Shirts",
    rating: { stars: 4.5, count: 688 },
    priceCents: 2340,
    keywords: ["clothing", "tshirt", "fitness"]
  },
  {
    id: "7f8f3cf9-27aa-413b-8e3d-6e353875c8f4",
    image: "c-prods/new balance sneakers copy.jpg",
    name: "New Balance Sneakers",
    rating: { stars: 5, count: 843 },
    priceCents: 5375,
    keywords: ["shoes", "sneakers", "new balance"]
  },
  {
    id: "b8c1d2c5-5b87-4f58-8c4a-8c38d3ae3c44",
    image: "c-prods/nike low top sneakers.jpg",
    name: "Nike Low Top Sneakers",
    rating: { stars: 5, count: 913 },
    priceCents: 5690,
    keywords: ["shoes", "sneakers", "nike"]
  },
  {
    id: "2dcf999b-3607-4e83-849e-3f17035e34ff",
    image: "c-prods/puma rebound layup sneakers.jpg",
    name: "Puma Rebound Layup Sneakers",
    rating: { stars: 4.5, count: 527 },
    priceCents: 4680,
    keywords: ["shoes", "puma", "sneakers"]
  },
  {
    id: "32f20762-e172-4046-a9eb-6f31393138cf",
    image: "c-prods/puma tanzon 6 crocs.jpg",
    name: "Puma Tanzon 6 Crocs",
    rating: { stars: 5, count: 382 },
    priceCents: 3850,
    keywords: ["shoes", "crocs", "puma"]
  },
  {
    id: "99c4ec57-91c5-4b2c-bfb7-2fd8d4578b3f",
    image: "c-prods/satin button down dress.jpg",
    name: "Satin Button Down Dress",
    rating: { stars: 4.5, count: 274 },
    priceCents: 3287,
    keywords: ["clothing", "dress", "satin"]
  },
  {
    id: "0156d92d-6e5c-43d4-889c-f7e447cbde62",
    image: "c-prods/sports bra 2.jpg",
    name: "Sports Bra (Set 2)",
    rating: { stars: 4.5, count: 388 },
    priceCents: 2145,
    keywords: ["clothing", "sportswear", "bra"]
  },
  {
    id: "df973d0e-4984-408a-9432-ec4e5f0b03f6",
    image: "c-prods/sports bra.jpg",
    name: "Sports Bra",
    rating: { stars: 4.5, count: 412 },
    priceCents: 2040,
    keywords: ["clothing", "sportswear", "bra"]
  },
  {
    id: "cc10f8d1-57a0-4e95-8a57-6f417fb27057",
    image: "c-prods/t-shirt and shorts.jpg",
    name: "T-Shirt and Shorts Set",
    rating: { stars: 4.5, count: 366 },
    priceCents: 2580,
    keywords: ["clothing", "tshirt", "shorts"]
  },
  {
    id: "5e681d88-25d7-47cb-b3a2-28c4a162fdbf",
    image: "c-prods/vintage pencil dress.jpg",
    name: "Vintage Pencil Dress",
    rating: { stars: 5, count: 307 },
    priceCents: 3895,
    keywords: ["clothing", "dress", "vintage"]
  },
  {
    id: "a46dd403-78fd-4354-b31a-1b6aaf53688c",
    image: "c-prods/waist tie sweat pants.jpg",
    name: "Waist Tie Sweat Pants",
    rating: { stars: 4.5, count: 344 },
    priceCents: 2999,
    keywords: ["clothing", "pants", "sweatpants"]
  },
  {
    id: "da02bc4f-cd1d-4ddf-b65d-46bdbf8a0b1d",
    image: "c-prods/white all stars sneakers.jpg",
    name: "White All Stars Sneakers",
    rating: { stars: 4.5, count: 802 },
    priceCents: 4895,
    keywords: ["shoes", "sneakers", "white"]
  },
  {
    id: "676cfe53-4f59-4e23-a0f7-18d5aa0d8672",
    image: "c-prods/women white sneakers.jpg",
    name: "Women White Sneakers",
    rating: { stars: 5, count: 601 },
    priceCents: 4580,
    keywords: ["shoes", "sneakers", "women"]
  }
];

if (!localStorage.getItem('cprods')) {
  localStorage.setItem('cprods', JSON.stringify(cprods));
}
