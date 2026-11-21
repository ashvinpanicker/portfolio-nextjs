// Curated from my travel sheets. Only places + my own one-liners — no raw rows.

// Set these once the template copies exist (Drive → Share → "Anyone with the link").
// Use the ".../copy" URL so visitors get their own blank version.
export const TEMPLATES = {
  travel: "", // e.g. https://docs.google.com/spreadsheets/d/<id>/copy
  log: "",
};

export type Pick = { name: string; note?: string };
export type Destination = {
  name: string;
  region: string;
  been: boolean;
  picks: Pick[];
};

export const indiaDestinations: Destination[] = [
  {
    name: "Goa",
    region: "West",
    been: true,
    picks: [
      { name: "Vinayak, Assagao", note: "Chonak fry here slaps." },
      { name: "Norona's food truck", note: "The pork roast bun is mad." },
      { name: "Saz on the Beach, Mandrem", note: "Prawns in chilli oil." },
      { name: "Antares, Vagator", note: "Sunset point with a view." },
    ],
  },
  {
    name: "Kolkata",
    region: "East",
    been: true,
    picks: [
      { name: "Kusum Rolls, Park Street", note: "Chicken egg roll." },
      { name: "Nizam's, New Market", note: "Old-school Mughlai. Get the biryani." },
      { name: "Park Street walk" },
    ],
  },
  {
    name: "Meghalaya",
    region: "Northeast",
    been: true,
    picks: [
      { name: "Laitlum Canyon", note: "Go for sunset." },
      { name: "Dylan's Café", note: "Live music on Fridays." },
      { name: "Wei Sawdong", note: "Three levels of waterfalls." },
    ],
  },
  {
    name: "Sikkim",
    region: "Northeast",
    been: true,
    picks: [
      { name: "MG Marg, Gangtok" },
      { name: "Tsomgo (Changu) Lake + Nathula", note: "Permit needed; Nathula shut Tuesdays." },
      { name: "Rumtek Monastery" },
    ],
  },
  {
    name: "Manipur",
    region: "Northeast",
    been: true,
    picks: [
      { name: "Loktak Lake" },
      { name: "Keibul Lamjao National Park" },
      { name: "Ema Keithel market" },
    ],
  },
  {
    name: "Bengaluru",
    region: "South · home",
    been: true,
    picks: [
      { name: "Vidyarthi Bhavan", note: "The dosa." },
      { name: "Lalbagh Botanical Garden" },
    ],
  },
  {
    name: "Wayanad, Kerala",
    region: "South",
    been: true,
    picks: [
      { name: "Chembra Peak", note: "Trek." },
      { name: "Soochipara Falls" },
      { name: "Sulthan Bathery forests", note: "Safari." },
    ],
  },
  {
    name: "Tuticorin, TN",
    region: "South",
    been: true,
    picks: [
      { name: "Aqua Outback", note: "Where I kitesurf." },
      { name: "Thoothukudi macaroons" },
    ],
  },
  {
    name: "Pondicherry",
    region: "South",
    been: true,
    picks: [{ name: "Serenity Beach" }, { name: "Auroville", note: "Sadhana Forest + Svaram sound healing." }],
  },
  {
    name: "Puri & Konark",
    region: "East",
    been: true,
    picks: [{ name: "Konark Sun Temple" }, { name: "Khaja", note: "Fried sweet." }],
  },
  {
    name: "Vizag",
    region: "East",
    been: true,
    picks: [{ name: "Surfing at Rushikonda" }, { name: "Ramakrishna Beach" }],
  },
  {
    name: "Gokarna",
    region: "West",
    been: true,
    picks: [{ name: "Om Beach" }, { name: "Namaste Cafe" }],
  },
];

export const indiaMore = [
  "Raipur", "Ooty", "Chennai & ECR", "Mysore", "Mangalore & Manipal", "Trichy",
  "Mumbai", "Delhi", "Hyderabad", "Himachal", "Kodaikanal", "Jodhpur",
  "Arunachal", "Nagaland", "Jharkhand", "Kurnool",
];

export const worldDestinations: Destination[] = [
  {
    name: "Thailand",
    region: "Asia",
    been: true,
    picks: [
      { name: "Saxophone Pub, Bangkok", note: "Live jazz is awesome." },
      { name: "Tuba, Bangkok", note: "Cocktails + Thai live music." },
      { name: "Octave rooftop", note: "49th floor. $$$" },
    ],
  },
  {
    name: "Sri Lanka",
    region: "Asia",
    been: true,
    picks: [
      { name: "Adam's Peak", note: "Night trek for sunrise." },
      { name: "Sigiriya", note: "Lion Rock." },
      { name: "Yala National Park" },
    ],
  },
  {
    name: "Vietnam",
    region: "Asia",
    been: true,
    picks: [
      { name: "Nha Trang", note: "Beach, diving, kiting." },
      { name: "Pizza 4P's", note: "Get the burrata pizza." },
    ],
  },
  {
    name: "Latvia",
    region: "Europe",
    been: true,
    picks: [{ name: "Sigulda" }, { name: "Riga Black Balsam", note: "Try the blueberry one." }],
  },
  {
    name: "Brussels",
    region: "Europe",
    been: true,
    picks: [{ name: "Delirium", note: "Brewhouse, endless taps." }, { name: "Waffles" }],
  },
  {
    name: "Peru",
    region: "South America",
    been: true,
    picks: [{ name: "Ceviche & tiradito" }, { name: "Lomo saltado" }, { name: "Pisco sour" }],
  },
  {
    name: "Dubai",
    region: "Middle East",
    been: true,
    picks: [{ name: "4x4 in the desert" }, { name: "Ski Dubai" }],
  },
  {
    name: "UK",
    region: "Europe",
    been: true,
    picks: [{ name: "London Eye" }, { name: "Indoor skiing, Milton Keynes" }],
  },
];

export const worldWishlist = [
  "Japan", "Istanbul", "Malaysia", "Indonesia", "Brazil", "Mexico", "Croatia", "Paris (again)", "USA",
];

export const travelStats = {
  india: indiaDestinations.length + indiaMore.length,
  countries: worldDestinations.length + worldWishlist.length,
};

// Daily activity log — the system, with made-up example tasks.
export const logStatuses = [
  { label: "Done", className: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" },
  { label: "Doing", className: "bg-amber-500/15 text-amber-700 dark:text-amber-300" },
  { label: "Not Done", className: "bg-rose-500/15 text-rose-700 dark:text-rose-300" },
  { label: "Cancelled", className: "bg-gray-500/15 text-gray-600 dark:text-gray-400 line-through" },
] as const;

export const logExample = [
  { day: "Mon", tasks: [["Ship client homepage", "Done"], ["Python course, 1 hr", "Done"], ["Workout", "Not Done"], ["Journal", "Done"]] },
  { day: "Tue", tasks: [["Invoice + GST filing", "Doing"], ["Guitar, 30 min", "Done"], ["Clear inbox", "Done"], ["Journal", "Not Done"]] },
  { day: "Wed", tasks: [["Portfolio refresh", "Done"], ["Cycling", "Cancelled"], ["Call a friend", "Done"], ["Journal", "Done"]] },
] as const;
