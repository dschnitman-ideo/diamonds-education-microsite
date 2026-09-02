/* Inline SVG icon set — single stroke-based line icons, currentColor. */
const ICONS = {
  crown: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 13.5 L10 19 L16 9 L22 19 L28 13.5 L25.5 25 H6.5 Z" fill="currentColor"/></svg>`,

  diamond: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 9L7 3H17L21 9L12 21L3 9Z"/><path d="M3 9H21M7 3L9 9L12 21M17 3L15 9L12 21M9 9H15"/></svg>`,

  scale: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3V21M7 21H17M4 6H10M14 6H20M4 6L1.5 11.5C1.5 13 3 14 4 14C5 14 6.5 13 6.5 11.5L4 6ZM20 6L17.5 11.5C17.5 13 19 14 20 14C21 14 22.5 13 22.5 11.5L20 6Z"/></svg>`,

  mountain: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20L9.5 8L13 14L15.5 10L21 20H3Z"/><path d="M9.5 8L11 10.5"/></svg>`,

  loupe: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20L15.2 15.2"/><path d="M10.5 7.5L8 10.5L10.5 13.5"/></svg>`,

  chat: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5H20V16H9L4 20V5Z"/></svg>`,

  book: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5C4 4.5 6 4 12 4.5V19.5C6 19 4 19.5 4 19.5V4.5Z"/><path d="M20 4.5C20 4.5 18 4 12 4.5V19.5C18 19 20 19.5 20 19.5V4.5Z"/></svg>`,

  headphones: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14V12A8 8 0 0 1 20 12V14"/><rect x="2.5" y="13.5" width="4" height="6.5" rx="1.8"/><rect x="17.5" y="13.5" width="4" height="6.5" rx="1.8"/></svg>`,

  sparkle: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3L13.8 9.2L20 11L13.8 12.8L12 19L10.2 12.8L4 11L10.2 9.2L12 3Z"/><path d="M19 3L19.7 5.3L22 6L19.7 6.7L19 9L18.3 6.7L16 6L18.3 5.3L19 3Z"/></svg>`,

  star: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3L13.8 9.2L20 11L13.8 12.8L12 19L10.2 12.8L4 11L10.2 9.2L12 3Z"/></svg>`,

  bulb: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18H15M10 21H14M7 10A5 5 0 1 1 15.8 13.5C15.2 14.2 14.7 14.9 14.6 15.5C14.5 16 14.3 16.5 13.5 16.5H10.5C9.7 16.5 9.5 16 9.4 15.5C9.3 14.9 8.8 14.2 8.2 13.5A5 5 0 0 1 7 10Z"/></svg>`,
  calendar: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M3.5 9.5H20.5M8 3V6.5M16 3V6.5"/></svg>`,

  arrowRight: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12H19M13 6L19 12L13 18"/></svg>`,

  arrowLeft: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6L5 12L11 18"/></svg>`,

  check: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5L9.5 17L19 7"/></svg>`,

  x: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6L18 18M18 6L6 18"/></svg>`,

  play: `<svg class="ic" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5.5V18.5L19 12L7 5.5Z"/></svg>`,

  pause: `<svg class="ic" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>`,

  trophy: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4H17V10A5 5 0 0 1 7 10V4Z"/><path d="M7 5H4V7A3 3 0 0 0 7 9M17 5H20V7A3 3 0 0 1 17 9"/><path d="M12 15V18M9 21H15L14 18H10L9 21Z"/></svg>`,

  menu: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7H20M4 12H20M4 17H20"/></svg>`,

  gem: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 9L7 3H17L21 9L12 21L3 9Z"/></svg>`,

  user: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8.5" r="3.5"/><path d="M4.5 20C5.5 16 8.4 14 12 14C15.6 14 18.5 16 19.5 20"/></svg>`,

  volcano: `<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg"><path d="M20 120 L80 30 L100 55 L120 30 L180 120 Z" fill="var(--mantle-brown)"/><path d="M80 30 L92 42 L108 42 L120 30 L112 20 L88 20 Z" fill="var(--rust)"/><path d="M100 8 C 92 20 108 24 100 40" stroke="var(--rust)" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M85 14 C 80 24 92 26 88 36" stroke="var(--champagne-gold)" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,

  facetDiamond: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,20 150,60 175,70 100,190 25,70 50,60" fill="var(--diamond-white)" stroke="var(--warm-stone)" stroke-width="2"/><polygon points="100,20 150,60 100,80 50,60" fill="#fff" opacity="0.9" stroke="var(--warm-stone)" stroke-width="1.5"/><polygon points="50,60 100,80 75,110 25,70" fill="var(--kimberlite-green-soft)" stroke="var(--warm-stone)" stroke-width="1.5"/><polygon points="150,60 175,70 125,110 100,80" fill="var(--rust-soft)" stroke="var(--warm-stone)" stroke-width="1.5"/><polygon points="75,110 100,80 125,110 100,190" fill="var(--yellow-ground)" stroke="var(--warm-stone)" stroke-width="1.5"/></svg>`,
};

function icon(name, extra) {
  return (ICONS[name] || "").replace("<svg ", `<svg ${extra ? extra : ""} `);
}
