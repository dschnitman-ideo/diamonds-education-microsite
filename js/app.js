/* ============================================================
   Natural Diamonds — app shell, state, and view renderers
   ============================================================ */

const STORAGE_KEY = "nd-training-state-v1";

function defaultState() {
  return {
    basicsOpen: null,
    compareTab: "formation",
    compareViewed: {},
    journeyOpen: "mine",
    journeyViewed: {},
    fieldTab: "shapes",
    fieldViewed: {},
    talkIndex: 0,
    talkAnswers: {},      // scenarioIndex -> { chosen, correct }
    storiesRead: {},
    nowPlaying: null,     // episode index currently simulated-playing
    episodeProgress: {},  // index -> 0..1
    episodesDone: {},
  };
}

let state = loadState();
let playTimer = null;
let talkFillPct = null; // last-rendered % of the Talk Diamonds progress fill, so it animates from wherever it actually was

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    return Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) {
    return defaultState();
  }
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
/* ---------------- DOM helpers ---------------- */
function h(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}
function $(sel, root = document) { return root.querySelector(sel); }
function $all(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

/* ============================================================ shell */
function buildShell() {
  const app = $("#app");

  const sidebar = h(`
    <aside class="sidebar" id="sidebar">
      <div class="brand">
        ${icon("crown")}
        <div class="brand-text">
          <span class="brand-word">Natural Diamonds</span>
          <span class="brand-tag">Pilot</span>
        </div>
      </div>
      <div class="nav-label">Learning Path</div>
      <nav class="nav" id="nav"></nav>
      <a class="whatsapp-link" href="${WHATSAPP_GROUP_URL}" target="_blank" rel="noopener noreferrer">
        ${icon("whatsapp")}
        <span>Pilot WhatsApp Group</span>
      </a>
      <div class="sidebar-spacer"></div>
    </aside>
  `);

  const topbar = h(`
    <header class="topbar">
      <button class="hamburger" id="hamburger" aria-label="Menu">${icon("menu")}</button>
      <div class="topbar-title" id="topbar-title"></div>
      <div class="topbar-spacer"></div>
      <div class="avatar" title="You">${icon("user")}</div>
    </header>
  `);

  const tabbar = h(`<nav class="mobile-tabbar" id="mobile-tabbar"></nav>`);
  const main = h(`<main class="main" id="main"></main>`);
  const scrim = h(`<div class="scrim" id="scrim"></div>`);

  app.append(sidebar, topbar, tabbar, main, scrim);

  const navEl = $("#nav");
  const tabbarEl = $("#mobile-tabbar");
  NAV.forEach(item => {
    const btn = h(`
      <button class="nav-item" data-id="${item.id}">
        ${icon(item.icon)}
        <span>${item.label}</span>
      </button>
    `);
    btn.addEventListener("click", () => { location.hash = item.id; closeSidebarMobile(); });
    navEl.appendChild(btn);

    const tab = h(`
      <button class="mobile-tab" data-id="${item.id}">
        ${icon(item.icon)}<span>${item.label}</span>
      </button>
    `);
    tab.addEventListener("click", () => { location.hash = item.id; });
    tabbarEl.appendChild(tab);
  });

  $("#hamburger").addEventListener("click", () => {
    $("#sidebar").classList.toggle("open");
    $("#scrim").classList.toggle("show");
  });
  $("#scrim").addEventListener("click", closeSidebarMobile);

  window.addEventListener("hashchange", route);
}
function closeSidebarMobile() {
  $("#sidebar").classList.remove("open");
  $("#scrim").classList.remove("show");
}

function updateChrome(activeId) {
  $all(".nav-item, .mobile-tab").forEach(b => {
    b.classList.toggle("active", b.dataset.id === activeId);
  });
  const activeTab = $(`.mobile-tab[data-id="${activeId}"]`);
  if (activeTab) activeTab.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  const activeNav = NAV.find(n => n.id === activeId) || NAV[0];
  $("#topbar-title").innerHTML = `${icon(activeNav.icon)}<span class="long">${activeNav.label}</span>`;
}

/* ============================================================ router */
const RENDERERS = {
  "pilot-overview": renderPilotOverview,
  basics: renderBasics,
  compare: renderCompare,
  journey: renderJourney,
  "field-guide": renderFieldGuide,
  talk: renderTalk,
  stories: renderStories,
  listen: renderListen,
};

function route() {
  const raw = (location.hash || "#basics").slice(1);
  const [base, ...rest] = raw.split("/");
  const target = RENDERERS[base] ? base : "basics";
  const sub = rest.join("/") || null;
  const main = $("#main");
  main.innerHTML = "";
  const view = h(`<div class="view active" id="view-${target}"></div>`);
  main.appendChild(view);
  RENDERERS[target](view, sub);
  updateChrome(target);
  main.scrollTop = 0;
}

/* ============================================================ 0. Pilot Overview */
function renderPilotOverview(root) {
  root.innerHTML = `
    <div class="hero">
      <div>
        <span class="eyebrow">Pilot Overview</span>
        <h1>Why we're investing in natural diamond training.</h1>
        <p>${WHY_MATTERS.intro}</p>
      </div>
      <div></div>
    </div>
    <div class="section-block">
      <span class="eyebrow">The Short Version</span>
      <div class="gallery-grid" id="why-matters-grid"></div>
    </div>
    <div class="section-block">
      <span class="eyebrow">Pilot Timeline</span>
      <h2>Where we are in the pilot.</h2>
      <p class="desc">This training rolls out to select stores in phases. Here's what to expect and when.</p>
      <div class="journey" id="pilot-timeline-list"></div>
    </div>
    <a class="intro-whatsapp" href="${WHATSAPP_GROUP_URL}" target="_blank" rel="noopener noreferrer">
      <div class="icon-wrap">${icon("whatsapp")}</div>
      <div class="txt">
        <h4>Join the Retail Pilot WhatsApp Group</h4>
        <p>Connect with other associates piloting this training, ask questions, and share feedback.</p>
      </div>
      ${icon("arrowRight")}
    </a>
  `;

  const grid = $("#why-matters-grid", root);
  WHY_MATTERS.reasons.forEach(r => {
    const card = h(`
      <div class="spec-card">
        <div class="icon-wrap">${icon(r.icon)}</div>
        <h4>${r.title}</h4>
        <div class="sub">${r.sub}</div>
      </div>
    `);
    grid.appendChild(card);
  });

  const wrap = $("#pilot-timeline-list", root);
  PILOT_TIMELINE.forEach((step, i) => {
    const el = h(`
      <div class="journey-step ${step.status === "current" ? "active" : ""} ${step.status === "done" ? "done" : ""}">
        <div class="journey-rail">
          <div class="journey-dot">${i + 1}</div>
          <div class="journey-line"></div>
        </div>
        <div class="journey-body">
          <span class="step-eyebrow">${step.when}</span>
          <h3>${step.title}</h3>
          <p class="sub">${step.summary}</p>
        </div>
      </div>
    `);
    wrap.appendChild(el);
  });
}

/* ============================================================ 1. Diamond Basics */
function renderBasics(root) {
  root.innerHTML = `
    <div class="hero">
      <div>
        <span class="eyebrow">Diamond Basics</span>
        <h1>Learn the science in 5 minutes.</h1>
        <p>Everything you need to know about natural diamonds, fast and simple.</p>
      </div>
      <div class="hero-art" style="aspect-ratio:4/3;background-image:url('assets/basics-hero.jpg');background-size:cover;background-position:65% 55%;"></div>
    </div>
    <div class="section-block">
      <span class="eyebrow">Start Learning</span>
      <div class="card-grid" id="basics-grid"></div>
      <div class="tip-banner">
        <div class="bulb">${icon("bulb")}</div>
        <div>
          <div class="tip-label">Quick Tip</div>
          <p>Natural diamonds are billions of years old, and each one is a unique miracle of nature.</p>
        </div>
        <div class="topbar-spacer"></div>
        <button class="btn" id="basics-quiz-link">Take a quick quiz ${icon("arrowRight")}</button>
      </div>
    </div>
  `;
  const grid = $("#basics-grid", root);

  const TOPIC_ART = {
    formation: "assets/basics-01-formation.jpg",
    eruptions: "assets/basics-02-eruptions.jpg",
    rough: "assets/basics-03-rough.jpg",
    "4cs": "assets/basics-04-4cs.jpg",
  };

  function draw() {
    grid.innerHTML = "";
    BASICS_TOPICS.forEach((t, i) => {
      const opened = state.basicsOpen === t.id;
      const art = TOPIC_ART[t.id];
      const card = h(`
        <button class="topic-card ${opened ? "active" : ""}" data-id="${t.id}" aria-expanded="${opened}">
          <div class="icon-wrap" style="background-image:url('${art}');background-size:cover;background-position:center;"></div>
          <span class="num">${t.num}</span>
          <h3>${t.title}</h3>
          <p class="sub">${t.sub}</p>
          <span class="expand-btn" aria-hidden="true">${icon("arrowRight")}</span>
        </button>
      `);
      card.addEventListener("click", () => {
        state.basicsOpen = opened ? null : t.id;
        draw();
        updateChrome("basics");
      });
      grid.appendChild(card);

      if (opened) {
        const detail = h(`
          <div class="topic-detail">
            <button class="close-x">${icon("x")}</button>
            <h4>${t.title}</h4>
            <p>${t.body}</p>
          </div>
        `);
        $(".close-x", detail).addEventListener("click", (e) => {
          e.stopPropagation();
          state.basicsOpen = null;
          draw();
        });
        grid.appendChild(detail);
      }
    });
  }
  draw();
  $("#basics-quiz-link", root).addEventListener("click", () => location.hash = "talk");
}

/* ============================================================ 2. Natural vs. Lab-Grown */
function renderCompare(root) {
  root.innerHTML = `
    <div class="hero">
      <div>
        <span class="eyebrow">Natural vs. Lab-Grown</span>
        <h1>See the difference for yourself.</h1>
        <p>Natural and lab-grown diamonds may look alike, but their origins are completely different.</p>
      </div>
      <div></div>
    </div>
    <div class="vs-wrap">
      <div class="vs-panel natural">
        <span class="k">Natural Diamond</span>
        <span class="v">Formed by nature over billions of years.</span>
      </div>
      <div class="vs-panel lab">
        <span class="k">Lab-Grown Diamond</span>
        <span class="v">Created in a lab using advanced technology.</span>
      </div>
      <div class="vs-badge">VS.</div>
    </div>
    <span class="eyebrow" style="display:block;margin-bottom:10px;">Explore the Differences</span>
    <div class="compare-panel">
      <div class="compare-col natural">
        <span class="k">Natural</span>
        <ul class="compare-list">
          ${COMPARE_TABS.map(t => `<li><strong>${t.label}:</strong> ${t.natural}</li>`).join("")}
        </ul>
      </div>
      <div class="compare-divider"></div>
      <div class="compare-col lab">
        <span class="k">Lab-Grown</span>
        <ul class="compare-list">
          ${COMPARE_TABS.map(t => `<li><strong>${t.label}:</strong> ${t.lab}</li>`).join("")}
        </ul>
      </div>
    </div>
    <div class="tip-banner">
      <div class="bulb">${icon("bulb")}</div>
      <div><div class="tip-label">Quick Tip</div><p>Both are real diamonds. The difference is in their origin.</p></div>
    </div>
  `;

  COMPARE_TABS.forEach(t => {
    state.compareViewed[t.id] = true;
  });
  saveState();
  updateChrome("compare");
}

/* ============================================================ 3. From Rough to Radiance */
function renderJourney(root) {
  root.innerHTML = `
    <div class="hero">
      <div>
        <span class="eyebrow">From Rough to Radiance</span>
        <h1>Follow a diamond's journey.</h1>
        <p>From deep within the Earth to a moment in someone's life. Tap each stage to see how a natural diamond gets made.</p>
      </div>
      <div class="hero-art" style="background-image:url('assets/journey-hero.jpg');background-size:cover;background-position:center;"></div>
    </div>
    <div class="journey" id="journey"></div>
  `;
  const wrap = $("#journey", root);
  function draw() {
    wrap.innerHTML = "";
    JOURNEY_STEPS.forEach((step, i) => {
      const active = state.journeyOpen === step.id;
      const done = !!state.journeyViewed[step.id];
      const el = h(`
        <div class="journey-step ${active ? "active" : ""} ${done ? "done" : ""}" role="button" tabindex="0" aria-expanded="${active}">
          <div class="journey-rail">
            <div class="journey-dot">${i + 1}</div>
            <div class="journey-line"></div>
          </div>
          <div class="journey-body">
            <span class="step-eyebrow">${step.eyebrow}</span>
            <h3>${step.title}</h3>
            <p class="sub">${step.summary}</p>
            <div class="journey-detail">${step.detail}</div>
          </div>
        </div>
      `);
      const activate = () => {
        state.journeyOpen = active ? null : step.id;
        state.journeyViewed[step.id] = true;
        draw();
        updateChrome("journey");
      };
      el.addEventListener("click", activate);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); }
      });
      wrap.appendChild(el);
    });
  }
  draw();
}

