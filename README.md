# Kailash Kumar — Portfolio

A single-page personal portfolio for **Kailash Kumar**, a Computer Science student focused on full-stack web development and problem solving.

Built with React, Vite, Tailwind CSS, and lucide-react. Dark theme by default, with a persistent light theme, scroll-reveal animations, a mobile navigation menu, and a validated contact form.

---

## Tech stack

- React 18 + Vite
- Tailwind CSS 3
- lucide-react icons
- Google Fonts: Inter + Space Grotesk

## Run locally

```bash
npm install
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`).

Create a production build and preview it:

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

---

## What to edit

**Everything lives in [`src/data.js`](src/data.js).**

### 1. Add your links

Open `src/data.js` and fill in the `config` object at the top:

```js
export const config = {
  github: "",
  linkedin: "",
  email: "",
  website: "",
  resumePdf: "",
  projectGithub: {
    smartParking: "",
    moveApp: "",
    hostelManagement: "",
  },
};
```

Any empty value is hidden automatically:

- `github`, `linkedin`, `email`, `website` control the hero/footer social icons and the contact link cards.
- `resumePdf` controls the **Download Resume** button.
- `projectGithub.*` controls the GitHub buttons on each project card.

Use full URLs for social links, for example `https://github.com/your-username`. For `email`, enter only the address; the app adds `mailto:`.

### 2. Add your résumé

1. Put your PDF inside the `public/` folder, e.g. `public/Kailash-Kumar-Resume.pdf`.
2. Set `resumePdf: "Kailash-Kumar-Resume.pdf"` in `src/data.js`.

Use a relative filename (not a leading `/`) so it also works on GitHub Pages.

### 3. Update the Open Graph image (optional but recommended)

`public/og-image.png` is a generated 1200×630 social preview. Replace it with your own image while keeping the same filename and dimensions.

### 4. Update the page metadata

Edit the title, description, and social tags in `index.html`.

After deployment, replace the relative `og:image` path with your full live URL for the most reliable previews on social platforms, e.g.:

```html
<meta property="og:image" content="https://your-domain.com/og-image.png" />
```

---

## Contact form

The form is **front-end only**, as requested. It validates name, email, and message in the browser and shows a success state, but it does not send data anywhere.

To receive messages, connect the form to a static-friendly service such as [Formspree](https://formspree.io/), [Getform](https://getform.io/), or a serverless function. Replace the successful-submit branch in `src/components/Contact.jsx` with a `fetch()` call to your form endpoint, then update the form note in `src/data.js`.

---

## Folder structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD
├── public/
│   ├── apple-touch-icon.png    # Home-screen icon
│   ├── favicon.svg             # Browser favicon
│   ├── og-image.png            # 1200×630 social preview
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Icon.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Reveal.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── Skills.jsx
│   │   ├── SocialLinks.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── TypedText.jsx
│   ├── hooks/
│   │   ├── useActiveSection.js
│   │   ├── useReducedMotion.js
│   │   └── useTheme.js
│   ├── App.jsx
│   ├── data.js                 # ← all content + config
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Deploy for free

### Vercel (recommended)

**Option A — Dashboard (no CLI):**

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project**, then import the repository.
4. Vercel detects Vite automatically. Confirm:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Click **Deploy**. Every push to the production branch redeploys automatically.
6. Optionally add a custom domain under **Project → Settings → Domains**.

**Option B — CLI:**

```bash
npm install -g vercel
vercel
vercel --prod
```

### GitHub Pages

The included workflow at `.github/workflows/deploy.yml` builds and deploys automatically.

1. Create a GitHub repository and push the project to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to finish.
5. Your site is available at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

The Vite config already uses `base: "./"`, so assets work correctly from a repository sub-path without any changes. The résumé is also linked relatively for the same reason.

> If you later point a custom domain at GitHub Pages, add the domain in **Settings → Pages → Custom domain** and update the `og:image` URL in `index.html` to the absolute domain.

---

## Accessibility & motion

- Semantic landmarks, section labels, and a skip link.
- Keyboard-friendly navigation, mobile menu, form, and focus states.
- Visible labels and inline validation messages on every form field.
- `aria-current` marks the active navigation section.
- Scroll reveals, typing animation, and float effects respect `prefers-reduced-motion`.
- Theme choice persists in `localStorage`; dark is the default.
