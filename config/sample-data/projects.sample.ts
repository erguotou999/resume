import type { Project } from "../types";

export type { Project } from "../types";

export const UserProjectsData: Project[] = [
  {
    title: "Your First Project",
    role: {
      en: "Creator and Maintainer",
      zh: "创建者与维护者",
    },
    description: {
      en: "Describe what the project does, who it is for and what makes it worth opening. One or two sentences is plenty — the details can live on the project's own page.",
      zh: "描述这个项目是做什么的、为谁而做，以及为什么值得点进去。一两句话就够了，细节可以放在项目自己的页面上。",
    },
    url: "https://github.com/yourusername/your-project",
    previewImage: "/images/Project/p1.jpg",
    tags: ["CLI", "Open Source"],
    year: "2024",
    featured: true,
    imageAlt: "Screenshot of your project",
  },
  {
    title: "Another Project",
    role: {
      en: "Lead Developer",
      zh: "开发负责人",
    },
    description: {
      en: "A second entry, so the featured strip and the projects grid have something to show. Projects marked `featured` appear in the highlighted strip at the top of the page.",
      zh: "第二条项目记录，这样焦点区和项目网格都有内容。标记为 `featured` 的项目会出现在页面顶部的焦点区。",
    },
    url: "https://github.com/yourusername/another-project",
    previewImage: "/images/Project/p2.jpg",
    tags: ["TypeScript", "React"],
    year: "2023",
    featured: true,
    imageAlt: "Screenshot of another project",
  },
];
