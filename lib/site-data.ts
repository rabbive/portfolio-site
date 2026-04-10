/** Static visitor ordinal for footer + `/api/visitors` stub (not a live counter). */
export const VISITOR_COUNT_DISPLAY = 32874;

export const siteConfig = {
  name: "Ashwanth Kumaravel",
  title: "Ashwanth Kumaravel - Portfolio",
  description:
    "CS student at VIT Chennai building with ML, distributed systems, and applied cryptography.",
  siteUrl: "https://ashwanthkumaravel.vercel.app",
  tagline: "CS Student · Builder",
  email: "ashwanthkumaravel@gmail.com",
  avatar: "/assets/ram.webp",
  socials: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ashwanthk",
      icon: "linkedin",
    },
    {
      name: "Github",
      url: "https://github.com/rabbive",
      icon: "github",
    },
    {
      name: "Email",
      url: "mailto:ashwanthkumaravel@gmail.com",
      icon: "mail",
    },
  ],
  quote: {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    source: "Stanford Commencement, 2005",
  },
  resumeQuote: {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    source: "LKML",
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
    company: "Corizo",
    role: "Machine Learning Intern",
    dateShort: "Aug 23 – Sep 23",
    dateLong: "August 2023 – September 2023",
    locationShort: "Remote",
    locationLong: "Remote",
    technologies: ["Python", "scikit-learn", "pandas", "NumPy"],
    highlights: [
      "Completed hands-on training in supervised and unsupervised machine learning techniques using Python, scikit-learn, and pandas under industry mentor guidance.",
      "Built and evaluated ML models for real-world datasets, applying data preprocessing, feature engineering, and model validation to improve predictive accuracy.",
      "Gained practical exposure to the full ML pipeline from exploratory data analysis (EDA) to model evaluation, reinforcing core concepts in applied artificial intelligence.",
    ],
  },
];

