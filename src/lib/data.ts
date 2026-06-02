import { GithubIcon, LinkedinIcon } from "@/components/Icons"
import { IconItem } from "@/components/Skills"
import { ExternalLink, Flag, Globe, Mail, MapPin } from "lucide-react"

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

export const education: {
  degree: string
  institution: string
  location: string
  year: string
  thesis?: string
  thesisUrl?: string
}[] = [
  {
    degree: "MSc Computer Science — Information Retrieval",
    institution: "University of Crete",
    location: "Heraklion, Crete",
    year: "Mar 2024",
    // thesis:
    //   "From File Folders to Knowledge Graphs: An Automatic and Configurable Symbiotic Approach",
    // thesisUrl:
    //   "https://elocus.lib.uoc.gr//dlib/a/6/c/attached-metadata-dlib-1715684190-765263-26151/MSc_Thesis_Emmanouil_Smyrnakis.pdf",
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
    period: "May 2026 - Present",
    description:
      "Real-time news feed web app using React and OpenAI API to summarize and categorize tech news articles, with user-customizable topics and sentiment analysis.",
    tags: ["React", "Python", "OpenAI API", "FastAPI"],
    url: "https://tech-news-viralizer.vercel.app/",
    imageUrl: "/images/tech.png",
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
    title: "Bado Trivial - Quiz Nights (Maintainer/Developer)",
    period: "February 2026 - Present",
    description:
      "Webpage for hosting quiz nights, built with React and Tailwind CSS, showcasing my ability to create engaging user interfaces and manage open-source projects.",
    tags: ["Next JS", "Tailwind CSS", "Animations", "Cloudflare"],
    url: "https://www.badotrivial.gr/",
    imageUrl: "/images/bado.png",
  },
  {
    title: "Building Materials Webpage",
    period: "June 2025 - October 2024",
    description:
      "A responsive website for a building materials company, built with WordPress and custom themes, demonstrating my skills in web design, SEO optimization, and content management.",
    tags: ["Wordpress", "Hosting", "Responsive Design", "SEO"],
    url: "https://michelakisbuildingmaterials.gr/",
    imageUrl: "/images/michelakis.png",
  },
  // {
  //   title: "Transfers Feed Application",
  //   period: "March 2025 - May 2025",
  //   description:
  //     "A responsive web app that displays a feed of scheduled guest transfers, grouped by day and sorted chronologically.",
  //   tags: ["React", "TypeScript", "Tailwind CSS", "CRM"],
  //   url: "https://transfers-feed-app.vercel.app/scheduled",
  //   imageUrl: "/images/crm.png",
  // },
]

export const publications = [
  {
    thesis: "BSc",
    title:
      "Chattack: A Gamified Crowd-sourcing Platform for Tagging Deceptive & Abusive Behaviour",
    institution:
      "University of Crete, Information Systems Laboratory FORTH-ICS",
    date: "Feb 20, 2022",
    url: "https://users.ics.forth.gr/~papadako/publications/Papadakos-2021-ECIR-demo.pdf",
  },
  {
    thesis: "MSc",
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

export const imageInfoText = [
  { icon: MapPin, label: "Location", value: personalInfo.location },
  {
    icon: Flag,
    label: "Nationality",
    value: personalInfo.nationalities.join(" · "),
  },
  {
    icon: Globe,
    label: "Languages",
    value: personalInfo.languages.join(" · "),
  },
]

export const Row_1_Tools: IconItem[] = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    url: "https://cdn.simpleicons.org/nextdotjs/ffffff",
    name: "Next.js",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "Tailwind CSS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
    name: "Angular",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    name: "Node.js",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
    name: "GraphQL",
  },
]

export const Row_2_Tools: IconItem[] = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    name: "Docker",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    name: "GitHub",
    invert: true,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
    name: "Kubernetes",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    name: "PostgreSQL",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/openai.svg",
    name: "OpenAI",
    invert: true,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    name: "HTML5",
  },
]
