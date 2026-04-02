/**
 * BEHIND THE FRAME — COMPLETE v2.0
 * Top Navbar + Bottom-Left Game Menu + ESC key + Rich Home Page
 * GPU-Only Animations · IntersectionObserver reveals · 60 FPS
 */

//import { gsap } from 'gsap';
//import Lenis from '@studio-freight/lenis';
import { TOPICS, SCENE_DATA, CINEMAT_TOPICS, SOUND_TOPICS, THEMES, ABOUT_CONTENT, BLOG_POSTS } from './content.js';

// ─── SMOOTH SCROLL ──────────────────────────────────────────────────────────
const lenis = new Lenis({ 
  lerp: 0.1, 
  syncTouch: false,
  smoothWheel: true 
});
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);


// ─── IMAGE HELPER (Unsplash WebP + compressed) ──────────────────────────────
const IMG = (base, w = 1200) =>
  `${base}?auto=format&fit=crop&fm=webp&q=72&w=${w}`;

// ─── INLINE SVG ICONS ───────────────────────────────────────────────────────
const ICO = {
  home:       `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  book:       `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  film:       `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="2"/><line x1="7" x2="7" y1="2" y2="22"/><line x1="17" x2="17" y1="2" y2="22"/><line x1="2" x2="22" y1="12" y2="12"/></svg>`,
  camera:     `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  music:      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  heart:      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  edit:       `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  user:       `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  arrow:      `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
};

// ─── DATA ───────────────────────────────────────────────────────────────────
const PAGES = {
  home: {
    hero: {
      title: `I don't just watch movies.<br><em>I study them.</em>`,
      subtitle: 'Breaking down stories, scenes, emotions, and cinema.',
      bg: IMG('https://images.unsplash.com/photo-1485846234645-a62644f84728', 1600),
    },
    intro: `Cinema is more than entertainment. It is a symphony of vision, sound, and human truth. Behind the Frame is a space to learn how movies work — how a director's choice of light, a composer's note, or a writer's silence can define the emotional experience of millions of people.`,
    cards: [
      { id:'how-movies-work', title:'How Movies Work',  sub:'The Language of Cinema',  img: IMG('https://images.unsplash.com/photo-1536440136628-849c177e76a1', 700) },
      { id:'scene-breakdown', title:'Scene Breakdown',  sub:'Anatomy of a Moment',     img: IMG('https://images.unsplash.com/photo-1478720568477-152d9b164e26', 700) },
      { id:'cinematography',  title:'Cinematography',   sub:'The Painted Frame',        img: IMG('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4', 700) },
      { id:'sound-editing',   title:'Sound & Editing',  sub:'Pacing the Emotion',       img: IMG('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04', 700) },
      { id:'movie-themes',    title:'Movie Themes',     sub:'Meaning Behind Story',     img: IMG('https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0', 700) },
    ],
    scenes: [
      { title:'The Godfather — Opening',    year:'1972', cat:'Lighting & Acting', img: IMG('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c', 600) },
      { title:'Inception — Hallway Fight',  year:'2010', cat:'Practical Effects', img: IMG('https://images.unsplash.com/photo-1536440136628-849c177e76a1', 600) },
      { title:'Arrival — First Contact',    year:'2016', cat:'Sound & Score',     img: IMG('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba', 600) },
      { title:'Parasite — The Basement',    year:'2019', cat:'Mise-en-scène',     img: IMG('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85', 600) },
      { title:'No Country — Coin Toss',     year:'2007', cat:'Tension & Silence', img: IMG('https://images.unsplash.com/photo-1516280440614-37939bbacd81', 600) },
    ],
    theory: [
      { title:'Character Arc',   sub:'The internal journey of a person across a story.' },
      { title:'Theme',           sub:'The moral question a film asks its audience.' },
      { title:'Plot Twists',     sub:'Subverting expectations through earned surprise.' },
      { title:'Villains',        sub:'Antagonism as the catalyst for growth.' },
      { title:'Symbolism',       sub:'Objects and images that carry deeper meaning.' },
      { title:'Dialogue',        sub:'What is said — and what is deliberately not.' },
    ],
  },

  'how-movies-work': {
    hero: { title:`Master the <em>Story</em>`, subtitle:'The infrastructure of cinematic narrative.', bg: IMG('https://images.unsplash.com/photo-1512070670240-ce35323672e5') },
    topics: [
      { title:'What is Story',      sub:'The core conflict driving every great narrative.' },
      { title:'Character Arc',      sub:'The internal transformation across the film.' },
      { title:'Theme',              sub:'The soul and moral question of the movie.' },
      { title:'Villains',           sub:'Great antagonists reveal who the hero really is.' },
      { title:'Plot Twists',        sub:'Earning surprise through planted foreshadowing.' },
      { title:'Worldbuilding',      sub:'The consistent rules of the film\'s reality.' },
      { title:'Dialogue & Subtext', sub:'Meaning hidden beneath what characters say.' },
      { title:'Symbolism',          sub:'Visual metaphors that deepen meaning.' },
      { title:'Emotional Scenes',   sub:'Engineering genuine connection with viewers.' },
    ],
  },

  'scene-breakdown': {
    hero: { title:`Iconic <em>Moments</em>`, subtitle:'Deconstructing the scenes that defined cinema.', bg: IMG('https://images.unsplash.com/photo-1542204172-3c224209930f') },
    scenes: [
      { title:'The Godfather — Opening',    year:'1972', cat:'Lighting & Acting', img: IMG('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c', 700) },
      { title:'Inception — Hallway Fight',  year:'2010', cat:'Practical Effects', img: IMG('https://images.unsplash.com/photo-1536440136628-849c177e76a1', 700) },
      { title:'Arrival — First Contact',    year:'2016', cat:'Sound & Score',     img: IMG('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba', 700) },
      { title:'Parasite — The Basement',    year:'2019', cat:'Mise-en-scène',     img: IMG('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85', 700) },
      { title:'No Country — Coin Toss',     year:'2007', cat:'Tension & Silence', img: IMG('https://images.unsplash.com/photo-1516280440614-37939bbacd81', 700) },
      { title:'Se7en — The Box',            year:'1995', cat:'Pacing & Payoff',   img: IMG('https://images.unsplash.com/photo-1460881752516-79ef884960cc', 700) },
    ],
  },

  cinematography: {
    hero: { title:`The <em>Painted</em> Frame`, subtitle:'Camera, lighting, and the visual language of film.', bg: IMG('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4') },
    items: [
      { title:'Camera Shots',    text:'From extreme close-ups to sweeping wide shots — every focal length carries emotional weight. Distance determines intimacy, scale, and power between characters.' },
      { title:'Camera Movement', text:'Tracking shots follow action and build tension. The dolly-zoom warps reality. Hand-held creates anxiety. Every movement is a deliberate narrative statement.' },
      { title:'Lighting Design', text:'High-key lighting implies safety. Low-key shadows breed danger and mystery. Lighting is not decoration — it is character and mood made visible.' },
      { title:'Color Theory',    text:'Warm palettes suggest comfort and nostalgia. Cool tones evoke isolation and grief. Color grading is the final emotional coat of paint on a finished film.' },
    ],
  },

  'sound-editing': {
    hero: { title:`The <em>Heartbeat</em>`, subtitle:'Sound design and the rhythm of the cut.', bg: IMG('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04') },
    items: [
      { title:'Sound Design',    text:'Every ambient sound is a deliberate choice. Foley recreates the physical world. The soundscape is the invisible layer that makes the visible world feel real and present.' },
      { title:'Background Score', text:'Music tells the audience what to feel before they consciously understand why. The score is the film\'s emotional backbone — guiding perception, amplifying feeling.' },
      { title:'Editing & Cuts',  text:'Jump cuts create anxiety. Match cuts reveal hidden connection. The invisible edit maintains immersion. A great editor controls the heartbeat of a film.' },
      { title:'Pacing & Silence', text:'A long take builds unbearable tension. Rapid cuts escalate chaos. Silence — real silence — is the most powerful sound a filmmaker can use.' },
    ],
  },

  'movie-themes': {
    hero: { title:`Universal <em>Truths</em>`, subtitle:'The meaning encoded beneath every great story.', bg: IMG('https://images.unsplash.com/photo-1478720568477-152d9b164e26') },
    themes: [
      { name:'Love',              ex:'Eternal Sunshine of the Spotless Mind, La La Land, Casablanca' },
      { name:'Revenge',           ex:'John Wick, Kill Bill, Oldboy, The Revenant' },
      { name:'Freedom',           ex:'The Shawshank Redemption, Gladiator, 1917' },
      { name:'Sacrifice',         ex:'Interstellar, Saving Private Ryan, Arrival' },
      { name:'Isolation',         ex:'Cast Away, Moon, Blade Runner 2049' },
      { name:'Power & Corruption', ex:'The Godfather, Citizen Kane, Joker' },
    ],
  },

  about: {
    hero: { title:`The <em>Observer</em>`, subtitle:'CS Student. Film Junkie. Perpetual Learner.', bg: IMG('https://images.unsplash.com/photo-1493711662062-fa541adb3fc8') },
    content: `I am a Computer Science student who found a deep obsession at the intersection of technology and art. Cinema, to me, is the most complex art form humanity has ever engineered — a medium where every pixel, every note, every silence is a calculated decision designed to make millions of people feel something specific. This platform is where I reverse-engineer that magic.`,
  },
};

