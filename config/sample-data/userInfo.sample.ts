import type { LocalizedText } from "../i18n/dictionary";

export interface UserInfo {
  fullName: string;
  tagLine: LocalizedText;
  location: string;
  miniBio: LocalizedText;
  /** Shown in the top status bar — e.g. "Available for work". */
  availability?: LocalizedText;
  heroImage: {
    type: "url" | "file";
    url: string;
  };
}

export const UserInfoData: UserInfo = {
  fullName: "Your Name",
  tagLine: {
    en: "Software Engineer & Open Source Contributor",
    zh: "软件工程师 & 开源贡献者",
  },
  location: "Your City",
  miniBio: {
    en: "A short introduction that explains what you build and why it matters. Two or three sentences works best.",
    zh: "一段简短的自我介绍，说明你在做什么，以及为什么重要。两三句话就足够了。",
  },
  availability: {
    en: "Available for work",
    zh: "正在寻找工作机会",
  },
  heroImage: {
    type: "url",
    url: "/images/profile.png",
  },
};
