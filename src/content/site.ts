export const site = {
  url: "https://ashvinpanicker.com",
  name: "Ashvin Panicker",
  title: "Ashvin Panicker — Web & app developer who ships",
  description:
    "Full-stack web and app developer in Bengaluru. 8+ years across fintech, logistics and consumer products. Co-founded a Bitcoin startup later acquired by Lightspark. I take products from idea to production, with AI in the loop.",
  email: "ashvin.panicker@gmail.com",
  location: "Bengaluru, India",
  timezone: "IST (UTC+5:30)",
  cv: "/ashvin-panicker-cv.pdf",
  portrait: "/ashvin.png",
  available: true,
  socials: [
    { name: "GitHub", url: "https://github.com/ashvinpanicker" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ashvin-panicker/" },
    { name: "Instagram", url: "https://instagram.com/ashvinpanicker" },
    { name: "SoundCloud", url: "https://soundcloud.com/ashvin-panicker/sets" },
    { name: "YouTube", url: "https://www.youtube.com/@ashvinpanicker" },
  ],
} as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Life", href: "/life" },
  { label: "Contact", href: "/#contact" },
] as const;

// Kite spot used for the live wind readout (Aqua Outback, Thoothukudi coast)
export const windSpot = { name: "Thoothukudi", lat: 8.79, lon: 78.17 };
