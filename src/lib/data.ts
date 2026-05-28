import { GithubIcon, LinkedinIcon } from "@/components/Icons"
import { ExternalLink, Mail } from "lucide-react"

export const personalInfo = {
  name: "Emmanouil Smyrnakis",
  shortName: "Manos",
  role: "Software Engineer",
  location: "Chania, Crete, Greece",
  email: "manosmyrnakis@hotmail.com",
  phone: "+30 698 341 7229",
  github: "https://github.com/msmyrn96",
  linkedin: "https://www.linkedin.com/in/emmanouil-smyrnakis/",
  portfolio: "https://msmyrn96.github.io/Portfolio/",
  nationalities: ["Greek", "American"],
  languages: ["Greek", "English"],
  tagline:
    "Building scalable React apps & AI-powered web experiences. Passionate about clean architecture and modern frontend engineering.",
}

export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Tailwind CSS",
    "Angular",
  ],
  backend: ["Node.js", "REST APIs", "GraphQL", "SQL"],
  tools: ["Git", "CI/CD", "Docker", "Kubernetes", "GitHub Actions"],
  ai: ["OpenAI API", "Claude API", "Prompt Engineering", "LLM Integration"],
  other: ["XState", "State Machines", "WordPress", "Java", "C++"],
}

export const experience = [
  {
    company: "XM",
    role: "Software Engineer",
    period: "Nov 2025 — Present",
    location: "Athens, Attiki (Remote)",
    current: true,
    bullets: [
      "Developed and maintained scalable React applications with reusable components and hooks-based architecture",
      "Integrated RESTful APIs handling async data flows, error states, and data transformations",
      "Performed code reviews, optimized performance, and contributed to clean frontend architecture",
    ],
  },
  {
    company: "Lateralus Ventures",
    role: "Software Engineer",
    period: "Apr 2025 — Dec 2025",
    location: "Athens, Attiki (Remote)",
    current: false,
    bullets: [
      "Built AI-powered web apps with React/Tailwind, integrating LLMs (OpenAI, Claude, Lovable) for chatbots, document analysis, and text generation",
      "Designed state machines (XState) to manage complex UI flows — multi-step forms, real-time dashboards",
      "Optimized LLM API calls with prompt engineering and caching, cutting latency while maintaining cost efficiency",
    ],
  },
  {
    company: "Epignosis Learning Technologies",
    role: "Frontend Developer",
    period: "Nov 2022 — Apr 2024",
    location: "Athens, Attiki (Remote)",
    current: false,
    bullets: [
      "Improved UX with responsive design practices, decreasing bounce rate and increasing session duration",
      "Developed new SaaS platform features, growing active users and increasing engagement metrics",
      "Collaborated cross-functionally to resolve technical issues, improving customer satisfaction",
    ],
  },
  {
    company: "University of Crete",
    role: "Teacher Assistant & Researcher",
    period: "Feb 2021 — Mar 2024",
    location: "Heraklion, Crete",
    current: false,
    bullets: [
      "Conducted research on knowledge graphs and SPARQL, resulting in a master's thesis and peer-reviewed publication",
      "Led interactive workshops in Java programming, increasing student participation and success rates",
    ],
  },
  {
    company: "Conveos",
    role: "Frontend Developer",
    period: "Jul 2021 — Nov 2022",
    location: "Heraklion, Crete (Remote)",
    current: false,
    bullets: [
      "Optimized UX on 3 frontend React projects, increasing user engagement metrics",
      "Created a reusable web component library, streamlining development time across future projects",
    ],
  },
]

export const education = [
  {
    degree: "MSc Computer Science — Information Retrieval",
    institution: "University of Crete",
    location: "Heraklion, Crete",
    year: "Mar 2024",
    thesis:
      "From File Folders to Knowledge Graphs: An Automatic and Configurable Symbiotic Approach",
    thesisUrl:
      "https://elocus.lib.uoc.gr//dlib/a/6/c/attached-metadata-dlib-1715684190-765263-26151/MSc_Thesis_Emmanouil_Smyrnakis.pdf",
  },
  {
    degree: "BSc Computer Science",
    institution: "University of Crete",
    location: "Heraklion, Crete",
    year: "Mar 2021",
  },
]

export const projects = [
  {
    title: "AI Tech News Feed",
    period: "May 2026",
    description:
      "Real-time news feed web app using React and OpenAI API to summarize and categorize tech news articles, with user-customizable topics and sentiment analysis.",
    tags: ["React", "Python", "OpenAI API", "FastAPI"],
    url: "https://tech-news-viralizer.vercel.app/",
  },
  // {
  //   title: "Personal Portfolio",
  //   period: "Aug 2024 — Oct 2024",
  //   description:
  //     "Visually engaging React portfolio with CI/CD pipeline via GitHub Actions — automated testing, building, and deployment.",
  //   tags: ["React", "GitHub Actions", "CI/CD"],
  //   url: "https://msmyrn96.github.io/Portfolio/",
  // },
  {
    title: "KG-enriched File Explorer",
    period: "Sep 2023 — Feb 2024",
    description:
      "Knowledge graph database to store and query semantic relationships between files, with an intuitive UI for advanced search and filtering.",
    tags: ["Knowledge Graphs", "SPARQL", "React", "Semantic Web"],
    url: "https://elocus.lib.uoc.gr//dlib/a/6/c/attached-metadata-dlib-1715684190-765263-26151/MSc_Thesis_Emmanouil_Smyrnakis.pdf",
  },
  {
    title: "Crowdsourcing Web Platform",
    period: "Dec 2019 — Jul 2020",
    description:
      "Gamified platform for tagging deceptive/abusive behavior — points, badges, leaderboards — with full user anonymity and privacy safeguards.",
    tags: ["React", "Gamification", "Web Platform"],
    url: "https://users.ics.forth.gr/~papadako/publications/Papadakos-2021-ECIR-demo.pdf",
  },
]

export const publications = [
  {
    title:
      "Chattack: A Gamified Crowd-sourcing Platform for Tagging Deceptive & Abusive Behaviour",
    institution:
      "University of Crete, Information Systems Laboratory FORTH-ICS",
    date: "Feb 20, 2022",
    url: "https://users.ics.forth.gr/~papadako/publications/Papadakos-2021-ECIR-demo.pdf",
  },
  {
    title:
      "From File Folders to Knowledge Graphs: An Automatic and Configurable Symbiotic Approach",
    institution: "University of Crete — Computer Science Department",
    date: "March 2024",
    url: "https://elocus.lib.uoc.gr//dlib/a/6/c/attached-metadata-dlib-1715684190-765263-26151/MSc_Thesis_Emmanouil_Smyrnakis.pdf",
  },
]

export const personalLinks = [
  { href: personalInfo.github, icon: GithubIcon, label: "GitHub" },
  {
    href: personalInfo.linkedin,
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
  {
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    label: "Email",
  },
  {
    href: personalInfo.portfolio,
    icon: ExternalLink,
    label: "Old Portfolio",
  },
]

export const headingWords = [
  { text: "Let's" },
  { text: "work" },
  { text: "together.", className: "text-[var(--accent-2)]" },
]
