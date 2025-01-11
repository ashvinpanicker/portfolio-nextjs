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

export const experiencesData =[
  {
    "title": "Freelance Application Developer",
    "location": "Remote",
    "description":
      "Collaborated with clients to build scalable and responsive web applications tailored to their needs. Enhanced existing projects by fixing bugs, implementing new features, and optimizing performance. I help businesses improve their online presence and user experience. Looking to elevate your digital solutions? Let's talk!",
    "icon": React.createElement(FaUsers),
    "date": "2023 - Present"
  },
  {
    "title": "Senior Technology Analyst",
    "location": "Oaknorth Bank",
    "description":
      "Contributed to the development of internal tools used by Debt Finance Directors at this UK-based bank. Designed and implemented reusable form components, enhancing the application's functionality and usability. This role exemplified my expertise in creating robust and maintainable frontend solutions.",
    "icon": React.createElement(FaPiggyBank),
    "date": "2024"
  },
  {
    "title": "Founder",
    "location": "Tailgrab Digital",
    "description":
      "Founded an e-commerce business focused on dropshipping. Handpicked products, optimized pricing strategies, and executed targeted advertising campaigns to maximize sales. Successfully sold out all inventory and gained valuable entrepreneurial experience in digital marketing and online sales.",
    "icon": React.createElement(CgWorkAlt),
    "date": "2023 - 2024"
  },
  {
    "title": "Senior Software Engineer",
    "location": "SuperProcure",
    "description":
      "Led the development of interactive analytics dashboards that provided clients with actionable insights. Enhanced the core SaaS product by creating robust, reusable frontend components. Played a key role in team growth by mentoring and hiring, doubling the engineering team size during my tenure.",
    "icon": React.createElement(FaReact),
    "date": "2020 - 2022"
  },
  {
    "title": "Co-Founder",
    "location": "Lastbit (now Striga)",
    "description":
      "Co-founded a fintech startup, navigating through fundraising rounds, product pivots, and market challenges. Participated in multiple accelerator programs, learning how to build a business, achieved product-market fit by launching innovative solutions, including a Bitcoin Lightning-powered debit card in Europe.",
    "icon": React.createElement(FaBitcoin),
    "date": "2018 - 2020"
  },
  {
    "title": "Community Manager (Part-Time)",
    "location": "Spatium.net",
    "description":
      "Engaged a global crypto community on Telegram by sharing daily updates about the company’s blockchain products. Provided technical support and answered queries to foster trust and maintain high levels of engagement.",
    "icon": React.createElement(FaPeopleArrows),
    "date": "2018"
  },
  {
    "title": "Guitar Teacher (Part-Time)",
    "location": "Furtados School of Music",
    "description":
      "Taught beginner guitar lessons, combining structured curriculum with personalized approaches to make learning enjoyable. Incorporated students' favorite songs into lessons to foster enthusiasm and skill-building.",
    "icon": React.createElement(FaGuitar),
    "date": "2017 - 2018"
  },
  {
    "title": "Software Engineer",
    "location": "Dsquare Solutions (now Hansa Cequity)",
    "description":
      "Redesigned the flagship data analytics tool as a responsive Progressive Web Application (PWA), improving accessibility and performance. Transitioned from Sencha UI to jQuery and later ReactJS, ensuring scalability and modern user experience across devices.",
    "icon": React.createElement(FaChartBar),
    "date": "2016 - 2018"
  }
] as const;

export const projectsData = [
  {
    title: "Sell247",
    description:
      "Developed a responsive frontend for an AI-powered chatbot, boosting user engagement and optimizing integration for seamless deployment on client websites.",
    tags: ["ReactJS", "Javascript", "Typescript", "HTML/CSS"],
    imageUrl: "/Chatbot-ss.png",
    externalLink: "https://demo.sell247.ai/arihantp/",
  },
  {
    title: "WTSC Golf Website",
    description:
      "Revamped a client's Webflow website by applying responsive web design and fundamental design principles to improve presentation and mobile usability.",
    tags: ["Webflow", "Responsive Web Design"],
    imageUrl: "/wtsc.png",
    externalLink: "https://www.worldteamsgolf.com/",
  },
  {
    title: "MIRA - Smart Mirror",
    description: "Created a smart mirror prototype to explore home automation technologies, integrating hardware and software seamlessly.",
    tags: ["Raspberry PI", "Javascript", "Linux", "MMM", "Carpentry"],
    imageUrl: "/MIRA.jpeg",
    externalLink: "https://magicmirror.builders/",
  },
  {
    title: "Aquaoutback",
    description:
      "Managed the website and online booking system for a boutique resort and watersports academy in Tamil Nadu.",
    tags: ["Wordpress", "SEO", "Page speed optimization"],
    imageUrl: "/aqua_wallpaper.png",
    externalLink: "https://aquaoutback.com",
  },
  {
    title: "lastbit website",
    description:
      "Designed and developed multiple iterations of a startup website during my time as a co-founder, emphasizing scalability and performance.",
    tags: ["ReactJS", "Gatsby", "CSS"],
    imageUrl: "/bitcoin-zeus.gif",
    externalLink: "https://lastbit-website-static.onrender.com",
  },
  {
    title: "Bitcoin Merchant App",
    description:
      "Built a merchant application for accepting Bitcoin via the Lightning Network, featuring a user-friendly Cashier UI for seamless transactions.",
    tags: ["React-Native", "bitcoind", "C-Lightning", "RPC"],
    imageUrl: "/BTC_Merchant_app.png",
    externalLink: "https://github.com/ashvinpanicker/cln-pay",
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
      "Utilized machine learning models to analyze datasets and predict heart health. Implemented efficient algorithms for AI-driven healthcare solutions.",
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
