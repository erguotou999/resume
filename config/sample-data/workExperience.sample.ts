import type { IWorkExperience } from "../types";

export type { IWorkExperience } from "../types";

export const UserWorkExperienceData: IWorkExperience[] = [
  {
    company: "Your Company",
    companyUrl: "https://example.com",
    position: "Senior Software Engineer",
    period: "Jan 2022 – Present",
    type: "full-time",
    current: true,
    shortDescription: {
      en: "A one-line summary of your role",
      zh: "用一句话概括你的职责",
    },
    responsibilities: [
      {
        en: "Describe an outcome you are proud of, ideally with a number",
        zh: "描述一个你引以为傲的成果，最好带上数字",
      },
      {
        en: "Describe a technical decision you owned",
        zh: "描述一个由你主导的技术决策",
      },
    ],
  },
  {
    company: "Your Previous Company",
    position: "Backend Developer",
    period: "Mar 2020 – Dec 2021",
    type: "full-time",
    shortDescription: {
      en: "A one-line summary of your role",
      zh: "用一句话概括你的职责",
    },
    responsibilities: [
      {
        en: "Describe an outcome you are proud of, ideally with a number",
        zh: "描述一个你引以为傲的成果，最好带上数字",
      },
    ],
  },
];
