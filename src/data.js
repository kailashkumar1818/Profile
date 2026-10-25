/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE CONTENT & LINKS
 * ─────────────────────────────────────────────────────────────────────────────
 * This is the only file you need to edit to personalise the portfolio.
 *
 * Fill in the config values below. Every button and icon that reads from an
 * empty string is hidden automatically — no other code changes required.
 */

export const config = {
  // Social / contact links ──────────────────────────────────────────────────
  // Use a full URL, e.g. "https://github.com/your-username".
  github: "https://github.com/kailash-kumar",
  linkedin: "https://www.linkedin.com/in/kailash-kumar",
  // Just the email address, e.g. "kailash@example.com" (mailto is added for you).
  email: "kailash.kumar@example.com",
  // Use a full URL, e.g. "https://your-site.com".
  website: "",

  // Resume ─────────────────────────────────────────────────────────────────
  // Put your PDF in /public and use a relative path, e.g. "Kailash-Kumar-Resume.pdf".
  // Leave empty to hide the Download Resume button.
  resumePdf: "",

  // Per-project GitHub links ────────────────────────────────────────────────
  // Match these keys to `githubKey` on each project below.
  projectGithub: {
    smartParking: "https://github.com/kailash-kumar/smart-parking-system",
    moveApp: "https://github.com/kailash-kumar/move-app",
    hostelManagement: "https://github.com/kailash-kumar/hostel-management-system",
  },
};

/**
 * All page content lives here. Keep facts exactly as they should appear.
 */
export const data = {
  name: "Kailash Kumar",
  firstName: "Kailash",
  initials: "KK",
  photo: "/kailash.jpeg",
  role: "Computer Science student focused on full-stack web development and problem solving",
  roles: ["Full-Stack Developer", "Problem Solver", "CS Student"],
  heroKicker: "B.Tech CSE · SRM University AP",
  heroIntro:
    "Computer Science student focused on full-stack web development and problem solving. Building real-world projects and strengthening fundamentals in data structures and backend systems.",

  nav: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],

  about: {
    eyebrow: "01 — About",
    heading: "Computer science fundamentals, real-world practice.",
    description:
      "A snapshot of where I am studying, what I am focused on, and what I am currently building.",
    paragraphs: [
      "Computer Science student focused on full-stack web development and problem solving.",
      "Building real-world projects and strengthening fundamentals in data structures and backend systems.",
    ],
    facts: [
      {
        label: "University",
        value: "SRM University AP",
        detail: "Amravati, Andhra Pradesh",
        icon: "GraduationCap",
      },
      {
        label: "CGPA",
        value: "8.2/10",
        detail: "B.Tech in Computer Science (CSE)",
        icon: "Award",
      },
      {
        label: "Focus",
        value: "Full-Stack Development",
        detail: "Web development",
        icon: "Layers",
      },
      {
        label: "Currently",
        value: "Self-Driven Developer",
        detail: "Independent projects",
        icon: "Terminal",
      },
    ],
  },

  skills: {
    eyebrow: "02 — Skills",
    heading: "Tools for building and learning.",
    description:
      "The languages, frameworks, and fundamentals I am working with — including the areas I am actively learning.",
    groups: [
      {
        title: "Programming Languages",
        icon: "Code2",
        skills: [{ name: "C" }, { name: "C++" }, { name: "Python" }, { name: "JavaScript" }],
      },
      {
        title: "Frontend",
        icon: "Monitor",
        skills: [{ name: "HTML" }, { name: "CSS" }, { name: "Bootstrap" }, { name: "JavaScript" }],
      },
      {
        title: "Backend",
        icon: "Server",
        skills: [
          { name: "Node.js", level: "Learning" },
          { name: "Express.js", level: "Learning" },
        ],
      },
      {
        title: "Databases",
        icon: "Database",
        skills: [
          { name: "MongoDB", level: "Basic" },
          { name: "MySQL", level: "Basic" },
        ],
      },
      {
        title: "Data Structures",
        icon: "Network",
        skills: [{ name: "Arrays" }, { name: "Linked Lists" }, { name: "Stacks" }, { name: "Queues" }],
      },
      {
        title: "Tools",
        icon: "Wrench",
        skills: [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }],
      },
      {
        title: "Areas of Interest",
        icon: "Compass",
        skills: [{ name: "Web Development" }, { name: "Full-Stack Development" }],
      },
      {
        title: "Soft Skills",
        icon: "Users",
        skills: [{ name: "Problem Solving" }, { name: "Self-Learning" }, { name: "Adaptability" }],
      },
    ],
  },

  experience: {
    eyebrow: "03 — Experience",
    heading: "Learning by doing.",
    description:
      "Independent, hands-on development focused on real-world projects and modern web technologies.",
    entries: [
      {
        role: "Self-Driven Developer",
        company: "Independent Projects",
        location: "Remote",
        period: "Present",
        current: true,
        bullets: [
          "Building full-stack applications and improving problem-solving skills through real-world projects",
          "Exploring modern web technologies and AI-based solutions",
        ],
      },
    ],
  },

  projects: {
    eyebrow: "04 — Projects",
    heading: "Selected work.",
    description:
      "Real-world builds that put algorithms, interfaces, and data handling into practice.",
    items: [
      {
        id: "smart-parking-system",
        title: "Smart Parking System",
        year: "2024",
        tech: ["C++", "OOP", "Greedy Algorithms"],
        icon: "Car",
        githubKey: "smartParking",
        bullets: [
          "Engineered an optimized parking allocation system using greedy algorithms for efficient real-time slot management",
          "Designed modular OOP architecture in C++ enabling scalable slot tracking and collision-free assignment logic",
        ],
      },
      {
        id: "move-app",
        title: "Move App",
        year: "2025",
        tech: ["HTML", "CSS", "JavaScript"],
        icon: "Smartphone",
        githubKey: "moveApp",
        bullets: [
          "Developed a web-based application focused on user interaction and dynamic content handling",
          "Implemented core frontend features using HTML, CSS, and JavaScript",
          "Designed a responsive interface for better user experience across devices",
        ],
      },
      {
        id: "hostel-management-system",
        title: "Online Hostel Management System",
        year: "2025",
        tech: ["Web Application"],
        icon: "Building2",
        githubKey: "hostelManagement",
        bullets: [
          "Developed a centralized web-based platform to streamline hostel operations",
          "Features: student registration, room allocation, and admin dashboard",
          "Efficient data handling and record management",
          "Clean and user-friendly interface",
        ],
      },
    ],
  },

  achievements: {
    eyebrow: "05 — Achievements",
    heading: "A moment worth noting.",
    description: "Recognition from a national-level techno cultural fest.",
    items: [
      {
        award: "1st Runner-Up",
        title: "404: Treasure Not Found",
        event: "INFINITUS'26 National Level Techno Cultural Fest",
        institution: "SRM University AP",
        date: "Feb 2026",
      },
    ],
  },

  education: {
    eyebrow: "06 — Education",
    heading: "Academic foundation.",
    description: "Where I am building the fundamentals behind the projects.",
    entries: [
      {
        degree: "Bachelor of Technology in Computer Science (CSE)",
        shortDegree: "B.Tech CSE",
        institution: "SRM University AP",
        location: "Amravati, Andhra Pradesh",
        period: "Aug 2024 – Present",
        score: "CGPA: 8.2/10",
      },
    ],
  },

  contact: {
    eyebrow: "07 — Contact",
    heading: "Let's connect.",
    description:
      "Have a question or want to connect? Send a message, or reach out through any link below.",
    formNote:
      "This form validates locally and is not connected to an inbox yet — no message is sent.",
  },

  footer: {
    tagline: "Computer Science student & full-stack developer.",
    copyright: "© 2026 Kailash Kumar",
  },
};