export interface Project {
  title: string;
  slug: string;
  description: string;
  year: string;
  technologies: string[];
  highlights: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Schrödinger Mail",
    slug: "schrodinger-mail",
    description:
      "Full-stack post-quantum secure email client implementing NIST-standardised cryptographic algorithms.",
    year: "2025",
    technologies: [
      "Python",
      "Flask",
      "TypeScript",
      "SQLite",
      "Docker",
      "liboqs",
      "Kubernetes",
    ],
    highlights: [
      "Implemented CRYSTALS-Kyber768 (ML-KEM, FIPS 203) for key encapsulation and CRYSTALS-Dilithium3 (ML-DSA, FIPS 204) for digital signatures at NIST Security Level 3.",
      "Designed a Signed KEM-DEM pipeline with Sign-then-Encrypt workflow; implemented 3 security levels including a hybrid RSA-2048 + Kyber768 mode deriving the AES key via SHA-256.",
      "Exposed 20+ REST API endpoints covering send, receive, folder management, full-text search, key export, and live crypto benchmarks; validated across 3 test suites.",
      "Containerised with Docker Compose and Kubernetes manifests; hardened with Argon2id password hashing, per-session CSRF tokens, rate limiting (200 req/min), and a persistent security audit log.",
    ],
    github: "https://github.com/rabbive",
  },
  {
    title: "ECHO",
    slug: "echo-consensus-protocol",
    description:
      "Novel distributed consensus protocol for heterogeneous IoT edge environments.",
    year: "2024 – Present",
    technologies: ["Python", "asyncio", "pytest"],
    highlights: [
      "Designed a novel distributed consensus protocol benchmarked against Raft, PBFT, and IOTA with a focus on low-resource constrained nodes.",
      "Built a complete Python simulation achieving 22 passing unit tests; implemented a CLI runner and metrics collection pipeline for latency and throughput analysis.",
      "Stress-tested provisional consensus logic under network partition scenarios; Phase 2 Raspberry Pi hardware prototype and research paper submission in progress.",
    ],
    github: "https://github.com/rabbive",
  },
  {
    title: "CogniZap",
    slug: "cognizap",
    description:
      "AI learning platform that auto-generates flashcards and quizzes from real-time trending topics.",
    year: "2024",
    technologies: [
      "SvelteKit",
      "TypeScript",
      "Tailwind CSS",
      "Perplexity Sonar API",
    ],
    highlights: [
      "Auto-generates flashcards and quizzes from real-time trending topics using the Perplexity Sonar API with live fact-checking and source citations.",
      "Architected 6 specialised learning modules including a Research Assistant, Live Data tracker, Science Monitor, and gamified leaderboard.",
      "Supported PDF/PPTX upload-based content extraction with adjustable difficulty levels; deployed to Vercel with server-side API routes.",
    ],
    github: "https://github.com/rabbive",
  },
  {
    title: "ViBoot-Enhanced",
    slug: "viboot-enhanced",
    description:
      "VTOP browser extension for automated attendance tracking and grade insights used by VIT students.",
    year: "2023 – 2024",
    technologies: ["JavaScript", "WebExtensions API", "HTML", "CSS"],
    highlights: [
      "Extended an open-source Chrome extension for automated attendance tracking and grade insights; contributed 18 commits including bug fixes and UI improvements.",
      "Ported the extension to Firefox by migrating to the WebExtensions API and resolving Manifest v3 compatibility issues, enabling cross-browser support.",
    ],
    github: "https://github.com/rabbive",
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
    title: "Post-Quantum Cryptography: Building a Secure Email Client",
    slug: "post-quantum-cryptography-secure-email",
    description:
      "How I built Schrödinger Mail with CRYSTALS-Kyber and Dilithium for post-quantum security.",
    date: "March 10, 2025",
    tags: ["Cryptography", "Python", "Security"],
    content:
      "A deep dive into building a post-quantum secure email client using NIST-standardised algorithms. This post covers the KEM-DEM pipeline, hybrid encryption modes, and how CRYSTALS-Kyber768 and Dilithium3 work together to provide defence-in-depth at NIST Security Level 3.",
  },
  {
    title: "Distributed Consensus for IoT: Beyond Raft and PBFT",
    slug: "distributed-consensus-iot-beyond-raft-pbft",
    description:
      "Designing a consensus protocol for heterogeneous IoT edge networks.",
    date: "January 15, 2025",
    tags: ["Distributed Systems", "Python", "IoT"],
    content:
      "Traditional consensus protocols like Raft and PBFT weren't designed for constrained IoT devices. This post explores the design decisions behind ECHO, a novel protocol targeting low-resource edge nodes with tunable consistency guarantees.",
  },
  {
    title: "Building an AI Learning Platform with SvelteKit",
    slug: "ai-learning-platform-sveltekit",
    description:
      "Architecture and lessons from building CogniZap with real-time AI content generation.",
    date: "November 20, 2024",
    tags: ["AI", "SvelteKit", "TypeScript"],
    content:
      "How I built CogniZap — an AI-powered learning platform that auto-generates flashcards and quizzes from trending topics using the Perplexity Sonar API. Covers the modular SvelteKit architecture, server-side API routes, and zero-config demo mode.",
  },
  {
    title: "Porting a Chrome Extension to Firefox",
    slug: "porting-chrome-extension-to-firefox",
    description:
      "Lessons from migrating ViBoot-Enhanced to the WebExtensions API.",
    date: "September 5, 2024",
    tags: ["JavaScript", "Browser Extensions"],
    content:
      "A practical guide to porting Chrome extensions to Firefox, covering Manifest v3 compatibility issues, WebExtensions API differences, and cross-browser testing strategies learned while working on ViBoot-Enhanced.",
  },
  {
    title: "Getting Started with ML Pipelines in Python",
    slug: "getting-started-ml-pipelines-python",
    description:
      "From EDA to model evaluation — a practical walkthrough.",
    date: "August 20, 2024",
    tags: ["Machine Learning", "Python"],
    content:
      "A beginner-friendly walkthrough of the full machine learning pipeline: exploratory data analysis, feature engineering, model selection, and validation using scikit-learn and pandas.",
  },
  {
    title: "Docker and Kubernetes for Side Projects",
    slug: "docker-kubernetes-side-projects",
    description:
      "Containerising and orchestrating your projects the practical way.",
    date: "July 10, 2024",
    tags: ["Docker", "Kubernetes", "DevOps"],
    content:
      "How to containerise full-stack applications with Docker Compose and deploy with Kubernetes manifests. Practical tips from deploying Schrödinger Mail including Argon2id hashing, CSRF protection, and rate limiting.",
  },
  {
    title: "Python asyncio for Network Programming",
    slug: "python-asyncio-network-programming",
    description:
      "Using asyncio to build concurrent distributed systems.",
    date: "May 15, 2024",
    tags: ["Python", "Distributed Systems"],
    content:
      "An introduction to Python's asyncio for building concurrent network applications. Covers event loops, coroutines, and practical patterns used in building the ECHO distributed consensus protocol simulation.",
  },
  {
    title: "RAG Pipelines: Connecting LLMs to Your Data",
    slug: "rag-pipelines-connecting-llms-to-data",
    description:
      "Building retrieval-augmented generation pipelines with LangChain and FAISS.",
    date: "March 25, 2024",
    tags: ["AI", "Python", "LangChain"],
    content:
      "A practical guide to building RAG pipelines that connect large language models to custom data sources using LangChain, FAISS vector stores, and Hugging Face embeddings.",
  },
  {
    title: "Next.js App Router: A Practical Guide",
    slug: "nextjs-app-router-practical-guide",
    description:
      "Understanding the App Router, server components, and modern Next.js patterns.",
    date: "February 10, 2024",
    tags: ["Next.js", "TypeScript", "Frontend"],
    content:
      "A comprehensive walkthrough of the Next.js App Router covering server components, dynamic routes, route groups, parallel routes, and data fetching patterns for modern web applications.",
  },
];

