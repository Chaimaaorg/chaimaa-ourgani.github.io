# Data Scientist Portfolio ⚡️

[![GitHub License](https://img.shields.io/github/license/saadpasta/developer-portfolio?color=blue)](https://github.com/saadpasta/developerFolio/blob/master/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/saadpasta/developerFolio)](https://github.com/saadpasta/developerFolio/stargazers)
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

## A Responsive, Customizable Portfolio for Data Scientists & Engineers 🚀

This project is based on the amazing open source work of [@saadpasta](https://github.com/saadpasta) and contributors from the [developerFolio](https://github.com/saadpasta/developerFolio) repository. As a data scientist with a software development and big data engineering background, I sincerely thank the team for their outstanding work. Having such a clean and extensible template greatly simplified my portfolio development process, allowing me to focus more on presenting my career and less on building UI from scratch.

---

### 💻 Features

This portfolio template supports multiple sections, including:

✔️ Summary & About Me
✔️ Skills & Tech Stack
✔️ Education
✔️ Work Experience
✔️ Open Source Contributions (via GitHub)
✔️ Big Data Projects
✔️ Certifications & Achievements 🏆
✔️ Contact Info
✔️ Twitter Timeline
✔️ GitHub Profile

To view the live version of my portfolio, [**click here**](https://chaimaaorg.github.io/portfolio/)

---

## 🚀 Getting Started

You’ll need the following installed:

* [Node.js](https://nodejs.org/) (v10.16.0 or higher)
* [npm](https://www.npmjs.com/) (v6.9.0 or higher)
* [Git](https://git-scm.com/)
* Or use [Docker](https://www.docker.com/products/docker-desktop)

Clone the repository and run:

```bash
git clone https://github.com/Chaimaaorg/portfolio
cd developerFolio
cp env.example .env
npm install
npm start
```

---

### 🐳 Docker Setup

```bash
docker build -t developerfolio:latest .
docker run -t -p 3000:3000 developerfolio:latest
```

---

## ⚙️ Personalization & Configuration

Customize everything in `src/portfolio.js`. This is where you update all portfolio content — from your intro to your experience, projects, and more.

Key files to update:

* `src/portfolio.js`: Your content
* `src/_globalColor.scss`: Your theme
* `src/assets/lottie`: For Lottie animations (JSON)
* `src/index.html`: SEO meta and page title

---

### 🧠 Environment Variables

To enable GitHub integration:

```env
REACT_APP_GITHUB_TOKEN = "your_github_token"
GITHUB_USERNAME = "your_username"
USE_GITHUB_DATA = "true"
```

(Optional) For Medium blog integration:

```env
MEDIUM_USERNAME = "your_medium_username"
```

---

## ✏️ Deployment Guide

You can host your portfolio using GitHub Pages or another service of your choice.

For GitHub Pages:

* Set the `homepage` field in `package.json` to:
  `https://<your-github-username>.github.io/<repository-name>`
* Use GitHub Actions for CI/CD (recommended). [Setup instructions](https://docs.github.com/en/actions)

---

## 🛠 Technologies Used

* React.js ⚛️
* SCSS for styling 🎨
* GitHub API for open-source projects 📦
* Medium API for blog integration 📰
* Docker 🐳 (Optional)
* Lottie Animations 🕹️

---

## 🙏 Acknowledgements

A heartfelt thank you to the [developerFolio](https://github.com/saadpasta/developerFolio) team for providing such an exceptional starting point. Their work made it possible for developers and data scientists like me to present our work beautifully without building everything from scratch.

---

## 📜 License

This project is licensed under the [MIT License](https://github.com/saadpasta/developerFolio/blob/master/LICENSE).

---

## 📬 Contact

Want to connect?

* GitHub: [github.com/chaimaaorg](https://github.com/chaimaaorg)
* LinkedIn: [linkedin.com/in/chaimaâ-ourgani-65a422273/](https://linkedin.com/in/chaimaâ-ourgani-65a422273/)
* Email: [chaimaa_ourgani@outlook.com](mailto:chaimaa_ourgani@outlook.com)