const MENU_ITEMS = [
  { id:'home',            label:'Home',           sub:'Start the journey',        icon: ICO.home   },
  { id:'how-movies-work', label:'How Movies Work', sub:'Understand storytelling',  icon: ICO.book   },
  { id:'scene-breakdown', label:'Scene Breakdown', sub:'Break down iconic scenes', icon: ICO.film   },
  { id:'cinematography',  label:'Cinematography',  sub:'Camera, lighting, color',  icon: ICO.camera },
  { id:'sound-editing',   label:'Sound & Editing', sub:'Sound and pacing',         icon: ICO.music  },
  { id:'movie-themes',    label:'Movie Themes',    sub:'Meaning behind stories',   icon: ICO.heart  },
  { id:'blog',            label:'Blog / Notes',    sub:'My learning notes',        icon: ICO.edit   },
  { id:'about',           label:'About',           sub:'About me and my journey',  icon: ICO.user   },
];

// ─── STATE ──────────────────────────────────────────────────────────────────
let currentPath = 'home';
let menuOpen    = false;
let transitioning = false;
let revealObserver = null;

// ─── CURSOR (rAF-lerp, zero GC) ─────────────────────────────────────────────
function initCursor() {
  const el = document.getElementById('cursor');
  if (!el || window.matchMedia('(hover:none)').matches) {
    if (el) el.style.display = 'none';
    return;
  }
  let mx = -100, my = -100, cx = -100, cy = -100;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
  (function loop() {
    cx += (mx - cx) * 0.16; cy += (my - cy) * 0.16;
    el.style.transform = `translate(${cx - 13}px,${cy - 13}px)`;
    requestAnimationFrame(loop);
  })();
}

// ─── NAVBAR ─────────────────────────────────────────────────────────────────
function initNavbar() {
  const nav = document.getElementById('top-nav');
  const hamburger = document.getElementById('nav-hamburger');
  const links = document.getElementById('nav-links');

  // Transparent → solid on scroll
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial check

  // Mobile hamburger
  hamburger?.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    links.classList.toggle('open', open);
  });

  // Close mobile nav on link click
  links?.addEventListener('click', e => {
    hamburger.classList.remove('open');
    links.classList.remove('open');
  });

  updateNavActive();
}

function updateNavActive() {
  document.querySelectorAll('.nav-link, .nav-logo').forEach(el => {
    el.classList.toggle('active', el.dataset.path === currentPath);
  });
}

// ─── HOVER SOUND (Web Audio API, tiny synth click) ────────────────────────
let audioCtx = null;
function playMenuHover() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(820, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(480, audioCtx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.035, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.12);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.12);
  } catch (_) {}
}

// ─── MENU ITEMS BUILD ────────────────────────────────────────────────────────
function buildSideMenu() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  nav.innerHTML = MENU_ITEMS.map((item, i) => `
    <a href="#" class="nav-item${currentPath === item.id ? ' active' : ''}" data-path="${item.id}" data-hover-sound>
      <span class="nav-icon">${item.icon}</span>
      <span class="nav-text">
        <span class="nav-text-label">${item.label}</span>
        <small>${item.sub}</small>
      </span>
      <span class="nav-item-num">${String(i + 1).padStart(2, '0')}</span>
    </a>
  `).join('');

  // Attach hover sounds
  nav.querySelectorAll('[data-hover-sound]').forEach(el => {
    el.addEventListener('mouseenter', playMenuHover, { passive: true });
  });
}

// ─── MENU OPEN / CLOSE ────────────────────────────────────────────────────
/** Set background image of the GOW menu from a running page image or fallback */
function setMenuBg() {
  const bgImg = document.getElementById('menu-bg-img');
  if (!bgImg) return;
  // Try to grab the current page hero image src
  const heroImg = document.querySelector('.hero-bg img, .page-hero-bg img');
  const src = heroImg
    ? heroImg.src
    : IMG('https://images.unsplash.com/photo-1485846234645-a62644f84728', 1600);
  if (bgImg.src !== src) bgImg.src = src;
}

