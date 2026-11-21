export type Work = {
  slug: string;
  title: string;
  kind: "Client" | "Venture" | "Side project";
  year?: string;
  summary: string;
  tags: string[];
  image?: string;
  url?: string;
  featured?: boolean;
};

export const work: Work[] = [
  {
    slug: "lastbit",
    title: "Lastbit → Striga",
    kind: "Venture",
    year: "2018–2020",
    summary:
      "Co-founded a Bitcoin startup: hardware wallet, then a React Native app and a Lightning-powered debit card in Europe. Pivoted to B2B crypto APIs as Striga, acquired by Lightspark in 2025.",
    tags: ["Fintech", "React Native", "Bitcoin Lightning", "Founder"],
    url: "https://www.lightspark.com/news/lightspark/lightspark-acquires-striga",
    featured: true,
  },
  {
    slug: "hotel-tashi-delek",
    title: "Hotel Tashi Delek",
    kind: "Client",
    summary:
      "Boutique hotel site in Gangtok with an email-based reservation flow, built for speed and a clean booking experience.",
    tags: ["React", "Supabase", "Hospitality"],
    image: "/work/HTD-Website.png",
    url: "https://hoteltashidelek.com/",
    featured: true,
  },
  {
    slug: "aqua-outback",
    title: "Aqua Outback",
    kind: "Client",
    summary:
      "Site, events and booking for a kitesurfing school and stay in Tamil Nadu. SEO work put it at the top for “best kitesurfing in India”.",
    tags: ["WordPress", "SEO", "Performance"],
    image: "/work/aqua_wallpaper.png",
    url: "https://aquaoutback.com",
    featured: true,
  },
  {
    slug: "truztee",
    title: "Truztee + bank golf portals",
    kind: "Client",
    summary:
      "Corporate site and benefit portals for a golf rewards platform serving banks like ICICI.",
    tags: ["B2B", "Web apps", "UI/UX"],
    image: "/work/truztee-ss.png",
    url: "https://www.truztee.com/",
    featured: true,
  },
  {
    slug: "stashkart",
    title: "Stashkart",
    kind: "Venture",
    summary: "Custom merch brand I co-run. Custom Shopify theme, payments and inventory.",
    tags: ["Shopify", "Razorpay", "E-commerce"],
    image: "/work/stashkart.png",
    url: "https://stashkart.in",
    featured: true,
  },
  {
    slug: "siree",
    title: "Siree Academy",
    kind: "Client",
    summary: "Lead-generation site for a science and maths tuition academy in Hyderabad.",
    tags: ["React", "SEO", "Lead gen"],
    image: "/work/siree-ss.png",
    url: "https://www.sireetuitions.com/",
    featured: true,
  },
  {
    slug: "tripsplit",
    title: "TripSplit",
    kind: "Side project",
    summary: "Free, open-source Splitwise alternative for group trips. Offline-first, installable, correct money maths.",
    tags: ["PWA", "Open source", "Cloudflare"],
    url: "https://gotripsplit.app",
  },
  {
    slug: "ai-merch",
    title: "AI merch designer",
    kind: "Side project",
    summary: "Generate custom merchandise designs with AI and preview them on products.",
    tags: ["AI", "React", "APIs"],
    image: "/work/aimerch-ss.png",
    url: "https://ai-merch-frontend.onrender.com/",
  },
  {
    slug: "world-teams-golf",
    title: "World Teams Golf",
    kind: "Client",
    summary: "Website upkeep for an international golf tournament.",
    tags: ["Webflow", "WordPress"],
    image: "/work/wtsc.png",
    url: "https://www.worldteamsgolf.com/",
  },
  {
    slug: "pomodoto",
    title: "PomoDoto",
    kind: "Side project",
    summary: "A Pomodoro timer for Dota 2 players: focus sessions earn gaming time.",
    tags: ["React", "TypeScript", "Productivity"],
    image: "/work/pomodoto-ss.png",
    url: "https://pomodoto.vercel.app/",
  },
  {
    slug: "youtwitch",
    title: "YouTwitch",
    kind: "Side project",
    summary: "Rewindable YouTube streams with live Twitch chat on one page.",
    tags: ["Vibecoding", "APIs"],
    image: "/work/youtwitch-app.png",
    url: "https://youtwitch.vercel.app",
  },
  {
    slug: "btc-merchant",
    title: "Bitcoin merchant app",
    kind: "Side project",
    summary: "Cashier app for accepting Bitcoin over Lightning.",
    tags: ["React Native", "C-Lightning"],
    image: "/work/BTC_Merchant_app.png",
    url: "https://github.com/ashvinpanicker/cln-pay",
  },
];

