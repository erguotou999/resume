/**
 * Bilingual copy for the portfolio.
 *
 * Content that lives in `config/user-data` uses the `LocalizedText` shape
 * (`{ en, zh }`) so project / experience blurbs can be translated too.
 * UI chrome (nav labels, section headings, button text) lives here.
 */

export type Locale = "en" | "zh";

export interface LocalizedText {
  en: string;
  zh: string;
}

/** Resolves a `LocalizedText` (or a plain string) against the active locale. */
export function resolve(value: LocalizedText | string, locale: Locale): string {
  if (typeof value === "string") return value;
  return value[locale] ?? value.en;
}

export interface Dictionary {
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    resume: string;
    menu: string;
    close: string;
    language: string;
  };
  status: {
    available: string;
    openToWork: string;
    location: string;
  };
  hero: {
    eyebrow: string;
    greeting: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
  };
  featured: {
    title: string;
    subtitle: string;
    viewAll: string;
    openLabel: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    viewAll: string;
    empty: string;
  };
  experience: {
    title: string;
    subtitle: string;
    responsibilities: string;
    current: string;
  };
  skills: {
    title: string;
    subtitle: string;
    projectsSuffix: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    emailCta: string;
    downloadResume: string;
    socialsTitle: string;
  };
  footer: {
    explore: string;
    connect: string;
    legal: string;
    builtWith: string;
    createYourOwn: string;
    templateCredit: string;
    backToTop: string;
  };
}

export const en: Dictionary = {
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    resume: "Résumé",
    menu: "Menu",
    close: "Close",
    language: "Language",
  },
  status: {
    available: "Available for work",
    openToWork: "Open to new opportunities",
    location: "Based in",
  },
  hero: {
    eyebrow: "Software Engineer & Open Source Contributor",
    greeting: "Hello, my name is",
    title: "I build the quiet infrastructure behind loud products.",
    subtitle:
      "Three years of server-side engineering — APIs, microservices and the unglamorous plumbing that keeps them fast, secure and boring in the best way.",
    ctaPrimary: "View my work",
    ctaSecondary: "Download résumé",
    scrollHint: "Scroll",
  },
  featured: {
    title: "In focus",
    subtitle: "Currently the work I'd talk about first.",
    viewAll: "All projects",
    openLabel: "Open",
  },
  projects: {
    title: "Selected work",
    subtitle:
      "A curation of tools, libraries and products built over the last few years.",
    viewProject: "View project",
    viewAll: "View all projects",
    empty: "No projects to display yet.",
  },
  experience: {
    title: "Experience",
    subtitle: "Where I've worked and what I was trusted with.",
    responsibilities: "What I did",
    current: "Present",
  },
  skills: {
    title: "Capabilities",
    subtitle: "The tools I reach for, and how often I've shipped with them.",
    projectsSuffix: "projects",
  },
  contact: {
    title: "Let's build something",
    subtitle:
      "Open to backend, platform and full-stack roles — and to collaborations on open source.",
    emailLabel: "Email",
    emailCta: "Write to me",
    downloadResume: "Download résumé",
    socialsTitle: "Elsewhere",
  },
  footer: {
    explore: "Explore",
    connect: "Connect",
    legal: "Legal",
    builtWith: "This portfolio was built with",
    createYourOwn: "Create your own portfolio",
    templateCredit: "Design inspired by the British Museum & the Louvre",
    backToTop: "Back to top",
  },
};

export const zh: Dictionary = {
  nav: {
    about: "关于",
    experience: "经历",
    skills: "技能",
    projects: "项目",
    contact: "联系",
    resume: "简历",
    menu: "菜单",
    close: "关闭",
    language: "语言",
  },
  status: {
    available: "正在寻找工作机会",
    openToWork: "接受新的合作",
    location: "所在地",
  },
  hero: {
    eyebrow: "软件工程师 & 开源贡献者",
    greeting: "你好，我是",
    title: "我构建那些喧闹产品背后的安静基础设施。",
    subtitle:
      "三年服务端工程经验 —— API、微服务，以及让它们保持快速、安全、可靠的那些不显眼的管道。",
    ctaPrimary: "查看我的作品",
    ctaSecondary: "下载简历",
    scrollHint: "向下滚动",
  },
  featured: {
    title: "焦点",
    subtitle: "我会第一个拿来聊的作品。",
    viewAll: "全部项目",
    openLabel: "打开",
  },
  projects: {
    title: "精选作品",
    subtitle: "过去几年里打造的工具、库与产品。",
    viewProject: "查看项目",
    viewAll: "查看全部项目",
    empty: "暂无项目。",
  },
  experience: {
    title: "工作经历",
    subtitle: "我去过哪里，以及团队把什么事情托付给我。",
    responsibilities: "工作内容",
    current: "至今",
  },
  skills: {
    title: "能力",
    subtitle: "我常用的工具，以及我用它们交付过多少东西。",
    projectsSuffix: "个项目",
  },
  contact: {
    title: "一起做点什么",
    subtitle: "后端、平台与全栈岗位，以及开源项目上的合作，都欢迎。",
    emailLabel: "邮箱",
    emailCta: "给我写信",
    downloadResume: "下载简历",
    socialsTitle: "在别处",
  },
  footer: {
    explore: "浏览",
    connect: "联系",
    legal: "法律",
    builtWith: "本作品集基于",
    createYourOwn: "创建你自己的作品集",
    templateCredit: "设计灵感来自大英博物馆与卢浮宫",
    backToTop: "回到顶部",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, zh };
