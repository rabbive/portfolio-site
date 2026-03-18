export const siteConfig = {
  name: "Ramkrishna Swarnkar",
  title: "Ramkrishna Swarnkar Portfolio - Ramxcodes",
  description: "Love to build cool stuff, content creator & polymath.",
  tagline: "Engineer · Polymath",
  email: "ramkrishna@example.com",
  avatar: "/assets/ram.webp",
  socials: [
    { name: "X", url: "https://x.com/ramxcodes", icon: "x" },
    { name: "LinkedIn", url: "https://linkedin.com/in/ramxcodes", icon: "linkedin" },
    { name: "Github", url: "https://github.com/ramxcodes", icon: "github" },
    { name: "YouTube", url: "https://youtube.com/@ramxcodes", icon: "youtube" },
    { name: "Instagram", url: "https://instagram.com/ramxcodes", icon: "instagram" },
    { name: "Pinterest", url: "https://pinterest.com/ramxcodes", icon: "pinterest" },
    { name: "Medium", url: "https://medium.com/@ramxcodes", icon: "medium" },
    { name: "Email", url: "mailto:ramkrishna@example.com", icon: "mail" },
  ],
  quote: {
    text: "If the pain doesn't kill me, it will only make me stronger.",
    author: "Sung Jin-Woo",
    source: "Solo Leveling",
  },
  resumeQuote: {
    text: "I'll take a potato chip... AND EAT IT!",
    author: "Light Yagami",
    source: "Death Note",
  },
};

