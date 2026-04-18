/**
 * ThemeSelector — Multi-theme system for Portfolio
 * Themes: midnight | arctic | forest | dusk
 * Persists via localStorage. Applied on <html> via data-theme attribute.
 */

const THEMES = [
  {
    id: 'midnight',
    label: 'Midnight',
    swatch: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
    swatchBorder: 'rgba(255,255,255,0.15)',
  },
  {
    id: 'arctic',
    label: 'Arctic',
    swatch: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
    swatchBorder: '#c7d2fe',
  },
  {
    id: 'forest',
    label: 'Forest',
    swatch: 'linear-gradient(135deg, #10b981, #059669)',
    swatchBorder: 'rgba(255,255,255,0.15)',
  },
  {
    id: 'dusk',
    label: 'Dusk',
    swatch: 'linear-gradient(135deg, #f472b6, #a855f7)',
    swatchBorder: 'rgba(255,255,255,0.15)',
  },
];

const STORAGE_KEY = 'portfolio-theme';
const DEFAULT_THEME = 'midnight';
const TRANSITION_CLASS = 'theme-transitioning';
const TRANSITION_DURATION = 400;

class ThemeSelector {
  constructor() {
    this.currentTheme = this._getStoredTheme();
    this.isOpen = false;
    this._transitionTimer = null;
    this._outsideClickHandler = this._handleOutsideClick.bind(this);
    this._keydownHandler = this._handleKeydown.bind(this);
    this.focusedIndex = -1;

    this._applyTheme(this.currentTheme, false);
    this._buildWidget();
  }

  // ─── Theme Application ───────────────────────────────────

  _getStoredTheme() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return THEMES.find(t => t.id === stored) ? stored : DEFAULT_THEME;
    } catch {
      return DEFAULT_THEME;
    }
  }

  _applyTheme(themeId, animate = true) {
    const html = document.documentElement;

    if (animate) {
      // Add transition class
      html.classList.add(TRANSITION_CLASS);
      clearTimeout(this._transitionTimer);
      this._transitionTimer = setTimeout(() => {
        html.classList.remove(TRANSITION_CLASS);
      }, TRANSITION_DURATION);
    }

    html.setAttribute('data-theme', themeId);
    this.currentTheme = themeId;

    try {
      localStorage.setItem(STORAGE_KEY, themeId);
    } catch { /* ignore storage errors */ }
  }

  // ─── Widget Construction ─────────────────────────────────

  _buildWidget() {
    const nav = document.querySelector('.nav-inner');
    if (!nav) return;

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'theme-selector';
    wrapper.setAttribute('id', 'theme-selector');

    // Create toggle button
    const btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.setAttribute('aria-label', 'Change theme');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.innerHTML = this._paletteIcon();
    btn.addEventListener('click', () => this._toggle());

    // Create dropdown panel
    const panel = document.createElement('div');
    panel.className = 'theme-panel';
    panel.id = 'theme-panel';
    panel.setAttribute('role', 'listbox');
    panel.setAttribute('aria-label', 'Select theme');

    const label = document.createElement('span');
    label.className = 'theme-panel-label';
    label.setAttribute('aria-hidden', 'true');
    label.textContent = 'Select theme';
    panel.appendChild(label);

    // Create option rows
    this._optionEls = THEMES.map((theme, idx) => {
      const option = document.createElement('button');
      option.className = 'theme-option';
      option.setAttribute('role', 'option');
      option.setAttribute('aria-selected', theme.id === this.currentTheme ? 'true' : 'false');
      option.setAttribute('data-theme-value', theme.id);
      option.setAttribute('tabindex', '-1');
      option.innerHTML = `
        <span class="theme-swatch" style="background:${theme.swatch};border-color:${theme.swatchBorder};" aria-hidden="true"></span>
        <span class="theme-option-label">${theme.label}</span>
        <svg class="theme-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-label="Active">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
      option.addEventListener('click', () => {
        this._selectTheme(theme.id);
      });
      option.addEventListener('keydown', (e) => this._handleOptionKeydown(e, idx));
      panel.appendChild(option);
      return option;
    });

    wrapper.appendChild(btn);
    wrapper.appendChild(panel);

    // Insert before nav-toggle (mobile hamburger) or at end of nav-inner
    const navToggle = nav.querySelector('.nav-toggle');
    if (navToggle) {
      nav.insertBefore(wrapper, navToggle);
    } else {
      nav.appendChild(wrapper);
    }

    this._btn = btn;
    this._panel = panel;
  }

  _paletteIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="13.5" cy="6.5" r="1.5"/>
      <circle cx="17.5" cy="10.5" r="1.5"/>
      <circle cx="8.5" cy="7.5" r="1.5"/>
      <circle cx="6.5" cy="12.5" r="1.5"/>
      <path d="M12 2C6.5 2 2 6.5 2 12a10 10 0 0 0 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>`;
  }

  // ─── Panel Open/Close ────────────────────────────────────

  _toggle() {
    this.isOpen ? this._close() : this._open();
  }

  _open() {
    this.isOpen = true;
    this._btn.setAttribute('aria-expanded', 'true');
    this._panel.classList.add('open');
    this.focusedIndex = THEMES.findIndex(t => t.id === this.currentTheme);

    document.addEventListener('click', this._outsideClickHandler, true);
    document.addEventListener('keydown', this._keydownHandler, true);
  }

  _close() {
    this.isOpen = false;
    this._btn.setAttribute('aria-expanded', 'false');
    this._panel.classList.remove('open');
    this.focusedIndex = -1;

    document.removeEventListener('click', this._outsideClickHandler, true);
    document.removeEventListener('keydown', this._keydownHandler, true);
  }

  // ─── Theme Selection ─────────────────────────────────────

  _selectTheme(themeId) {
    this._applyTheme(themeId, true);
    this._updateOptionStates();
    this._close();
    this._btn.focus();
  }

  _updateOptionStates() {
    this._optionEls.forEach((el) => {
      const selected = el.getAttribute('data-theme-value') === this.currentTheme;
      el.setAttribute('aria-selected', selected ? 'true' : 'false');
    });
  }

  // ─── Keyboard Navigation ─────────────────────────────────

  _handleKeydown(e) {
    if (!this.isOpen) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      this._close();
      this._btn.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.focusedIndex = (this.focusedIndex + 1) % THEMES.length;
      this._optionEls[this.focusedIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.focusedIndex = (this.focusedIndex - 1 + THEMES.length) % THEMES.length;
      this._optionEls[this.focusedIndex]?.focus();
    } else if (e.key === 'Tab') {
      this._close();
    }
  }

  _handleOptionKeydown(e, idx) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this._selectTheme(THEMES[idx].id);
    }
  }

  _handleOutsideClick(e) {
    const selector = document.getElementById('theme-selector');
    if (selector && !selector.contains(e.target)) {
      this._close();
    }
  }
}

// ─── Initialize ───────────────────────────────────────────
// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new ThemeSelector());
} else {
  new ThemeSelector();
}
