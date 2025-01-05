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
  FaUsers,
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
    title: "Freelance Application Developer",
    location: "Remote",
    description:
      "Worked with clients to build web applications. I have also helped clients with their existing projects by fixing bugs, adding new features, and improving performance. Looking for help with your online presence? Let's talk!",
    icon: React.createElement(FaUsers),
    date: "2023 - Present",
  },
  {
    title: "Senior Technology Analyst",
    location: "Oaknorth Bank",
    description:
      "I worked at the Bangalore office of this UK based bank for a couple of months where I created several form components and implemented them across their application which was an internal tool used by their Debt Finance Directors",
    icon: React.createElement(FaPiggyBank),
    date: "2024",
  },
  {
    title: "Founder",
    location: "Tailgrab Digital",
    description:
      "Curious to start my own dropshipping business, I started Tailgrab and sold products on Amazon. I would meticulously pick products, price them appropriately and advertise them to boost sales. Sold out all my products and eventually realized this was not my calling.",
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
    location: "Spatium.net",
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
    title: "WTSC Golf Website",
    description:
      "Helped a client manage their webflow website using fundamental design principles to make it more presentable and mobile friendly.",
    tags: ["Webflow"],
    imageUrl: "/wtsc.png",
    externalLink: "https://www.worldteamsgolf.com/",
  },
  {
    title: "Sell247",
    description:
      "Designed a responsive frontend for an AI chatbot to enhance user engagement. Managed script integration for seamless responsive deployment on client websites",
    tags: ["ReactJS", "Javascript", "Typescript", "HTML/CSS"],
    imageUrl: "/Chatbot-ss.png",
    externalLink: "https://demo.sell247.ai/arihantp/",
  },
  {
    title: "Aquaoutback",
    description:
      "Handled the website and online booking system for a botique resort and watersports academy in Tamil Nadu",
    tags: ["Wordpress", "SEO", "Page speed optimization"],
    imageUrl: "/aqua_wallpaper.png",
    externalLink: "https://aquaoutback.com",
  },
  {
    title: "MIRA - Smart Mirror",
    description: "Built a smart mirror to experiment with home automation",
    tags: ["Raspberry PI", "Javascript", "Linux", "MMM", "Carpentry"],
    imageUrl: "/MIRA.jpeg",
    externalLink: "https://magicmirror.builders/",
  },
  // {
  //   title: "cln-pay",
  //   description:
  //     "A simple web UI connected to a bitcoin lightning node via API allowing for",
  //   tags: ["bitcoind", "C-Lightning", "RPC", "EJS"],
  //   imageUrl: "/BTC_Merchant_app.png",
  //   externalLink: "https://twitter.com",
  // },
  {
    title: "lastbit website",
    description:
      "One of the versions of many of the websites I came up with during my time as a startup founder",
    tags: ["ReactJS", "Gatsby", "CSS"],
    imageUrl: "/bitcoin-zeus.gif",
    externalLink: "https://lastbit-website-static.onrender.com",
  },
  {
    title: "Bitcoin Merchant App",
    description:
      "Allowing merchants to accept bitcoin over the lightning network with a simple Cashier UI",
    tags: ["React-Native", "bitcoind", "C-Lightning", "RPC", "Shell scripting"],
    imageUrl: "/BTC_Merchant_app.png",
    externalLink: "#",
  },
  // {
  //   title: "Intentional Living",
  //   description: "A community to help people reduce their screen time",
  //   tags: ["Discord community management", "Productivity", "Mindfulness"],
  //   imageUrl: "/Intentional_Living.png",
  //   externalLink: "https://twitter.com",
  // },
  {
    title: "SPECT Heart Analysis",
    description:
      "Analysed datasets using machine learning models to predict if a person has a healthy heart or not",
    tags: ["AI/ML", "Orange3", "Python", "scikit-learn"],
    imageUrl: "/heartRiskAnalysis.png",
    externalLink: "/College-Paper.pdf",
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
  "Zustand",

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

  // Backend & Database
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",

  // UI/UX & Design Tools
  "Figma",
  "Adobe XD",
  "UI/UX Design",

  // Build & Package Tools
  "Webpack",
  "Vite",
  "npm",
  "Yarn",

  // Testing & Automation
  "Jest",
  "GitHub Actions",

  // Process & Server Management
  "PM2",
  "Nginx",

  // Collaboration & Version Control
  "Google Sheets",
  "Git",

  // Data & Cloud Tools
  "Metabase",
  "Docker",
  "Terraform",
  "AWS",
  "GCP",

  // Additional Skills (for versatility)
  "Jquery",
  "Wordpress",
  "Webflow",
  "GIMP",
  "ImageMagick",
  "Entrepreneurship",
  "Bitcoin",
  "Java",
  "C++",
] as const;
