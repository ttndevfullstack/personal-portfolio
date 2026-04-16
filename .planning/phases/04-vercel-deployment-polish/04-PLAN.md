---
wave: 1
depends_on: []
files_modified:
  - vercel.json
  - index.html
  - assets/css/style.css
autonomous: true
---

# Phase 4 Plan: Vercel Deployment & Polish

## Overview
Create Vercel configuration for zero-config static deployment, add SVG favicon, apply final polish to CSS (footer gradient, scrollbar styling, print styles), and verify the site is production-ready.

## Requirements Covered
DEPLOY-01, DEPLOY-02

## Pre-read (MANDATORY)
<read_first>
- index.html (check `<head>` for favicon, check footer section)
- assets/css/style.css (check end of file)
- .planning/phases/04-vercel-deployment-polish/04-CONTEXT.md
</read_first>

---

## Task 1: Create vercel.json

**Objective**: Add Vercel static site configuration with security headers and cache control.

<task>
<read_first>
- .planning/phases/04-vercel-deployment-polish/04-CONTEXT.md
</read_first>
<action>
Create `vercel.json` in the project root with the following content:

```json
{
  "version": 2,
  "buildCommand": null,
  "outputDirectory": ".",
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```
</action>
<acceptance_criteria>
- `vercel.json` exists in project root
- `vercel.json` contains `"outputDirectory": "."`
- `vercel.json` contains `X-Content-Type-Options`
- `vercel.json` contains `Cache-Control`
</acceptance_criteria>
</task>

---

## Task 2: Add SVG Favicon

**Objective**: Add an inline SVG favicon to `index.html` — no external file needed.

<task>
<read_first>
- index.html (find the `<head>` section to add favicon link)
</read_first>
<action>
In `index.html`, inside `<head>`, after the `<meta name="viewport">` line, add:

```html
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230ea5e9'/><text y='72' x='50' text-anchor='middle' font-size='60' font-family='Inter,Arial,sans-serif' font-weight='900' fill='white'>T</text></svg>" />
```
</action>
<acceptance_criteria>
- `index.html` contains `rel="icon" type="image/svg+xml"`
</acceptance_criteria>
</task>

---

## Task 3: Final CSS Polish

**Objective**: Append final polish styles — custom scrollbar, mobile safe area, print styles, footer gradient. Append to `assets/css/style.css` only.

<task>
<read_first>
- assets/css/style.css (read end of file — find last line to append after)
</read_first>
<action>
Append to the END of `assets/css/style.css`:

```css
/* ═══════════════════════════════════════════════════════════
   Phase 4: Final Polish
   ═══════════════════════════════════════════════════════════ */

/* ─── Custom Scrollbar ───────────────────────────────────── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg-primary); }
::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 3px;
  opacity: 0.5;
}
::-webkit-scrollbar-thumb:hover { opacity: 1; }

/* ─── Selection ──────────────────────────────────────────── */
::selection {
  background: rgba(14, 165, 233, 0.3);
  color: var(--text-primary);
}

/* ─── Footer Gradient Top Border ─────────────────────────── */
footer#contact {
  position: relative;
}
footer#contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: var(--gradient-brand);
  opacity: 0.3;
}

/* ─── Focus Visible (Accessibility) ─────────────────────── */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 4px;
}

/* ─── Mobile Safe Area ───────────────────────────────────── */
@supports (padding: max(0px)) {
  body { padding-bottom: env(safe-area-inset-bottom); }
}

/* ─── Print Styles ───────────────────────────────────────── */
@media print {
  header, .hero-bg-mesh, .scroll-indicator, .hero-visual { display: none !important; }
  body { background: white; color: black; }
  .glass-card { border: 1px solid #ccc; background: transparent; backdrop-filter: none; }
  .hero-section { min-height: auto; padding: 2rem 0; }
  a { color: inherit; }
}

/* ─── Loading fade-in on page load ──────────────────────── */
@keyframes pageIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
body {
  animation: pageIn 0.4s ease forwards;
}
```
</action>
<acceptance_criteria>
- `assets/css/style.css` contains `::-webkit-scrollbar`
- `assets/css/style.css` contains `::selection`
- `assets/css/style.css` contains `@media print`
- `assets/css/style.css` contains `pageIn`
</acceptance_criteria>
</task>

---

## Task 4: Verify All Nav Links Match Section IDs

**Objective**: Confirm all nav anchors in `index.html` have matching `id` attributes on sections. Fix any mismatches.

<task>
<read_first>
- index.html (read nav links and section ids)
</read_first>
<action>
Read `index.html` and confirm:
- `href="#hero"` → `<section id="hero">` ✓ or `<header id="hero">` equivalent
- `href="#about"` → `<section id="about">` ✓
- `href="#experience"` → `<section id="experience">` ✓
- `href="#projects"` → `<section id="projects">` ✓
- `href="#skills"` → `<section id="skills">` ✓
- `href="#contact"` → `<footer id="contact">` ✓

If any section id is missing, add the correct `id` attribute to that section element.
</action>
<acceptance_criteria>
- `index.html` contains `id="hero"`
- `index.html` contains `id="about"`
- `index.html` contains `id="experience"`
- `index.html` contains `id="projects"`
- `index.html` contains `id="skills"`
- `index.html` contains `id="contact"`
</acceptance_criteria>
</task>

---

## Verification
1. `vercel.json` exists and is valid JSON with correct `outputDirectory: "."`
2. `index.html` has an SVG favicon in `<head>`
3. Custom scrollbar visible in Chrome (thin blue accent scrollbar)
4. `::selection` highlight is visible when text is selected (blue tint)
5. Footer has a subtle gradient top border
6. All navigation links scroll to correct sections
7. Run: `npx vercel --pre` (dry run) or confirm `vercel.json` is valid JSON with `node -e "JSON.parse(require('fs').readFileSync('vercel.json','utf8'))" && echo "valid"`
