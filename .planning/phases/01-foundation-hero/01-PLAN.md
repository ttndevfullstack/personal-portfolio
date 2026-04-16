---
wave: 1
depends_on: []
files_modified:
  - index.html
  - assets/css/style.css
  - assets/js/main.js
autonomous: true
---

# Phase 1 Plan: Foundation & Hero

## Overview
Scaffold the site with the premium dark design system, hero section, professional summary, navigation, and SEO tags. Uses Vanilla HTML/CSS/JS.

## Requirements Covered
HERO-01, HERO-02, HERO-03, HERO-04, HERO-05, SUMM-01, SUMM-02, DESIGN-01, DESIGN-02, DESIGN-03, DESIGN-04, DESIGN-05, DESIGN-06, SEO-01, SEO-02, SEO-03

## Execution Plan

### Task 1: Setup HTML skeleton and SEO tags
<task>
<read_first>
- .planning/REQUIREMENTS.md
- .planning/phases/01-foundation-hero/01-CONTEXT.md
</read_first>
<action>
Create `index.html`. Add HTML5 boilerplate.
Set `<title>Truong Trung Nghia — Full Stack Developer</title>`.
Add `<meta name="description" content="Portfolio of Truong Trung Nghia, a Full Stack Developer with 2+ years of experience building enterprise web applications.">`.
Include Google Fonts for 'Inter'.
Link `assets/css/style.css` and `assets/js/main.js`.
Add `<body>` structure with `<header>` for navigation and `<main>` for content.
</action>
<acceptance_criteria>
- `index.html` contains `<title>Truong Trung Nghia — Full Stack Developer</title>`
- `index.html` contains `<meta name="description"`
- `index.html` contains `href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"`
</acceptance_criteria>
</task>

### Task 2: Setup CSS Design System
<task>
<read_first>
- index.html
- .planning/phases/01-foundation-hero/01-CONTEXT.md
</read_first>
<action>
Create `assets/css/style.css`.
Define CSS variables for colors at `:root`:
  `--bg-color: #0f172a;` (deep navy)
  `--text-primary: #f8fafc;`
  `--text-secondary: #cbd5e1;`
  `--accent: #0ea5e9;` (electric blue)
  `--accent-hover: #38bdf8;`
  `--glass-bg: rgba(255, 255, 255, 0.05);`
  `--glass-border: rgba(255, 255, 255, 0.1);`
Apply base styles: body `background-color: var(--bg-color); color: var(--text-primary); font-family: 'Inter', sans-serif;`.
Add smooth scrolling: `html { scroll-behavior: smooth; }`.
Define `.glass-card` class: `background: var(--glass-bg); border: 1px solid var(--glass-border); backdrop-filter: blur(10px); border-radius: 12px;`.
Add hover transition for interactive elements `.hover-lift`: `transition: transform 0.3s ease, box-shadow 0.3s ease;` and `:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(14, 165, 233, 0.2); }`.
</action>
<acceptance_criteria>
- `assets/css/style.css` contains `--bg-color: #0f172a;`
- `assets/css/style.css` contains `--accent: #0ea5e9;`
- `assets/css/style.css` contains `.glass-card`
- `assets/css/style.css` contains `transform: translateY`
</acceptance_criteria>
</task>

### Task 3: Build Navigation & Header
<task>
<read_first>
- index.html
- assets/css/style.css
</read_first>
<action>
In `index.html` inside `<header>`, add a floating pill navigation menu: `<nav class="glass-card nav-pill">`.
Include anchors to sections: `#hero`, `#experience`, `#projects`, `#skills`, `#education`.
In `style.css`, add styling for `.nav-pill`: `position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 1000; display: flex; gap: 1.5rem; padding: 0.75rem 2rem; border-radius: 50px;`.
</action>
<acceptance_criteria>
- `index.html` contains `<nav class="glass-card nav-pill">`
- `assets/css/style.css` contains `.nav-pill`
- `index.html` contains `href="#projects"`
</acceptance_criteria>
</task>

### Task 4: Build Hero Section
<task>
<read_first>
- index.html
- assets/css/style.css
</read_first>
<action>
In `index.html`, add `<section id="hero" class="hero-container">`.
Add an `<h1>` containing "Truong Trung Nghia".
Add `<h2 class="title">Full Stack Developer</h2>`.
Add contact links (using simple icons from local SVG or text if icons not available yet):
- LinkedIn: `https://www.linkedin.com/in/truong-trung-nghia-21b488299/`
- GitHub: `https://github.com/ttndevfullstack`
- Email: `mailto:nghiatt1410@gmail.com`
- Phone: `tel:+84767433579`
Wrap contact links in a container styled with flexbox.
Add professional summary text from REQUIREMENTS.md as a `<p>`: "Full Stack Developer with 2+ years of experience building enterprise-grade web applications in PHP (Laravel, CodeIgniter) and React. Delivered 7+ projects across Fintech, E-commerce, IoT, SaaS, Booking, and ERP domains..."
Include listed key strengths as chips (RESTful API, MVC/OOP, Git, SOLID, Clean Code).
Add hero specific styling in `style.css`: viewport height, centering, large font sizes.
</action>
<acceptance_criteria>
- `index.html` contains `Truong Trung Nghia` inside `<h1>`
- `index.html` contains `href="https://github.com/ttndevfullstack"`
- `index.html` contains `Full Stack Developer with 2+ years`
</acceptance_criteria>
</task>

### Task 5: Add Base JS Functionality
<task>
<read_first>
- assets/js/main.js
</read_first>
<action>
Create `assets/js/main.js`.
Add an IntersectionObserver to highlight the current active link in the `.nav-pill` based on scroll position.
Add a simple fade-in effect via IntersectionObserver for elements with a `.fade-in` class (to make elements appear as the user scrolls).
</action>
<acceptance_criteria>
- `assets/js/main.js` contains `IntersectionObserver`
- `assets/js/main.js` contains `.nav-pill`
</acceptance_criteria>
</task>

## Verification
- Run local server using `npx serve .` or python HTTP server.
- Verify the following must_haves:
  1. `<title>` and `<meta name="description">` are present.
  2. "Truong Trung Nghia" and links are present in the Hero section.
  3. The layout displays a dark navy theme with electric blue accents.
  4. The navigation is a floating glassmorphic pill.
  5. The site functions flawlessly on both desktop and mobile viewports.
