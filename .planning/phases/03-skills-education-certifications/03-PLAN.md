---
wave: 1
depends_on: []
files_modified:
  - index.html
  - assets/css/style.css
autonomous: true
---

# Phase 3 Plan: Skills, Education & Certifications

## Overview
Replace the skills, education, and the existing education placeholder sections in `index.html` with full content. Append necessary CSS to `assets/css/style.css`. Do NOT overwrite or remove any existing HTML/CSS.

## Requirements Covered
SKILL-01, SKILL-02, SKILL-03, SKILL-04, SKILL-05, SKILL-06, SKILL-07, SKILL-08, EDU-01, CERT-01, CERT-02, CERT-03

## Pre-read (MANDATORY)
<read_first>
- index.html (current state — skills and education sections only)
- assets/css/style.css (existing end-of-file — append only)
- .planning/phases/03-skills-education-certifications/03-CONTEXT.md
- .planning/REQUIREMENTS.md
</read_first>

---

## Task 1: Skills Section — HTML

**Objective**: Replace `<section id="skills">` placeholder with a full 8-category skills matrix.

<task>
<read_first>
- index.html (find current `<section id="skills">` block)
- .planning/phases/03-skills-education-certifications/03-CONTEXT.md
</read_first>
<action>
In `index.html`, find and replace the `<section id="skills">` block with:

```html
<section id="skills" class="section">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-tag">Technical Skills</span>
      <h2 class="section-title">Skills &amp; Expertise</h2>
    </div>

    <div class="skills-grid">

      <div class="skill-group glass-card reveal">
        <h3 class="skill-group-title">
          <span class="skill-group-icon">💻</span> Languages
        </h3>
        <div class="skill-chips">
          <span class="chip">HTML5</span>
          <span class="chip">CSS3</span>
          <span class="chip">PHP</span>
          <span class="chip">JavaScript</span>
          <span class="chip">TypeScript</span>
          <span class="chip">Python</span>
        </div>
      </div>

      <div class="skill-group glass-card reveal reveal-delay-1">
        <h3 class="skill-group-title">
          <span class="skill-group-icon">⚡</span> Frameworks
        </h3>
        <div class="skill-chips">
          <span class="chip">Laravel</span>
          <span class="chip">CodeIgniter</span>
          <span class="chip">React</span>
          <span class="chip">Vue</span>
          <span class="chip">Tailwind CSS</span>
          <span class="chip">Bootstrap</span>
          <span class="chip">jQuery</span>
        </div>
      </div>

      <div class="skill-group glass-card reveal reveal-delay-2">
        <h3 class="skill-group-title">
          <span class="skill-group-icon">🔌</span> APIs &amp; Protocols
        </h3>
        <div class="skill-chips">
          <span class="chip">RESTful APIs</span>
          <span class="chip">GraphQL</span>
          <span class="chip">WebSocket</span>
          <span class="chip">gRPC</span>
        </div>
      </div>

      <div class="skill-group glass-card reveal reveal-delay-3">
        <h3 class="skill-group-title">
          <span class="skill-group-icon">🗄</span> Databases &amp; Storage
        </h3>
        <div class="skill-chips">
          <span class="chip">MySQL</span>
          <span class="chip">PostgreSQL</span>
          <span class="chip">MongoDB</span>
          <span class="chip">DynamoDB</span>
          <span class="chip">Redis</span>
          <span class="chip">Memcached</span>
          <span class="chip">AWS S3</span>
        </div>
      </div>

      <div class="skill-group glass-card reveal">
        <h3 class="skill-group-title">
          <span class="skill-group-icon">🔀</span> Version Control
        </h3>
        <div class="skill-chips">
          <span class="chip">Git</span>
          <span class="chip">GitHub</span>
          <span class="chip">GitLab</span>
          <span class="chip">Bitbucket</span>
        </div>
      </div>

      <div class="skill-group glass-card reveal reveal-delay-1">
        <h3 class="skill-group-title">
          <span class="skill-group-icon">🛠</span> DevOps &amp; Testing
        </h3>
        <div class="skill-chips">
          <span class="chip">Docker</span>
          <span class="chip">AWS EC2</span>
          <span class="chip">Nginx</span>
          <span class="chip">Linux</span>
          <span class="chip">PHPUnit</span>
          <span class="chip">Jest</span>
          <span class="chip">SonarQube</span>
        </div>
      </div>

      <div class="skill-group glass-card reveal reveal-delay-2">
        <h3 class="skill-group-title">
          <span class="skill-group-icon">🧰</span> Tools
        </h3>
        <div class="skill-chips">
          <span class="chip">VS Code</span>
          <span class="chip">Postman</span>
          <span class="chip">Swagger</span>
          <span class="chip">Figma</span>
          <span class="chip">Jira</span>
          <span class="chip">Cursor</span>
          <span class="chip">Claude Code</span>
        </div>
      </div>

      <div class="skill-group glass-card reveal reveal-delay-3">
        <h3 class="skill-group-title">
          <span class="skill-group-icon">🤝</span> Soft Skills
        </h3>
        <div class="skill-chips">
          <span class="chip">Problem-solving</span>
          <span class="chip">Analytical Thinking</span>
          <span class="chip">Adaptability</span>
          <span class="chip">Self-learning</span>
          <span class="chip">Teamwork</span>
          <span class="chip">English</span>
        </div>
      </div>

    </div>
  </div>
</section>
```
</action>
<acceptance_criteria>
- `index.html` contains `Laravel` inside `<section id="skills">`
- `index.html` contains `PHPUnit` inside `<section id="skills">`
- `index.html` contains `RESTful APIs` inside `<section id="skills">`
- `index.html` contains `DynamoDB` inside `<section id="skills">`
- `index.html` does NOT contain `skills-placeholder` (placeholder removed)
</acceptance_criteria>
</task>

