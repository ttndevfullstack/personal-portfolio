# Phase 2 Context: Experience & Projects

**Goal**: Build work history and detailed featured project sections with rich impact metrics.

## Decisions (carried forward from Phase 1)

- **Theme**: Premium dark — `#070d1a` background, electric blue/teal accent, glassmorphism cards
- **Interactions**: Subtle lift hover + glow (`hover-lift` class)
- **Typography**: Inter, loaded from Google Fonts
- **Layout**: Use existing `.container`, `.glass-card`, `.section`, `.section-header`, `.chip` classes
- **No new dependencies**: Vanilla HTML/CSS/JS only

## Domain Content — Work Experience

### TPS Software (04/2025–Present)
- Role: Full Stack Developer
- Location: Tan Binh, TP.HCM
- Tech: Laravel, React, AWS, Stripe
- Key achievements:
  - Built B2B2C digital checkout pipeline serving 1,000+ municipalities
  - Automated financial reconciliation engine → ~80% accounting time saved
  - Designed digital loyalty coin system (Furusato Nozei) → 25% repeat usage increase
  - Built RBAC role management dashboard → 50% faster admin onboarding

### QASoft Solution (09/2023–04/2025)
- Role: Full Stack Developer
- Location: Thu Duc, TP.HCM
- Tech: Laravel, CodeIgniter, React, AWS, Stripe, PayPal, OAuth2
- Key achievements:
  - Delivered 5+ production projects across multiple domains
  - Integrated Stripe/PayPal payment gateways with error handling and retry logic
  - Implemented CSRF protection, OAuth2 flows, JWT auth
  - Worked with AWS EC2, S3, Lambda, CloudFront

## Domain Content — Projects

### Unioss (Team: 8, Jun 2024–Nov 2024)
Furusato Nozei e-commerce + IoT vending machine platform (Japan):
- Core E-commerce: Product catalog, cart, checkout, order management
- IoT/Vending Machine terminal: 60% faster checkout times
- Automated Financial Settlement: 80% reconciliation time saved
- Order State Machine: 90%+ reduction in anomalies
- Digital Wallet & Loyalty Coins: 25% repeat usage increase
- Multi-Tenant Admin Dashboard: supports 1,000+ municipalities, 50% faster onboarding
- Tech: Laravel, React, MySQL, AWS, Redis, Docker

### Nippoh (Team: 6, Apr 2024–Present)
B2B IoT construction monitoring SaaS:
- AWS IoT Core + MQTT for real-time sensor data ingestion
- React SPA with WebAssembly for 3D construction visualization
- Cryptographic tamper detection for audit-proof compliance
- Azure AD SSO single sign-on
- Tech: Laravel, React, AWS IoT Core, WebAssembly, Azure AD

### Nail (Team: 6, Jun 2024–Nov 2024)
Multi-platform booking system:
- Multi-tenant architecture (multiple salon brands)
- OAuth2 social login, JWT refresh tokens
- Background job scheduling for appointment reminders
- 60% response time improvement via query optimization
- 35% error rate reduction via test coverage
- Tech: Laravel, React, MySQL, Redis, Docker

### Misa ERP (Team: 8, Dec 2023–Jun 2024)
ERP system for Misa Group:
- Multi-layer modular architecture (modules per business domain)
- RBAC role management across departments
- Large file uploads (AWS S3 + chunked upload)
- CI/CD pipeline (GitHub Actions + Docker)
- Redis master-slave + Sentinel for high availability
- REST API development for mobile integration
- Tech: Laravel, React, MySQL, Redis, AWS S3, Docker, GitHub Actions

## Canonical Refs

- `.planning/PROJECT.md`
- `.planning/REQUIREMENTS.md`
- `.planning/phases/01-foundation-hero/01-CONTEXT.md`
- `index.html` (Phase 1 output — must extend, not replace)
- `assets/css/style.css` (Phase 1 design system — must reuse classes)