/* ============================================================ 4. Field Guide */
function renderFieldGuide(root) {
  const CATS = [
    { id: "shapes", label: "Shapes" },
    { id: "inclusions", label: "Inclusions" },
    { id: "colors", label: "Colors" },
    { id: "cuts", label: "Cut Grades" },
  ];
  root.innerHTML = `
    <div class="hero">
      <div>
        <span class="eyebrow">The Natural Diamond Field Guide</span>
        <h1>Explore diamonds like a gemologist.</h1>
        <p>Tap through shapes, inclusions, colors, and cuts to build the vocabulary you'll use with every customer.</p>
      </div>
      <div></div>
    </div>
    <div class="tabs" id="fg-tabs"></div>
    <div class="gallery-grid" id="fg-grid" style="margin-top:16px;"></div>
  `;
  const tabsEl = $("#fg-tabs", root);
  const gridEl = $("#fg-grid", root);

  function draw() {
    tabsEl.innerHTML = "";
    CATS.forEach(c => {
      const btn = h(`<button class="tab-btn ${c.id === state.fieldTab ? "active" : ""}">${c.label}</button>`);
      btn.addEventListener("click", () => { state.fieldTab = c.id; draw(); });
      tabsEl.appendChild(btn);
    });
    gridEl.innerHTML = "";
    FIELD_GUIDE[state.fieldTab].forEach((item, i) => {
      const key = state.fieldTab + ":" + i;
      const card = h(`
        <button class="spec-card" style="${state.fieldViewed[key] ? "border-color:var(--kimberlite-green)" : ""}">
          <div class="icon-wrap">${icon(item.icon)}</div>
          <h4>${item.name}</h4>
          <div class="sub">${item.sub}</div>
        </button>
      `);
      card.addEventListener("click", () => {
        state.fieldViewed[key] = true;
        draw();
        updateChrome("field-guide");
      });
      gridEl.appendChild(card);
    });
  }
  draw();
}

