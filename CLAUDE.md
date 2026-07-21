# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for AVA Solutions LLC — a woman-owned federal technology consulting firm. Static Astro build deployed to Cloudflare Pages at `avasolutions.us`.

## Commands

```bash
npm install        # install deps (Node 18.17+ or 20+)
npm run dev        # local dev server (http://localhost:4321)
npm run build      # static build → ./dist
npm run preview    # preview the built site
```

There are no tests, no linter, and no type-check script — `astro build` runs TypeScript checking on `.astro` files as part of the build.

## Architecture

- **Single page (`src/pages/index.astro`)** that composes one component per section: `Nav`, `Hero`, `Overview`, `Capabilities`, `WhyAva`, `Leadership`, `FederalReadiness`, `Contact`, `Footer`. All wrapped in `Layout.astro`, which owns `<head>`, fonts, Open Graph tags, and the shared client-side scripts (nav scroll state, mobile menu toggle, IntersectionObserver scroll-reveal).
- **Content is centralized in `src/data/site.ts`** — capabilities, leadership bios, NAICS codes, contact email, the capability-statement PDF path, the federal-readiness panel values. Edit content there, not in components.
- **Tailwind is integrated but used sparingly.** Visual fidelity to the original single-file design lives in `src/styles/global.css` (CSS variables for the navy/gold palette + section-scoped styles). The same brand tokens are mirrored in `tailwind.config.mjs` so utility classes can be added without divergence. `applyBaseStyles: false` is set — global.css owns the reset.
- **Sunburst logo** is a PNG (`public/ava-logo.png`, 1254px) served in responsive sizes: `ava-logo-128.png` (1x nav), `ava-logo-512.png` (2x nav + OG card), `apple-touch-icon.png` (iOS), `favicon-32.png` (browser tab). `SunMark.astro` renders the `<img>` with srcset. The OG card (`public/og-image.svg`) embeds the 512px variant via `<image href>`.
- **Capability statement PDF** lives in `/public` and is referenced by `site.capabilityStatementPath`. Replacing the file in `/public` is all that's needed to ship a new version.

## Content / honesty rules

These are explicit positioning choices — do not change without asking:

- Leadership bios say "combined experience"; do not invent specific tenures, employers, or client names.
- Federal-readiness panel shows **"Registration in progress"** for UEI/CAGE. Do not fabricate UEI, CAGE, or DUNS numbers. Update only when real values arrive from SAM.gov.
- Do not add client logos, case studies, or metrics until there are real ones to cite.
- The hero has a **static** gold corner glow (`.sun-glow`). Do not add a rotating/animated logo — that was intentionally removed.

## DNS / email constraint

The domain `avasolutions.us` is on Cloudflare. **Email runs on Microsoft 365.** Any change to the site deployment must not touch MX, SPF, DKIM, or DMARC records. Cloudflare Pages custom-domain setup only writes A/AAAA/CNAME for the site itself, which is safe — but never add tooling, scripts, or instructions that modify mail-related DNS.

## Deployment

Cloudflare Pages, framework preset = Astro, build command = `npm run build`, output dir = `dist`. Custom domains `avasolutions.us` and `www.avasolutions.us` are added in the Pages project UI after first deploy.

## Accessibility floor

Preserve when editing: semantic landmarks (`<header>`, `<main>`, `<nav aria-label>`, `<section aria-labelledby>`, `<footer>`), visible `:focus-visible` ring, `prefers-reduced-motion` short-circuits both CSS transitions and the scroll-reveal observer in `Layout.astro`, mobile menu toggles `aria-expanded`.
