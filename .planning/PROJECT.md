# Truong Trung Nghia — Personal Portfolio Website

## What This Is

A personal portfolio website for **Truong Trung Nghia**, a Full Stack Developer with 2+ years of experience building enterprise-grade web applications in PHP (Laravel, CodeIgniter) and React. The site presents his professional story — work history, projects, skills, education, and contact — in a visually stunning, modern web experience. It will be deployed to Vercel and served at **ttndev.com**.

## Core Value

Visitors land and immediately understand Nghia is a high-caliber Full Stack Developer — through sharp design, concrete impact numbers, and a clear signal of his tech depth.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Hero section with name, title ("Full Stack Developer"), contact links (LinkedIn, phone, email, GitHub)
- [ ] Professional summary highlighting 2+ years, PHP/Laravel/CodeIgniter/React expertise, 7+ projects, Fintech/E-commerce/IoT/SaaS/Booking/ERP domains
- [ ] Work experience section: TPS Software (04/2025–Present) and QASoft Solution (09/2023–04/2025) with key achievements
- [ ] Projects section: Unioss (Furusato Nozei e-commerce + IoT platform, 06/2024–11/2024), Nippoh (B2B IoT construction monitoring SaaS, 04/2024–Present), Nail (Booking system, 06/2024–11/2024), Misa (ERP system for Misa Group, 12/2023–06/2024)
- [ ] Skills section: Programming languages, frameworks, APIs, databases, version control, server & testing tools, soft skills
- [ ] Education section: Bachelor of Science, Hutech University, IT major (09/2021–09/2025)
- [ ] Certifications section: HackerRank Problem Solving (07/2024), KodeKloud JSON Path (08/2024), FreeCodeCamp Backend & APIs (08/2024)
- [ ] Contact / footer section with all social links
- [ ] Responsive design (mobile + desktop)
- [ ] Dark mode, glassmorphism aesthetic, smooth animations, vibrant accent colors
- [ ] Deploy to Vercel (ttndev.com domain)
- [ ] SEO-optimized (title, meta description, semantic HTML, heading hierarchy)

### Out of Scope

- Blog / articles section — not in resume, out of v1 scope
- CMS or content management — static site is sufficient
- Backend server / API — purely static frontend
- Multi-language support — English only for v1
- Dark/light mode toggle — single premium dark theme for v1

## Context

**Owner:** Truong Trung Nghia  
**Email:** nghiatt1410@gmail.com  
**Phone:** 076-743-3579  
**LinkedIn:** https://www.linkedin.com/in/truong-trung-nghia-21b488299/  
**GitHub:** https://github.com/ttndevfullstack  
**Site domain:** ttndev.com  

**Tech stack choice:** Plain HTML + CSS + JavaScript (no framework overhead for a static portfolio). Deploy via Vercel (zero-config for static sites via `vercel.json`).

**Key differentiators from resume to highlight:**
- ~80% accounting time saved via automated financial reconciliation engine
- 25% repeat usage increase from digital loyalty coin system
- 60% faster checkout times at IoT vending machine terminals
- 90%+ reduction in order fulfillment anomalies via state machine
- 50% cut in administrative onboarding time via RBAC dashboard
- 35% error rate reduction via testing
- 60% response time improvement via performance optimization
- Supported 1,000+ municipalities on multi-tenant platform

**Aesthetic direction:** Premium dark portfolio — deep navy/charcoal background, electric blue/teal accents, glassmorphism cards, subtle gradient animations, modern sans-serif typography (e.g., Inter or Outfit from Google Fonts).

## Constraints

- **Tech Stack**: HTML + Vanilla CSS + JavaScript — no build toolchain unless needed for Vercel; keep it deploy-simple
- **Hosting**: Must deploy to Vercel, ideally with one-command `vercel --prod`
- **Content**: All content comes from resume; no placeholder or lorem ipsum
- **Timeline**: Ship quickly — this is a greenfield static site

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Static HTML/CSS/JS (no React) | Vercel deploys it instantly, no build step needed, maximum performance | — Pending |
| Single dark theme (no toggle) | Simpler to build beautifully; premium dark is the brand | — Pending |
| Vercel for hosting | Zero-config, free tier, fast CDN, custom domain support | — Pending |
| English-only content | Resume is in English; target audience is international employers | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-16 after initialization*
