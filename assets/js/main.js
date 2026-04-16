/* ═══════════════════════════════════════════════════════════
   Truong Trung Nghia Portfolio — main.js
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Scroll Reveal ───────────────────────────────────────
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
  });

  // ─── Active Nav Link (IntersectionObserver) ──────────────
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { threshold: 0.35, rootMargin: `-${72}px 0px 0px 0px` }
  );

  sections.forEach((section) => navObserver.observe(section));

  // ─── Navbar Scroll Shrink ────────────────────────────────
  const navInner = document.querySelector('.nav-inner');
  const scrollThreshold = 50;

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      navInner?.classList.add('scrolled');
    } else {
      navInner?.classList.remove('scrolled');
    }
  }, { passive: true });

  // ─── Mobile Nav Toggle ───────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinksList = document.querySelector('.nav-links');

  if (navToggle && navLinksList) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinksList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen.toString());
    });

    // Close when a link is clicked
    navLinksList.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navLinksList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navLinksList.contains(e.target)) {
        navLinksList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ─── Smooth Scroll for anchor links ─────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 88; // nav height + breathing room
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ─── Stagger Reveal Children ─────────────────────────────
  // Adds slight delay-based stagger to child .reveal elements
  document.querySelectorAll('.about-grid, .hero-chips').forEach((parent) => {
    const children = parent.querySelectorAll('.reveal, .chip');
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.07}s`;
    });
  });

})();
