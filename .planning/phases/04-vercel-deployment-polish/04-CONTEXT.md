# Phase 4 Context: Vercel Deployment & Polish

**Goal**: Deploy the site to Vercel, configure ttndev.com domain, and apply final polish.

## Decisions

- Use `vercel.json` for static site configuration — zero build toolchain
- Output directory is the project root (no dist folder)
- Domain: ttndev.com (user configures in Vercel dashboard after deploy)
- Final polish:
  - Add `vercel.json` with proper headers (caching, security)
  - Add `favicon.ico` or SVG favicon in `<head>`
  - Ensure no broken links, no console errors
  - Add subtle gradient to footer
  - Confirm all section IDs match nav links

## Canonical Refs

- `.planning/PROJECT.md`
- `.planning/REQUIREMENTS.md`
- `index.html`
- `assets/css/style.css`
