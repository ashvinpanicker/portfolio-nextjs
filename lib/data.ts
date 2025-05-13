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
    title: "Rapid Website Prototyping",
    description: "Helping small businesses and startups get online quickly with a simple, responsive website.",
    tags: ["AI Website Scaffolding", "Website Deployment", "SEO"],
    imageUrl: "/chillimilli.jpeg",
    externalLink: " https://chillimilli.vercel.app/",
  },
  {
    title: "Website Design & Maintenance",
    description:
    "Improving existing websites with clean layouts and responsive design to enhance mobile usability and overall presentation.",
    tags: ["Webflow", "Wordpress", "Responsive Web Design"],
    imageUrl: "/wtsc.png",
    externalLink: "https://www.worldteamsgolf.com/",
  },
  {
    title: "Stashkart",
    description:
      "An e-commerce platform for a local business, featuring a custom-built website with integrated payment gateways and inventory management.",
    tags: ["Shopify", "Razorpay", "Liquid", "Meta Business Suite"],
    imageUrl: "/stashkart-ss.webp",
    externalLink: "https://stashkart.in",
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
    title: "Mapdout",
    description:
      "An AI powered travel planning tool that helps users create personalized itineraries based on their preferences and interests.",
    tags: ["Bolt", "Github", "Netlify", "Supabase"],
    imageUrl: "/mapdout-ss.webp",
    externalLink: "https://mapdout.in",
  },
  {
    title: "Intentional Living",
    description: "A community to help people reduce their screen time by sharing goals and holding each other accountable. Want to join? Get in touch!",
    tags: ["Community management", "Productivity", "Mindfulness"],
    imageUrl: "/Intentional_Living.png",
    externalLink: "https://docs.google.com/spreadsheets/d/1GZilnK9TAB8eKam6J1dEkUE23r4H686ke6jXxCWYXT4/edit?disco=AAABd7Z5zZ0",
  },
  {
    title: "Experience Profile",
    description:
      "A simple react app that allows you to visualize statistics of your choice in a clean and interactive way.",
    tags: ["Vibe Coding", "ReactJS", "Typescript"],
    imageUrl: "/xppro.png",
    externalLink: "https://xppro.vercel.app/",
  },
  {
    title: "react-practice-calendar",
    description:
      "My free open source solutions to the React Practice Calendar challenges by the reactpractice.dev team.",
    tags: ["React.js", "TypeScript", "CSS"],
    imageUrl: "/react-practice-calendar.png",
    externalLink: "https://react-practice-calendar.vercel.app/",
  },
  {
    title: "MIRA - Smart Mirror",
    description: "Created a smart mirror prototype to explore home automation technologies, integrating hardware and software seamlessly.",
    tags: ["Raspberry PI", "Javascript", "Linux", "MMM", "Carpentry"],
    imageUrl: "/MIRA.jpeg",
    externalLink: "https://magicmirror.builders/",
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
  {
    title: "Sell247",
    description:
      "Developed a responsive frontend for an AI-powered chatbot, boosting user engagement and optimizing integration for seamless deployment on client websites.",
    tags: ["ReactJS", "Javascript", "Typescript", "HTML/CSS"],
    imageUrl: "/Chatbot-ss.png",
    externalLink: "https://github.com/ashvinpanicker/react-tsx-chatbot",
  },
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
  "Angular",
  "Redux / Redux-Saga",
  "Zustand",

  // Styling & Component Libraries
  "Tailwind CSS",
  "Material-UI",
  "Bootstrap",
  "ant-design",
  "Storybook",

  // Site Builders
  "Webflow",
  "Wordpress",
  "Shopify",
  "Gatsby",
  "PHP",
  "SEO",

  // Data Visualization
  "D3.js",
  "victory-charts",
  "ant-charts",

  // Mobile Development
  "React-Native",

  // Backend & Database
  "Node.js",
  "Express",
  "Python",
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
  "GIMP",
  "ImageMagick",
  "Entrepreneurship",
  "Bitcoin",
  "Java",
  "C++",

  // What skills could you possibly have as a human on planet earth?
  // research
  // strategic thinking
  // imagination
  // problem solving
  // creativity
  // adaptability
  // teamwork
  // communication
  // leadership
  // time management
  // decision making
  // negotiation
  // conflict resolution
  // emotional intelligence
  // critical thinking
  // self-motivation
  // resilience
  // risk management
  // project management
  // business acumen
  // customer service
  // sales
  // marketing
  // networking
  // public speaking
  // mentoring
  // coaching
  // teaching
  // facilitation
  // user experience
  // user interface
  // web development
  // mobile development
  // data analysis
  // data visualization
  // machine learning
  // artificial intelligence
  // blockchain
  // cryptocurrency
  // cloud computing
  // cybersecurity
  // internet of things
  // augmented reality
  // virtual reality
  // game development
  // robotics
  // 3D printing
  // electronics
  // hardware
  // software development
  // embedded systems
  // firmware
  // computer vision
  // natural language processing
  // speech recognition
  // image processing
  // audio processing
  // video processing
  // signal processing
  // computer graphics

  // Personality - objective (teamwork, communication, leadership, etc.) subjective (imagination, creativity, SME etc.)
  // Graphoria
  // Ideaphoria
  // Structural visualization
  // Inductive Reasoning
  // Analytical Reasoning
  // Finger Dexterity
  // Tweezer Dexterity
  // Observation
  // Design / Visual Memory
  // Tonal Memory
  // Pitch discrimination
  // Rhythm memory
  // Timbre discrimination
  // Number memory
  // Numerical reasoning
  // Silograms
  // Foresight
  // Color perception
] as const;
