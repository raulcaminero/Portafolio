# Portfolio — Raúl Caminero

Personal portfolio. Next.js 14 (App Router) + TypeScript + Tailwind CSS. Single page, dark mode, statically generated.

## Edit your content

Everything lives in **`data/content.ts`** — hero, about, projects, experience, skills, contact.
The two personal projects are placeholders: replace name, description, stack, and links.

Your photo is at `public/profile.jpg` — replace it with any image (keep the filename).

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

## Fase 3 — Publish to GitHub + Vercel

1. Create an empty repo at https://github.com/new named **portfolio** (public, no README).
2. From this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/raulcaminero/portfolio.git
git push -u origin main
```

3. Go to https://vercel.com → Add New Project → Import `raulcaminero/portfolio` → Deploy (defaults are fine).
   Every future `git push` redeploys automatically.
4. Optional: buy `raulcaminero.dev` and add it in Vercel → Project → Settings → Domains.

## Fase 4 — After deploy

- Add the live URL to your resume header and LinkedIn (Contact info → Website, and Featured section).
- Check Lighthouse (Chrome DevTools → Lighthouse) — target 95+.