export interface Experience {
  company: string;
  role: string;
  type?: string;
  dateShort: string;
  dateLong: string;
  locationShort: string;
  locationLong: string;
  technologies: string[];
  highlights: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    company: "good day :3",
    role: "SDE-L1 (Full Stack)",
    type: "Working",
    dateShort: "Jan 26 – Present",
    dateLong: "January 2026 – Present",
    locationShort: "Hyd, IN",
    locationLong: "Hyderabad, India (On-Site)",
    current: true,
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Figma", "Vercel", "AWS", "Postman", "Bun"],
    highlights: [
      "Collaborated cross-functionally with development teams to design, implement, and deploy scalable internal solutions.",
      "Developed and maintained internal tools and infrastructure to support business operations and team productivity.",
      "Optimized website and application performance, resulting in improved user experience and system efficiency.",
    ],
  },
  {
    company: "Promote",
    role: "Founding Frontend Engineer",
    dateShort: "Aug 25 – Dec 25",
    dateLong: "August 2025 – December 2025",
    locationShort: "USA",
    locationLong: "United States (Remote)",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Figma", "Vercel", "AWS", "Postman", "Bun"],
    highlights: [
      "Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations.",
      "Integrated and optimized backend API connections, implementing efficient data fetching strategies and error handling mechanisms.",
      "Led a comprehensive codebase refactoring initiative that improved maintainability, scalability, and development velocity across the entire platform.",
      "Architected and developed the complete frontend infrastructure for the platform, a comprehensive solution for creating and managing promotional campaigns.",
    ],
  },
  {
    company: "Upsurge Labs",
    role: "Backend Developer Intern",
    dateShort: "Jun 25 – Jul 25",
    dateLong: "June 2025 – July 2025",
    locationShort: "Bangalore, IN",
    locationLong: "Bangalore, India (On-Site)",
    technologies: ["NestJS", "Postman", "TypeScript", "Express"],
    highlights: [
      "Streamlined development workflows by optimizing internal tools and maintaining detailed technical documentation.",
      "Testing agent functionality, authentication, automation, and system stability.",
      "Engineered and deployed multiple high-performance agents, enhancing product capabilities and user experience.",
      "Backend development for Bhindi.io, a flagship product of Upsurge Labs, focusing on core infrastructure and agent development.",
    ],
  },
  {
    company: "Prepeasy",
    role: "Founding Engineer",
    dateShort: "Apr 25 – Jun 25",
    dateLong: "April 2025 – June 2025",
    locationShort: "India",
    locationLong: "Remote (India)",
    technologies: ["Next.js", "Express", "TypeScript", "React", "Prisma", "PostgreSQL", "Vercel", "AWS", "Postman", "Bun"],
    highlights: [
      "Engineered a complete Learning Management System (LMS) with an integrated Quiz Platform, featuring progress tracking and performance analytics.",
      "Built and integrated an AI-powered Cover Letter Generator with customizable templates.",
      "Designed and developed comprehensive AI Resume Builder with automated optimization features.",
      "Single-handedly engineered and deployed a scalable AI Interview Platform, reducing per-session costs from $7 to $0.30.",
      "Independently architected and developed end-to-end full-stack solutions for core product features, resulting in 95% cost reduction in AI interview services.",
    ],
  },
  {
    company: "Expelee",
    role: "SDE-1 (Full Stack) Intern",
    dateShort: "Aug 23 – Apr 25",
    dateLong: "Aug 2023 – April 2025",
    locationShort: "UAE",
    locationLong: "Dubai, UAE (Remote - Freelance)",
    technologies: ["Bun", "Express", "Figma", "JavaScript", "MongoDB", "Next.js", "Node.js", "PostgreSQL", "Prisma", "React", "TypeScript", "Postman", "Vercel", "AWS"],
    highlights: [
      "TEQ Network: Designed and developed landing page using MERN, Tailwind CSS, and Web3 wallet integration.",
      "Pars Network: Engineered landing experience with MERN, Tailwind CSS, and GSAP for advanced animations.",
      "Altranium: Developed immersive gaming platform using Three.js, MERN, Tailwind, and Framer Motion.",
      "GPU AI: Integrated Three.js for interactive 3D elements alongside full-stack features.",
      "Core AI: Designed and developed with Next.js, Tailwind CSS, Framer Motion, shadcn.",
      "Riskmitra: Built full-stack product with Next.js, Tailwind CSS, Framer Motion, shadcn, wallet integration.",
    ],
  },
  {
    company: "Flameloop",
    role: "Junior Frontend Developer",
    dateShort: "Jun 23 – Jul 23",
    dateLong: "June 2023 – July 2023",
    locationShort: "Indore, IN",
    locationLong: "Indore, India (offline)",
    technologies: ["HTML", "CSS", "JavaScript", "Figma", "BootStrap"],
    highlights: [
      "Design & Developed multiple websites for clients.",
      "Collaborated with cross-functional teams to deliver high-quality software on time.",
      "Developed and maintained web applications using HTML, CSS, and JavaScript.",
    ],
  },
];

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "How to optimise a Next.js web app",
    slug: "how-to-optimise-a-next-js-web-app",
    description: "Optimise your Next.js web app to make it lightning fast!",
    date: "January 31, 2026",
    tags: ["Next.js", "Performance"],
    content: "This post covers key strategies for optimizing Next.js applications including image optimization, code splitting, lazy loading, caching strategies, and server-side rendering best practices.",
  },
  {
    title: "What is taste and how can you develop it?",
    slug: "what-is-taste-and-how-can-you-develop-it",
    description: "Understanding what is taste, resources and how to practice",
    date: "December 7, 2025",
    tags: ["Design", "Personal"],
    content: "Taste is the ability to discern quality and make refined choices. This post explores what taste means in design and engineering, and practical ways to develop it through deliberate exposure and practice.",
  },
  {
    title: "Go in bits",
    slug: "go-in-bits",
    description: "Archive of all the links from my socials for go tuts.",
    date: "October 2, 2025",
    tags: ["Go", "Backend"],
    content: "A curated collection of Go programming tutorials and resources shared across social media platforms, compiled here for easy reference.",
  },
  {
    title: "My Winter Arc",
    slug: "my-winter-arc",
    description: "This blog contains all the links of my content from twitter & Instagram.",
    date: "October 1, 2025",
    tags: ["Personal"],
    content: "A personal reflection on growth, discipline, and the journey of building in public during the winter months.",
  },
  {
    title: "How to be me - Learn, Build, and Crush it",
    slug: "how-to-be-me-learn-build-and-crush-it",
    description: "My journey of building, managing, and thinking differently.",
    date: "September 1, 2025",
    tags: ["Personal"],
    content: "Insights from my journey as a developer — how I approach learning, building projects, and maintaining momentum.",
  },
  {
    title: "Better Frontend Part 1: Learn development and design principles",
    slug: "better-frontend-part-1-learn-development-and-design-principles",
    description: "A guide to better frontend development and design principles for beginners part 1",
    date: "February 25, 2025",
    tags: ["Frontend", "Design"],
    content: "Part one of a series on leveling up frontend skills — covering foundational design principles, layout strategies, and development best practices.",
  },
  {
    title: "JavaScript for Frontend Development: A Beginner's Guide",
    slug: "javascript-for-frontend-development-1",
    description: "A guide to JavaScript for frontend development for beginners part 1",
    date: "April 13, 2025",
    tags: ["JavaScript", "Frontend"],
    content: "An introductory guide to JavaScript fundamentals every frontend developer should know, including DOM manipulation, events, and modern ES6+ features.",
  },
  {
    title: "Next JS Data Fetching mistakes & Security vulnerabilities",
    slug: "next-js-data-fetching-mistakes-and-security-vulnerabilities-1",
    description: "A guide to Next.js data fetching mistakes & security vulnerabilities",
    date: "July 5, 2025",
    tags: ["Next.js", "Security"],
    content: "Common data fetching pitfalls in Next.js applications and how to avoid security vulnerabilities when handling server-side data.",
  },
  {
    title: "Routing in Next.js (App Router) - A Complete Guide (2025)",
    slug: "routing-in-next-js-app-router-a-complete-guide-2025",
    description: "A guide to routing in Next.js (App Router) covering Catch-All Segments, Dynamic Routes, Nested Routes, and more.",
    date: "March 12, 2025",
    tags: ["Next.js"],
    content: "A comprehensive walkthrough of the Next.js App Router — dynamic routes, catch-all segments, route groups, parallel routes, and intercepting routes.",
  },
];

