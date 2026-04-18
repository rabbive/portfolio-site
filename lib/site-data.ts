import githubGenerated from "./github-data.generated.json";

/** Static visitor ordinal for footer + `/api/visitors` stub (not a live counter). */
export const VISITOR_COUNT_DISPLAY = 32874;

type GithubGeneratedProject = {
  title: string;
  slug: string;
  description: string;
  year: string;
  technologies: string[];
  highlights: string[];
  github?: string;
};

type GithubGeneratedShape = {
  profile?: {
    name?: string;
    bio?: string;
    avatarUrl?: string;
    githubUrl?: string;
  };
  projects?: GithubGeneratedProject[];
};

const githubData = githubGenerated as GithubGeneratedShape;

export const siteConfig = {
  name: githubData.profile?.name || "Ashwanth Kumaravel",
  title: "Ashwanth Kumaravel - Portfolio",
  description:
    githubData.profile?.bio ||
    "CS student at VIT Chennai building with ML, distributed systems, and applied cryptography.",
  tagline: "CS Student · Builder",
  email: "ashwanthkumaravel@gmail.com",
  avatar: githubData.profile?.avatarUrl || "/assets/ram.webp",
  socials: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ashwanthk",
      icon: "linkedin",
    },
    {
      name: "Github",
      url: githubData.profile?.githubUrl || "https://github.com/rabbive",
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

const fallbackProjects: Project[] = [
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

export const projects: Project[] =
  githubData.projects && githubData.projects.length > 0
    ? githubData.projects.map((project) => ({
        title: project.title,
        slug: project.slug,
        description: project.description,
        year: project.year,
        technologies: project.technologies,
        highlights: project.highlights,
        github: project.github,
      }))
    : fallbackProjects;

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
  { name: "Resume", href: "/resume" },
  { name: "Setup", href: "/setup" },
  { name: "Terminal", href: "/terminal" },
  { name: "Movies", href: "/movies" },
];
