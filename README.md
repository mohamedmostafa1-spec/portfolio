# Mohamed Mostafa Farag — Personal Portfolio Website

A clean, modern, and high-performance single-page developer portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically for a Junior Frontend Developer seeking entry-level roles, featuring light/dark mode support, responsive mobile-first architecture, accessible semantic markup, and a dynamic project data architecture.

---

## 🚀 Live Demo / Local Preview

The development server is running locally:
- **Local URL:** [http://localhost:5173/](http://localhost:5173/)
- **Network URL:** Accessible across your local Wi-Fi / LAN

---

## ✨ Features

- **Sections in Strict Order:**
  1. **Hero**: Name, Title, one-line pitch, and quick CTAs ("View projects" and "Download CV").
  2. **About**: Computer Science background, graduation year (2025), location (Egypt), native Arabic & proficient English.
  3. **Skills**: Grouped into modern chip/badge cards by category (Frontend, Backend & APIs, Machine Learning, Other Languages, Soft Skills) — no generic percentage bars.
  4. **Projects**: Built from a centralized array (`src/data/portfolioData.js`) featuring the **Retinal Disease Detection Web Application** with an interactive CSS/SVG-based diagnostic visual placeholder (zero broken images or external link dependencies).
  5. **Education**: Bachelor of Computer Science, Arab Open University, Egypt (Graduated 2025).
  6. **Contact**: Direct email address (`mohamed2016mostafa@gmail.com`), one-click "Copy Email" feature with instant tooltip feedback, a native "Contact me" mailto button, and "Download CV" linking to `/cv.pdf`.
- **Light / Dark Mode:** Respects system preferences (`prefers-color-scheme`) and persists user selection in `localStorage`.
- **Keyboard & Screen-Reader Accessible:** Semantic HTML5 elements (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`), visible focus rings, and skip-to-content links.
- **Fast & Lightweight:** Zero heavy animation dependencies, pure Tailwind CSS transitions and smooth native scrolling.

---

## 📁 Project Structure

```text
mohamed-portfolio/
├── public/
│   ├── cv.pdf                   # Downloadable resume PDF
│   └── favicon.svg              # Custom developer code icon
├── src/
│   ├── components/
│   │   ├── About.jsx            # 01 / About Me narrative & quick overview
│   │   ├── Contact.jsx          # 05 / Contact box, mailto, copy button & CV
│   │   ├── Education.jsx        # 04 / Degree & university milestones
│   │   ├── Footer.jsx           # Minimal footer with back-to-top button
│   │   ├── Hero.jsx             # Hero introduction, headline & main CTAs
│   │   ├── Navbar.jsx           # Sticky glassmorphic navbar & theme toggle
│   │   ├── Projects.jsx         # 03 / Project cards mapped from data array
│   │   ├── ProjectVisualPlaceholder.jsx # CSS/SVG visual scan placeholder
│   │   └── Skills.jsx           # 02 / Grouped skills chips by domain
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all portfolio content
│   ├── hooks/
│   │   └── useDarkMode.js       # System preference & localStorage theme hook
│   ├── App.jsx                  # Main page assembler
│   ├── index.css                # Tailwind base directives & custom scrollbars
│   └── main.jsx                 # React root entry point
├── index.html                   # HTML template with SEO tags & Google Fonts
├── package.json                 # Dependencies and npm scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind configuration (colors & typography)
└── vite.config.js               # Vite bundler configuration
```

---

## 🛠️ How to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Steps
1. Open your terminal in the project directory:
   ```bash
   cd mohamed-portfolio
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser at:
   ```
   http://localhost:5173/
   ```

> **Note on opening `index.html` directly:**
> React and Vite use modern ES modules and JSX files (`.jsx`). If you double-click `index.html` directly from Windows File Explorer (`file:///.../index.html`), the browser cannot execute JSX or load local modules due to browser security restrictions (CORS). You must view it via `npm run dev` or a local server.

---

## 📦 How to Build for Production

To create an optimized, minified production build:
```bash
npm run build
```
The output files will be generated in the `dist/` directory. You can preview the production build locally with:
```bash
npm run preview
```

---

## 🌐 Free Deployment Guide

### Option 1: Deploy to Vercel (Recommended — Fastest)
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Mohamed Farag portfolio"
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and log in with your GitHub account.
3. Click **"Add New..."** -> **"Project"**.
4. Import your repository. Vercel automatically detects **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**. Your portfolio will be live with a free SSL `.vercel.app` domain in seconds!

---

### Option 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com/) and log in with GitHub.
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Select your GitHub repository.
4. Set the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**. Netlify will build and deploy your site with a free `.netlify.app` domain.

---

## ➕ How to Add More Projects in the Future

Open [portfolioData.js](src/data/portfolioData.js) and add a new object to the `projects` array:

```javascript
{
  id: "your-next-project-id",
  title: "Your Project Title",
  badge: "Featured / Personal Project",
  shortDescription: "A clear description of what the project does.",
  highlights: [
    "Key frontend implementation details...",
    "User experience or API integration highlight..."
  ],
  techStack: ["React", "Tailwind CSS", "JavaScript"],
}
```

The Projects section will automatically render the new project card!
