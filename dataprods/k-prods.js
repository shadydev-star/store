const kprods = [
  {
    id: "fbe78386-9c94-40d0-8182-2f92768f1a11",
    image: "k-prods/14 piece pots and pans.jpg",
    name: "14 Piece Pots And Pans",
    rating: { stars: 3.5, count: 149 },
    priceCents: 2964,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "21e4e059-286d-4959-be24-0a3b9524f717",
    image: "k-prods/1000w smoothie maker.jpg",
    name: "1000W Smoothie Maker",
    rating: { stars: 3.5, count: 443 },
    priceCents: 2265,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "b982266a-ccd6-4243-b87a-12ba8da07ec1",
    image: "k-prods/airtight storage containers.jpg",
    name: "Airtight Storage Containers",
    rating: { stars: 3.5, count: 880 },
    priceCents: 12630,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "6fd0aef5-5b6e-4144-b5a0-174973858c2a",
    image: "k-prods/automatic soap despenser.jpg",
    name: "Automatic Soap Despenser",
    rating: { stars: 4.5, count: 492 },
    priceCents: 13627,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "d2221544-4458-4fa7-92cf-6de0be3cf22e",
    image: "k-prods/bottle opener.jpg",
    name: "Bottle Opener",
    rating: { stars: 4.5, count: 246 },
    priceCents: 16858,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "6a34354f-b603-430e-a73b-2b3c1a149b55",
    image: "k-prods/burger press.jpg",
    name: "Burger Press",
    rating: { stars: 4, count: 358 },
    priceCents: 25999,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "40c9dd08-7807-4d80-a80c-24145c77f804",
    image: "k-prods/cellulose crub sponge.jpg",
    name: "Cellulose Crub Sponge",
    rating: { stars: 4, count: 678 },
    priceCents: 10911,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "ac08cb58-8910-4879-a9ef-57f43c03226e",
    image: "k-prods/cheese grater.jpg",
    name: "Cheese Grater",
    rating: { stars: 4, count: 588 },
    priceCents: 18618,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "96b69ec7-f90e-4a3b-b0e6-8e9636abf175",
    image: "k-prods/chicken shredder.jpg",
    name: "Chicken Shredder",
    rating: { stars: 4.5, count: 774 },
    priceCents: 11501,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "fe7a4d8f-e010-4ff9-9962-62f7fd403bc2",
    image: "k-prods/cotton towels.jpg",
    name: "Cotton Towels",
    rating: { stars: 4.5, count: 566 },
    priceCents: 12976,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "51fdde8f-c0c4-4ecf-998b-f27f503c67ad",
    image: "k-prods/cuttin board.jpg",
    name: "Cuttin Board",
    rating: { stars: 4.5, count: 942 },
    priceCents: 20946,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "b2ffdf3e-1a77-4b93-a1d3-5fdfcd68b88e",
    image: "k-prods/digital air fryer.jpg",
    name: "Digital Air Fryer",
    rating: { stars: 4.5, count: 295 },
    priceCents: 24348,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "38a08a6b-5d6d-4030-9468-5c77eb57eb41",
    image: "k-prods/electric grill.jpg",
    name: "Electric Grill",
    rating: { stars: 4.5, count: 613 },
    priceCents: 11688,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "2707f011-2a55-417f-8c21-040345573e17",
    image: "k-prods/electric kettle.jpg",
    name: "Electric Kettle",
    rating: { stars: 5, count: 785 },
    priceCents: 10669,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "44bff53a-14a2-4802-b4f5-b179c4c70f76",
    image: "k-prods/electric spin scrubber.jpg",
    name: "Electric Spin Scrubber",
    rating: { stars: 4.5, count: 937 },
    priceCents: 15986,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "9f76f2b6-d9c7-41e6-8924-74e23d029f3a",
    image: "k-prods/frozen drink maker.jpg",
    name: "Frozen Drink Maker",
    rating: { stars: 4, count: 290 },
    priceCents: 20529,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "4e1e589f-b4df-47e9-b2d4-2524ed83b3ff",
    image: "k-prods/icecream maker.jpg",
    name: "Icecream Maker",
    rating: { stars: 4, count: 601 },
    priceCents: 14471,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "f6263765-e9c2-47ec-87d5-77594c91d85b",
    image: "k-prods/jar opener.jpg",
    name: "Jar Opener",
    rating: { stars: 4, count: 875 },
    priceCents: 9649,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "9cfca99f-e117-4a39-b2e6-6111f68de0ed",
    image: "k-prods/kitchen faucet.jpg",
    name: "Kitchen Faucet",
    rating: { stars: 4.5, count: 494 },
    priceCents: 14256,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "238ad4c6-5f60-4b11-bd0c-6f90e6ccff78",
    image: "k-prods/kitchen utensils 28 set.jpg",
    name: "Kitchen Utensils 28 Set",
    rating: { stars: 4, count: 305 },
    priceCents: 23906,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "df31f593-b8dc-4cb6-a6cc-d5dbdbdf6b57",
    image: "k-prods/knifeset.jpg",
    name: "Knifeset",
    rating: { stars: 4.5, count: 625 },
    priceCents: 18049,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "f93c8b15-f0be-44ec-8600-c34031bfa94a",
    image: "k-prods/meat chopper.jpg",
    name: "Meat Chopper",
    rating: { stars: 4, count: 957 },
    priceCents: 15822,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "9e82f0e3-c258-42fc-92b0-9332f10e2a5e",
    image: "k-prods/mixing bowls.jpg",
    name: "Mixing Bowls",
    rating: { stars: 4.5, count: 709 },
    priceCents: 10686,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "e96fc014-5157-491e-bf79-8388ad342937",
    image: "k-prods/reusable dish towels.jpg",
    name: "Reusable Dish Towels",
    rating: { stars: 4.5, count: 201 },
    priceCents: 17734,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "a74c4d6e-3971-4970-a34e-f489bd86cd6f",
    image: "k-prods/rodent reppellant.jpg",
    name: "Rodent Reppellant",
    rating: { stars: 4.0, count: 466 },
    priceCents: 15547,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "0c5b92b6-d94e-4621-812f-79370cd299b0",
    image: "k-prods/silicone oven mitten.jpg",
    name: "Silicone Oven Mitten",
    rating: { stars: 4.0, count: 344 },
    priceCents: 13011,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "ffce4a52-3d32-4f13-9a9c-b63b905b39b8",
    image: "k-prods/square pail for cleaning.jpg",
    name: "Square Pail For Cleaning",
    rating: { stars: 4.0, count: 551 },
    priceCents: 16385,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "ad72e8d0-9a36-4c33-8ab2-d040f17c3cb9",
    image: "k-prods/stainless steel soap dispenser.jpg",
    name: "Stainless Steel Soap Dispenser",
    rating: { stars: 4.5, count: 641 },
    priceCents: 21959,
    keywords: ["kitchen", "home", "utensils"]
  },
  {
    id: "f75fba23-9b7f-4f6b-a478-6eabf04c4f3f",
    image: "k-prods/titanium cutting boards.jpg",
    name: "Titanium Cutting Boards",
    rating: { stars: 5, count: 884 },
    priceCents: 18764,
    keywords: ["kitchen", "home", "utensils"]
  }
];
if (!localStorage.getItem('kprods')) {
  localStorage.setItem('kprods', JSON.stringify(kprods));
}