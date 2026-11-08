# Portify 🚀 - Your Developer Portfolio in Minutes

<div align="center">
  <img src="public/images/portify_logo.png" alt="Portify Logo" width="200" height="auto"/>
  
  <p align="center">
    <strong>Create a stunning developer portfolio without writing a single line of code.</strong>
  </p>

  <p align="center">
    <a href="/demo?template=base">Live Demo</a>
    ·
    <a href="#-features">Features</a>
    ·
    <a href="USAGE.md">Documentation</a>
    ·
    <a href="CONTRIBUTING.md">Contributing</a>
    ·
    <a href="#-deploy">Deploy</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/github/stars/IDAN-DEVS/portify?style=social" alt="GitHub stars"/>
    <img src="https://img.shields.io/github/forks/IDAN-DEVS/portify?style=social" alt="GitHub forks"/>
    <img src="https://img.shields.io/github/issues/IDAN-DEVS/portify" alt="GitHub issues"/>
  </p>
</div>

## 🎯 Overview

Portify is a modern, customizable portfolio generator built with Next.js 14. It allows developers to create professional portfolios by simply updating configuration files - no coding required! Perfect for developers who want to showcase their work without spending time on portfolio development.

## ✨ Features

- 🎨 **Multiple Templates** - Choose from professionally designed templates
- 🎯 **Zero Code Required** - Just update config files
- ⚡ **Lightning Fast** - Built with Next.js 14
- 🌍 **Bilingual (EN / 中文)** - Built-in language switcher with translated UI copy *and* content
- 📱 **Mobile First** - Looks great on all devices
- 🔍 **SEO Ready** - Dynamic metadata, Open Graph and Twitter cards
- 📊 **Analytics Ready** - Easy integration with your preferred analytics
- 🚀 **One-Click Deploy** - Deploy to Vercel instantly
- 🎉 **Live Preview** - Try templates before you choose

## 🎮 Templates & Demo

- **Base Template** - Editorial, museum-inspired layout with oversized serif headlines, a featured "In focus" strip and curatorial project cards.
- **Shadow Template** - Minimal and monospaced, with a vertical side navigation.

Try them live:

1. Visit `/demo?template=base` or `/demo?template=shadow`
2. Use the "Use Template" button in the demo banner to get started

## 🚀 Quick Start

1. **Clone & Install**

```bash
git clone https://github.com/IDAN-DEVS/portify.git
cd portify && npm install
```

2. **Initialize Configuration**

```bash
npm run init-config
```

This will create your personal configuration files in the `config/user-data` directory based on the sample templates.

3. **Configure Your Portfolio**

Update the configuration files in `config/user-data`:

- `userInfo.ts` - Your personal information and bio
- `projects.ts` - Your projects and portfolio items
- `workExperience.ts` - Your work history
- `skills.ts` - Your technical skills and expertise
- `socials.ts` - Your social media links
- `resume.ts` - The data behind the `/resume` CV page

See the [Configuration Guide](USAGE.md) for detailed examples of each file format.

4. **Start Development**

```bash
npm run dev
# or
yarn dev
```

5. **Choose Your Template**

In `config/app-data/appSetting.ts`:

```typescript
export const AppSettingData = {
  template: AVAILABLE_TEMPLATES.BASE, // or AVAILABLE_TEMPLATES.SHADOW
}
```

## 🌍 Bilingual Support

Every user-facing string — navigation, section headings, button labels — lives in `config/i18n/dictionary.ts` with `en` and `zh` entries.

Content fields (project descriptions, responsibilities, bios) accept either a plain string or a `{ en, zh }` pair:

```typescript
// config/user-data/projects.ts
{
  title: "StartEase",
  role: { en: "Creator and Maintainer", zh: "创建者与维护者" },
  description: {
    en: "A command-line interface that scaffolds projects in one command.",
    zh: "一个用一条命令搭建项目的命令行工具。",
  },
}
```

The active language is persisted to `localStorage`, and `<html lang>` is kept in sync for accessibility and SEO.

## 🚀 Deploy

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/IDAN-DEVS/portify)

## 📚 Documentation

For detailed instructions and examples, check out our [Usage Guide](USAGE.md).

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md) for details.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 💖 Credits

Created with ❤️ by [JC CODER](https://github.com/JC-Coder) and [IDAN DEVS](https://github.com/IDAN-DEVS)

Templates designed by:

- Base Template: [JC CODER](https://github.com/JC-Coder) — design inspired by the [British Museum](https://www.britishmuseum.org) & the [Louvre](https://www.louvre.fr)
- Shadow Template: [Bright Bassey](https://github.com/bright-bassey)
