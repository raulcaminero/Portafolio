export const hero = {
  name: "Raúl Caminero",
  role: "Senior Full-Stack Software Engineer",
  tagline:
    "10+ years building scalable web applications, high-performance APIs, and AI-powered services for e-commerce and high-traffic platforms — including eBay.",
};

export const about = [
  "I focus on efficiency and performance: optimizing API requests, database queries, and caching strategies across critical application flows. Currently building AI-powered services with LangGraph, AWS Bedrock, and RAG pipelines (pgvector, Anthropic Claude).",
  "Deep expertise in React, Node.js/NestJS, GraphQL, and AWS, with a track record of leading teams, mentoring engineers, and owning architecture from design to production.",
];

export type Project = {
  name: string;
  description: string;
  details: string;
  stack: string[];
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "Project One — replace me",
    description: "One line: the problem this project solves.",
    details:
      "Two or three lines about the key technical decisions: architecture, why this stack, what was hard.",
    stack: ["Next.js", "NestJS", "PostgreSQL"],
    demo: "https://example.com",
    repo: "https://github.com/raulcaminero/project-one",
  },
  {
    name: "Project Two — replace me",
    description: "One line: the problem this project solves.",
    details:
      "Two or three lines about the key technical decisions.",
    stack: ["React", "Node.js", "AWS"],
    demo: "https://example.com",
    repo: "https://github.com/raulcaminero/project-two",
  },
  {
    name: "This Portfolio",
    description: "Personal portfolio focused on performance — Lighthouse 95+.",
    details:
      "Next.js 14 (App Router), TypeScript, and Tailwind CSS. Statically generated, zero heavy dependencies, deployed on Vercel with CI from GitHub.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    repo: "https://github.com/raulcaminero/portfolio",
  },
];

export const experience = [
  {
    company: "Thryv",
    role: "Senior Full-Stack Software Engineer",
    period: "2025 – Present",
    summary:
      "NestJS/GraphQL APIs, React/Vue frontends, and RAG pipelines with pgvector and Anthropic Claude via AWS Bedrock. Cut API response times from 9s to 1s with caching, chunking, and pagination.",
  },
  {
    company: "Dynata",
    role: "Senior Full-Stack Software Engineer",
    period: "2023 – 2025",
    summary:
      "React/Angular frontends with PHP/Node.js services, search and real-time analytics on Elasticsearch, AWS infrastructure, and reusable component libraries adopted across product teams.",
  },
  {
    company: "eBay · via BairesDev",
    role: "Senior Full-Stack Software Engineer",
    period: "2022 – 2023",
    summary:
      "Full-stack features for one of the world's largest e-commerce platforms. 100% test coverage on critical modules, driving functional production bugs to near zero.",
  },
];

export const skills: Record<string, string[]> = {
  Backend: ["Node.js", "NestJS", "TypeScript", "GraphQL", "Golang", "PHP / Laravel", ".NET / C#"],
  AI: ["LangGraph", "AWS Bedrock", "Anthropic Claude", "RAG", "pgvector"],
  Cloud: ["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD"],
  Frontend: ["React", "Next.js", "Vue.js", "Angular"],
  Data: ["PostgreSQL", "Elasticsearch", "DynamoDB", "Redis", "MongoDB"],
};

export const contact = {
  email: "raulcaminerop@gmail.com",
  github: "https://github.com/raulcaminero",
  linkedin: "https://linkedin.com/in/raul-caminero",
  location: "Santo Domingo, DR · Remote",
};