/* ============================================================ 5. Talk Diamonds */
function renderTalk(root) {
  const total = SCENARIOS.length;
  if (state.talkIndex >= total) {
    const correctCount = SCENARIOS.filter((_, i) => state.talkAnswers[i] && state.talkAnswers[i].correct).length;
    root.innerHTML = `
      <div class="scenario-complete">
        <div class="icon-wrap">${icon("trophy")}</div>
        <h3>Nice work! You've completed Talk Diamonds.</h3>
        <p>${correctCount} of ${total} scenarios answered correctly on your best attempt.</p>
        <button class="btn btn-primary" id="talk-restart">Review scenarios again ${icon("arrowRight")}</button>
      </div>
    `;
    $("#talk-restart", root).addEventListener("click", () => { state.talkIndex = 0; renderTalk(root); updateChrome("talk"); });
    return;
  }

  const scenario = SCENARIOS[state.talkIndex];
  const getRecord = () => state.talkAnswers[state.talkIndex];

  const fillPct = (state.talkIndex / total) * 100;
  const startPct = talkFillPct === null ? 0 : talkFillPct;
  root.innerHTML = `
    <div class="scenario-progress">
      <span class="label">Scenario ${state.talkIndex + 1} of ${total}</span>
      <div class="scenario-track"><div class="scenario-fill" id="scenario-fill" style="width:${startPct}%"></div></div>
    </div>
    <div class="scenario-layout">
      <div class="scenario-card">
        <span class="eyebrow">Scenario</span>
        <h3>${scenario.prompt}</h3>
        <span class="scenario-q-label">What's the best way to respond?</span>
        <div id="options"></div>
        <div id="feedback"></div>
        <div class="scenario-actions">
          <button class="btn" id="talk-back" ${state.talkIndex === 0 ? "disabled" : ""}>${icon("arrowLeft")} Back</button>
          <button class="btn btn-primary" id="talk-next">Next Scenario ${icon("arrowRight")}</button>
        </div>
      </div>
      <div>
        <div class="scenario-art hero-art" style="aspect-ratio:4/3;background-image:url('assets/talk-cover.jpg');background-size:cover;background-position:center;"></div>
        <div class="scenario-tip">
          <div class="bulb">${icon("bulb")}</div>
          <div><div class="tip-label">Tip</div><p>${scenario.tip}</p></div>
        </div>
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    const fillEl = $("#scenario-fill", root);
    if (fillEl) fillEl.style.width = fillPct + "%";
    talkFillPct = fillPct;
  });

  const optionsEl = $("#options", root);
  const feedbackEl = $("#feedback", root);
  const nextBtn = $("#talk-next", root);

  function drawOptions() {
    const record = getRecord();
    optionsEl.innerHTML = "";
    scenario.options.forEach((opt, i) => {
      const isChosen = record && record.chosen === i;
      const cls = isChosen ? (opt.correct ? "correct" : "wrong") : "";
      const radioIcon = cls === "correct" ? icon("check") : cls === "wrong" ? icon("x") : "";
      const btn = h(`
        <button class="option ${cls}">
          <span class="radio">${radioIcon}</span><span>${opt.text}</span>
        </button>
      `);
      btn.addEventListener("click", () => {
        const correct = opt.correct;
        state.talkAnswers[state.talkIndex] = { chosen: i, correct };
        saveState();
        drawOptions();
        drawFeedback();
        updateChrome("talk");
      });
      optionsEl.appendChild(btn);
    });
  }
  function drawFeedback() {
    const r = getRecord();
    if (!r) { feedbackEl.innerHTML = ""; return; }
    if (r.correct) {
      feedbackEl.innerHTML = `
        <div class="feedback-box good">${icon("check")}
          <div><div class="fb-title">Great choice!</div><p>${scenario.goodFeedback}</p></div>
        </div>`;
    } else {
      feedbackEl.innerHTML = `
        <div class="feedback-box bad">${icon("x")}
          <div><div class="fb-title">Not quite</div><p>${scenario.badFeedback}</p></div>
        </div>`;
    }
  }
  drawOptions();
  drawFeedback();

  $("#talk-back", root).addEventListener("click", () => {
    if (state.talkIndex > 0) { state.talkIndex--; renderTalk(root); updateChrome("talk"); }
  });
  nextBtn.addEventListener("click", () => {
    state.talkIndex++;
    saveState();
    renderTalk(root);
    updateChrome("talk");
  });
}

/* ============================================================ 6. Diamond Stories */
const STORY_ART = {
  cullinan: "assets/story-cullinan.jpg",
  geology: "assets/story-geology.jpg",
  provenance: "assets/story-provenance.jpg",
  craftsmanship: "assets/story-craftsmanship.jpg",
  communities: "assets/story-communities.jpg",
  hope: "assets/story-hope.jpg",
};

function renderStories(root, storyId) {
  const story = storyId && STORIES.find(s => s.id === storyId);
  if (story) return renderStoryDetail(root, story);

  root.innerHTML = `
    <div class="hero">
      <div>
        <span class="eyebrow">Diamond Stories</span>
        <h1>The human side of natural diamonds.</h1>
        <p>Short stories about geology, provenance, craftsmanship, communities, and iconic stones you can share with customers.</p>
      </div>
      <div></div>
    </div>
    <div class="story-grid" id="story-grid"></div>
  `;
  const grid = $("#story-grid", root);
  STORIES.forEach((s, i) => {
    const card = h(`
      <div class="story-card" data-id="${s.id}" role="button" tabindex="0">
        <div class="story-art" style="background-image:url('${STORY_ART[s.id]}');background-size:cover;background-position:center;"></div>
        <div class="story-body">
          <span class="k">${s.tag}</span>
          <h4>${s.title}</h4>
          <p>${s.teaser}</p>
        </div>
      </div>
    `);
    const openStory = () => { location.hash = "stories/" + s.id; };
    card.addEventListener("click", openStory);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openStory(); }
    });
    grid.appendChild(card);
  });
}

function renderStoryDetail(root, story) {
  state.storiesRead[story.id] = true;
  saveState();

  root.innerHTML = `
    <button class="btn" id="story-back">${icon("arrowLeft")} All Stories</button>
    <div class="story-detail">
      <div class="story-detail-art" style="background-image:url('${STORY_ART[story.id]}');background-size:cover;background-position:center;"></div>
      <span class="k">${story.tag}</span>
      <h2>${story.title}</h2>
      <p>${story.body}</p>
    </div>
  `;
  $("#story-back", root).addEventListener("click", () => { location.hash = "stories"; });
}

/* ============================================================ 7. Listen & Learn */
function renderListen(root) {
  const totalSec = EPISODES.reduce((sum, e) => {
    const [m, s] = e.dur.split(":").map(Number);
    return sum + m * 60 + s;
  }, 0);
  const totalMin = Math.round(totalSec / 60);

  root.innerHTML = `
    <div class="podcast-hero">
      <div class="podcast-cover" style="background-image:url('assets/podcast-cover.jpg');background-size:cover;background-position:center;"></div>
      <div>
        <span class="k">Podcast Playlist</span>
        <h2>Diamond Knowledge</h2>
        <p>Short episodes to help you learn, get inspired, and sound confident in every customer conversation.</p>
        <div class="podcast-meta">${EPISODES.length} episodes &middot; ${totalMin} min total</div>
        <button class="btn btn-primary" id="play-all">${icon("play")} Play all</button>
      </div>
    </div>
    <div id="ep-list"></div>
  `;

  const listEl = $("#ep-list", root);

  function durSeconds(dur) {
    const [m, s] = dur.split(":").map(Number);
    return m * 60 + s;
  }

  function draw() {
    listEl.innerHTML = "";
    EPISODES.forEach((ep, i) => {
      const playing = state.nowPlaying === i;
      const done = !!state.episodesDone[i];
      const progress = state.episodeProgress[i] || (done ? 1 : 0);
      const row = h(`
        <div class="ep-row">
          <span class="ep-num">${i + 1}</span>
          <button class="ep-play ${playing ? "playing" : ""}">${icon(playing ? "pause" : "play")}</button>
          <div class="ep-info">
            <h4>${ep.title}</h4>
            <p>${ep.sub}</p>
            <div class="ep-progress-track"><div class="ep-progress-fill" style="width:${progress * 100}%"></div></div>
          </div>
          <span class="ep-check ${done ? "done" : ""}">${icon("check")}</span>
          <span class="ep-dur">${ep.dur}</span>
        </div>
      `);
      $(".ep-play", row).addEventListener("click", () => togglePlay(i));
      listEl.appendChild(row);
    });
  }

  function stopTimer() {
    if (playTimer) { clearInterval(playTimer); playTimer = null; }
  }

  function togglePlay(i) {
    if (state.nowPlaying === i) {
      stopTimer();
      state.nowPlaying = null;
      draw();
      return;
    }
    stopTimer();
    state.nowPlaying = i;
    const dur = durSeconds(EPISODES[i].dur);
    const speed = 24; // simulate playback 24x real-time for demo purposes
    let elapsed = (state.episodeProgress[i] || 0) * dur;
    draw();
    playTimer = setInterval(() => {
      elapsed += speed * 0.2;
      const p = Math.min(1, elapsed / dur);
      state.episodeProgress[i] = p;
      if (p >= 1) {
        state.episodesDone[i] = true;
        stopTimer();
        const next = i + 1;
        state.nowPlaying = (state.playAllMode && next < EPISODES.length) ? next : null;
        if (state.nowPlaying !== null) { updateChrome("listen"); togglePlay(state.nowPlaying); return; }
        state.playAllMode = false;
        saveState();
        updateChrome("listen");
        draw();
        return;
      }
      saveState();
      const fill = $all(".ep-progress-fill", listEl)[i];
      if (fill) fill.style.width = (p * 100) + "%";
    }, 200);
  }

  $("#play-all", root).addEventListener("click", () => {
    state.playAllMode = true;
    const startAt = EPISODES.findIndex((_, i) => !state.episodesDone[i]);
    togglePlay(startAt === -1 ? 0 : startAt);
  });

  draw();
}

/* ============================================================ boot */
buildShell();
route();
