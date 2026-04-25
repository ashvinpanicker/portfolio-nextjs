import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaReact,
  FaGuitar,
  FaBitcoin,
  FaPeopleArrows,
  FaChartBar,
  FaPiggyBank,
  FaUsers,
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaSearchDollar,
  FaRocket,
  FaTools,
  FaTshirt,
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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Services",
    hash: "#services",
  },
  {
    name: "Testimonials",
    hash: "#testimonials",
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
    "date": "Present"
  },

  {
    "title": "Senior Technology Analyst",
    "location": "Oaknorth Bank",
    "description":
      "Debt Finance Directors needed faster, more reliable internal tools for processing loans. Developed scalable, reusable React form components that significantly improved application usability and reduced data entry errors.",
    "icon": React.createElement(FaPiggyBank),
    "date": "2024"
  },
  {
    "title": "Founder",
    "location": "Tailgrab Digital",
    "description":
      "Launched a dropshipping business to test scalable e-commerce strategies with low overhead. Ran targeted ad campaigns and optimized pricing, successfully selling out all handpicked inventory",
    "icon": React.createElement(CgWorkAlt),
    "date": "2023 - 2024"
  },
  {
    "title": "Senior Software Engineer",
    "location": "SuperProcure",
    "description":
      "Enterprise logistics clients lacked visibility into their operational data. Led the development of interactive React analytics dashboards that delivered actionable insights, while simultaneously mentoring and doubling the engineering team size.",
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
      "The company's growing global crypto community needed reliable technical support. Managed daily communications and troubleshooting on Telegram, successfully fostering trust and maintaining high user engagement during critical product launches.",
    "icon": React.createElement(FaPeopleArrows),
    "date": "2018"
  },
  {
    "title": "Guitar Teacher (Part-Time)",
    "location": "Furtados School of Music",
    "description":
      "Beginners frequently abandoned music lessons due to rigid curriculums. Designed a personalized teaching framework integrating popular songs, which significantly increased student retention and enthusiasm.",
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

export const servicesData = [
  {
    title: "Rapid Website Prototyping",
    description: "Quickly launch responsive websites for small businesses and startups, ensuring a strong online presence.",
    icon: FaRocket,
  },
  {
    title: "User Interface & Experience Design",
    description:
      "Craft intuitive and impactful user interfaces and experiences that leave a lasting impression.",
    icon: FaPalette,
  },
  {
    title: "Web Design & Development",
    description:
      "Deliver full-stack web applications, adhering to industry standards and client specifications, with ongoing support.",
    icon: FaLaptopCode,
  },
  {
    title: "Page Speed and SEO Optimization",
    description:
      "Enhance online visibility and search engine rankings, driving organic traffic to your digital platforms.",
    icon: FaSearchDollar,
  },
  {
    title: "Cross Platform App Development",
    description:
      "Develop and deploy mobile applications for both Android and iOS using React Native, ensuring broad accessibility.",
    icon: FaMobileAlt,
  },
  {
    title: "Maintenance & Support",
    description:
      "Provide continuous maintenance and support to keep your website secure, updated, and performing at its best.",
    icon: FaTools,
  },
] as const;

export const projectsData = [
  {
    title: "Stashkart",
    description:
      "An e-commerce platform for a local business, featuring a custom-built shopify theme with integrated payment gateways and inventory management.",
    tags: ["Shopify", "Razorpay", "Liquid", "Meta Business Suite"],
    imageUrl: "/stashkart.png",
    externalLink: "https://stashkart.in",
  },
  {
    title: "lastbit",
    description:
      "Spend your Bitcoin instantly anywhere in Europe with the lastbit debit card powered MasterCard.",
    tags: ["Bitcoin", "React-Native", "Entrepreneurship", "ReactJS", "Gatsby", "CSS"],
    imageUrl: "/bitcoin-zeus.gif",
    externalLink: "https://lastbit-website-static.onrender.com",
  },
  {
    title: "Hotel Tashi Delek",
    description: "A boutique hotel website with integrated emails reservations system, showcasing rooms and amenities with a focus on user experience.",
    tags: ["React", "Supabase Edge Functions", "Supabase DB"],
    imageUrl: "/HTD-Website.png",
    externalLink: " https://hoteltashidelek.com/",
  },
  {
    title: "Aquaoutback",
    description:
      "Managed the website, event updates, and online booking system for a boutique resort and watersports academy in Tamil Nadu.",
    tags: ["Wordpress", "SEO", "Page speed optimization"],
    imageUrl: "/aqua_wallpaper.png",
    externalLink: "https://aquaoutback.com",
  },
  {
    title: "World Teams Golf",
    description:
      "Maintained the website for an international golf tournament, ensuring a seamless user experience and effective online presence.",
    tags: ["Webflow", "Wordpress", "Responsive Web Design"],
    imageUrl: "/wtsc.png",
    externalLink: "https://www.worldteamsgolf.com/",
  },
  {
    title: "ICICI Bank Golf Benefits",
    description:
      "A platform for ICICI Bank customers to access exclusive golf benefits, including lessons and courses, via the Truztee platform.",
    tags: ["Vercel", "HTML5", "CSS3", "JavaScript"],
    imageUrl: "/ICICI.webp",
    externalLink: "https://icici-truztee.vercel.app/",
  },
  {
    title: "Siree Academy",
    description: "A lead-generation and marketing website for a premium Science & Math home tuition academy in Hyderabad.",
    tags: ["React", "SEO", "Web Design"],
    imageUrl: "/siree-ss.png",
    externalLink: "https://www.sireetuitions.com/",
  },
  {
    title: "AI Visual Merch Designer",
    description: "An interactive web application allowing users to generate custom merchandise designs using AI.",
    tags: ["React", "AI/ML", "API Integration"],
    imageUrl: "/aimerch-ss.png",
    externalLink: "https://ai-merch-frontend.onrender.com/",
  },
  {
    title: "MIRA - Smart Mirror",
    description: "Created a smart mirror prototype to explore home automation technologies, integrating hardware and software seamlessly.",
    tags: ["Raspberry PI", "Javascript", "Linux", "MMM", "Carpentry"],
    imageUrl: "/MIRA.jpeg",
    externalLink: "https://magicmirror.builders/",
  },
  {
    title: "PomoDoto",
    description: "A gamified Pomodoro timer built for Dota 2 players. Turn focus sessions into gaming credits.",
    tags: ["React", "TypeScript", "Productivity"],
    imageUrl: "/pomodoto-ss.png",
    externalLink: "https://pomodoto.vercel.app/",
  },
  {
    title: "Truztee Website",
    description: "A corporate platform delivering premium golf benefits and lifestyle rewards to banks and enterprise clients.",
    tags: ["B2B", "Web Development", "UI/UX"],
    imageUrl: "/truztee-ss.png",
    externalLink: "https://www.truztee.com/",
  },

  {
    title: "Studio Amaidhi",
    description: "A clean, minimalist portfolio website for an architecture and design studio.",
    tags: ["Wix", "Web Design", "Portfolio"],
    imageUrl: "/amaidhi-ss.jpg",
    externalLink: "https://shakthinataraj1987.wixsite.com/studio-amaidhi",
  },

  // {
  //   title: "Mapdout",
  //   description:
  //     "An AI powered travel planning tool that helps users create personalized itineraries based on their preferences and interests.",
  //   tags: ["Bolt.new", "Github", "Netlify", "Supabase"],
  //   imageUrl: "/mapdout-ss.webp",
  //   externalLink: "https://mapdout.in",
  // },



  {
    title: "YouTwitch",
    description:
      "Watch Higher Quality Rewindable Youtube Streams with all of the action from Twitch Chat on a single page. The best of both worlds.",
    tags: ["Bolt.new", "Kilo Code AI", "Gemini Glash 2.5", "Vibecoding"],
    imageUrl: "/youtwitch-app.png",
    externalLink: "https://youtwitch.vercel.app",
  },
  {
    title: "IDFC Golf Rewards",
    description:
      "Designed and developed a rewards portal interface for a leading financial institution, enabling users to redeem points for golf-related benefits.",
    tags: ["React", "Javascript", "HTML5", "CSS3"],
    imageUrl: "/IDFC.png",
    externalLink: "https://golftripz-prototype.vercel.app/",
  },

  // {
  //   title: "Fuja - Content Monetization",
  //   description: "Fuja utilizes the bitcoin lightning network to allow users to stream money for the video streamed to them from their favorite celebrities.",
  //   tags: ["Webflow", "UI/UX Design", "CMS"],
  //   imageUrl: "/fuja.png",
  //   externalLink: "https://fuja.webflow.io/",
  // },
  // {
  //   title: "Heboga",
  //   description: "Quick marketing website for a local confectionary business, built with React and hosted on Vercel.",
  //   tags: ["React", "KiloCode AI", "Godaddy"],
  //   imageUrl: "/chillimilli.jpeg",
  //   externalLink: " https://heboga.com/",
  // },
  {
    title: "Experience Profile",
    description:
      "A simple react app that allows you to visualize statistics of your choice in a clean and interactive way.",
    tags: ["Vibe Coding", "ReactJS", "Typescript"],
    imageUrl: "/xppro.png",
    externalLink: "https://xppro.vercel.app/",
  },
  {
    title: "Intentional Living",
    description: "A community to help people reduce their screen time by sharing goals and holding each other accountable. Want to join? Get in touch!",
    tags: ["Community management", "Productivity", "Mindfulness"],
    imageUrl: "/Intentional_Living.png",
    externalLink: "https://docs.google.com/spreadsheets/d/1GZilnK9TAB8eKam6J1dEkUE23r4H686ke6jXxCWYXT4/edit?disco=AAABd7Z5zZ0",
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

export const subtitles = [
  { text: "a software engineer 💻", link: "https://github.com/ashvinpanicker" },
  { text: "an entrepreneur 🚀", link: "https://www.crunchbase.com/person/ashvin-panicker" },
  { text: "a guitarist 🎸", link: "https://soundcloud.com/ashvin-panicker/sets" },
  // { text: "a data nerd 🤓", link: "https://observablehq.com/@agnjkafgh/skill-tree" },
  { text: "a traveler 🌍", link: "https://instagram.com/ashvinpanicker" },
  { text: "a kitesurfer 🏄🪁", link: "https://beta.ikointl.com/members/186928" },
  // { text: "passionate about UX ✨", link: "https://ashvinpanicker.vercel.app" },
  { text: "a maker 🛠️", link: "https://stashkart.in/pages/custom" },
  // { text: "figuring life out... 🤔" },
  { text: "happy you're here! :) 👋" },
] as const;

export const socialLinks = [
  // { name: "Portfolio", url: "https://ashvinpanicker.vercel.app/", icon: "/icons/portfolio.svg", color: "hover:text-slate-700" },
  { name: "CV", url: "/Ashvin_Panicker_Resume.pdf", icon: "/icons/cv.svg", color: "hover:text-gray-900 dark:hover:text-gray-100" },
  { name: "GitHub", url: "https://github.com/ashvinpanicker", icon: "/icons/github.svg", color: "hover:text-[#181717]" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ashvin-panicker/", icon: "/icons/linkedin.svg", color: "hover:text-[#0A66C2]" },
  // { name: "LeetCode", url: "https://leetcode.com/u/ashvinpanicker/", icon: "/icons/leetcode.svg", color: "hover:text-[#FFA116]" },
  // { name: "Stack Overflow", url: "https://stackoverflow.com/users/6799282/ashvin-panicker", icon: "/icons/stackoverflow.svg", color: "hover:text-[#F48024]" },
  // { name: "Y Combinator", url: "https://www.startupschool.org/cofounder-matching/candidate/KrDcoeszT", icon: "/icons/ycombinator.svg", color: "hover:text-[#FF6600]" },
  // { name: "Crunchbase", url: "https://www.crunchbase.com/person/ashvin-panicker", icon: "/icons/crunchbase.svg", color: "hover:text-[#0288D1]" },
  // { name: "Product Hunt", url: "https://www.producthunt.com/@ashvin_panicker", icon: "/icons/producthunt.svg", color: "hover:text-[#DA552F]" },
  // { name: "X", url: "https://x.com/ashvinpanicker", icon: "/icons/x.svg", color: "hover:text-[#000000]" },
  { name: "Instagram", url: "https://instagram.com/ashvinpanicker", icon: "/icons/instagram.svg", color: "hover:text-[#E4405F]" },
  { name: "SoundCloud", url: "https://soundcloud.com/ashvin-panicker/sets", icon: "/icons/soundcloud.svg", color: "hover:text-[#FF5500]" },
  { name: "YouTube", url: "https://www.youtube.com/ashvinpanicker", icon: "/icons/youtube.svg", color: "hover:text-[#FF0000]" },
  // { name: "Spotify", url: "https://open.spotify.com/user/31upt6nlxxfbu6hk4uapv7ecv7fa?si=1feb5b4131344c3c", icon: "/icons/spotify.svg", color: "hover:text-[#1DB954]" },
] as const;

export const paymentAddresses = [
  { name: "UPI", address: "ashiseverything@axl", icon: "/icons/upi.png", color: "hover:border-green-500" },
  { name: "Bitcoin", address: "3Ppbu7ve8C5pk4xumHDsRXKE4jTyuqGJsK", icon: "/icons/bitcoin.svg", color: "hover:border-orange-500" },
  { name: "USDT", address: "0xc0026E08B2aD3e919CB5Fb968056cf9D168EE901", icon: "/icons/tether.svg", color: "hover:border-blue-500" },
] as const;

export const testimonialsData = [
  {
    quote: "Working with Ashvin has been a good experience. He was quick to respond, clear and structured in outlining the changes needed, and delivered everything on time. Despite multiple rounds of revisions, he remained flexible and accommodating throughout the process. His strong grasp of web development really showed in the quality of his work. I would highly recommend him to anyone looking for a reliable and skilled web developer.",
    name: "Jogeswari Peddi",
    title: "Director, Golftripz",
  },
  {
    quote: "Ashvin helped us increase our visibility and capture more customers. Now when people search for 'Best kitesurfing in India' on Google, our resort ranks at the top, bringing in a steady stream of visitors.",
    name: "Arjun Motha",
    title: "CEO, Aqua Outback",
  },
  {
    quote: "One of exceptional experience working with Ashvin. This guy even helped with a little thing, a very tiny doubt too. I’m satisfied with his work. The work is a art piece and artist is Ashvin",
    name: "Boda Sireesha",
    title: "Founder, Siree Academy Home Tuitions",
  }
] as const;
