# Roadmap: Truong Trung Nghia Portfolio Website

**Milestone:** v1.0 — Initial launch  
**Target:** Deploy premium personal portfolio to Vercel  
**Requirements covered:** 34 / 34 ✓

---

## Phase Summary

| # | Phase | Goal | Requirements | Plans |
|---|-------|------|--------------|-------|
| 1 | Foundation & Hero | 1/1 | Complete   | 2026-04-16 |
| 2 | Experience & Projects | 1/1 | Complete   | 2026-04-16 |
| 3 | Skills, Education & Certifications | 1/1 | Complete   | 2026-04-16 |
| 4 | Vercel Deployment & Polish | 1/1 | Complete   | 2026-04-16 |

---

## Phase 1: Foundation & Hero

**Goal:** Scaffold the site with a stunning premium dark design system, hero section, navigation, summary, and SEO.

**Requirements:**
- HERO-01: Name and title prominently visible on load
- HERO-02: LinkedIn link working
- HERO-03: GitHub link working
- HERO-04: Phone and email visible
- HERO-05: Professional avatar/visual in hero
- SUMM-01: Professional summary paragraph visible
- SUMM-02: Key strengths listed
- DESIGN-01: Premium dark theme (navy/charcoal + electric blue/teal accents)
- DESIGN-02: Glassmorphism card styling
- DESIGN-03: Smooth scroll animations, micro-interactions
- DESIGN-04: Fully responsive
- DESIGN-05: Google Font (Inter or Outfit)
- DESIGN-06: Sticky navigation header with section jumps
- SEO-01: `<title>` tag set
- SEO-02: `<meta name="description">` set
- SEO-03: Semantic HTML5, single `<h1>`, proper hierarchy

**Success criteria:**
1. Opening the site shows Nghia's name, "Full Stack Developer" title, and all contact links within the first viewport
2. The design immediately feels premium — dark background, glowing accents, glassmorphic card elements
3. Navigation bar is sticky and clicking any nav item smoothly scrolls to the target section
4. Site renders correctly on mobile (375px), tablet (768px), and desktop (1440px)
5. Chrome DevTools shows correct `<title>` and `<meta description>` in document head

**UI hint**: yes  
**Plans:** 1/1 plans complete

---

## Phase 2: Experience & Projects

**Goal:** Build the work experience and featured projects sections with rich detail and impact metrics.

**Requirements:**
- EXP-01: TPS Software experience with achievements
- EXP-02: QASoft Solution experience with achievements
- PROJ-01: Unioss project (Furusato Nozei, IoT, finance, loyalty)
- PROJ-02: Nippoh project (IoT construction SaaS, WebAssembly, Azure AD)
- PROJ-03: Nail project (Booking system, OAuth2, background jobs)
- PROJ-04: Misa project (ERP, modularization, Redis, CI/CD)

**Success criteria:**
1. Work experience section shows two companies with correct dates, locations, roles, and bullet points of achievements
2. Each project has a clear name, team size, date range, and description — plus subsections for technical approaches and technologies used
3. Impact numbers (80% accounting time saved, 25% repeat usage increase, 60% checkout speedup, etc.) are prominently displayed
4. Projects section is scannable — visual hierarchy distinguishes project name, description, subsections
5. Section is visually consistent with Phase 1 design system (glassmorphism cards, consistent spacing)

**UI hint**: yes  
**Plans:** 1/1 plans complete

---

## Phase 3: Skills, Education & Certifications

**Goal:** Build the skills matrix, education entry, and certifications in a clean, scannable layout.

**Requirements:**
- SKILL-01: Programming languages listed
- SKILL-02: Frameworks listed
- SKILL-03: APIs listed
- SKILL-04: Databases listed
- SKILL-05: Version control listed
- SKILL-06: Server/testing tools listed
- SKILL-07: Development tools listed
- SKILL-08: Soft skills listed
- EDU-01: Bachelor of Science, Hutech University
- CERT-01: HackerRank Problem Solving
- CERT-02: KodeKloud JSON Path
- CERT-03: FreeCodeCamp Backend APIs

**Success criteria:**
1. Skills section groups all eight skill categories with clear labels and visual badges/chips
2. Each skill chip is visually styled (colored, rounded, with hover effect)
3. Education entry shows degree, major, university, location, and date range
4. All three certifications are listed with name, issuer, and date
5. Section looks neat and avoids visual clutter — comfortable to scan in under 10 seconds

**UI hint**: yes  
**Plans:** 1/1 plans complete

---

## Phase 4: Vercel Deployment & Polish

**Goal:** Deploy the site to Vercel, configure the ttndev.com domain, and apply final polish.

**Requirements:**
- DEPLOY-01: Site deploys to Vercel (vercel.json or zero-config)
- DEPLOY-02: Custom domain ttndev.com configured

**Success criteria:**
1. Running `vercel --prod` (or pushing to the Vercel-connected repo) deploys the site without errors
2. The site loads at a Vercel `.vercel.app` URL
3. `vercel.json` is present and correctly configured for static file serving
4. Footer shows contact links, GitHub, LinkedIn — all open in new tabs
5. Lighthouse score ≥ 90 for Performance, Accessibility, and SEO on desktop

**UI hint**: no  
**Plans:** 1/1 plans complete

---

## Requirements Traceability

| Requirement | Phase |
|-------------|-------|
| HERO-01..05 | Phase 1 |
| SUMM-01..02 | Phase 1 |
| DESIGN-01..06 | Phase 1 |
| SEO-01..03 | Phase 1 |
| EXP-01..02 | Phase 2 |
| PROJ-01..04 | Phase 2 |
| SKILL-01..08 | Phase 3 |
| EDU-01 | Phase 3 |
| CERT-01..03 | Phase 3 |
| DEPLOY-01..02 | Phase 4 |

**Coverage:** 34 / 34 requirements mapped ✓

### Phase 5: Implement multi-theme support (4 themes) and selector UI. Ensure include at least 1 light theme

**Goal:** [To be planned]
**Requirements**: TBD
**Depends on:** Phase 4
**Plans:** 0 plans

Plans:
- [ ] TBD (run /gsd-plan-phase 6 to break down)

---
*Roadmap created: 2026-04-16*
