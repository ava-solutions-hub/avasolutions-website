# AVA Solutions — avasolutions.us

Production marketing site for **AVA Solutions LLC**, a woman-owned federal technology
consulting firm (cloud modernization, AI, data, program delivery).

Built with [Astro](https://astro.build) (static output) and Tailwind, deployed to
**Cloudflare Pages**.

## Stack

- Astro 5 (`output: 'static'`, no SSR)
- `@astrojs/tailwind` + Tailwind 3
- Vanilla CSS for brand-fidelity styling (see `src/styles/global.css`)
- TypeScript (strict) for content/data files

## Run locally

Requires Node 18.17+ (or 20+).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static build → ./dist
npm run preview    # preview the built site
```

## Project layout

```
public/                        Static assets served as-is at the site root
  AVA_Solutions_Capability_Statement.pdf
  ava-logo.png                 1254px source of truth for the sunburst mark
  ava-logo-512.png             hero / 2x nav / OG card
  ava-logo-128.png             1x nav
  apple-touch-icon.png         180px iOS home-screen icon
  favicon-32.png               browser favicon
  og-image.svg                 Open Graph social card (embeds ava-logo-512.png)
src/
  components/                  Astro components, one per section
  data/site.ts                 Single source of truth for content/brand tokens
  layouts/Layout.astro         <head>, fonts, OG/meta, shared scripts
  pages/index.astro            Composes the homepage
  styles/global.css            Brand CSS variables + section styles
astro.config.mjs
tailwind.config.mjs            Brand colors/fonts mirrored for utility use
```

### Editing content

All copy, NAICS codes, leadership bios, contact info, and brand strings live in
`src/data/site.ts`. Edit there, not in the components. The capability statement PDF
lives in `/public` and is referenced by the path in `site.capabilityStatementPath`.

## Deploy to Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages**
   → **Connect to Git** → pick this repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. After the first deploy, open the Pages project → **Custom domains** and add:
   - `avasolutions.us`
   - `www.avasolutions.us`

   Cloudflare auto-creates the site DNS records (A/AAAA/CNAME) on the
   `avasolutions.us` zone. It **does not** alter MX, SPF, DKIM, or DMARC records —
   Microsoft 365 email is untouched.

## Honest framing

The site intentionally avoids inventing UEI/CAGE numbers, client names, or metrics.
Federal-readiness panel shows **"Registration in progress"** for UEI/CAGE until
SAM.gov is complete. Leadership bios reference *combined experience* rather than
specific tenures.
