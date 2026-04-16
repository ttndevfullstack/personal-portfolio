---
wave: 1
depends_on: []
files_modified:
  - index.html
  - assets/css/style.css
autonomous: true
---

# Phase 2 Plan: Experience & Projects

## Overview
Extend the portfolio with a detailed Work Experience timeline and a rich Featured Projects section. All content comes from the resume. Reuse the Phase 1 design system — no new design tokens needed.

## Requirements Covered
EXP-01, EXP-02, PROJ-01, PROJ-02, PROJ-03, PROJ-04

## Pre-read (MANDATORY before touching any file)
<read_first>
- index.html (current state — do NOT overwrite, only replace placeholder sections)
- assets/css/style.css (existing design system — reuse all classes)
- .planning/phases/02-experience-projects/02-CONTEXT.md (all content)
- .planning/REQUIREMENTS.md
</read_first>

---

## Task 1: Experience Section — HTML

**Objective**: Replace the `<section id="experience">` placeholder in `index.html` with a full timeline.

<task>
<read_first>
- index.html (read current experience section placeholder)
- assets/css/style.css (check existing .glass-card, .chip, .section-header)
- .planning/phases/02-experience-projects/02-CONTEXT.md
</read_first>
<action>
In `index.html`, find and replace the existing `<section id="experience">` block (the placeholder div) with the following complete markup:

```html
<section id="experience" class="section">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-tag">Work History</span>
      <h2 class="section-title">Experience</h2>
    </div>

    <div class="timeline">

      <!-- TPS Software -->
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-card glass-card hover-lift">
          <div class="exp-header">
            <div class="exp-info">
              <h3 class="exp-company">TPS Software</h3>
              <p class="exp-role">Full Stack Developer</p>
              <p class="exp-meta">Tan Binh, TP.HCM &nbsp;·&nbsp; Apr 2025 – Present</p>
            </div>
            <span class="exp-badge exp-current">Current</span>
          </div>
          <ul class="exp-bullets">
            <li>Built B2B2C digital checkout pipeline serving <strong>1,000+ municipalities</strong> on multi-tenant architecture</li>
            <li>Engineered automated financial reconciliation engine → <strong>~80% reduction in accounting time</strong></li>
            <li>Designed digital loyalty coin system (Furusato Nozei) → <strong>25% increase in repeat usage</strong></li>
            <li>Built RBAC role management dashboard → <strong>50% faster admin onboarding</strong></li>
          </ul>
          <div class="exp-tech">
            <span class="chip chip-sm">Laravel</span>
            <span class="chip chip-sm">React</span>
            <span class="chip chip-sm">AWS</span>
            <span class="chip chip-sm">Redis</span>
            <span class="chip chip-sm">MySQL</span>
            <span class="chip chip-sm">Stripe</span>
          </div>
        </div>
      </div>

      <!-- QASoft Solution -->
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-card glass-card hover-lift">
          <div class="exp-header">
            <div class="exp-info">
              <h3 class="exp-company">QASoft Solution</h3>
              <p class="exp-role">Full Stack Developer</p>
              <p class="exp-meta">Thu Duc, TP.HCM &nbsp;·&nbsp; Sep 2023 – Apr 2025</p>
            </div>
          </div>
          <ul class="exp-bullets">
            <li>Delivered 5+ production projects across Fintech, E-commerce, SaaS, Booking, and ERP domains</li>
            <li>Integrated <strong>Stripe and PayPal</strong> payment gateways with retry logic and webhook verification</li>
            <li>Implemented CSRF protection, OAuth2 flows, and JWT-based auth across all projects</li>
            <li>Deployed and managed services on <strong>AWS EC2, S3, Lambda, and CloudFront</strong></li>
          </ul>
          <div class="exp-tech">
            <span class="chip chip-sm">Laravel</span>
            <span class="chip chip-sm">CodeIgniter</span>
            <span class="chip chip-sm">React</span>
            <span class="chip chip-sm">AWS</span>
            <span class="chip chip-sm">OAuth2</span>
            <span class="chip chip-sm">Docker</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
```
</action>
<acceptance_criteria>
- `index.html` contains `TPS Software`
- `index.html` contains `QASoft Solution`
- `index.html` contains `80% reduction in accounting time`
- `index.html` contains `1,000+ municipalities`
- `index.html` no longer contains `placeholder-text` inside `<section id="experience">`
</acceptance_criteria>
</task>

