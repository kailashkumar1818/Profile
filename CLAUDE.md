# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Single-page personal portfolio site (React 18 + Vite + Tailwind CSS 3, lucide-react icons). Dark theme by default with a persistent light theme. Despite the folder name, this is a portfolio, not a student management app.

## Commands

```bash
npm install      # set up dependencies
npm run dev      # dev server (usually http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

There is no lint, test, or typecheck setup — the project has no tests and no linter configured. Do not invent commands; `package.json` only defines `dev`, `build`, and `preview`.

## Architecture

**Content is data-driven.** All site content (name, sections, projects, skills, etc.) lives in `src/data.js`, which exports a `config` object (links) and a `data` object (page content). Components read from these exports — to change portfolio content, edit `src/data.js`, not the components. Any empty string in `config` automatically hides the corresponding button/icon (social links, resume button, per-project GitHub links via `projectGithub.<key>` matched to a project's `githubKey`).

**Page structure.** `src/App.jsx` renders sections in a fixed order: Hero → About → Skills → Experience → Projects → Achievements → Education → Contact, plus Navbar and Footer. Each section is a component in `src/components/`.

**Theming.** Tailwind uses `darkMode: "class"`. Colors are semantic tokens (`canvas`, `surface`, `ink`, `accent`, etc.) backed by CSS variables defined in `src/index.css` — do not use raw Tailwind palette colors; use the semantic tokens so both themes work. Theme state is managed by the `useTheme` hook (persists in `localStorage`, dark default).

**Accessibility & motion** (project conventions worth preserving):
- Scroll reveals (`Reveal.jsx`), typing animation (`TypedText.jsx`), and float effects must respect `prefers-reduced-motion` (see `useReducedMotion.js`).
- Keep semantic landmarks, the skip link in `App.jsx`, visible form labels with inline validation, and `aria-current` on the active nav section (`useActiveSection.js`).

**Contact form** is front-end only — it validates and shows a success state but sends nothing anywhere. If asked to wire it up, the README recommends a static-friendly service (Formspree/Getform) via a `fetch()` in `src/components/Contact.jsx`.

## Deployment constraints

- `vite.config.js` sets `base: "./"` so the build works both on Vercel (domain root) and GitHub Pages (repo sub-path). Keep asset and resume references relative (no leading `/`).
- `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on push to `main`.
- Résumé PDF goes in `public/`; `resumePdf` in `src/data.js` must be a relative filename.
- Open Graph metadata lives in `index.html`; `public/og-image.png` is the 1200×630 social preview.
