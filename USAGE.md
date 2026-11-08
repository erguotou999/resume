# 📚 Portify Usage Guide

Welcome to Portify! This guide will help you create and customize your professional developer portfolio.

## Table of Contents

- [Quick Start](#-quick-start)
- [Templates](#-templates)
- [Configuration](#-configuration)
- [Bilingual Content](#-bilingual-content)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [FAQ](#-faq)

## 🚀 Quick Start

### 1. Setup (2 minutes)

```bash
# Clone and install
git clone https://github.com/IDAN-DEVS/portify.git
cd portify
npm install   # or: yarn install

# Start development
npm run dev   # or: yarn dev
```

### 2. Choose a Template

1. Visit `http://localhost:3000/demo?template=base`
2. Browse the available templates:
   - **Base Template**: Editorial, museum-inspired — oversized serif headlines, featured strip, curatorial cards
   - **Shadow Template**: Minimal and monospaced, with a vertical side navigation
3. Use the "Use Template" button in the demo banner when you've found your match

### 3. Configure Your Portfolio

All configuration lives in `config/user-data/`. These files are TypeScript modules — edit them directly.

```
📁 config/user-data/
- userInfo.ts       - Your name, title, location and bio
- projects.ts       - Your projects
- workExperience.ts - Your work history
- skills.ts         - Your technical skills
- socials.ts        - Your social media links
- resume.ts         - The data behind the /resume CV page
```

#### Examples

**👤 Personal Info** (`userInfo.ts`):

```typescript
export const UserInfoData: UserInfo = {
  fullName: "Jane Doe",
  tagLine: { en: "Full Stack Developer", zh: "全栈开发者" },
  location: "San Francisco, CA",
  miniBio: {
    en: "Passionate about creating beautiful web experiences",
    zh: "热衷于打造优美的网页体验",
  },
  availability: { en: "Available for work", zh: "正在寻找工作机会" },
  heroImage: {
    type: "url",
    url: "/images/profile.png", // Add image to public/images/
  },
};
```

**🔗 Social Links** (`socials.ts`):

```typescript
export const UserSocialsData: Record<string, Social> = {
  github: { icon: Github, url: "https://github.com/yourusername" },
  linkedin: { icon: Linkedin, url: "https://linkedin.com/in/yourusername" },
  twitter: { icon: TwitterIcon, url: "https://twitter.com/yourusername" },
  email: { icon: Mail, url: "you@example.com" },
};
```

**💼 Work Experience** (`workExperience.ts`):

```typescript
export const UserWorkExperienceData: IWorkExperience[] = [
  {
    company: "Tech Company",
    position: "Senior Developer",
    period: "2022 - Present",
    type: "full-time", // full-time | contract | freelance | open-source
    current: true,
    responsibilities: [
      { en: "Led development of key features", zh: "主导关键功能开发" },
    ],
  },
];
```

**🛠️ Projects** (`projects.ts`):

```typescript
export const UserProjectsData: Project[] = [
  {
    title: "Project Name",
    role: { en: "Creator", zh: "创建者" },
    description: { en: "A brief description", zh: "一段简短的描述" },
    url: "https://github.com/you/project",
    previewImage: "/images/Project/p1.jpg",
    tags: ["CLI", "Open Source"], // rendered as eyebrow chips
    year: "2024",
    featured: true, // promotes the project into the "In focus" strip
    imageAlt: "Project screenshot",
  },
];
```

**💡 Skills** (`skills.ts`):

```typescript
export const UserSkillsData: Skill[] = [
  {
    name: "Backend Development",
    group: "Core", // cards are grouped by this label
    description: { en: "Scalable backend architecture.", zh: "可扩展的后端架构。" },
    projects_completed: "30+",
    level: 5, // optional 1–5 proficiency indicator
  },
];
```

### 4. Select Your Template

In `config/app-data/appSetting.ts`:

```typescript
export const AppSettingData = {
  template: AVAILABLE_TEMPLATES.BASE, // or AVAILABLE_TEMPLATES.SHADOW
}
```

## 🌍 Bilingual Content

Every field typed as `Localized` accepts **either** a plain string **or** a `{ en, zh }` pair:

```typescript
// ✅ Plain string — fine for proper nouns and tech names
title: "StartEase"

// ✅ Localized pair — use for prose
description: {
  en: "A command-line interface for scaffolding projects.",
  zh: "一个用于搭建项目的命令行工具。",
}
```

UI copy (nav labels, section headings, buttons) lives in `config/i18n/dictionary.ts`. Add a new key there and it appears in both languages.

The active locale is stored in `localStorage` under `portfolio-locale`, and `<html lang>` is updated on every change.

## 🎨 Customization

### Images

1. Add your images to `public/images/`
2. Reference them as `/images/your-image.png`

### Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#your-color",
    },
  },
}
```

### Typography

The base template uses two font stacks:

- `font-sans` — Poppins (bundled in `public/fonts/`)
- `font-serif` — a Georgia/Times system stack, used for oversized display headings

### Show / hide sections

Toggle sections in `config/app-data/templates/base.ts`:

```typescript
features: {
  [FeaturesEnum.SOCIALS_SECTION]: true,
  [FeaturesEnum.SKILLS_SECTION]: true,
  [FeaturesEnum.PROJECTS_SECTION]: true,
  [FeaturesEnum.WORK_EXPERIENCE_SECTION]: true,
  [FeaturesEnum.FEATURED_SECTION]: true,
  [FeaturesEnum.CONTACT_SECTION]: true,
},
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Optionally set `NEXT_PUBLIC_SITE_URL` so Open Graph images resolve to your domain.

## ❓ FAQ

### How do I switch templates?

Update `template` in `config/app-data/appSetting.ts`, then preview at `/demo?template=base` or `/demo?template=shadow`.

### Can I customize the template design?

Yes! Each template uses Tailwind CSS for styling. You can:

1. Modify colors in `tailwind.config.ts`
2. Edit component styles in `components/BaseTemplate/` (or `components/ShadowTemplate/`)
3. Add new CSS classes as needed

### How do I add my own template?

See our [Contributing Guide](CONTRIBUTING.md) for instructions on creating and submitting new templates.

---

Happy coding! 🎉