---

## Task 2: Projects Section — HTML

**Objective**: Replace the `<section id="projects">` placeholder with 4 detailed project cards.

<task>
<read_first>
- index.html (current projects section placeholder)
- assets/css/style.css (existing .glass-card, .chip, .section-header classes)
- .planning/phases/02-experience-projects/02-CONTEXT.md (project details)
</read_first>
<action>
In `index.html`, find and replace the existing `<section id="projects">` block with:

```html
<section id="projects" class="section">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-tag">Featured Work</span>
      <h2 class="section-title">Projects</h2>
    </div>

    <div class="projects-grid">

      <!-- Unioss -->
      <div class="project-card glass-card hover-lift reveal">
        <div class="project-header">
          <div class="project-meta">
            <span class="project-tag">E-commerce · IoT</span>
            <span class="project-period">Jun 2024 – Nov 2024</span>
          </div>
          <h3 class="project-name">Unioss</h3>
          <p class="project-desc">Furusato Nozei e-commerce + IoT vending machine platform for 1,000+ Japanese municipalities — multi-tenant, loyalty coins, financial reconciliation, real-time IoT terminals.</p>
        </div>
        <div class="project-highlights">
          <div class="highlight-item">
            <span class="highlight-num">80%</span>
            <span class="highlight-label">Accounting time saved</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-num">60%</span>
            <span class="highlight-label">Faster IoT checkout</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-num">90%+</span>
            <span class="highlight-label">Anomaly reduction</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-num">25%</span>
            <span class="highlight-label">Repeat usage ↑</span>
          </div>
        </div>
        <div class="project-features">
          <div class="feature-item"><span class="feature-dot"></span>IoT vending machine terminal integration</div>
          <div class="feature-item"><span class="feature-dot"></span>Order state machine → 90%+ anomaly reduction</div>
          <div class="feature-item"><span class="feature-dot"></span>Digital wallet &amp; loyalty coin system</div>
          <div class="feature-item"><span class="feature-dot"></span>Multi-tenant admin for 1,000+ municipalities</div>
        </div>
        <div class="project-footer">
          <div class="project-tech">
            <span class="chip chip-sm">Laravel</span>
            <span class="chip chip-sm">React</span>
            <span class="chip chip-sm">MySQL</span>
            <span class="chip chip-sm">AWS</span>
            <span class="chip chip-sm">Redis</span>
            <span class="chip chip-sm">Docker</span>
          </div>
          <span class="project-team">8 engineers</span>
        </div>
      </div>

      <!-- Nippoh -->
      <div class="project-card glass-card hover-lift reveal reveal-delay-1">
        <div class="project-header">
          <div class="project-meta">
            <span class="project-tag">IoT · SaaS · B2B</span>
            <span class="project-period">Apr 2024 – Present</span>
          </div>
          <h3 class="project-name">Nippoh</h3>
          <p class="project-desc">B2B IoT construction monitoring SaaS — real-time sensor ingestion via AWS IoT Core/MQTT, WebAssembly 3D visualization, cryptographic tamper detection, Azure AD SSO.</p>
        </div>
        <div class="project-features">
          <div class="feature-item"><span class="feature-dot"></span>AWS IoT Core + MQTT real-time sensor pipeline</div>
          <div class="feature-item"><span class="feature-dot"></span>React SPA with WebAssembly 3D visualization</div>
          <div class="feature-item"><span class="feature-dot"></span>Cryptographic tamper detection for compliance</div>
          <div class="feature-item"><span class="feature-dot"></span>Azure AD SSO for enterprise authentication</div>
        </div>
        <div class="project-footer">
          <div class="project-tech">
            <span class="chip chip-sm">Laravel</span>
            <span class="chip chip-sm">React</span>
            <span class="chip chip-sm">AWS IoT</span>
            <span class="chip chip-sm">MQTT</span>
            <span class="chip chip-sm">WASM</span>
            <span class="chip chip-sm">Azure AD</span>
          </div>
          <span class="project-team">6 engineers</span>
        </div>
      </div>

      <!-- Nail -->
      <div class="project-card glass-card hover-lift reveal reveal-delay-2">
        <div class="project-header">
          <div class="project-meta">
            <span class="project-tag">Booking · Multi-tenant</span>
            <span class="project-period">Jun 2024 – Nov 2024</span>
          </div>
          <h3 class="project-name">Nail Booking</h3>
          <p class="project-desc">Multi-platform booking system for salon chains — multi-tenant architecture, OAuth2 social login, background job scheduling, performance-optimized APIs.</p>
        </div>
        <div class="project-highlights">
          <div class="highlight-item">
            <span class="highlight-num">60%</span>
            <span class="highlight-label">Response time ↓</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-num">35%</span>
            <span class="highlight-label">Error rate ↓</span>
          </div>
        </div>
        <div class="project-features">
          <div class="feature-item"><span class="feature-dot"></span>Multi-tenant architecture for salon brands</div>
          <div class="feature-item"><span class="feature-dot"></span>OAuth2 + JWT refresh token auth flow</div>
          <div class="feature-item"><span class="feature-dot"></span>Background job scheduling (reminders, notifications)</div>
          <div class="feature-item"><span class="feature-dot"></span>35% error reduction via comprehensive test coverage</div>
        </div>
        <div class="project-footer">
          <div class="project-tech">
            <span class="chip chip-sm">Laravel</span>
            <span class="chip chip-sm">React</span>
            <span class="chip chip-sm">MySQL</span>
            <span class="chip chip-sm">Redis</span>
            <span class="chip chip-sm">OAuth2</span>
            <span class="chip chip-sm">Docker</span>
          </div>
          <span class="project-team">6 engineers</span>
        </div>
      </div>

      <!-- Misa ERP -->
      <div class="project-card glass-card hover-lift reveal reveal-delay-3">
        <div class="project-header">
          <div class="project-meta">
            <span class="project-tag">ERP · Enterprise</span>
            <span class="project-period">Dec 2023 – Jun 2024</span>
          </div>
          <h3 class="project-name">Misa ERP</h3>
          <p class="project-desc">Enterprise Resource Planning system for Misa Group — multi-layer modular architecture, RBAC across departments, Redis HA cluster, CI/CD pipeline, mobile REST API.</p>
        </div>
        <div class="project-features">
          <div class="feature-item"><span class="feature-dot"></span>Multi-layer modularization by business domain</div>
          <div class="feature-item"><span class="feature-dot"></span>RBAC across all departments and user roles</div>
          <div class="feature-item"><span class="feature-dot"></span>Redis master-slave + Sentinel high availability</div>
          <div class="feature-item"><span class="feature-dot"></span>CI/CD with GitHub Actions + Docker deployment</div>
        </div>
        <div class="project-footer">
          <div class="project-tech">
            <span class="chip chip-sm">Laravel</span>
            <span class="chip chip-sm">React</span>
            <span class="chip chip-sm">MySQL</span>
            <span class="chip chip-sm">Redis</span>
            <span class="chip chip-sm">AWS S3</span>
            <span class="chip chip-sm">GitHub CI</span>
          </div>
          <span class="project-team">8 engineers</span>
        </div>
      </div>

    </div>
  </div>
</section>
```
</action>
<acceptance_criteria>
- `index.html` contains `Unioss`
- `index.html` contains `Nippoh`
- `index.html` contains `Nail Booking`
- `index.html` contains `Misa ERP`
- `index.html` contains `80%` and `60%` impact metrics
- `index.html` does NOT contain `placeholder-text` inside `<section id="projects">`
</acceptance_criteria>
</task>

