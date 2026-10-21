# CoVenture website

Single-page site built with React, Vite, Tailwind CSS and GSAP. The pinned toolchain supports Node.js 18.20.8.

## Run locally
    npm install
    npm run dev

## Publish on GitHub Pages
1. Push this folder to a GitHub repo on the `main` branch.
2. In the repo: Settings → Pages → Source: **GitHub Actions**.
3. Each push to `main` builds and deploys. Your site appears at `https://<user>.github.io/<repo>/`.

## Edit content
All copy lives at the top of `src/App.jsx`. Brand colors are in `src/index.css`. Replace the email in the Contact section.
