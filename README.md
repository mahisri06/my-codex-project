# Portfolio Website (JavaScript Version)

This is the same responsive portfolio project, now rendered from JavaScript (`app.js`) using a single data object.

## Customize with your details

Update the `portfolioData` object in `app.js`:

- `name`
- `role`
- `intro`
- `about`
- `experience`
- `projects`
- `skills`
- `email`

Optional: place your resume at `resume.pdf` in the project root so the download button works.

## Run locally

You have two easy options:

1. **Open directly**
   - Double-click `index.html` and it will open in your browser.

2. **Run a local server (recommended)**
   - From this project folder, run:

   ```bash
   python3 -m http.server 3000 --bind 0.0.0.0
   ```

   - Then open: `http://localhost:3000`
   - Stop the server with `Ctrl + C`.

## Deploy

Because this is a static site, you can deploy it quickly to GitHub Pages, Netlify, or Vercel.
# Mahi Srivastava - QA Engineer Portfolio

A modern, production-ready personal portfolio built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**. The UI is dark-first, mobile-first, and focused on revenue-critical QA ownership for restaurant SaaS systems.

## Tech Stack

- React 18 (Vite)
- Tailwind CSS
- Framer Motion
- React Icons

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

## Deployment (Vercel)

1. Push repository to GitHub.
2. Import project in Vercel.
3. Keep defaults:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

## Folder Structure

```txt
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Expertise.jsx
    Projects.jsx
    Philosophy.jsx
    Metrics.jsx
    RiskSimulator.jsx
    Lifecycle.jsx
    Tools.jsx
    Contact.jsx
    Footer.jsx
  data/
    content.js
  App.jsx
  index.css
  main.jsx
```

## Notes

- Place a real resume PDF at `public/assets/mahi-srivastava-resume.pdf`.
- Contact form currently validates client-side and is ready to connect to an API endpoint.
