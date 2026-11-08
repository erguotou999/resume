# 🤝 Contributing to Portify

First off, thanks for taking the time to contribute! 🎉

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs 🐛

- Check if the bug has already been reported
- Open a new issue with a clear title and description
- Include steps to reproduce
- Add relevant labels

### Suggesting Enhancements 💡

- Check existing suggestions
- Open a new issue describing your enhancement
- Explain why this enhancement would be useful
- Add the 'enhancement' label

### Code Contributions 💻

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

### Adding Templates 🎨

1. Create a new folder in `templates/`
2. Add to `data/templates/config.ts`
3. Include preview image
4. Update documentation

### Showcasing Your Portfolio 🌟

Built something with Portify? Add it to our showcase:

1. Fork the repository
2. Add your portfolio to README.md
3. Submit a pull request

## Development Process

### Setting Up Development Environment

```bash
git clone https://github.com/IDAN-DEVS/portify.git
cd portify
npm install
npm run init-config
```

### Project Structure

The configuration system is organized as follows:

```
config/
├── sample-data/     # Template configuration files
│   ├── personal.json.sample
│   ├── projects.json.sample
│   ├── experience.json.sample
│   ├── skills.json.sample
│   └── socials.json.sample
└── user-data/       # User's actual configuration (git-ignored)
    ├── personal.json
    ├── projects.json
    ├── experience.json
    ├── skills.json
    └── socials.json
```

### Contributing to Sample Data

When making changes to the sample configuration:

1. Only modify files in `config/sample-data/`
2. Ensure all sample files have the `.sample` extension
3. Update all relevant documentation
4. Test the initialization script (`npm run init-config`)

### Sample Data Guidelines

- Keep sample data professional and realistic
- Include helpful comments explaining each field
- Maintain consistent formatting
- Test with all available templates

### Pull Request Process

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

### Style Guidelines

This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

### Community

Join our community on [Discord](https://discord.gg/your-discord-invite-link) to discuss ideas, ask questions, and share your work.