export interface Book {
  title: string;
  author: string;
  category: string;
}

export const books: Book[] = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "Systems & Architecture",
  },
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    category: "Systems & Architecture",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Systems & Architecture",
  },
  {
    title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
    author: "Aurélien Géron",
    category: "AI & Machine Learning",
  },
  {
    title: "Deep Learning",
    author: "Ian Goodfellow, Yoshua Bengio & Aaron Courville",
    category: "AI & Machine Learning",
  },
  {
    title: "Introduction to Algorithms",
    author: "Cormen, Leiserson, Rivest & Stein",
    category: "Computer Science",
  },
  {
    title: "Cryptography and Network Security",
    author: "William Stallings",
    category: "Computer Science",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity & Growth",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Productivity & Growth",
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    category: "Startups & Thinking",
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "Startups & Thinking",
  },
];

export interface Movie {
  title: string;
  year: number;
}

export const movies: Movie[] = [
  { title: "The Social Network", year: 2010 },
  { title: "The Imitation Game", year: 2014 },
  { title: "Ex Machina", year: 2014 },
  { title: "Interstellar", year: 2014 },
  { title: "The Matrix", year: 1999 },
  { title: "Inception", year: 2010 },
  { title: "Whiplash", year: 2014 },
  { title: "Steve Jobs", year: 2015 },
  { title: "Silicon Valley", year: 2014 },
  { title: "Mr. Robot", year: 2015 },
];

export interface GearItem {
  name: string;
  category: string;
  index?: number;
}

export const gears: GearItem[] = [
  { name: "VS Code / Cursor", category: "Software", index: 1 },
  { name: "Docker Desktop", category: "Software", index: 2 },
  { name: "Postman", category: "Software", index: 3 },
  { name: "Git + GitHub", category: "Software", index: 4 },
  { name: "Notion", category: "Software", index: 5 },
  { name: "OBS Studio", category: "Software", index: 6 },
  { name: "uBlock Origin", category: "Web Extensions", index: 1 },
  { name: "React Developer Tools", category: "Web Extensions", index: 2 },
  { name: "Wappalyzer", category: "Web Extensions", index: 3 },
  { name: "daily.dev", category: "Web Extensions", index: 4 },
  { name: "ColorZilla", category: "Web Extensions", index: 5 },
];

export const footerNav = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Resume", href: "/resume" },
  { name: "Gears", href: "/gears" },
  { name: "Setup", href: "/setup" },
  { name: "Terminal", href: "/terminal" },
  { name: "Books", href: "/books" },
  { name: "Movies", href: "/movies" },
];
