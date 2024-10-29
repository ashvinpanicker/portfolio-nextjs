import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaReact,
  FaGuitar,
  // FaRocket,
  FaBitcoin,
  FaPeopleArrows,
  FaChartBar,
  FaPiggyBank,
} from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Technology Analyst",
    location: "Oaknorth Bank",
    description:
      "I worked at the Bangalore office of this UK based bank for a couple of months where I created form components and implemented them across their application",
    icon: React.createElement(FaPiggyBank),
    date: "2024",
  },
  {
    title: "Software Consultant",
    location: "Tailgrab Digital",
    description:
      "Curious to start my own dropshipping business after a fad trend picked up during COVID, I started Tailgrab and sold products on Amazon. I would meticulously pick products, price them appropriately and advertise them to boost sales. I continued to work in software and helped my friends with the online presence of their botique resort business. I also worked for an AI startup and built their entire front end chatbot and dashboard interface by myself",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Senior Software Engineer",
    location: "SuperProcure",
    description:
      "At Superprocure I helped the team present their data in meaningful and pretty dashboards which were appreciated by the clients. I also helped improving the core SaaS product by building robust frontend components that were used across the app. As a senior engineer, I also helped hire and grow the team to double the size it was when I first joined.",
    icon: React.createElement(FaReact),
    date: "2020 - 2022",
  },
  {
    title: "Co-Founder",
    location: "Lastbit (now Striga)",
    description:
      "Took a plunge into enterpreneurship with my college friend, started a company from our homes, raised $$ abroad, attended 3 different accelerators, pivoted several times and finally found product-market fit",
    icon: React.createElement(FaBitcoin),
    date: "2018 - 2020",
  },
  {
    title: "Community Manager (part time)",
    location: "Mushu media Spatium",
    description:
      "Kept a crypto community active and engaged on Telegram by sharing daily insights on the company’s product offerings and answering questions related to the underlying blockchain technology.",
    icon: React.createElement(FaPeopleArrows),
    date: "2018",
  },
  {
    title: "Guitar Teacher (part time)",
    location: "Furtados School of Music",
    description:
      "Taught beginners guitar lessons at home, following the music school's curriculum while making it enjoyable by incorporating their favorite songs into the curriculum.",
    icon: React.createElement(FaGuitar),
    date: "2017 - 2018",
  },
  {
    title: "Software Engineer",
    location: "Dsquare Solutions (now Hansa Cequity)",
    description:
      "Rebuilt the company's flagship data analytics tool from Sencha UI into a responsive Progressive Web Application (PWA), first with jQuery, HTML, and CSS, then later with ReactJS as it gained mainstream adoption, improving performance, accessibility, and user experience across devices.",
    icon: React.createElement(FaChartBar),
    date: "2016 - 2018",
  },
] as const;

export const projectsData = [
  {
    title: "Grit Happens",
    description:
      "Gamification of health statistics. Promoting healthy competition with leaderboards for health statistics",
    tags: ["React-Native", "NodeJS", "PostgreSQL"],
    imageUrl: "/Grit_Happens_Logo.jpg",
  },
  {
    title: "Aquaoutback",
    description:
      "Handled the website for a botique resort and watersports academy in Tamil Nadu",
    tags: ["Wordpress", "SEO", "Page speed optimization"],
    imageUrl: "/aqua_wallpaper.png",
  },
  {
    title: "MIRA - Smart Mirror",
    description: "Built a smart mirror to experiment with home automation",
    tags: ["Raspberry PI", "Javascript", "Linux", "MMM", "Carpentry"],
    imageUrl: "/MIRA.jpeg",
  },
  {
    title: "Bitcoin Merchant App",
    description:
      "Allowing merchants to accept bitcoin over the lightning network with a simple Cashier UI",
    tags: ["React-Native", "bitcoind", "C-Lightning", "RPC", "Shell scripting"],
    imageUrl: "/BTC_Merchant_app.png",
  },
  {
    title: "Intentional Living",
    description: "A community to help people reduce their screen time",
    tags: ["Discord community management", "Productivity", "Mindfulness"],
    imageUrl: "/Intentional_Living.png",
  },
] as const;

export const skillsData = [
  // Core Frontend Skills
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",

  // Frameworks & Libraries
  "React.js",
  "Next.js",
  "Redux / Redux-Saga",

  // Styling & Component Libraries
  "Tailwind CSS",
  "Material-UI",
  "Bootstrap",
  "ant-design",
  "Storybook",

  // Data Visualization
  "D3.js",
  "victory-charts",
  "ant-charts",

  // Mobile Development
  "React-Native",

  // UI/UX & Design Tools
  "Figma",
  "Adobe XD",
  "UI/UX Design",

  // Testing
  "Jest",

  // CI/CD & Automation
  "GitHub Actions",

  // Build Tools
  "Webpack",
  "Vite",

  // Collaboration & Version Control
  "Google Sheets",
  "Git",

  // Backend & Database (for full-stack flexibility)
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",

  // Data & Cloud Tools
  "Metabase",
  "Docker",
  "Terraform",
  "AWS",
  "GCP",

  // Additional Skills (for versatility)
  "Jquery",
  "Wordpress",
  "GIMP",
  "ImageMagick",
  "Entrepreneurship",
  "Bitcoin",
  "Java",
  "C++",
] as const;