---

## Task 2: Education & Certifications Section — HTML

**Objective**: Replace `<section id="education">` placeholder with full education and certifications content.

<task>
<read_first>
- index.html (find `<section id="education">` block)
- .planning/phases/03-skills-education-certifications/03-CONTEXT.md
</read_first>
<action>
In `index.html`, find and replace the `<section id="education">` block with:

```html
<section id="education" class="section">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-tag">Background</span>
      <h2 class="section-title">Education &amp; Certifications</h2>
    </div>

    <div class="edu-certs-grid">

      <!-- Education -->
      <div class="edu-card glass-card hover-lift reveal">
        <div class="edu-icon">🎓</div>
        <div class="edu-content">
          <h3 class="edu-degree">Bachelor of Science — Information Technology</h3>
          <p class="edu-school">Hutech University</p>
          <p class="edu-location">Thu Duc, TP.HCM</p>
          <p class="edu-period">Sep 2021 – Sep 2025</p>
        </div>
      </div>

      <!-- Certifications -->
      <div class="certs-list reveal reveal-delay-1">
        <h3 class="certs-heading">Certifications</h3>

        <div class="cert-card glass-card hover-lift">
          <div class="cert-icon">🏆</div>
          <div class="cert-content">
            <h4 class="cert-name">Problem Solving</h4>
            <p class="cert-issuer">HackerRank</p>
            <p class="cert-date">Jul 2024</p>
          </div>
        </div>

        <div class="cert-card glass-card hover-lift">
          <div class="cert-icon">📜</div>
          <div class="cert-content">
            <h4 class="cert-name">JSON Path Test</h4>
            <p class="cert-issuer">KodeKloud</p>
            <p class="cert-date">Aug 2024</p>
          </div>
        </div>

        <div class="cert-card glass-card hover-lift">
          <div class="cert-icon">🔧</div>
          <div class="cert-content">
            <h4 class="cert-name">Backend Development &amp; APIs</h4>
            <p class="cert-issuer">FreeCodeCamp</p>
            <p class="cert-date">Aug 2024</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
```
</action>
<acceptance_criteria>
- `index.html` contains `Hutech University` inside `<section id="education">`
- `index.html` contains `HackerRank`
- `index.html` contains `FreeCodeCamp`
- `index.html` contains `KodeKloud`
- `index.html` does NOT contain `edu-placeholder` (placeholder removed)
</acceptance_criteria>
</task>

---

## Task 3: Skills & Education CSS

**Objective**: Append CSS for skills grid, education card, and certifications. Never overwrite existing CSS.

<task>
<read_first>
- assets/css/style.css (read end of file — append after Phase 2 styles)
</read_first>
<action>
Append to the END of `assets/css/style.css`:

```css
/* ═══════════════════════════════════════════════════════════
   Phase 3: Skills, Education & Certifications
   ═══════════════════════════════════════════════════════════ */

/* ─── Skills Grid ────────────────────────────────────────── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.skill-group {
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: var(--transition);
}
.skill-group:hover { transform: translateY(-4px); }
.skill-group-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.01em;
}
.skill-group-icon { font-size: 1rem; }
.skill-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.skill-chips .chip { font-size: 0.78rem; padding: 4px 10px; }

/* ─── Education & Certs Grid ─────────────────────────────── */
.edu-certs-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 28px;
  align-items: start;
  max-width: 960px;
  margin: 0 auto;
}

.edu-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 32px 28px;
}
.edu-icon { font-size: 2.5rem; flex-shrink: 0; margin-top: 2px; }
.edu-content {}
.edu-degree {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.4;
}
.edu-school {
  font-size: 0.9rem;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 4px;
}
.edu-location {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 4px;
}
.edu-period {
  font-size: 0.82rem;
  color: var(--text-muted);
}

.certs-heading {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 14px;
}
.certs-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.cert-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  transition: var(--transition);
}
.cert-card:hover { transform: translateX(4px); }
.cert-icon { font-size: 1.4rem; flex-shrink: 0; }
.cert-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}
.cert-issuer {
  font-size: 0.78rem;
  color: var(--accent);
  font-weight: 500;
}
.cert-date {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* ─── Responsive Phase 3 ─────────────────────────────────── */
@media (max-width: 1024px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .skills-grid { grid-template-columns: 1fr; }
  .edu-certs-grid { grid-template-columns: 1fr; }
  .cert-card:hover { transform: none; }
}
```
</action>
<acceptance_criteria>
- `assets/css/style.css` contains `.skills-grid`
- `assets/css/style.css` contains `.cert-card`
- `assets/css/style.css` contains `.edu-degree`
- `assets/css/style.css` contains `.skill-group`
</acceptance_criteria>
</task>

---

## Verification
1. Skills section shows 8 groups in a 4-column grid (2-column on tablet, 1 on mobile)
2. Each group has a proper heading and skill chips with hover glow
3. Education card shows Hutech University, IT, 2021–2025
4. Three certification cards are visible: HackerRank, KodeKloud, FreeCodeCamp
5. No placeholder text remains in skills or education sections