function openMenu() {
  if (menuOpen) return;
  menuOpen = true;
  const btn  = document.getElementById('game-menu-btn');
  const menu = document.getElementById('side-menu');
  btn.classList.add('active');
  btn.setAttribute('aria-expanded', 'true');
  menu.classList.add('active');

  // Stop Lenis and lock body
  lenis.stop();
  document.body.style.overflow = 'hidden';
  document.getElementById('app').style.pointerEvents = 'none';

  setMenuBg();

  const items = menu.querySelectorAll('.nav-item');
  gsap.fromTo(items,
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.055, delay: 0.25, duration: 0.5, ease: 'power3.out', force3D: true }
  );
}

function closeMenu() {
  if (!menuOpen) return;
  menuOpen = false;
  const btn  = document.getElementById('game-menu-btn');
  const menu = document.getElementById('side-menu');
  btn.classList.remove('active');
  btn.setAttribute('aria-expanded', 'false');
  menu.classList.remove('active');

  document.body.style.overflow = '';
  document.getElementById('app').style.pointerEvents = 'auto';
  lenis.start();
}

// ─── INTERSECTION OBSERVER (CSS-driven reveals, zero per-frame cost) ─────────
function initReveal() {
  revealObserver?.disconnect();
  revealObserver = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    }),
    { rootMargin: '0px 0px -70px 0px', threshold: 0.08 }
  );
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale')
    .forEach(el => revealObserver.observe(el));
}

// ─── PAGE TRANSITION ────────────────────────────────────────────────────────
async function navigateTo(path, animate = true) {
  if (transitioning || path === currentPath) return;
  if (menuOpen) closeMenu();

  const overlay = document.getElementById('transition-overlay');
  transitioning = true;

  if (animate) {
    overlay.style.display = 'block';
    gsap.set(overlay, { yPercent: 100 });
    await gsap.to(overlay, { yPercent: 0, duration: 0.5, ease: 'expo.in', force3D: true });
  }

  currentPath = path;
  buildSideMenu();
  updateNavActive();
  renderPage(path);
  window.scrollTo(0, 0);

  // Two rAF ticks to let DOM render before observing
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  initReveal();

  if (animate) {
    await gsap.to(overlay, { yPercent: -100, duration: 0.5, ease: 'expo.out', force3D: true });
    overlay.style.display = 'none';
    gsap.set(overlay, { yPercent: 100 });
  }
  transitioning = false;
}

// ─── TEMPLATE HELPERS ───────────────────────────────────────────────────────
const lazyImg = (src, alt, cls='') =>
  `<img src="${src}" alt="${alt}" class="${cls}" loading="lazy" decoding="async">`;

function pageHeroHTML({ title, subtitle, bg }) {
  return `
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="${bg}" alt="" loading="eager" decoding="async">
        <div class="page-hero-bg-gradient"></div>
      </div>
      <div class="page-hero-content">
        <h1>${title}</h1>
        <p class="page-hero-subtitle">${subtitle}</p>
      </div>
    </section>`;
}