export interface Book {
  title: string;
  author: string;
  category: string;
}

export const books: Book[] = [
  { title: "The 48 Laws of Power", author: "Robert Greene", category: "Power & Influence" },
  { title: "The Art of Seduction", author: "Robert Greene", category: "Power & Influence" },
  { title: "The Laws of Human Nature", author: "Robert Greene", category: "Power & Influence" },
  { title: "Surrounded by Idiots", author: "Thomas Erikson", category: "Power & Influence" },
  { title: "Mastery", author: "Robert Greene", category: "Mastery & Focus" },
  { title: "Deep Work", author: "Cal Newport", category: "Mastery & Focus" },
  { title: "Limitless", author: "Jim Kwik", category: "Mastery & Focus" },
  { title: "No Excuses", author: "Brian Tracy", category: "Discipline & Grit" },
  { title: "Can't Hurt Me", author: "David Goggins", category: "Discipline & Grit" },
  { title: "Unfuck Yourself", author: "Gary John Bishop", category: "Discipline & Grit" },
  { title: "Man's Search for Meaning", author: "Viktor E. Frankl", category: "Meaning & Mind" },
  { title: "The Power of Your Subconscious Mind", author: "Joseph Murphy", category: "Meaning & Mind" },
  { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", category: "Habits & Systems" },
  { title: "Dopamine Detox", author: "Thibaut Meurisse", category: "Attention & Dopamine" },
  { title: "Digital Minimalism", author: "Cal Newport", category: "Attention & Dopamine" },
  { title: "Steal Like an Artist", author: "Austin Kleon", category: "Creativity" },
  { title: "This Explains Everything", author: "John Brockman", category: "Big Ideas" },
];

export interface Movie {
  title: string;
  year: number;
}

export const movies: Movie[] = [
  { title: "Ford v Ferrari", year: 2019 },
  { title: "Whiplash", year: 2014 },
  { title: "The Social Network", year: 2010 },
  { title: "Rush", year: 2013 },
  { title: "Steve Jobs", year: 2015 },
  { title: "The Founder", year: 2016 },
  { title: "Silicon Valley", year: 2014 },
  { title: "Black Swan", year: 2010 },
  { title: "The Big Short", year: 2015 },
  { title: "F1", year: 2025 },
];

export interface GearItem {
  name: string;
  category: string;
  index?: number;
}

export const gears: GearItem[] = [
  { name: 'Apple MacBook Pro 16"in M4 48GB 512GB', category: "Devices & Accessories" },
  { name: "Samsung S23 (256 GB)", category: "Devices & Accessories" },
  { name: "LG Ultragear Monitor 27GS65F (27 inch, 68.5 cm)", category: "Devices & Accessories" },
  { name: "LG Curved Ultra Wide Monitor 34WR50QK (34 inch, 86.36 cm)", category: "Devices & Accessories" },
  { name: "Monitor Stand with Laptop", category: "Devices & Accessories" },
  { name: "Magic Keyboard", category: "Devices & Accessories" },
  { name: "Logitech MX Master 3S Mouse", category: "Devices & Accessories" },
  { name: "Mouse Pad", category: "Devices & Accessories" },
  { name: "FIFINE K688 Podcast Microphone", category: "Devices & Accessories" },
  { name: "Crossbeats Roar 2.0 (Special Addition)", category: "Devices & Accessories" },
  { name: "Smart LED Light Strip (Tapo L900-5)", category: "Devices & Accessories" },
  { name: "DIGITEK Lite (DCL-150WBC Combo) - keylight", category: "Devices & Accessories" },
  { name: "Godox Softbox SB-GUE80", category: "Devices & Accessories" },
  { name: "Boom Arm Holder for Light", category: "Devices & Accessories" },
  { name: "Samsung T7 2TB SSD", category: "Devices & Accessories" },
  { name: "Unhook", category: "Web Extensions", index: 1 },
  { name: "uBlock Origin", category: "Web Extensions", index: 2 },
  { name: "React Developer Tools", category: "Web Extensions", index: 3 },
  { name: "daily.dev", category: "Web Extensions", index: 4 },
  { name: "Grammarly", category: "Web Extensions", index: 5 },
  { name: "Wappalyzer", category: "Web Extensions", index: 6 },
  { name: "ColorZilla", category: "Web Extensions", index: 7 },
  { name: "Dia", category: "Software", index: 1 },
  { name: "Notion", category: "Software", index: 2 },
  { name: "TickTick", category: "Software", index: 3 },
  { name: "OBS Studio", category: "Software", index: 4 },
  { name: "VLC", category: "Software", index: 5 },
  { name: "Ghostty", category: "Software", index: 6 },
];

export const footerNav = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/#projects" },
  { name: "Gears", href: "/gears" },
  { name: "Setup", href: "/setup" },
  { name: "Terminal", href: "/terminal" },
  { name: "Books", href: "/books" },
  { name: "Movies", href: "/movies" },
  { name: "RSS FEED", href: "/rss.xml" },
];
