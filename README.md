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
