import type { Skill } from "../types";

export type { Skill } from "../types";

export const UserSkillsData: Skill[] = [
  {
    name: "Backend Development",
    group: "Core",
    description: {
      en: "Complex, scalable backend architecture — APIs, microservices and event-driven systems.",
      zh: "复杂且可扩展的后端架构 —— API、微服务以及事件驱动的系统设计。",
    },
    projects_completed: "30+",
    level: 5,
  },
  {
    name: "Frontend Development",
    group: "Core",
    description: {
      en: "Interfaces that stay fast and accessible, built with React, Next.js and Tailwind.",
      zh: "又快又无障碍的界面，使用 React、Next.js 与 Tailwind 构建。",
    },
    projects_completed: "10+",
    level: 4,
  },
  {
    name: "DevOps",
    group: "Infrastructure",
    description: {
      en: "CI/CD pipelines, containerisation and servers that behave the same at 3am.",
      zh: "CI/CD 流水线、容器化，以及在凌晨三点也表现如常的服务器。",
    },
    projects_completed: "12+",
    level: 4,
  },
];