/* ─────────────────────────────────────────────────────────────────────────── */
/* Link helpers — keep empty values hidden across the site.                    */
/* ─────────────────────────────────────────────────────────────────────────── */

const clean = (value) => (typeof value === "string" ? value.trim() : "");

/** Turn a bare domain into a valid external URL. */
const normalizeExternalUrl = (value) => {
  const url = clean(value);
  if (!url) return "";
  return /^(https?:\/\/|mailto:)/i.test(url) ? url : `https://${url}`;
};

/** Social links for the hero, contact panel, and footer. Empty links are omitted. */
export const getSocialLinks = () => {
  const email = clean(config.email);

  return [
    {
      key: "github",
      label: "GitHub",
      href: normalizeExternalUrl(config.github),
      icon: "Github",
      external: true,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: normalizeExternalUrl(config.linkedin),
      icon: "Linkedin",
      external: true,
    },
    {
      key: "email",
      label: "Email",
      href: email ? `mailto:${email}` : "",
      icon: "Mail",
      external: false,
    },
    {
      key: "website",
      label: "Website",
      href: normalizeExternalUrl(config.website),
      icon: "Globe",
      external: true,
    },
  ].filter((link) => link.href);
};

/** Resume URL (relative paths work on both Vercel and GitHub Pages). */
export const getResumeUrl = () => clean(config.resumePdf);

/** GitHub URL for one project, or an empty string when not configured. */
export const getProjectGithubUrl = (githubKey) =>
  normalizeExternalUrl(config.projectGithub?.[githubKey]);