---

## Task 3: Experience & Projects CSS

**Objective**: Add CSS for timeline, project cards, highlights, and features. Append to `assets/css/style.css` — do NOT remove existing styles.

<task>
<read_first>
- assets/css/style.css (read current end-of-file to know where to append)
</read_first>
<action>
Append the following CSS block to the END of `assets/css/style.css`:

```css
/* ═══════════════════════════════════════════════════════════
   Phase 2: Experience & Projects
   ═══════════════════════════════════════════════════════════ */

/* ─── Timeline ───────────────────────────────────────────── */
.timeline {
  position: relative;
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 12px;
  bottom: 12px;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent), var(--accent-3), transparent);
  opacity: 0.3;
}
.timeline-item {
  display: flex;
  gap: 28px;
  align-items: flex-start;
}
.timeline-dot {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--gradient-brand);
  border: 3px solid var(--bg-primary);
  box-shadow: 0 0 20px var(--accent-glow);
  position: relative;
  z-index: 1;
}
.timeline-card {
  flex: 1;
  padding: 28px 28px 24px;
}
.exp-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
}
.exp-company {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}
.exp-role {
  font-size: 0.9rem;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 4px;
}
.exp-meta {
  font-size: 0.8rem;
  color: var(--text-muted);
}
.exp-badge {
  flex-shrink: 0;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.exp-current {
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #4ade80;
}
.exp-bullets {
  list-style: none;
  padding: 0;
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.exp-bullets li {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  padding-left: 20px;
  position: relative;
}
.exp-bullets li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.75rem;
  top: 3px;
}
.exp-bullets strong { color: var(--text-primary); font-weight: 600; }
.exp-tech { display: flex; flex-wrap: wrap; gap: 8px; }

/* ─── Projects Grid ──────────────────────────────────────── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.project-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px 26px 24px;
}
.project-header {}
.project-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.project-tag {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(14, 165, 233, 0.08);
  border: 1px solid rgba(14, 165, 233, 0.18);
  padding: 3px 10px;
  border-radius: var(--radius-pill);
}
.project-period {
  font-size: 0.75rem;
  color: var(--text-muted);
}
.project-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 10px;
}
.project-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.68;
}

/* Impact highlights */
.project-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 12px;
}
.highlight-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--gradient-subtle);
  border: 1px solid rgba(14, 165, 233, 0.12);
  border-radius: var(--radius-md);
  padding: 12px 8px;
  text-align: center;
}
.highlight-num {
  font-size: 1.35rem;
  font-weight: 800;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 4px;
}
.highlight-label {
  font-size: 0.68rem;
  color: var(--text-muted);
  font-weight: 500;
  line-height: 1.3;
}

/* Feature items */
.project-features {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
}
.feature-dot {
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  margin-top: 6px;
  box-shadow: 0 0 6px var(--accent-glow);
}

.project-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 8px;
  border-top: 1px solid var(--border-glass);
  margin-top: auto;
}
.project-tech { display: flex; flex-wrap: wrap; gap: 6px; }
.project-team {
  flex-shrink: 0;
  font-size: 0.75rem;
  color: var(--text-muted);
  white-space: nowrap;
}

/* ─── Responsive Phase 2 ─────────────────────────────────── */
@media (max-width: 768px) {
  .projects-grid { grid-template-columns: 1fr; }
  .timeline::before { left: 16px; }
  .timeline-dot { width: 34px; height: 34px; }
  .exp-header { flex-direction: column; gap: 8px; }
  .project-footer { flex-direction: column; align-items: flex-start; }
}
```
</action>
<acceptance_criteria>
- `assets/css/style.css` contains `.timeline-card`
- `assets/css/style.css` contains `.highlight-num`
- `assets/css/style.css` contains `.project-card`
- `assets/css/style.css` contains `.feature-dot`
- `assets/css/style.css` does NOT duplicate existing `:root` or `body` declarations
</acceptance_criteria>
</task>

---

## Verification
1. Open `index.html` in a browser (or `npx serve . -p 3333`)
2. Verify timeline shows TPS Software (with "Current" badge) and QASoft Solution
3. Verify 4 project cards are visible: Unioss, Nippoh, Nail Booking, Misa ERP
4. Verify impact numbers are visible: 80%, 60%, 90%+, 25%, 35%
5. Verify responsive layout on 768px — projects stack to single column
6. Verify no placeholder text remains in either section