export const testimonials = [
  {
    quote:
      "Now when people search for ‘Best kitesurfing in India’ on Google, our resort ranks at the top, bringing in a steady stream of visitors.",
    name: "Arjun Motha",
    role: "CEO, Aqua Outback",
  },
  {
    quote:
      "Quick to respond, clear and structured in outlining the changes needed, and delivered everything on time. I would highly recommend him to anyone looking for a reliable and skilled web developer.",
    name: "Jogeswari Peddi",
    role: "Director, Golftripz",
  },
  {
    quote: "He even helped with a very tiny doubt too. The work is an art piece and the artist is Ashvin.",
    name: "Boda Sireesha",
    role: "Founder, Siree Academy",
  },
];

export const services = [
  {
    name: "Launch",
    line: "Websites and landing pages that load fast, rank and convert.",
    items: ["Marketing sites", "SEO + AI-search readiness", "Shopify / WordPress / Webflow"],
  },
  {
    name: "Build",
    line: "Web and mobile products from first sketch to production.",
    items: ["MVPs for founders", "React / Next.js / React Native", "Dashboards and internal tools"],
  },
  {
    name: "Run",
    line: "Hosting, upkeep and improvements so you never think about it.",
    items: ["Hosting + security", "Monthly improvements", "Speed and uptime"],
  },
];

export const process = [
  ["Call", "30 minutes to understand the problem and whether I'm the right fit."],
  ["Proposal", "A fixed scope and fixed fee. No surprise hourly bills."],
  ["Ship", "Live previews every week, so you see progress, not status reports."],
  ["Handover", "You own everything. I stay on to run it if you want."],
] as const;

export const experience = [
  { role: "Founder & consultant", org: "Tailgrab Digital", years: "2023–now", line: "Software for SMEs and startups: web, mobile, SEO." },
  { role: "Senior Technology Analyst", org: "OakNorth Bank", years: "2024", line: "Reusable React form components for debt-finance tooling." },
  { role: "Senior Software Engineer", org: "SuperProcure", years: "2020–2022", line: "Analytics dashboards for enterprise logistics; helped double the team." },
  { role: "Co-founder", org: "Lastbit (now Striga)", years: "2018–2020", line: "Bitcoin wallet, app and Lightning debit card. Berkeley SkyDeck, BuildIt Riga." },
  { role: "Guitar teacher", org: "Furtados School of Music", years: "2017–2018", line: "Song-first lessons that kept beginners playing." },
  { role: "Software Engineer", org: "DSquare Solutions", years: "2016–2018", line: "Rebuilt the flagship analytics tool as a React + D3 PWA." },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["TypeScript", "React", "Next.js", "Tailwind", "Redux / Zustand", "Storybook"] },
  { group: "Mobile", items: ["React Native", "Expo", "PWAs"] },
  { group: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase"] },
  { group: "Data viz", items: ["D3.js", "Dashboards", "Metabase"] },
  { group: "Cloud", items: ["Cloudflare", "AWS", "GCP", "Docker", "Terraform"] },
  { group: "Platforms", items: ["Shopify", "WordPress", "Webflow", "SEO"] },
  { group: "AI", items: ["Claude", "LLM integrations", "AI-assisted delivery"] },
];