function footerHTML() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand reveal">
            <h2>Behind The Frame</h2>
            <p>A dedicated platform for deep analytical dives into the world of cinema — for those who see more than just moving pictures.</p>
            <p class="footer-tagline">"Cinema is emotion engineered through story, sound, and image."</p>
          </div>
          <div class="footer-col reveal d1">
            <h4>Explore</h4>
            <ul>
              <li data-path="how-movies-work" style="cursor:pointer">How Movies Work</li>
              <li data-path="scene-breakdown" style="cursor:pointer">Scene Breakdown</li>
              <li data-path="cinematography" style="cursor:pointer">Cinematography</li>
              <li data-path="sound-editing" style="cursor:pointer">Sound & Editing</li>
            </ul>
          </div>
          <div class="footer-col reveal d2">
            <h4>Connect</h4>
            <ul>
              <li>Letterboxd</li>
              <li>YouTube</li>
              <li>Twitter / X</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-quote">"Cinema is a matter of what's in the frame and what's out." — Martin Scorsese</p>
          <p class="footer-copy">© 2026 Behind The Frame</p>
        </div>
      </div>
    </footer>`;
}


// ─── BACK BUTTON ──────────────────────────────────────────────────────────────
const backBtn = (parent, label) =>
  `<div class="back-bar container"><button class="btn-back" data-path="${parent}">${ICO.arrow} Back to ${label}</button></div>`;

// ─── DETAIL PAGE RENDERERS ────────────────────────────────────────────────────
function renderTopicPage(id) {
  const t = TOPICS[id];
  if (!t) return;

  const topicKeys = Object.keys(TOPICS);
  const currentIndex = topicKeys.indexOf(id);
  const prevId = currentIndex > 0 ? topicKeys[currentIndex - 1] : null;
  const nextId = currentIndex < topicKeys.length - 1 ? topicKeys[currentIndex + 1] : null;

  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- Course Top Bar -->
    <div class="course-top-bar sticky-top">
      <div class="course-top-left">
        <a class="btn-back-inner" data-path="how-movies-work" style="cursor:pointer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </a>
        <nav class="breadcrumb">
          <a data-path="home">Home</a>
          <span>/</span>
          <a data-path="how-movies-work">Story Basics</a>
          <span>/</span>
          <span>${t.label}</span>
        </nav>
      </div>
      <div class="course-top-center">
        <h2>${t.label}</h2>
      </div>
      <div class="course-top-right">
        <div class="progress-mini">
          <span class="topic-count">TOPIC ${currentIndex + 1} / ${topicKeys.length}</span>
          <div class="course-progress-container">
            <div class="course-progress-bar" id="topicProgressBar" style="width: 0%"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Topic Layout -->
    <div class="topic-layout grid-layout">
      <!-- Mini Nav (Side) -->
      <aside class="topic-sidebar sticky-sidebar">
        <nav class="topic-mini-nav">
          <a href="#definition" class="mini-nav-item active" data-section="definition">Definition</a>
          <a href="#why-matters" class="mini-nav-item" data-section="why-matters">Why It Matters</a>
          <a href="#how-it-works" class="mini-nav-item" data-section="how-it-works">How It Works</a>
          <a href="#types" class="mini-nav-item" data-section="types">Types</a>
          <a href="#examples" class="mini-nav-item" data-section="examples">Examples</a>
          <a href="#mistakes" class="mini-nav-item" data-section="mistakes">Mistakes</a>
          <a href="#summary" class="mini-nav-item" data-section="summary">Summary</a>
        </nav>
      </aside>

      <!-- Main Content Area -->
      <main class="topic-content-main">
        <!-- Topic Hero Section -->
        <section class="topic-hero" style="background-image: url('${IMG(t.bg, 1600)}')">
          <div class="topic-hero-overlay"></div>
          <div class="topic-hero-content container">
            <h1 class="reveal">${t.label}</h1>
            <p class="reveal d1">${t.summary || t.definition.substring(0, 100) + '...'}</p>
          </div>
        </section>

        <!-- Content Cards -->
        <div class="topic-sections-container container">
          <section id="definition" class="topic-section-wrapper">
            <div class="topic-section-card reveal">
              <h3>Simple Explanation</h3>
              <p class="topic-definition-text">${t.definition}</p>
            </div>
          </section>

          <section id="why-matters" class="topic-section-wrapper">
            <div class="topic-section-card reveal d1">
              <h3>Why This Matters</h3>
              <p>${t.whyMatters}</p>
            </div>
          </section>

          <section id="how-it-works" class="topic-section-wrapper">
            <div class="topic-section-card reveal d2">
              <h3>How It Works</h3>
              <p>${t.howItWorks}</p>
            </div>
          </section>

          <section id="types" class="topic-section-wrapper">
            <div class="topic-section-card reveal">
              <h3>Types & Styles</h3>
              <div class="topic-card-grid">
                ${t.types.map(tp => `
                  <div class="topic-sub-card">
                    <h4>${tp.name}</h4>
                    <p>${tp.desc}</p>
                  </div>`).join('')}
              </div>
            </div>
          </section>

          <section id="examples" class="topic-section-wrapper">
            <div class="topic-section-card reveal">
              <h3>Movie Examples</h3>
              <div class="topic-examples-grid">
                ${t.examples.map(ex => `
                  <div class="topic-example-box">
                    <strong>${ex.title} (${ex.year})</strong>
                    <p>${ex.explanation}</p>
                  </div>`).join('')}
              </div>
            </div>
          </section>

          <section id="mistakes" class="topic-section-wrapper">
            <div class="topic-section-card reveal">
              <h3>Common Mistakes</h3>
              <ul class="topic-mistakes-list">
                ${t.mistakes.map(m => `<li>${m}</li>`).join('')}
              </ul>
            </div>
          </section>

          <section id="summary" class="topic-section-wrapper">
            <div class="topic-section-card reveal summary-card">
              <h3>Personal Summary</h3>
              <blockquote class="topic-quote">"${t.myLearning}"</blockquote>
            </div>
          </section>

          <!-- Navigation Footer -->
          <footer class="cinematic-nav-footer">
            ${prevId ? `
              <div class="big-nav-btn prev" data-path="topic--${prevId}" style="cursor:pointer">
                <span class="nav-label">PREVIOUS TOPIC</span>
                <span class="nav-title">${TOPICS[prevId].label}</span>
              </div>` : '<span></span>'}

            <div class="big-nav-center" data-path="how-movies-work">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>STORY BASICS</span>
            </div>

            ${nextId ? `
              <div class="big-nav-btn next" data-path="topic--${nextId}" style="cursor:pointer">
                <span class="nav-label">NEXT TOPIC</span>
                <span class="nav-title">${TOPICS[nextId].label}</span>
              </div>` : `
              <div class="big-nav-btn next" data-path="cinematography" style="cursor:pointer">
                <span class="nav-label">FINISH LEVEL 1</span>
                <span class="nav-title">VIEW CINEMATOGRAPHY</span>
              </div>`}
          </footer>
        </div>
      </main>
    </div>
  `;

  // --- UI Interactivity ---
  const handleCourseScroll = () => {
    const pBar = document.getElementById('topicProgressBar');
    if (!pBar) return;
    
    // Progress bar logic
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / total) * 100;
    pBar.style.width = `${progress}%`;

    // Active link highlighting
    const sections = document.querySelectorAll('.topic-section-wrapper');
    const navItems = document.querySelectorAll('.mini-nav-item');
    
    let currentSectionId = "";
    sections.forEach(sec => {
      const top = sec.offsetTop;
      if (window.scrollY >= top - 200) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentSectionId}`) {
        item.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleCourseScroll);
  // Cleanup
  window.addEventListener('hashchange', () => {
    window.removeEventListener('scroll', handleCourseScroll);
  }, { once: true });
}

function renderScenePage(id) {
  const s = SCENE_DATA[id];
  if (!s) return;
  const app = document.getElementById('app');
  
  const sceneKeys = Object.keys(SCENE_DATA);
  const idx = sceneKeys.indexOf(id);
  const prevId = idx > 0 ? sceneKeys[idx - 1] : null;
  const nextId = idx < sceneKeys.length - 1 ? sceneKeys[idx + 1] : null;

  const fields = [
    ['Scene Summary',    s.summary],
    ['Purpose of Scene', s.purpose],
    ['Character',        s.character],
    ['Camera',           s.camera],
    ['Lighting',         s.lighting],
    ['Color',            s.color],
    ['Sound & Score',    s.sound],
    ['Editing',          s.editing],
    ['Key Dialogue',     s.dialogue],
    ['Theme',            s.theme],
    ['Symbolism',        s.symbolism],
    ['Emotion Created',  s.emotion],
    ['My Learning',      s.myLearning],
  ];

  app.innerHTML = `
    <!-- Top Bar -->
    <div class="course-top-bar sticky-top">
      <div class="course-top-left">
        <a class="btn-back-inner" data-path="scene-breakdown" style="cursor:pointer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </a>
        <nav class="breadcrumb">
          <a data-path="home">Home</a>
          <span>/</span>
          <a data-path="scene-breakdown">Breakdowns</a>
          <span>/</span>
          <span>${s.title}</span>
        </nav>
      </div>
      <div class="course-top-center">
        <h2>${s.title}</h2>
      </div>
      <div class="course-top-right">
        <div class="progress-mini">
          <span class="topic-count">SCENE 0${idx+1} / 0${sceneKeys.length}</span>
        </div>
      </div>
    </div>

    <div class="scene-detail-hero" style="background-image:url('${IMG(s.img,1400)}')">
      <div class="scene-detail-hero-overlay"></div>
      <div class="scene-detail-hero-content">
        <span class="scene-detail-film">${s.film} · ${s.year} · Dir. ${s.director}</span>
        <h1>${s.title}</h1>
      </div>
    </div>

    <div class="scene-detail-body">
      <div class="breakdown-grid container">
        ${fields.map(([label, val], i) => `
          <div class="breakdown-row reveal d${(i%3)+1}">
            <div class="breakdown-label">${label}</div>
            <div class="breakdown-value">${val}</div>
          </div>`).join('')}
      </div>

      <!-- Bottom Nav -->
      <footer class="cinematic-nav-footer">
        ${prevId ? `
          <div class="big-nav-btn prev" data-path="scene--${prevId}" style="cursor:pointer">
            <span class="nav-label">PREVIOUS BREAKDOWN</span>
            <span class="nav-title">${SCENE_DATA[prevId].title}</span>
          </div>` : '<span></span>'}

        <div class="big-nav-center" data-path="scene-breakdown">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>
          </svg>
          <span>ALL BREAKDOWNS</span>
        </div>

        ${nextId ? `
          <div class="big-nav-btn next" data-path="scene--${nextId}" style="cursor:pointer">
            <span class="nav-label">NEXT BREAKDOWN</span>
            <span class="nav-title">${SCENE_DATA[nextId].title}</span>
          </div>` : '<span></span>'}
      </footer>
    </div>
    ${footerHTML()}`;
}


function renderCinematTopic(id) {
  const t = CINEMAT_TOPICS[id];
  if (!t) return;

  const keys = Object.keys(CINEMAT_TOPICS);
  const idx = keys.indexOf(id);
  const prevId = idx > 0 ? keys[idx - 1] : null;
  const nextId = idx < keys.length - 1 ? keys[idx + 1] : null;

  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- Top Bar -->
    <div class="course-top-bar sticky-top">
      <div class="course-top-left">
        <a class="btn-back-inner" data-path="cinematography" style="cursor:pointer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </a>
        <nav class="breadcrumb">
          <a data-path="home">Home</a>
          <span>/</span>
          <a data-path="cinematography">Cinematography</a>
          <span>/</span>
          <span>${t.label}</span>
        </nav>
      </div>
      <div class="course-top-center">
        <h2>${t.label}</h2>
      </div>
      <div class="course-top-right">
        <div class="progress-mini">
          <span class="topic-count">0${idx+1} — ${t.cat}</span>
        </div>
      </div>
    </div>

    <!-- Collection Layout -->
    <div class="topic-layout grid-layout">
      <!-- Sidebar Nav -->
      <aside class="topic-sidebar sticky-sidebar">
        <nav class="topic-mini-nav">
          ${t.subtopics.map((sub, i) => `
            <a href="#${sub.id}" class="mini-nav-item ${i===0?'active':''}" data-section="${sub.id}">${sub.name}</a>
          `).join('')}
        </nav>
      </aside>

      <main class="topic-content-main">
        <!-- Topic Hero -->
        <section class="topic-hero" style="background-image: url('${t.bg}')">
          <div class="topic-hero-overlay"></div>
          <div class="topic-hero-content reveal-left">
            <span class="topic-hero-num">0${idx+1} — STUDY</span>
            <h1>${t.label}</h1>
            <p>${t.short}</p>
          </div>
        </section>

        <!-- Grid Cards -->
        <div class="container">
          <div class="collection-grid">
            ${t.subtopics.map((sub, i) => `
              <div class="inner-card reveal d${(i%3)+1}" id="${sub.id}">
                <h3>${sub.name}</h3>
                <div class="inner-card-content">
                  <div class="inner-card-field">
                    <span class="inner-card-label">When To Use</span>
                    <p class="inner-card-text">${sub.when}</p>
                  </div>
                  <div class="inner-card-field">
                    <span class="inner-card-label">Emotion Created</span>
                    <p class="inner-card-text">${sub.emotion}</p>
                  </div>
                  <div class="inner-card-field">
                    <span class="inner-card-label">Movie Example</span>
                    <div class="inner-card-example">
                      <p class="inner-card-text">${sub.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Bottom Nav -->
          <footer class="cinematic-nav-footer">
            ${prevId ? `
              <div class="big-nav-btn prev" data-path="cinemat--${prevId}" style="cursor:pointer">
                <span class="nav-label">PREVIOUS</span>
                <span class="nav-title">${CINEMAT_TOPICS[prevId].label}</span>
              </div>` : '<span></span>'}

            <div class="big-nav-center" data-path="cinematography">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>
              </svg>
              <span>CINEMATOGRAPHY</span>
            </div>

            ${nextId ? `
              <div class="big-nav-btn next" data-path="cinemat--${nextId}" style="cursor:pointer">
                <span class="nav-label">NEXT</span>
                <span class="nav-title">${CINEMAT_TOPICS[nextId].label}</span>
              </div>` : `
              <div class="big-nav-btn next" data-path="sound-editing" style="cursor:pointer">
                <span class="nav-label">COMPLETED</span>
                <span class="nav-title">VIEW SOUND & EDITING</span>
              </div>`}
          </footer>
        </div>
      </main>
    </div>
    ${footerHTML()}`;

  // Re-attach sidebar scroll logic
  initCollectionScroll();
}

function renderSoundTopic(id) {
  const t = SOUND_TOPICS[id];
  if (!t) return;

  const keys = Object.keys(SOUND_TOPICS);
  const idx = keys.indexOf(id);
  const prevId = idx > 0 ? keys[idx - 1] : null;
  const nextId = idx < keys.length - 1 ? keys[idx + 1] : null;

  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- Top Bar -->
    <div class="course-top-bar sticky-top">
      <div class="course-top-left">
        <a class="btn-back-inner" data-path="sound-editing" style="cursor:pointer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </a>
        <nav class="breadcrumb">
          <a data-path="home">Home</a>
          <span>/</span>
          <a data-path="sound-editing">Sound & Editing</a>
          <span>/</span>
          <span>${t.label}</span>
        </nav>
      </div>
      <div class="course-top-center">
        <h2>${t.label}</h2>
      </div>
      <div class="course-top-right">
        <div class="progress-mini">
          <span class="topic-count">0${idx+1} — ${t.cat}</span>
        </div>
      </div>
    </div>

    <!-- Collection Layout -->
    <div class="topic-layout grid-layout">
      <!-- Sidebar Nav -->
      <aside class="topic-sidebar sticky-sidebar">
        <nav class="topic-mini-nav">
          ${t.subtopics.map((sub, i) => `
            <a href="#${sub.id}" class="mini-nav-item ${i===0?'active':''}" data-section="${sub.id}">${sub.name}</a>
          `).join('')}
        </nav>
      </aside>

      <main class="topic-content-main">
        <!-- Topic Hero -->
        <section class="topic-hero" style="background-image: url('${t.bg}')">
          <div class="topic-hero-overlay"></div>
          <div class="topic-hero-content reveal-left">
            <span class="topic-hero-num">0${idx+1} — SOUND STUDY</span>
            <h1>${t.label}</h1>
            <p>${t.short}</p>
          </div>
        </section>

        <!-- Grid Cards -->
        <div class="container">
          <div class="collection-grid">
            ${t.subtopics.map((sub, i) => `
              <div class="inner-card reveal d${(i%3)+1}" id="${sub.id}">
                <h3>${sub.name}</h3>
                <div class="inner-card-content">
                  <div class="inner-card-field">
                    <span class="inner-card-label">${sub.what ? 'What It Is' : 'When To Use'}</span>
                    <p class="inner-card-text">${sub.what || sub.when}</p>
                  </div>
                  <div class="inner-card-field">
                    <span class="inner-card-label">${sub.why ? 'Why Used' : 'Emotion Created'}</span>
                    <p class="inner-card-text">${sub.why || sub.emotion}</p>
                  </div>
                  <div class="inner-card-field">
                    <span class="inner-card-label">Movie Example</span>
                    <div class="inner-card-example">
                      <p class="inner-card-text">${sub.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Bottom Nav -->
          <footer class="cinematic-nav-footer">
            ${prevId ? `
              <div class="big-nav-btn prev" data-path="sound--${prevId}" style="cursor:pointer">
                <span class="nav-label">PREVIOUS</span>
                <span class="nav-title">${SOUND_TOPICS[prevId].label}</span>
              </div>` : '<span></span>'}

            <div class="big-nav-center" data-path="sound-editing">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
              </svg>
              <span>SOUND & EDITING</span>
            </div>

            ${nextId ? `
              <div class="big-nav-btn next" data-path="sound--${nextId}" style="cursor:pointer">
                <span class="nav-label">NEXT</span>
                <span class="nav-title">${SOUND_TOPICS[nextId].label}</span>
              </div>` : `
              <div class="big-nav-btn next" data-path="movie-themes" style="cursor:pointer">
                <span class="nav-label">COMPLETED</span>
                <span class="nav-title">EXPLORE MOVIE THEMES</span>
              </div>`}
          </footer>
        </div>
      </main>
    </div>
    ${footerHTML()}`;

  initCollectionScroll();
}

function renderThemePage(id) {
  const t = THEMES.find(th => th.id === id);
  if (!t) return;
  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- Top Bar -->
    <div class="course-top-bar sticky-top">
      <div class="course-top-left">
        <a class="btn-back-inner" data-path="movie-themes" style="cursor:pointer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </a>
        <nav class="breadcrumb">
          <a data-path="home">Home</a>
          <span>/</span>
          <a data-path="movie-themes">Themes</a>
          <span>/</span>
          <span>${t.name}</span>
        </nav>
      </div>
      <div class="course-top-center">
        <h2>${t.name}</h2>
      </div>
      <div class="course-top-right">
        <div class="progress-mini">
          <span class="topic-count">PATTERN ANALYSIS</span>
        </div>
      </div>
    </div>

    <!-- Theme layout using established sections classes -->
    <section class="topic-content-main">
      <div class="topic-layout" style="grid-template-columns: 1fr;">
        <div class="container" style="max-width: 1000px; padding: 4rem 0;">
          <div class="topic-section-wrapper">
             <div class="topic-section-card reveal">
               <h3>Introduction</h3>
               <p class="topic-definition-text">${t.meaning}</p>
             </div>
          </div>

          <div class="topic-section-wrapper">
             <div class="topic-section-card reveal d1">
               <h3>Explanation</h3>
               <p>${t.explanation}</p>
             </div>
          </div>

          <div class="topic-section-wrapper">
             <div class="topic-section-card reveal d2">
               <h3>Core Filmography</h3>
               <div class="theme-film-list" style="margin-top: 2rem;">
                 ${t.films.map(f => `<span class="theme-film-tag">${f}</span>`).join('')}
               </div>
             </div>
          </div>

          <div class="topic-section-wrapper">
             <div class="topic-section-card reveal d3">
               <h3>Directorial Execution</h3>
               <p>${t.howDirectors}</p>
             </div>
          </div>

          <!-- Bottom Nav -->
          <footer class="cinematic-nav-footer">
            <span></span>
            <div class="big-nav-center" data-path="movie-themes">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
              <span>ALL THEMES</span>
            </div>
            <span></span>
          </footer>
        </div>
      </div>
    </section>
    ${footerHTML()}`;
}

function initCollectionScroll() {
  const sidebarLinks = document.querySelectorAll('.mini-nav-item');
  const sections = Array.from(sidebarLinks).map(link => document.getElementById(link.getAttribute('href').slice(1)));
  
  const handleScroll = () => {
    let current = "";
    sections.forEach(section => {
      if (!section) return;
      const top = section.offsetTop;
      if (window.scrollY >= top - 200) current = section.getAttribute('id');
    });
    sidebarLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href').slice(1) === current);
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('hashchange', () => window.removeEventListener('scroll', handleScroll), { once: true });
}


function renderBlogPage() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="${IMG('https://images.unsplash.com/photo-1455390582262-044cdead277a', 1600)}" alt="">
        <div class="page-hero-bg-gradient"></div>
      </div>
      <div class="page-hero-content">
        <h1>Film <em>Journal</em></h1>
        <p class="page-hero-subtitle">My learning notes and cinematic explorations.</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="blog-grid">
          ${BLOG_POSTS.map((post, i) => `
            <div class="blog-card reveal d${(i%3)+1}" data-path="blog-post--${post.id}">
              <div class="blog-card-meta">
                <span class="blog-card-cat">${post.category}</span>
                <span class="blog-card-date">${post.date}</span>
              </div>
              <h2 class="blog-card-title">${post.title}</h2>
              <p class="blog-card-excerpt">${post.excerpt}</p>
              <div class="blog-card-link">Continue Reading ${ICO.arrow}</div>
            </div>`).join('')}
        </div>
      </div>
    </section>
    ${footerHTML()}`;
}

function renderBlogPost(id) {
  const post = BLOG_POSTS.find(p => p.id === id);
  if (!post) return;
  const app = document.getElementById('app');
  app.innerHTML = `
    ${backBtn('blog', 'Blog')}
    <div class="detail-hero">
      <div class="blog-post-meta">
        <span class="blog-card-cat">${post.category}</span> · ${post.date}
      </div>
      <h1 class="detail-hero-title">${post.title}</h1>
    </div>
    <div class="detail-body container">
      <div class="blog-post-content reveal">
        <p>${post.content}</p>
      </div>
    </div>
    ${footerHTML()}`;
}

// ─── PAGE RENDERS ─────────────────────────────────────────────────────────────
function renderPage(path) {
  const app = document.getElementById('app');

  // ── Sub-routes ─────────────────────────────────────────────────────────────
  if (path.startsWith('topic--')) { renderTopicPage(path.replace('topic--', '')); return; }
  if (path.startsWith('scene--')) { renderScenePage(path.replace('scene--', '')); return; }
  if (path.startsWith('cinemat--')) { renderCinematTopic(path.replace('cinemat--', '')); return; }
  if (path.startsWith('sound--')) { renderSoundTopic(path.replace('sound--', '')); return; }
  if (path.startsWith('theme--')) { renderThemePage(path.replace('theme--', '')); return; }
  if (path.startsWith('blog-post--')) { renderBlogPost(path.replace('blog-post--', '')); return; }
  if (path === 'blog') { renderBlogPage(); return; }

  const page = PAGES[path];

  if (!page) {
    app.innerHTML = `
      <div class="coming-soon" style="padding-top:70px">
        <div>
          <h1>Coming Soon</h1>
          <p>${path.replace(/-/g,' ')} — under construction</p>
          <button class="btn-outline" onclick="window.app.navigate('home')">← Back to Home</button>
        </div>
      </div>${footerHTML()}`;
    return;
  }

  let html = '';

  // ── HOME ──────────────────────────────────────────────────────────────────
  if (path === 'home') {
    html = `
      <section class="hero-section">
        <div class="hero-bg">
          <img src="${page.hero.bg}" alt="Behind The Frame hero" loading="eager" decoding="async">
          <div class="hero-bg-gradient"></div>
        </div>
        <div class="hero-glow"></div>
        <div class="hero-content">
          <p class="hero-eyebrow">Behind The Frame · Cinematic Study Platform</p>
          <h1 class="hero-title">${page.hero.title}</h1>
          <p class="hero-sub">${page.hero.subtitle}</p>
          <a class="hero-cta" data-path="how-movies-work">Start Learning ${ICO.arrow}</a>
        </div>
        <div class="hero-scroll-indicator">
          <span>Scroll to Explore</span>
          <div class="scroll-line"></div>
        </div>
      </section>
      <div class="stat-bar">
        <div class="container">
          <div class="stat-grid">
            <div class="stat-item reveal"><span class="stat-num">9</span><span class="stat-label">Story Topics</span></div>
            <div class="stat-item reveal d1"><span class="stat-num">4+</span><span class="stat-label">Scene Breakdowns</span></div>
            <div class="stat-item reveal d2"><span class="stat-num">23</span><span class="stat-label">Film Themes</span></div>
            <div class="stat-item reveal d3"><span class="stat-num">∞</span><span class="stat-label">Hours of Cinema</span></div>
          </div>
        </div>
      </div>
      <section class="intro-section">
        <div class="intro-corner tl"></div>
        <div class="intro-corner br"></div>
        <div class="container">
          <div class="intro-content">
            <span class="section-label reveal">The Philosophy</span>
            <p class="intro-quote reveal d1">"<em>Cinema</em> is more than entertainment. It is a symphony engineered from vision, silence, and human truth."</p>
            <p class="intro-body reveal d2">${page.intro}</p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <span class="section-label reveal">Start Here</span>
          <h2 class="section-title reveal d1">Explore The Craft</h2>
          <div class="section-divider reveal d2"></div>
          <div class="cards-grid">
            ${page.cards.map((c, i) => `
              <div class="card reveal-scale d${(i%4)+1}" onclick="window.app.navigate('${c.id}')">
                <div class="card-number">0${i+1}</div>
                ${lazyImg(c.img, c.title)}
                <div class="card-label"><h3>${c.title}</h3><span>${c.sub}</span></div>
              </div>`).join('')}
          </div>
        </div>
      </section>
      <section class="section" style="background:linear-gradient(to bottom,var(--black),#0d0f18,var(--black))">
        <div class="container">
          <span class="section-label reveal">Featured Studies</span>
          <h2 class="section-title reveal d1">Iconic Scene Breakdowns</h2>
          <div class="section-divider reveal d2"></div>
        </div>
        <div class="container" style="padding-right:0">
          <div class="scene-scroll-wrapper">
            <div class="scene-scroll-track">
              ${page.scenes.map(s => `
                <div class="scene-thumb">
                  ${lazyImg(s.img, s.title)}
                  <div class="scene-thumb-info">
                    <span class="scene-thumb-cat">${s.cat}</span>
                    <h3>${s.title}</h3>
                    <p class="scene-thumb-year">${s.year}</p>
                  </div>
                </div>`).join('')}
            </div>
          </div>
        </div>
      </section>
      <section class="section theory-section">
        <div class="container">
          <span class="section-label reveal">Deep Dives</span>
          <h2 class="section-title reveal d1">Film Theory Topics</h2>
          <div class="section-divider reveal d2"></div>
          <div class="theory-grid">
            ${page.theory.map((t, i) => `
              <div class="theory-item reveal d${(i%4)+1}">
                <span class="theory-num">0${i+1}</span>
                <h4>${t.title}</h4>
                <p>${t.sub}</p>
                <div class="theory-underline"></div>
              </div>`).join('')}
          </div>
        </div>
      </section>
      ${footerHTML()}`;

  // ── HOW MOVIES WORK ───────────────────────────────────────────────────────
  } else if (path === 'how-movies-work') {
    const topicEntries = Object.entries(TOPICS);
    html = pageHeroHTML(page.hero) + `
      <section class="section">
        <div class="container">
          <span class="section-label reveal">The Fundamentals</span>
          <h2 class="section-title reveal d1">The Building Blocks of Story</h2>
          <p class="section-intro reveal d2">Click any topic to open a full deep-dive page — definition, types, movie examples, scene breakdowns, and what I learned.</p>
          <div class="section-divider reveal d3"></div>
          <div class="topic-list">
            ${topicEntries.map(([id, t], i) => `
              <div class="topic-list-item reveal d${(i%3)+1}" data-path="topic--${id}">
                <div class="topic-list-num">${String(i+1).padStart(2,'0')}</div>
                <div class="topic-list-icon">${t.icon}</div>
                <div class="topic-list-text">
                  <h3>${t.label}</h3>
                  <p>${t.definition.slice(0,100)}…</p>
                </div>
                <div class="topic-list-arrow">${ICO.arrow}</div>
              </div>`).join('')}
          </div>
        </div>
      </section>${footerHTML()}`;

  // ── SCENE BREAKDOWN ───────────────────────────────────────────────────────
  } else if (path === 'scene-breakdown') {
    const sceneEntries = Object.entries(SCENE_DATA);
    html = pageHeroHTML(page.hero) + `
      <section class="section">
        <div class="container">
          <span class="section-label reveal">Deconstructed</span>
          <h2 class="section-title reveal d1">Scene by Scene</h2>
          <p class="section-intro reveal d2">Every scene broken down across 12 dimensions: camera, lighting, color, sound, editing, theme, symbolism, and more.</p>
          <div class="section-divider reveal d3"></div>
          <div class="scene-list">
            ${sceneEntries.map(([id, s], i) => `
              <div class="scene-list-item reveal d${(i%2)+1}" data-path="scene--${id}">
                <div class="scene-list-img">
                  ${lazyImg(IMG(s.img, 400), s.title)}
                </div>
                <div class="scene-list-info">
                  <span class="scene-list-film">${s.film} · ${s.year}</span>
                  <h3>${s.title}</h3>
                  <p>${s.summary.slice(0,120)}…</p>
                  <span class="scene-list-cta">View Full Breakdown ${ICO.arrow}</span>
                </div>
              </div>`).join('')}
          </div>
        </div>
      </section>${footerHTML()}`;

  // ── CINEMATOGRAPHY ────────────────────────────────────────────────────────
  } else if (path === 'cinematography') {
    const cinematEntries = Object.entries(CINEMAT_TOPICS);
    html = pageHeroHTML(page.hero) + `
      <section class="section">
        <div class="container">
          <span class="section-label reveal">The Visual Language</span>
          <h2 class="section-title reveal d1">Cinematography Guide</h2>
          <p class="section-intro reveal d2">Click any category to explore every element in detail — what it is, when to use it, the emotion it creates, and real movie examples.</p>
          <div class="section-divider reveal d3"></div>
          <div class="topic-list">
            ${cinematEntries.map(([id, t], i) => `
              <div class="topic-list-item reveal d${(i%3)+1}" data-path="cinemat--${id}">
                <div class="topic-list-num">${String(i+1).padStart(2,'0')}</div>
                <div class="topic-list-icon">🎥</div>
                <div class="topic-list-text">
                  <h3>${t.label}</h3>
                  <p>${t.intro.slice(0,100)}…</p>
                </div>
                <div class="topic-list-arrow">${ICO.arrow}</div>
              </div>`).join('')}
          </div>
        </div>
      </section>${footerHTML()}`;

  // ── SOUND & EDITING ───────────────────────────────────────────────────────
  } else if (path === 'sound-editing') {
    const soundEntries = Object.entries(SOUND_TOPICS);
    html = pageHeroHTML(page.hero) + `
      <section class="section">
        <div class="container">
          <span class="section-label reveal">The Invisible Art</span>
          <h2 class="section-title reveal d1">Sound & Editing Guide</h2>
          <p class="section-intro reveal d2">From silence to the jump cut — every technique explained with examples and emotional analysis.</p>
          <div class="section-divider reveal d3"></div>
          <div class="topic-list">
            ${soundEntries.map(([id, t], i) => `
              <div class="topic-list-item reveal d${(i%3)+1}" data-path="sound--${id}">
                <div class="topic-list-num">${String(i+1).padStart(2,'0')}</div>
                <div class="topic-list-icon">🔊</div>
                <div class="topic-list-text">
                  <h3>${t.label}</h3>
                  <p>${t.intro.slice(0,100)}…</p>
                </div>
                <div class="topic-list-arrow">${ICO.arrow}</div>
              </div>`).join('')}
          </div>
        </div>
      </section>${footerHTML()}`;

  // ── MOVIE THEMES ──────────────────────────────────────────────────────────
  } else if (path === 'movie-themes') {
    html = pageHeroHTML(page.hero) + `
      <section class="section">
        <div class="container">
          <span class="section-label reveal">Universal Patterns</span>
          <h2 class="section-title reveal d1">Every Major Film Theme</h2>
          <p class="section-intro reveal d2">Click any theme to explore its meaning, films that use it, and how directors visualize the idea on screen.</p>
          <div class="section-divider reveal d3"></div>
          <div class="themes-big-grid">
            ${THEMES.map((t, i) => `
              <div class="theme-big-card reveal d${(i%3)+1}" data-path="theme--${t.id}">
                <h3>${t.name}</h3>
                <p class="theme-big-meaning">${t.meaning}</p>
                <div class="theme-big-films">${t.films.slice(0,2).join(' · ')}</div>
                <div class="theme-big-arrow">${ICO.arrow}</div>
              </div>`).join('')}
          </div>
        </div>
      </section>${footerHTML()}`;

  // ── ABOUT ─────────────────────────────────────────────────────────────────
  } else if (path === 'about') {
    const A = ABOUT_CONTENT;
    html = pageHeroHTML(A.hero) + `
      <section class="section">
        <div class="container">
          <div class="about-new-grid">
            <div class="about-left reveal-left">
              <div class="portrait-frame">
                ${lazyImg(A.hero.bg, 'Portrait')}
              </div>
              <div class="portrait-corner tl"></div>
              <div class="portrait-corner br"></div>
              <blockquote class="about-philosophy">${A.philosophy}</blockquote>
            </div>
            <div class="about-right">
              ${A.sections.map((s, i) => `
                <div class="about-section-block reveal d${(i%3)+1}">
                  <span class="about-section-label">${s.label}</span>
                  <p>${s.content}</p>
                </div>`).join('')}
              <div class="about-meta reveal d2">
                ${A.meta.map(m => `
                  <div class="meta-item">
                    <span class="meta-label">${m.label}</span>
                    <span class="meta-value">${m.value}</span>
                  </div>`).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>${footerHTML()}`;
  }

  app.innerHTML = html;
}

// ─── EVENT SETUP ────────────────────────────────────────────────────────────
function initEvents() {
  // Game menu button
  document.getElementById('game-menu-btn')
    ?.addEventListener('click', () => menuOpen ? closeMenu() : openMenu());

  // Click-outside zone (right side of GOW menu)
  document.getElementById('menu-close-zone')
    ?.addEventListener('click', closeMenu, { passive: true });

  // ESC key — open or close
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') menuOpen ? closeMenu() : openMenu();
  });

  // Global click delegate (nav-link, nav-item, data-path elements)
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-path]');
    if (el) { e.preventDefault(); navigateTo(el.dataset.path); }
  });
}

// ─── BOOT ───────────────────────────────────────────────────────────────────
function init() {
  initCursor();
  initNavbar();
  buildSideMenu();
  initEvents();
  renderPage('home');
  // Two rAF ticks — let DOM paint before observing
  requestAnimationFrame(() => requestAnimationFrame(initReveal));

  // ── Contain scroll events inside the menu panel ────────────────────────────
  // Prevents wheel/touch-scroll from leaking to the page (Lenis) behind the menu
  const scrollArea = document.getElementById('menu-scroll-area');
  if (scrollArea) {
    const stopProp = (e) => { if (menuOpen) e.stopPropagation(); };
    scrollArea.addEventListener('wheel',      stopProp, { passive: true });
    scrollArea.addEventListener('touchmove',  stopProp, { passive: true });
  }

  // Fade out entry overlay (cinematic first-load)
  const entry = document.getElementById('entry-overlay');
  if (entry) {
    // Small delay for visual impact, then fade out
    setTimeout(() => {
      entry.classList.add('fade-out');
      // Remove pointer events immediately so it doesn't block
      entry.addEventListener('transitionend', () => {
        entry.style.display = 'none';
      }, { once: true });
    }, 300);
  }
}

window.app = { navigate: p => navigateTo(p) };
window.addEventListener('DOMContentLoaded', init);
