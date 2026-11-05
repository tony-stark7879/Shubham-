(() => {
"use strict";

/* ✏️ Personalize everything here. {name}, {nick}, {full} and {from} are filled in automatically. */
const CONFIG = {
  name: "Khushi",
  nickname: "Khushi",
  fullName: "Khushi",
  from: "Shubham",
  fromFull: "Shubham",

  openerText: "{nick}, someone has a little surprise for you…",

  // Birthday as "YYYY-MM-DD" (e.g. "2026-10-14"). Shows a live countdown, or "It's your day" on the day.
  // Leave empty to hide it.
  birthday: "",

  // The day you got together as "YYYY-MM-DD". Shows a live "Together for …" counter. Leave empty to hide it.
  together: "",

  heroSubtitle: "Today is all about you: your laugh, your kindness, and every little thing that makes you wonderful.",

  candles: 5, // 1 to 9

  wish: {
    title: "Your wish is on its way",
    text: "May every wish you made tonight find its way back to you, and may this year be gentler, brighter and happier than any before it.",
  },

  // Lanterns already glowing in the sky when she arrives. Her own wishes are saved on her device.
  lanternWishes: [
    "A year full of laughter",
    "Health and happiness, always",
    "Every dream within reach",
  ],
  lanternSuggestions: ["More adventures", "Good health", "Endless laughter", "A dream come true"],

  letter: {
    greeting: "My dearest {nick}, ❤️",
    paragraphs: [
      "Happy Birthday to you! 🎂🥹 I feel so lucky that our paths crossed, and I’m truly grateful to have you in my life. Every little conversation, silly moment, and laugh with you has become a memory I cherish. Your beautiful smile, kind heart, and the way you make ordinary moments special are things I adore about you. 🦋",
      "I hope this year brings you endless happiness, beautiful memories, countless reasons to smile, and everything your heart wishes for. Never stop being the wonderful person you are. Keep smiling and shining, always! 🌸💗",
      "Happy Birthday once again, {nick}! 🎀❤️",
    ],
    closing: "With love,",
    signature: "{from}",
  },

  // Polaroids in "Our little moments". Tap one to flip it over. Put photos in assets/photos and set photo
  // to the path, e.g. "assets/photos/first-date.jpg". Without a photo the emoji is shown. Empty list hides the section.
  memories: [
    { photo: "", emoji: "☕", title: "The day we met", date: "", text: "I didn't know it yet, but that was the start of my favorite story." },
    { photo: "", emoji: "💬", title: "Our first long talk", date: "", text: "Hours went by like minutes, and it already felt so easy with you." },
    { photo: "", emoji: "😂", title: "Laughing till it hurt", date: "", text: "Every silly moment with you is a memory I keep close." },
    { photo: "", emoji: "🌅", title: "A day I'll never forget", date: "", text: "Ordinary plans, extraordinary company." },
    { photo: "", emoji: "🎂", title: "Today", date: "", text: "Another birthday, another chapter. I'm so glad I get to be in it." },
  ],

  // "Reasons I adore you": one card per reason, revealed one at a time. The last card shows reasonsEnd.
  reasons: [
    "Your smile, which makes every bad day better",
    "Your kind heart, even when no one is watching",
    "The way you make ordinary moments feel special",
    "Your laugh, especially when you can't stop",
    "How you listen, really listen",
    "The way you care for the people you love",
    "Your silly side that only I get to see",
    "How brave you are, even when you're scared",
    "The way you say my name",
    "How anywhere feels like home with you",
    "Your dreams, and how hard you chase them",
    "Simply that you're you",
  ],
  reasonsEnd: "…and a thousand more I'm still counting. ❤️",

  // Birthday coupons she can claim. Claimed coupons are remembered on her device.
  coupons: [
    { icon: "🍳", title: "Breakfast in bed", text: "Any morning you choose, served with a smile." },
    { icon: "🎬", title: "Movie night", text: "Your pick of film and snacks, and not a single complaint from me." },
    { icon: "🍝", title: "Dinner date", text: "Your favorite place. You dress up, I'll book the table." },
    { icon: "💆", title: "A long massage", text: "As long as you like. No checking the clock." },
    { icon: "🧺", title: "A day off chores", text: "Every chore for a whole day is mine." },
    { icon: "🏆", title: "You win one argument", text: "No questions asked. Use it wisely." },
  ],
  couponNote: "Screenshot a claimed coupon and send it to {from} to cash it in.",

  // Scratch-card fortunes, shown in a random order.
  fortunes: [
    "This year, the universe is clearly on your side.",
    "Something you've been hoping for is closer than you think.",
    "Expect more laughter than one year can hold.",
    "A brand-new adventure already has your name on it.",
    "Good news is quietly making its way to you.",
    "This is the year you surprise even yourself.",
    "Someone is going to be very glad they met you this year.",
    "Cake for breakfast is officially allowed today.",
  ],

  balloonNotes: [
    "I adore your beautiful smile 🌸",
    "I adore your kind heart 💗",
    "I adore the way you make ordinary moments special 🦋",
    "Every silly moment and laugh with you is a memory I cherish ✨",
    "Keep smiling and shining, always! 🎀",
  ],

  stars: {
    names: "{from} ♡ {nick}",
    message: "Some things were always written in the stars. ✨",
  },

  game: {
    duration: 20, // seconds
    readyTitle: "Ready, {nick}?",
    endLine: "Whatever the score, you’ve had all of mine from the very start. ❤️",
  },

  secret: {
    title: "You found it!",
    text: "Of all the paths that crossed mine, yours is the one I’m most grateful for. 💗",
  },

  finale: {
    title: "Here's to you,\n{nick}", // \n starts a new line
    line: "May this year bring you every bit of the joy you bring to everyone else.",
    closing: "With all my love,",
  },

  // Leave src empty to use the built-in music box melody. A custom track can be a file path or data URI.
  music: { src: "", volume: 0.55, playOnOpen: true },
};

/* Helpers */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const fmt = (s) => String(s ?? "")
  .replaceAll("{name}", CONFIG.name)
  .replaceAll("{nick}", CONFIG.nickname || CONFIG.name)
  .replaceAll("{full}", CONFIG.fullName || CONFIG.name)
  .replaceAll("{from}", CONFIG.from);
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE = matchMedia("(hover: hover) and (pointer: fine)").matches;
const darkMQ = matchMedia("(prefers-color-scheme: dark)");
const isDark = () => {
  const t = document.documentElement.dataset.theme;
  return t ? t === "dark" : darkMQ.matches;
};
const centerOf = (n) => {
  const r = n.getBoundingClientRect();
  return [r.left + r.width / 2, r.top + r.height / 2];
};
const nextFrame = (fn) => requestAnimationFrame(() => requestAnimationFrame(fn));
const HEART = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";
const SPARK = "M12 0C13 7 17 11 24 12 17 13 13 17 12 24 11 17 7 13 0 12 7 11 11 7 12 0Z";
const SVGNS = "http://www.w3.org/2000/svg";

function el(tag, cls, parent) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (parent) parent.appendChild(n);
  return n;
}
function svgEl(tag, attrs, parent) {
  const n = document.createElementNS(SVGNS, tag);
  for (const k in attrs) n.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(n);
  return n;
}
function seeded(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function heartSVG(fill, shine = true) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${HEART}" fill="${fill}"/>${
    shine ? '<ellipse cx="7.6" cy="7.6" rx="2.6" ry="1.6" fill="#fff" opacity=".55" transform="rotate(-35 7.6 7.6)"/>' : ""
  }</svg>`;
}
function makeBalloon(color, width) {
  const b = el("span", "balloon");
  b.style.setProperty("--bc", color);
  b.style.setProperty("--bw", Math.round(width) + "px");
  b.style.setProperty("--sw", rand(3.5, 6).toFixed(1) + "s");
  b.innerHTML = '<span class="b-body"></span><svg class="b-string" viewBox="0 0 18 70" aria-hidden="true"><path d="M9 0C2 16 16 30 9 46S5 64 9 70"/></svg>';
  return b;
}

/* Sound: a small Web Audio engine with a generated music box loop and soft effects */
const Sound = (() => {
  let ctx = null, master, musicBus, sfxBus, noiseBuf;
  let timer = 0, nextT = 0, step = 0, audioEl = null, srcFailed = false;
  let muted = false, playing = false;
  const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);

  function init() {
    try {
      if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return false;
        ctx = new AC();
        const comp = ctx.createDynamicsCompressor();
        comp.threshold.value = -14; comp.ratio.value = 4;
        comp.connect(ctx.destination);
        master = ctx.createGain();
        master.gain.value = muted ? 0 : 0.9;
        master.connect(comp);
        const verb = ctx.createConvolver();
        verb.buffer = impulse(2.8, 2.4);
        const wet = ctx.createGain();
        wet.gain.value = 0.3;
        verb.connect(wet); wet.connect(master);
        musicBus = ctx.createGain();
        musicBus.gain.value = 0;
        musicBus.connect(master); musicBus.connect(verb);
        sfxBus = ctx.createGain();
        sfxBus.gain.value = 0.6;
        sfxBus.connect(master); sfxBus.connect(verb);
        noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
        const d = noiseBuf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      }
      if (ctx.state === "suspended") ctx.resume();
      return true;
    } catch (e) {
      return false;
    }
  }

  function impulse(sec, decay) {
    const rate = ctx.sampleRate, len = Math.floor(rate * sec), b = ctx.createBuffer(2, len, rate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return b;
  }

  function bell(freq, t, dur, vol, bus) {
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    g.connect(bus || sfxBus);
    for (const [m, a] of [[1, 1], [2, 0.3], [3.01, 0.12], [4.17, 0.05]]) {
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.value = freq * m;
      const og = ctx.createGain();
      og.gain.value = a;
      o.connect(og); og.connect(g);
      o.start(t); o.stop(t + dur + 0.05);
    }
  }

  function noise(t, dur, type, f1, f2, q, vol) {
    const s = ctx.createBufferSource();
    s.buffer = noiseBuf;
    const f = ctx.createBiquadFilter();
    f.type = type; f.Q.value = q;
    f.frequency.setValueAtTime(f1, t);
    f.frequency.exponentialRampToValueAtTime(f2, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(sfxBus);
    s.start(t); s.stop(t + dur + 0.05);
  }

  // An original music box tune in D major: Dmaj7, Bm7, Gmaj7, A7
  const CHORDS = [[62, 69, 73, 78], [59, 66, 69, 74], [55, 62, 66, 71], [57, 64, 67, 73]];
  const ARP = [0, 1, 2, 3, 2, 1, 2, 3];
  const MELODY = [
    [[0, 90, 3], [3, 88, 1], [4, 86, 2], [6, 81, 2]],
    [[0, 83, 3], [3, 81, 1], [4, 78, 4]],
    [[0, 79, 2], [2, 81, 2], [4, 83, 2], [6, 86, 2]],
    [[0, 85, 4], [4, 88, 4]],
    [[0, 90, 2], [2, 93, 2], [4, 90, 2], [6, 88, 2]],
    [[0, 86, 3], [3, 85, 1], [4, 83, 4]],
    [[0, 83, 2], [2, 86, 2], [4, 85, 2], [6, 83, 2]],
    [[0, 81, 3], [3, 83, 1], [4, 85, 2], [6, 88, 2]],
  ];
  const EIGHTH = 60 / 72 / 2;

  function scheduleStep(i, t) {
    const bar = Math.floor(i / 8) % 8, pos = i % 8, chord = CHORDS[bar % 4];
    if (pos === 0) bell(midi(chord[0] - 12), t, 2.6, 0.05, musicBus);
    bell(midi(chord[ARP[pos]]), t, 1.4, 0.032, musicBus);
    for (const [p, n, len] of MELODY[bar]) {
      if (p === pos) bell(midi(n), t, Math.max(1.2, len * EIGHTH * 2.5), 0.065, musicBus);
    }
  }
  function tick() {
    if (!ctx) return;
    while (nextT < ctx.currentTime + 0.2) {
      scheduleStep(step, nextT);
      nextT += EIGHTH;
      step++;
    }
  }
  function startSynth() {
    if (!init()) return;
    playing = true;
    step = 0;
    nextT = ctx.currentTime + 0.12;
    const now = ctx.currentTime;
    musicBus.gain.cancelScheduledValues(now);
    musicBus.gain.setValueAtTime(musicBus.gain.value, now);
    musicBus.gain.linearRampToValueAtTime(clamp(CONFIG.music.volume, 0, 1), now + 1.5);
    clearInterval(timer);
    timer = setInterval(tick, 50);
    tick();
  }
  function startMusic() {
    if (CONFIG.music.src && !srcFailed) {
      const fallback = () => {
        srcFailed = true;
        audioEl = null;
        if (playing) startSynth();
      };
      if (!audioEl) {
        audioEl = new Audio(CONFIG.music.src);
        audioEl.loop = true;
        audioEl.addEventListener("error", fallback);
      }
      audioEl.volume = clamp(CONFIG.music.volume, 0, 1);
      audioEl.muted = muted;
      playing = true;
      audioEl.play().catch(fallback);
      return;
    }
    startSynth();
  }
  function stopMusic() {
    playing = false;
    if (audioEl) { audioEl.pause(); return; }
    if (!ctx) return;
    const now = ctx.currentTime;
    musicBus.gain.cancelScheduledValues(now);
    musicBus.gain.setValueAtTime(musicBus.gain.value, now);
    musicBus.gain.linearRampToValueAtTime(0, now + 0.6);
    setTimeout(() => {
      if (!playing) { clearInterval(timer); timer = 0; }
    }, 900);
  }
  function setMuted(m) {
    muted = m;
    if (ctx) {
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setTargetAtTime(m ? 0 : 0.9, ctx.currentTime, 0.05);
    }
    if (audioEl) audioEl.muted = m;
  }

  const ok = () => !muted && init();
  const sfx = {
    chime() {
      if (!ok()) return;
      const t = ctx.currentTime;
      [86, 90, 93, 98, 102].forEach((n, i) => bell(midi(n), t + i * 0.08, 2, 0.09));
    },
    sparkle() {
      if (!ok()) return;
      const t = ctx.currentTime;
      for (let i = 0; i < 7; i++) bell(midi(pick([93, 95, 98, 100, 102, 105])), t + i * 0.045 + Math.random() * 0.02, 0.9, 0.035);
    },
    magic() {
      if (!ok()) return;
      const t = ctx.currentTime;
      [74, 78, 81, 86, 90, 93, 98].forEach((n, i) => bell(midi(n), t + i * 0.06, 1.8, 0.06));
      noise(t, 1.2, "highpass", 6000, 9000, 0.5, 0.03);
    },
    pop() {
      if (!ok()) return;
      const t = ctx.currentTime;
      noise(t, 0.09, "highpass", 2000, 900, 0.7, 0.4);
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.frequency.setValueAtTime(520, t);
      o.frequency.exponentialRampToValueAtTime(110, t + 0.09);
      g.gain.setValueAtTime(0.25, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
      o.connect(g); g.connect(sfxBus);
      o.start(t); o.stop(t + 0.15);
    },
    puff() {
      if (!ok()) return;
      noise(ctx.currentTime, 0.35, "bandpass", 1200, 300, 0.8, 0.22);
    },
    blow() {
      if (!ok()) return;
      noise(ctx.currentTime, 0.9, "bandpass", 900, 220, 0.6, 0.3);
    },
    unwrap() {
      if (!ok()) return;
      const t = ctx.currentTime;
      noise(t, 0.3, "highpass", 3500, 1800, 0.6, 0.1);
      noise(t + 0.12, 0.25, "highpass", 4000, 2000, 0.6, 0.08);
      [93, 98, 102].forEach((n, i) => bell(midi(n), t + 0.2 + i * 0.08, 1.6, 0.07));
    },
    release() {
      if (!ok()) return;
      const t = ctx.currentTime;
      noise(t, 1.4, "bandpass", 300, 900, 0.5, 0.12);
      [81, 86, 90, 93].forEach((n, i) => bell(midi(n), t + 0.25 + i * 0.14, 2.2, 0.05));
    },
    note(n, vol = 0.06) {
      if (!ok()) return;
      bell(midi(n), ctx.currentTime, 1.5, vol);
    },
    scratch() {
      if (!ok()) return;
      noise(ctx.currentTime, 0.07, "highpass", 4200, 3000, 0.7, 0.05);
    },
    light() {
      if (!ok()) return;
      const t = ctx.currentTime;
      noise(t, 0.12, "highpass", 5000, 2500, 0.8, 0.12);
      bell(midi(pick([86, 90, 93])), t + 0.05, 1, 0.04);
    },
  };

  document.addEventListener("visibilitychange", () => {
    if (!ctx) return;
    if (document.hidden) ctx.suspend();
    else ctx.resume();
  });

  return {
    init, startMusic, stopMusic, setMuted, sfx,
    get muted() { return muted; },
    get playing() { return playing; },
  };
})();

/* Particles: confetti, hearts, sparkles and fireworks on one canvas */
const FX = (() => {
  const cv = $("#fx"), ctx = cv.getContext("2d");
  const heartPath = new Path2D(HEART);
  let W = 0, H = 0, parts = [], running = false, last = 0, fw = false, nextRocket = 0;

  const amount = (n) => Math.max(1, Math.round(n * (RM ? 0.3 : 1) * (W < 640 ? 0.7 : 1)));
  const palette = () => isDark()
    ? ["#ffb3cc", "#ff7aa6", "#dcbcff", "#ffe2a8", "#ffc09a", "#ffffff"]
    : ["#ff6f9f", "#e2557f", "#9b6be0", "#e8b44e", "#ff9a6a", "#c77dff"];
  const heartColors = () => isDark()
    ? ["#ff7aa6", "#ffb3cc", "#ff9ec0", "#dcbcff"]
    : ["#ff5c8f", "#e2557f", "#ff8fb3", "#b48cff"];
  const sparkColors = () => isDark()
    ? ["#fff6d6", "#ffe2a8", "#ffd1e6", "#ffffff"]
    : ["#e8b44e", "#ff7aa6", "#b48cff", "#f5c96a"];

  function resize() {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    W = innerWidth; H = innerHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function make(o) {
    return Object.assign({ life: 0, max: 100, vx: 0, vy: 0, g: 0.12, drag: 0.985, rot: 0, vr: 0, size: 8, alpha: 1 }, o);
  }
  function kick() {
    if (running) return;
    running = true;
    last = performance.now();
    requestAnimationFrame(loop);
  }
  function add(o) {
    parts.push(make(o));
    kick();
  }

  function draw(p, k, dark) {
    const fade = k > 0.7 ? (1 - k) / 0.3 : 1;
    ctx.globalAlpha = Math.max(0, fade * p.alpha);
    if (p.kind === "confetti") {
      p.tilt += p.vt;
      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(1, Math.cos(p.tilt));
      ctx.fillStyle = p.color;
      if (p.round) { ctx.beginPath(); ctx.arc(0, 0, p.size * 0.38, 0, 6.283); ctx.fill(); }
      else ctx.fillRect(-p.size / 2, -p.size * 0.28, p.size, p.size * 0.56);
      ctx.restore();
    } else if (p.kind === "heart") {
      const s = (p.size / 24) * Math.min(1, p.life / 8);
      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(s, s); ctx.translate(-12, -12);
      ctx.fillStyle = p.color;
      ctx.fill(heartPath);
      ctx.restore();
    } else if (p.kind === "star") {
      const s = p.size * (0.6 + 0.4 * Math.sin(p.life * 0.35 + p.ph));
      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.quadraticCurveTo(0, 0, s, 0);
      ctx.quadraticCurveTo(0, 0, 0, s);
      ctx.quadraticCurveTo(0, 0, -s, 0);
      ctx.quadraticCurveTo(0, 0, 0, -s);
      ctx.fill();
      ctx.restore();
    } else {
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
      ctx.fillStyle = p.color;
      const r = p.size * (1 - k * 0.5), a = ctx.globalAlpha;
      ctx.globalAlpha = a * 0.3;
      ctx.beginPath(); ctx.arc(p.x, p.y, r * 2.6, 0, 6.283); ctx.fill();
      ctx.globalAlpha = a;
      ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, 6.283); ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    }
  }

  function loop(t) {
    const dt = clamp((t - last) / 16.67, 0.5, 2.5);
    last = t;
    ctx.clearRect(0, 0, W, H);
    if (fw && t > nextRocket) {
      launch();
      nextRocket = t + rand(650, 1300);
    }
    const dark = isDark();
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.life += dt;
      const dr = Math.pow(p.drag, dt);
      p.vx *= dr;
      p.vy = p.vy * dr + p.g * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rot += p.vr * dt;
      if (p.kind === "rocket") {
        if (Math.random() < 0.8) {
          parts.push(make({ kind: "spark", x: p.x + rand(-1, 1), y: p.y, vx: rand(-0.3, 0.3), vy: rand(0, 0.8), g: 0.02, drag: 0.96, max: rand(18, 30), size: rand(1, 1.8), color: p.color }));
        }
        if (p.vy > -1.2 || p.life > p.max) {
          explode(p);
          parts.splice(i, 1);
          continue;
        }
      }
      const k = p.life / p.max;
      if (k >= 1 || p.y > H + 80 || p.x < -80 || p.x > W + 80) {
        parts.splice(i, 1);
        continue;
      }
      draw(p, k, dark);
    }
    ctx.globalAlpha = 1;
    if (parts.length || fw) requestAnimationFrame(loop);
    else { running = false; ctx.clearRect(0, 0, W, H); }
  }

  function confetti(x, y, n, o = {}) {
    const cols = o.colors || palette();
    const pw = o.power || [4, 11];
    const ang = o.angle ?? -Math.PI / 2, spread = o.spread ?? Math.PI * 2;
    for (let i = 0; i < amount(n); i++) {
      const a = ang + rand(-spread / 2, spread / 2), sp = rand(pw[0], pw[1]);
      add({ kind: "confetti", x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 0.18, drag: 0.965, max: rand(90, 150), size: rand(6, 11), rot: rand(0, 6.28), vr: rand(-0.2, 0.2), tilt: rand(0, 6.28), vt: rand(0.06, 0.22), round: Math.random() < 0.3, color: pick(cols) });
    }
  }
  function hearts(x, y, n) {
    const cols = heartColors();
    for (let i = 0; i < amount(n); i++) {
      const a = rand(-Math.PI * 0.92, -Math.PI * 0.08), sp = rand(3, 9.5);
      add({ kind: "heart", x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 0.13, drag: 0.972, max: rand(80, 120), size: rand(12, 26), rot: rand(-0.4, 0.4), vr: rand(-0.03, 0.03), color: pick(cols) });
    }
  }
  function sparkles(x, y, n) {
    const cols = sparkColors();
    for (let i = 0; i < amount(n); i++) {
      const a = rand(0, 6.283), sp = rand(1, 6), star = Math.random() < 0.55;
      add({ kind: star ? "star" : "spark", x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 0.03, drag: 0.94, max: rand(45, 80), size: star ? rand(4, 9) : rand(1.5, 3), rot: rand(0, 1.5), vr: rand(-0.05, 0.05), ph: rand(0, 6), color: pick(cols) });
    }
  }
  function rain(n) {
    if (RM) return;
    const cols = heartColors();
    for (let i = 0; i < amount(n); i++) {
      add({ kind: "heart", x: rand(0, W), y: rand(-200, -20), vx: rand(-0.5, 0.5), vy: rand(1, 2.5), g: 0.02, drag: 0.995, max: rand(220, 320), size: rand(12, 24), rot: rand(-0.5, 0.5), vr: rand(-0.02, 0.02), color: pick(cols) });
    }
  }
  function cannons() {
    confetti(0, H, 70, { angle: -Math.PI / 3, spread: 0.7, power: [11, 20] });
    confetti(W, H, 70, { angle: (-Math.PI * 2) / 3, spread: 0.7, power: [11, 20] });
  }
  function launch(x) {
    const g = 0.1, d = rand(H * 0.45, H * 0.75);
    add({ kind: "rocket", x: x ?? rand(W * 0.15, W * 0.85), y: H + 10, vx: rand(-0.8, 0.8), vy: -Math.sqrt(2 * g * d), g, drag: 1, max: 200, size: 2.2, color: pick(palette()) });
  }
  function explode(p) {
    const cols = [p.color, pick(palette())];
    const heartShape = Math.random() < 0.3;
    const n = amount(heartShape ? 64 : 80);
    for (let i = 0; i < n; i++) {
      let vx, vy;
      if (heartShape) {
        const t = (i / n) * 6.283;
        vx = 16 * Math.pow(Math.sin(t), 3) * 0.3;
        vy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * 0.3;
      } else {
        const a = rand(0, 6.283), sp = rand(1.5, 5.5);
        vx = Math.cos(a) * sp; vy = Math.sin(a) * sp;
      }
      parts.push(make({ kind: "spark", x: p.x, y: p.y, vx, vy, g: 0.045, drag: 0.975, max: rand(60, 90), size: rand(1.4, 2.4), color: pick(cols) }));
    }
  }
  function fireworks(on) {
    if (on === fw) return;
    fw = on;
    if (on) { nextRocket = 0; kick(); }
  }
  function salvo(n) {
    for (let i = 0; i < n; i++) setTimeout(() => launch(rand(W * 0.15, W * 0.85)), i * 180);
  }

  resize();
  addEventListener("resize", resize);
  return { confetti, hearts, sparkles, rain, cannons, fireworks, salvo };
})();

/* Ambient background: drifting bokeh and twinkling stars */
const Ambient = (() => {
  const cv = $("#ambient"), ctx = cv.getContext("2d");
  let W = 0, H = 0, stars = [], bokeh = [], sprites = [], last = 0;

  function makeSprites() {
    const cols = isDark()
      ? ["255,150,205", "190,160,255", "255,205,150", "255,255,255"]
      : ["255,255,255", "255,160,195", "200,170,255", "255,200,160"];
    sprites = cols.map((c) => {
      const s = document.createElement("canvas");
      s.width = s.height = 128;
      const g = s.getContext("2d");
      const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
      gr.addColorStop(0, `rgba(${c},.55)`);
      gr.addColorStop(0.55, `rgba(${c},.18)`);
      gr.addColorStop(1, `rgba(${c},0)`);
      g.fillStyle = gr;
      g.fillRect(0, 0, 128, 128);
      return s;
    });
  }
  function resize(force) {
    const nw = innerWidth, nh = innerHeight;
    if (!force && nw === W && Math.abs(nh - H) < 160) return false;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    W = nw; H = nh;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const ns = Math.round(Math.min(140, (W * H) / 9000));
    stars = Array.from({ length: ns }, () => ({ x: Math.random() * W, y: Math.random() * H, r: rand(0.4, 1.4), p: rand(0, 6.28), s: rand(0.6, 1.8) }));
    bokeh = Array.from({ length: W < 640 ? 8 : 14 }, () => ({ x: Math.random() * W, y: Math.random() * H, r: rand(30, 110), vx: rand(-0.12, 0.12), vy: rand(-0.25, -0.05), i: Math.floor(Math.random() * 4), a: rand(0.35, 0.9) }));
    return true;
  }
  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    const dark = isDark();
    for (const b of bokeh) {
      if (!RM) {
        b.x += b.vx; b.y += b.vy;
        if (b.y < -b.r * 2) { b.y = H + b.r; b.x = Math.random() * W; }
        if (b.x < -b.r * 2) b.x = W + b.r;
        if (b.x > W + b.r * 2) b.x = -b.r;
      }
      ctx.globalAlpha = b.a;
      ctx.drawImage(sprites[b.i], b.x - b.r, b.y - b.r, b.r * 2, b.r * 2);
    }
    ctx.fillStyle = dark ? "#ffffff" : "#c9962f";
    for (const s of stars) {
      const tw = RM ? 0.6 : 0.35 + 0.65 * (0.5 + 0.5 * Math.sin((t / 1000) * s.s + s.p));
      ctx.globalAlpha = tw * (dark ? 0.9 : 0.4);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, 6.283);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  function loop(t) {
    requestAnimationFrame(loop);
    if (t - last < 33) return;
    last = t;
    draw(t);
  }
  function start() {
    resize(true);
    makeSprites();
    if (RM) draw(0);
    else requestAnimationFrame(loop);
    addEventListener("resize", () => { if (resize(false) && RM) draw(0); });
    darkMQ.addEventListener("change", () => { makeSprites(); if (RM) draw(0); });
  }
  return { start };
})();


/* Fill in personal text */
function fillContent() {
  $$("[data-name]").forEach((n) => (n.textContent = CONFIG.name));
  $$("[data-full]").forEach((n) => (n.textContent = fmt("{full}")));
  $$("[data-from-full]").forEach((n) => (n.textContent = CONFIG.fromFull || CONFIG.from));
  $("#openerTitle").textContent = fmt(CONFIG.openerText);
  $$("[data-from]").forEach((n) => (n.textContent = CONFIG.from));
  document.title = fmt("Happy Birthday, {full}");
  $("#heroTitle").setAttribute("aria-label", `Happy Birthday, ${CONFIG.name}!`);
  $("#heroSub").textContent = fmt(CONFIG.heroSubtitle);
  $("#wishCardTitle").textContent = fmt(CONFIG.wish.title);
  $("#wishCardText").textContent = fmt(CONFIG.wish.text);
  $("#secretTitle").textContent = fmt(CONFIG.secret.title);
  $("#secretText").textContent = fmt(CONFIG.secret.text);
  $("#finTitle").textContent = fmt(CONFIG.finale.title);
  $("#finLine").textContent = fmt(CONFIG.finale.line);
  $("#finClosing").textContent = fmt(CONFIG.finale.closing);
}

/* Sound buttons */
const musicBtn = $("#musicBtn"), muteBtn = $("#muteBtn");
function syncSoundUI() {
  musicBtn.setAttribute("aria-pressed", String(Sound.playing));
  musicBtn.title = Sound.playing ? "Pause music" : "Play music";
  muteBtn.setAttribute("aria-pressed", String(Sound.muted));
  muteBtn.title = Sound.muted ? "Unmute sound" : "Mute all sound";
}
musicBtn.addEventListener("click", () => {
  if (Sound.playing) Sound.stopMusic();
  else {
    if (Sound.muted) Sound.setMuted(false);
    Sound.startMusic();
  }
  syncSoundUI();
});
muteBtn.addEventListener("click", () => {
  Sound.setMuted(!Sound.muted);
  syncSoundUI();
});

/* Modals */
const Modal = (() => {
  let current = null, lastFocus = null;
  function open(m) {
    lastFocus = document.activeElement;
    m.hidden = false;
    current = m;
    nextFrame(() => m.classList.add("show"));
    setTimeout(() => {
      const f = m.querySelector("[data-close]");
      if (f) f.focus({ preventScroll: true });
    }, 60);
  }
  function close() {
    if (!current) return;
    const m = current;
    current = null;
    m.classList.remove("show");
    setTimeout(() => { if (current !== m) m.hidden = true; }, 400);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  $$(".modal").forEach((m) =>
    m.addEventListener("click", (e) => {
      if (e.target === m || e.target.closest("[data-close]")) close();
    })
  );
  document.addEventListener("keydown", (e) => {
    if (!current) return;
    if (e.key === "Escape") { close(); return; }
    if (e.key === "Tab") {
      const f = $$("button", current).filter((b) => !b.hidden && b.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], lastEl = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); lastEl.focus(); }
      else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); first.focus(); }
    }
  });
  return { open, close, get current() { return current; } };
})();

/* Opening surprise */
const opener = $("#opener"), openBtn = $("#openBtn"), main = $("#main"), hero = $("#hero");
let opening = false;

function splitWords(node) {
  const words = node.textContent.trim().split(/\s+/);
  node.setAttribute("aria-label", node.textContent.trim());
  node.textContent = "";
  words.forEach((w, i) => {
    const s = el("span", "w", node);
    s.setAttribute("aria-hidden", "true");
    s.textContent = w;
    s.style.setProperty("--i", i);
    if (i < words.length - 1) node.appendChild(document.createTextNode(" "));
  });
}

async function openSurprise() {
  if (opening) return;
  opening = true;
  Sound.init();
  if (CONFIG.music.playOnOpen && !Sound.muted && !Sound.playing) Sound.startMusic();
  syncSoundUI();
  Sound.sfx.chime();
  opener.classList.add("opening");
  await wait(RM ? 50 : 650);
  const [x, y] = centerOf($("#gift3d"));
  FX.sparkles(x, y - 30, 46);
  FX.hearts(x, y - 20, 30);
  FX.confetti(x, y - 20, 90, { power: [6, 15] });
  Sound.sfx.sparkle();
  await wait(RM ? 200 : 1100);
  opener.classList.add("gone");
  document.documentElement.classList.remove("locked");
  main.inert = false;
  document.body.classList.add("opened");
  hero.classList.add("play");
  await wait(1000);
  opener.hidden = true;
  opening = false;
  const title = $("#heroTitle");
  title.setAttribute("tabindex", "-1");
  title.focus({ preventScroll: true });
}

function restart() {
  FX.fireworks(false);
  Modal.close();
  window.scrollTo({ top: 0, behavior: "instant" });
  hero.classList.remove("play");
  document.body.classList.remove("opened");
  main.inert = true;
  document.documentElement.classList.add("locked");
  opener.hidden = false;
  opener.classList.remove("opening", "gone", "intro");
  void opener.offsetWidth;
  opener.classList.add("intro");
  openBtn.focus({ preventScroll: true });
}

/* Hero */
function buildHero() {
  const hb = $("#heroHb");
  const text = hb.textContent;
  hb.textContent = "";
  [...text].forEach((c, i) => {
    const s = el("span", "ch", hb);
    s.textContent = c === " " ? "\u00A0" : c;
    s.style.setProperty("--i", i);
  });

  const sky = $("#heroSky");
  const small = innerWidth < 640;
  const colors = ["#ff8fb3", "#c9a7ff", "#ffc09a", "#f3cf86", "#ff9ec0", "#b69bff", "#ffb3cc"];
  const nb = small ? 4 : 7;
  for (let i = 0; i < nb; i++) {
    const f = el("div", "f-balloon", sky);
    const x = small ? (i % 2 ? rand(-3, 7) : rand(86, 94)) : i % 2 ? rand(1, 20) : rand(80, 95);
    const dur = rand(20, 32);
    f.style.setProperty("--x", x.toFixed(1) + "%");
    f.style.setProperty("--dur", dur.toFixed(1) + "s");
    f.style.setProperty("--delay", (-rand(0, dur)).toFixed(1) + "s");
    f.appendChild(makeBalloon(colors[i % colors.length], small ? rand(30, 42) : rand(46, 68)));
  }
  const nh = small ? 5 : 9;
  for (let i = 0; i < nh; i++) {
    const h = el("div", "f-heart", sky);
    const x = small ? (i % 2 ? rand(1, 9) : rand(88, 95)) : i % 2 ? rand(3, 18) : rand(82, 95);
    h.style.setProperty("--x", x.toFixed(1) + "%");
    h.style.setProperty("--y", rand(10, 85).toFixed(1) + "%");
    h.style.setProperty("--sz", rand(16, small ? 28 : 40).toFixed(0) + "px");
    h.style.setProperty("--dur", rand(4, 7).toFixed(1) + "s");
    h.style.setProperty("--delay", (-rand(0, 6)).toFixed(1) + "s");
    h.style.setProperty("--spin", rand(6, 11).toFixed(1) + "s");
    h.innerHTML = heartSVG(i % 3 === 0 ? "url(#gHeart2)" : "url(#gHeart)");
  }
  const np = small ? 6 : 11;
  for (let i = 0; i < np; i++) {
    const p = el("div", "f-petal", sky);
    const dur = rand(13, 22);
    p.style.setProperty("--x", rand(0, 100).toFixed(1) + "%");
    p.style.setProperty("--dur", dur.toFixed(1) + "s");
    p.style.setProperty("--delay", (-rand(0, dur)).toFixed(1) + "s");
    p.style.setProperty("--dx", rand(-90, 90).toFixed(0) + "px");
    el("i", "", p);
  }
  const ns = small ? 10 : 18;
  for (let i = 0; i < ns; i++) {
    const s = el("div", "f-star", sky);
    s.style.setProperty("--x", rand(2, 97).toFixed(1) + "%");
    s.style.setProperty("--y", rand(4, 92).toFixed(1) + "%");
    s.style.setProperty("--sz", rand(7, 15).toFixed(0) + "px");
    s.style.setProperty("--dur", rand(2.5, 5).toFixed(1) + "s");
    s.style.setProperty("--delay", (-rand(0, 5)).toFixed(1) + "s");
    s.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="${SPARK}"/></svg>`;
  }

  $("#celebrateBtn").addEventListener("click", (e) => {
    const [x, y] = centerOf(e.currentTarget);
    FX.confetti(x, y, 40, { power: [5, 11] });
    Sound.sfx.sparkle();
    $("#wish").scrollIntoView({ behavior: RM ? "auto" : "smooth" });
  });
}

function setupDate() {
  const m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(String(CONFIG.birthday || "").trim());
  if (!m) return;
  const chip = $("#dateChip"), label = $(".dc-label", chip), time = $(".dc-time", chip);
  const month = +m[2] - 1, day = +m[3];
  const nice = new Date(2000, month, day).toLocaleDateString(undefined, { month: "long", day: "numeric" });
  const pad = (n) => String(n).padStart(2, "0");
  chip.hidden = false;
  function tick() {
    const now = new Date();
    if (now.getMonth() === month && now.getDate() === day) {
      chip.classList.add("today");
      label.textContent = `🎂 It's ${nice}, your day`;
      time.textContent = "";
      return;
    }
    chip.classList.remove("today");
    let next = new Date(now.getFullYear(), month, day);
    if (next <= now) next = new Date(now.getFullYear() + 1, month, day);
    let s = Math.floor((next - now) / 1000);
    const d = Math.floor(s / 86400); s -= d * 86400;
    const h = Math.floor(s / 3600); s -= h * 3600;
    const mi = Math.floor(s / 60); s -= mi * 60;
    label.textContent = `Counting down to ${nice}`;
    time.textContent = `${d}d ${pad(h)}h ${pad(mi)}m ${pad(s)}s`;
  }
  tick();
  setInterval(tick, 1000);
}

function setupTogether() {
  const m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(String(CONFIG.together || "").trim());
  if (!m) return;
  const since = new Date(+m[1], +m[2] - 1, +m[3]);
  if (since > new Date()) return;
  const chip = $("#togetherChip"), time = $(".dc-time", chip);
  const pad = (n) => String(n).padStart(2, "0");
  $(".dc-label", chip).textContent = "💞 Together for";
  chip.hidden = false;
  function tick() {
    let s = Math.floor((Date.now() - since) / 1000);
    const d = Math.floor(s / 86400); s -= d * 86400;
    const h = Math.floor(s / 3600); s -= h * 3600;
    const mi = Math.floor(s / 60); s -= mi * 60;
    time.textContent = `${d.toLocaleString()} days ${pad(h)}h ${pad(mi)}m ${pad(s)}s`;
  }
  tick();
  setInterval(tick, 1000);
}

/* Birthday cake */
const Cake = (() => {
  const section = $("#wish"), cake = $("#cake"), stage = $("#cakeStage"), hint = $("#cakeHint");
  const wishBtn = $("#wishBtn"), relightBtn = $("#relightBtn"), card = $("#wishCard");
  const N = clamp(Math.round(CONFIG.candles) || 5, 1, 9);
  const em = (px) => (px / 16).toFixed(4) + "em";
  const idleHint = N === 1 ? "One candle is glowing just for you" : `${N} candles are glowing just for you`;
  let candles = [], busy = false;

  const arc = (x, W, ry) => ry * Math.sqrt(Math.max(0, 1 - ((x - W / 2) / (W / 2)) ** 2));

  function drip(host, o) {
    const r = seeded(o.seed), drips = [];
    let x = 4 + r() * 10;
    while (x < o.W - 6) {
      const w = 4 + r() * 6;
      const edge = Math.sqrt(Math.max(0, 1 - ((x - o.W / 2) / (o.W / 2)) ** 2));
      drips.push({ c: x, w, len: (5 + r() * o.maxLen) * (0.3 + 0.7 * edge) });
      x += w * 2 + 3 + r() * 12;
    }
    const base = (x) => o.band + arc(x, o.W, o.ry);
    const pts = [];
    for (let x = o.W; x >= 0; x -= 1.5) {
      let d = 0;
      for (const k of drips) {
        const u = (x - k.c) / k.w;
        if (Math.abs(u) < 1) d = Math.max(d, k.len * Math.pow(1 - u * u, 0.35));
      }
      pts.push(`${x.toFixed(1)},${(base(x) + d).toFixed(1)}`);
    }
    pts.push(`0,${base(0).toFixed(1)}`);
    const h = o.band + o.ry + o.maxLen + 6;
    const svg = svgEl("svg", { class: "t-drip", viewBox: `0 0 ${o.W} ${h}`, preserveAspectRatio: "none", "aria-hidden": "true" }, host);
    svg.style.height = em(h);
    const defs = svgEl("defs", {}, svg);
    const lg = svgEl("linearGradient", { id: `drip-${o.seed}`, x1: "0", x2: "1", y1: "0", y2: "0" }, defs);
    [[0, "#e6d4cc"], [0.14, "#fff4ec"], [0.36, "#fffdfb"], [0.6, "#fff7f1"], [0.88, "#eedad2"], [1, "#d8c2ba"]].forEach(([off, c]) =>
      svgEl("stop", { offset: off, "stop-color": c }, lg)
    );
    const d = `M0,0 L${o.W},0 L${pts.join(" L")} Z`;
    svgEl("path", { d, fill: "rgba(110,50,90,.16)", transform: "translate(0 1.8)" }, svg);
    svgEl("path", { d, fill: `url(#drip-${o.seed})` }, svg);
    for (const k of drips) {
      if (k.len < 9) continue;
      svgEl("ellipse", { cx: k.c - k.w * 0.15, cy: base(k.c) + k.len * 0.7, rx: k.w * 0.22, ry: k.w * 0.32, fill: "#fff", opacity: ".7" }, svg);
    }
  }

  function pearls(host, o) {
    const cl = o.Hc - o.ry;
    for (let i = 0; i < o.pearls; i++) {
      const th = (Math.PI * (i + 0.5)) / o.pearls;
      const x = o.W / 2 - (o.W / 2 - o.pr * 0.6) * Math.cos(th);
      const y = cl + o.ry * Math.sin(th) - o.pr * 0.9;
      const p = el("span", "pearl", host);
      p.style.cssText = `left:${em(x - o.pr)};top:${em(y - o.pr)};width:${em(o.pr * 2)};height:${em(o.pr * 2)}`;
    }
  }

  function lights(host, o) {
    const svg = svgEl("svg", { class: "t-wire", viewBox: `0 0 ${o.W} ${o.Hc}`, preserveAspectRatio: "none", "aria-hidden": "true" }, host);
    const xs = [10, 97, 183, 270];
    const ay = (x) => o.ry + 64 + arc(x, o.W, o.ry);
    const cols = [["#ffe3a3", "rgba(255,200,110,.6)"], ["#ffb3cf", "rgba(255,120,170,.55)"], ["#e6ccff", "rgba(190,150,255,.55)"]];
    let d = "", n = 0;
    for (let i = 0; i < 3; i++) {
      const x0 = xs[i], x1 = xs[i + 1], y0 = ay(x0), y1 = ay(x1), cx = (x0 + x1) / 2, cy = (y0 + y1) / 2 + 30;
      d += `M${x0},${y0.toFixed(1)} Q${cx},${cy.toFixed(1)} ${x1},${y1.toFixed(1)} `;
      for (const t of [0.12, 0.31, 0.5, 0.69, 0.88]) {
        const bx = (1 - t) ** 2 * x0 + 2 * (1 - t) * t * cx + t * t * x1;
        const by = (1 - t) ** 2 * y0 + 2 * (1 - t) * t * cy + t * t * y1;
        const b = el("span", "bulb", host);
        const c = cols[n++ % 3];
        b.style.cssText = `left:${em(bx - 3.4)};top:${em(by - 1.5)};--bc:${c[0]};--bh:${c[1]};--bd:${rand(1.4, 3).toFixed(1)}s;--bdl:${(-rand(0, 3)).toFixed(1)}s`;
      }
    }
    svgEl("path", { d }, svg);
  }

  function sprinkles(host, o) {
    const r = seeded(o.seed + 7);
    const cols = ["#ffffff", "#f3cf86", "#c9a7ff", "#ff8fb3", "#ffe3a3"];
    for (let i = 0; i < 34; i++) {
      const x = 10 + r() * (o.W - 20);
      const y = o.ry + 26 + r() * (o.Hc - o.ry * 2 - 34 + arc(x, o.W, o.ry) * 0.8);
      const s = el("span", "sprinkle", host);
      s.style.cssText = `left:${em(x)};top:${em(y)};--sc:${cols[i % cols.length]};--r:${Math.floor(r() * 180)}deg`;
    }
  }

  function tier(host, o) {
    el("div", "t-body", host);
    if (o.sprinkles) sprinkles(host, o);
    if (o.lights) lights(host, o);
    drip(host, o);
    el("div", "t-top", host);
    pearls(host, o);
  }

  function dollops() {
    const back = $("#dollopsBack"), front = $("#dollopsFront");
    const cx = 180, cy = 128, rx = 84, ry = 11.5, n = 16;
    for (let i = 0; i < n; i++) {
      const th = (i / n) * Math.PI * 2;
      const x = cx + rx * Math.cos(th), y = cy + ry * Math.sin(th);
      const d = el("span", "dollop" + (i % 2 ? " gold" : ""), Math.sin(th) < 0 ? back : front);
      const s = 0.88 + 0.12 * ((Math.sin(th) + 1) / 2);
      d.style.cssText = `left:${em(x - 8.8)};top:${em(y - 11)};transform:scale(${s.toFixed(3)})`;
    }
  }

  function buildCandles() {
    const host = $("#candles");
    const cols = ["#ffb3c9", "#cdb5ff", "#ffd29e", "#f7a1c4", "#e2c4ff"];
    const rx = N <= 2 ? 30 : N <= 4 ? 44 : 54, ry = 7;
    const list = [];
    for (let i = 0; i < N; i++) {
      const th = N === 1 ? Math.PI / 2 : Math.PI / 2 + Math.PI / N + (i * 2 * Math.PI) / N;
      const x = N === 1 ? 180 : 180 + rx * Math.cos(th);
      const y = N === 1 ? 130 : 128 + ry * Math.sin(th) + 2;
      list.push({ x, y, depth: Math.sin(th), color: cols[i % cols.length] });
    }
    list.sort((a, b) => a.y - b.y);
    list.forEach((c, i) => {
      const b = el("button", "candle", host);
      b.type = "button";
      b.setAttribute("aria-label", `Blow out candle ${i + 1}`);
      const s = N === 1 ? 1 : 0.92 + 0.08 * ((c.depth + 1) / 2);
      b.style.cssText = `left:${em(c.x - 5.6)};top:${em(c.y - 52.8)};--cc:${c.color};--fd:${rand(1.1, 1.8).toFixed(2)}s;transform:scale(${s.toFixed(3)});transform-origin:50% 100%`;
      b.innerHTML = '<span class="c-glow"></span><span class="c-stick"></span><span class="c-wick"></span><span class="c-flame"></span><span class="c-smokes"><span class="c-smoke"></span><span class="c-smoke"></span><span class="c-smoke"></span></span>';
      b.addEventListener("click", () => tapCandle(b, i));
      candles.push(b);
    });
  }

  const litCount = () => candles.filter((c) => !c.classList.contains("out")).length;
  function updateLit() {
    const lit = litCount();
    cake.style.setProperty("--lit", (lit / N).toFixed(2));
    return lit;
  }
  function blow(c, idx) {
    if (c.classList.contains("out")) return false;
    c.classList.add("out");
    c.setAttribute("aria-label", `Candle ${idx + 1} is out`);
    return true;
  }
  function tapCandle(c, idx) {
    if (busy || !blow(c, idx)) return;
    Sound.sfx.puff();
    const [x, y] = centerOf($(".c-wick", c));
    FX.sparkles(x, y - 10, 8);
    const lit = updateLit();
    if (lit === 0) finish();
    else hint.textContent = lit === 1 ? "Just one more…" : `${lit} still glowing`;
  }

  async function finish() {
    busy = true;
    wishBtn.hidden = true;
    await wait(RM ? 100 : 450);
    const [x, y] = centerOf($("#tierT"));
    FX.sparkles(x, y - 50, 50);
    FX.hearts(x, y - 30, 18);
    FX.confetti(x, y - 40, 70, { power: [5, 12] });
    Sound.sfx.magic();
    hint.textContent = "All the candles are out.";
    card.hidden = false;
    nextFrame(() => card.classList.add("show"));
    relightBtn.hidden = false;
    busy = false;
  }

  async function makeWish() {
    if (busy || litCount() === 0) return;
    busy = true;
    wishBtn.disabled = true;
    section.classList.add("wishing");
    hint.textContent = "Close your eyes…";
    await wait(RM ? 700 : 1600);
    hint.textContent = "…and make a wish";
    await wait(RM ? 800 : 1800);
    Sound.sfx.blow();
    for (let i = 0; i < candles.length; i++) {
      if (blow(candles[i], i)) await wait(RM ? 0 : 110);
    }
    updateLit();
    section.classList.remove("wishing");
    wishBtn.disabled = false;
    busy = false;
    finish();
  }

  async function relight() {
    if (busy) return;
    busy = true;
    card.classList.remove("show");
    relightBtn.hidden = true;
    await wait(300);
    card.hidden = true;
    for (let i = 0; i < candles.length; i++) {
      candles[i].classList.remove("out");
      candles[i].setAttribute("aria-label", `Blow out candle ${i + 1}`);
      Sound.sfx.light();
      updateLit();
      await wait(RM ? 0 : 150);
    }
    hint.textContent = idleHint;
    wishBtn.hidden = false;
    busy = false;
  }

  function tilt() {
    if (!FINE) return;
    stage.addEventListener("pointermove", (e) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      cake.style.setProperty("--ry", ((px - 0.5) * 14).toFixed(2) + "deg");
      cake.style.setProperty("--rx", ((0.5 - py) * 9).toFixed(2) + "deg");
    });
    stage.addEventListener("pointerleave", () => {
      cake.style.setProperty("--ry", "0deg");
      cake.style.setProperty("--rx", "0deg");
    });
  }

  function build() {
    tier($("#tierB"), { W: 280, Hc: 154, ry: 22, band: 14, maxLen: 30, seed: 11, pearls: 18, pr: 4.5, lights: true });
    tier($("#tierT"), { W: 190, Hc: 115, ry: 15, band: 10, maxLen: 24, seed: 29, pearls: 14, pr: 3.6, sprinkles: true });
    dollops();
    buildCandles();
    hint.textContent = idleHint;
    wishBtn.addEventListener("click", makeWish);
    relightBtn.addEventListener("click", relight);
    tilt();
  }
  return { build };
})();

/* Lantern sky */
const Lanterns = (() => {
  const sky = $("#lanternSky"), read = $("#lanternRead"), input = $("#wishInput"), btn = $("#releaseBtn");
  const KEY = "birthday-lanterns";
  const COLORS = [
    ["#ffcf6e", "#ff8a4c", "rgba(255,170,90,.7)"],
    ["#ffb0c8", "#e8608a", "rgba(255,120,170,.65)"],
    ["#ffd4a8", "#ff9070", "rgba(255,160,120,.65)"],
    ["#e8c8ff", "#a77be6", "rgba(200,150,255,.6)"],
  ];
  const PRESET_SPOTS = [[26, 36], [52, 17], [75, 40]];
  let mine = [], all = [];

  function load() {
    try {
      const v = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(v) ? v.filter((x) => x && typeof x.t === "string" && isFinite(x.x) && isFinite(x.y)) : [];
    } catch (e) {
      return [];
    }
  }
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(mine.map(({ t, x, y, c }) => ({ t, x, y, c }))));
    } catch (e) {}
  }
  function show(text) {
    read.textContent = `“${text}”`;
    read.classList.remove("pop");
    void read.offsetWidth;
    read.classList.add("pop");
  }
  function place(item) {
    const b = el("button", "lantern", sky);
    b.type = "button";
    b.setAttribute("aria-label", `Lantern wish: ${item.t}`);
    const [c1, c2, g] = COLORS[(item.c || 0) % COLORS.length];
    const lw = 28 + (item.y / 58) * 18;
    b.style.cssText = `left:${item.x}%;top:${item.y}%;--lw:${lw.toFixed(1)}px;--lc1:${c1};--lc2:${c2};--lg:${g};--bd:${rand(3.2, 5).toFixed(1)}s;--bdl:${(-rand(0, 4)).toFixed(1)}s`;
    el("i", "", el("span", "l-bob", b));
    b.addEventListener("click", () => {
      show(item.t);
      Sound.sfx.light();
      b.classList.remove("ping");
      void b.offsetWidth;
      b.classList.add("ping");
    });
    item.node = b;
    all.push(item);
    return b;
  }
  function spot() {
    let best = [50, 30], bestD = -1;
    for (let k = 0; k < 18; k++) {
      const x = rand(8, 92), y = rand(8, 58);
      if ((x < 22 && y < 30) || (x > 82 && y < 24)) continue;
      let d = 99;
      for (const it of all) d = Math.min(d, Math.hypot((it.x - x) * 1.4, it.y - y));
      if (d > bestD) { bestD = d; best = [x, y]; }
    }
    return best.map((v) => Math.round(v * 10) / 10);
  }
  function release() {
    const text = input.value.trim().slice(0, 80);
    if (!text) {
      read.textContent = "Write a wish first, then send it up.";
      input.focus();
      return;
    }
    const [x, y] = spot();
    const item = { t: text, x, y, c: Math.floor(Math.random() * COLORS.length) };
    mine.push(item);
    if (mine.length > 24) {
      const old = mine.shift();
      old.node.remove();
      all = all.filter((i) => i !== old);
    }
    save();
    const b = place(item);
    input.value = "";
    read.textContent = "Your lantern is on its way up…";
    Sound.sfx.release();
    if (RM) { show(text); return; }
    const r = sky.getBoundingClientRect();
    const dx = r.width * 0.5 - (x / 100) * r.width, dy = r.height * 0.98 - (y / 100) * r.height;
    const anim = b.animate([
      { transform: `translate(${dx}px, ${dy}px) scale(1.35)`, opacity: 0 },
      { transform: `translate(${dx * 0.75 + 18}px, ${dy * 0.7}px) scale(1.25)`, opacity: 1, offset: 0.25 },
      { transform: `translate(${dx * 0.3 - 14}px, ${dy * 0.3}px) scale(1.1)`, opacity: 1, offset: 0.62 },
      { transform: "translate(0, 0) scale(1)", opacity: 1 },
    ], { duration: 5600, easing: "cubic-bezier(.3,.55,.35,1)" });
    anim.onfinish = () => {
      const [cx, cy] = centerOf(b);
      FX.sparkles(cx, cy, 14);
      show(text);
    };
  }
  function build() {
    for (let i = 0; i < 36; i++) {
      const d = el("span", "ls-dot");
      d.setAttribute("aria-hidden", "true");
      d.style.cssText = `--x:${rand(2, 98).toFixed(1)}%;--y:${rand(2, 64).toFixed(1)}%;--sz:${rand(1, 2.4).toFixed(1)}px;--dur:${rand(2.5, 5).toFixed(1)}s;--delay:${(-rand(0, 5)).toFixed(1)}s`;
      sky.insertBefore(d, sky.firstChild);
    }
    (CONFIG.lanternWishes || []).forEach((t, i) => {
      const p = PRESET_SPOTS[i] || spot();
      place({ t: fmt(t), x: p[0], y: p[1], c: i });
    });
    mine = load();
    mine.forEach((item) => place(item));
    const chips = $("#wishChips");
    (CONFIG.lanternSuggestions || []).forEach((t) => {
      const c = el("button", "chip", chips);
      c.type = "button";
      c.textContent = fmt(t);
      c.addEventListener("click", () => {
        input.value = c.textContent;
        input.focus();
      });
    });
    btn.addEventListener("click", release);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); release(); }
    });
  }
  return { build };
})();

/* Scratch-card fortune */
function buildScratch() {
  const box = $("#scratch"), cv = $("#scratchCanvas"), ctx = cv.getContext("2d", { willReadFrequently: true });
  const fortune = $("#fortune"), btn = $("#scratchBtn"), hint = $("#scratchHint");
  const list = (CONFIG.fortunes || []).map(fmt);
  if (!list.length) list.push("Something wonderful is coming your way.");
  const order = list.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  let idx = 0, revealed = false, drawing = false, last = null, moves = 0;

  function sparkle(x, y, s) {
    ctx.beginPath();
    ctx.moveTo(x, y - s);
    ctx.quadraticCurveTo(x, y, x + s, y);
    ctx.quadraticCurveTo(x, y, x, y + s);
    ctx.quadraticCurveTo(x, y, x - s, y);
    ctx.quadraticCurveTo(x, y, x, y - s);
    ctx.fill();
  }
  function paint() {
    const r = box.getBoundingClientRect();
    if (!r.width) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1), w = r.width, h = r.height;
    cv.width = Math.round(w * dpr);
    cv.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, "#f6dc9f"); g.addColorStop(0.3, "#e5b562"); g.addColorStop(0.5, "#fbe9bf");
    g.addColorStop(0.72, "#d9a441"); g.addColorStop(1, "#f3d38c");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 280; i++) {
      ctx.fillStyle = Math.random() < 0.5 ? "rgba(255,255,255,.4)" : "rgba(140,90,20,.18)";
      ctx.fillRect(Math.random() * w, Math.random() * h, 1.4, 1.4);
    }
    ctx.fillStyle = "rgba(255,255,255,.9)";
    [[0.13, 0.22, 7], [0.87, 0.28, 5], [0.18, 0.8, 5], [0.84, 0.76, 8]].forEach(([x, y, s]) => sparkle(x * w, y * h, s));
    ctx.fillStyle = "#7a5518";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "500 16px Jost, 'Segoe UI', sans-serif";
    ctx.fillText("Scratch here", w / 2, h / 2 - 9);
    ctx.font = "300 12px Jost, 'Segoe UI', sans-serif";
    ctx.fillText("with your finger or mouse", w / 2, h / 2 + 13);
    moves = 0;
  }
  function check() {
    const d = ctx.getImageData(0, 0, cv.width, cv.height).data;
    let clear = 0, total = 0;
    for (let i = 3; i < d.length; i += 4 * 23) {
      total++;
      if (d[i] < 40) clear++;
    }
    if (total && clear / total > 0.5) reveal();
  }
  function scratchTo(p) {
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 30;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(...(last || [p[0] - 0.1, p[1]]));
    ctx.lineTo(...p);
    ctx.stroke();
    last = p;
    moves++;
    if (moves % 5 === 0) Sound.sfx.scratch();
    if (moves % 8 === 0) check();
  }
  const pos = (e) => {
    const r = cv.getBoundingClientRect();
    return [e.clientX - r.left, e.clientY - r.top];
  };
  function reveal() {
    if (revealed) return;
    revealed = true;
    drawing = false;
    box.classList.add("revealed");
    fortune.removeAttribute("aria-hidden");
    const [x, y] = centerOf(box);
    FX.sparkles(x, y, 30);
    FX.confetti(x, y, 30, { power: [3, 8], colors: ["#f3cf86", "#ffe2a8", "#ffffff", "#ff9ec0"] });
    Sound.sfx.magic();
    hint.textContent = "Your fortune for the year ahead.";
    btn.textContent = "Scratch Another ✨";
  }
  function next() {
    revealed = false;
    idx = (idx + 1) % order.length;
    fortune.textContent = list[order[idx]];
    fortune.setAttribute("aria-hidden", "true");
    box.classList.remove("revealed");
    paint();
    hint.textContent = "Scratch the gold foil to see what this year has in store.";
    btn.textContent = "Just Reveal It ✨";
  }

  fortune.textContent = list[order[0]];
  btn.addEventListener("click", () => (revealed ? next() : reveal()));
  cv.addEventListener("pointerdown", (e) => {
    if (revealed) return;
    drawing = true;
    last = null;
    try { cv.setPointerCapture(e.pointerId); } catch (err) {}
    scratchTo(pos(e));
  });
  cv.addEventListener("pointermove", (e) => { if (drawing && !revealed) scratchTo(pos(e)); });
  ["pointerup", "pointercancel"].forEach((t) =>
    cv.addEventListener(t, () => {
      drawing = false;
      last = null;
      if (!revealed) check();
    })
  );
  paint();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (!revealed && moves === 0) paint(); });
  let lastW = box.getBoundingClientRect().width;
  new ResizeObserver(() => {
    const w = box.getBoundingClientRect().width;
    if (Math.abs(w - lastW) > 1 && !revealed) { lastW = w; paint(); }
  }).observe(box);
}

/* Letter */
const Letter = (() => {
  const env = $("#envelope"), wrap = $("#envWrap"), card = $("#letterCard");
  const skipBtn = $("#skipBtn"), againBtn = $("#againBtn"), foldBtn = $("#foldBtn");
  const segs = [];
  let run = 0, opened = false;

  function seg(target, text) {
    target.textContent = "";
    const typed = el("span", "tw-typed", target);
    el("span", "tw-caret", target);
    const rest = el("span", "tw-rest", target);
    rest.textContent = text;
    segs.push({ target, text, chars: graphemes(text), typed, rest });
  }
  // Split by visible characters so emoji type out whole
  function graphemes(t) {
    if (window.Intl && Intl.Segmenter) return Array.from(new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(t), (x) => x.segment);
    return Array.from(t);
  }
  const setChars = (s, i) => {
    s.typed.textContent = s.chars.slice(0, i).join("");
    s.rest.textContent = s.chars.slice(i).join("");
  };
  function done() {
    skipBtn.hidden = true;
    againBtn.hidden = false;
    foldBtn.hidden = false;
  }
  function fill() {
    segs.forEach((s) => { setChars(s, s.chars.length); s.target.classList.remove("active"); });
    done();
  }
  function clear() {
    segs.forEach((s) => { setChars(s, 0); s.target.classList.remove("active"); });
  }
  async function typeAll() {
    const id = ++run;
    clear();
    skipBtn.hidden = false;
    againBtn.hidden = true;
    foldBtn.hidden = true;
    if (RM) { fill(); return; }
    await wait(500);
    for (const s of segs) {
      if (id !== run) return;
      s.target.classList.add("active");
      for (let i = 1; i <= s.chars.length; i++) {
        if (id !== run) return;
        setChars(s, i);
        const ch = s.chars[i - 1];
        await wait(/[.!?]/.test(ch) ? 280 : /[,;:]/.test(ch) ? 130 : ch === " " ? 20 : rand(16, 34));
      }
      s.target.classList.remove("active");
      await wait(380);
    }
    if (id === run) done();
  }
  async function open() {
    if (opened) return;
    opened = true;
    env.classList.add("open");
    Sound.sfx.unwrap();
    const [x, y] = centerOf(env);
    setTimeout(() => FX.hearts(x, y - 40, 22), RM ? 0 : 600);
    await wait(RM ? 200 : 1500);
    wrap.classList.add("leaving");
    await wait(RM ? 100 : 600);
    wrap.hidden = true;
    card.hidden = false;
    nextFrame(() => card.classList.add("show"));
    const r = card.getBoundingClientRect();
    if (r.top < 0 || r.top > innerHeight * 0.6) card.scrollIntoView({ behavior: RM ? "auto" : "smooth", block: "start" });
    typeAll();
  }
  function fold() {
    run++;
    card.classList.remove("show");
    setTimeout(() => {
      card.hidden = true;
      wrap.hidden = false;
      env.classList.remove("open");
      nextFrame(() => wrap.classList.remove("leaving"));
      opened = false;
      clear();
      env.focus({ preventScroll: true });
    }, 500);
  }

  function build() {
    const L = CONFIG.letter;
    seg($("#lGreeting"), fmt(L.greeting));
    const body = $("#lBody");
    (L.paragraphs || []).forEach((p) => seg(el("p", "", body), fmt(p)));
    seg($("#lClosing"), fmt(L.closing));
    seg($("#lSign"), fmt(L.signature));
    $("#letterSr").textContent = segs.map((s) => s.text).join("\n\n");
    const hearts = $("#letterHearts");
    for (let i = 0; i < 12; i++) {
      const h = el("span", "lh", hearts);
      h.style.setProperty("--x", (i % 2 ? rand(-5, 3) : rand(95, 102)).toFixed(1) + "%");
      h.style.setProperty("--sz", rand(12, 24).toFixed(0) + "px");
      h.style.setProperty("--dur", rand(5, 9).toFixed(1) + "s");
      h.style.setProperty("--delay", (-rand(0, 8)).toFixed(1) + "s");
      h.style.setProperty("--dx", rand(-40, 40).toFixed(0) + "px");
      h.style.setProperty("--r", rand(-30, 30).toFixed(0) + "deg");
      h.innerHTML = heartSVG("currentColor", false);
    }
    env.addEventListener("click", open);
    skipBtn.addEventListener("click", () => { run++; fill(); });
    againBtn.addEventListener("click", typeAll);
    foldBtn.addEventListener("click", fold);
  }
  return { build };
})();

/* Our little moments */
function buildMoments() {
  const host = $("#polaroids"), list = CONFIG.memories || [];
  if (!list.length) { $("#moments").hidden = true; return; }
  const tones = [["#ffd1e0", "#ff9fbf"], ["#e6d6ff", "#b69bff"], ["#ffe1c7", "#ffb48a"], ["#fff0c2", "#f3cf86"], ["#ffd6e8", "#c9a7ff"]];
  list.forEach((m, i) => {
    const wrap = el("div", "pol-wrap reveal", host);
    wrap.style.setProperty("--d", (i % 3) * 0.1 + "s");
    const b = el("button", "polaroid", wrap);
    b.type = "button";
    b.style.setProperty("--r", ((i % 2 ? 1 : -1) * rand(1.5, 4)).toFixed(1) + "deg");
    const inner = el("span", "pol-inner", b);
    const front = el("span", "pol-face pol-front", inner);
    const photo = el("span", "pol-photo", front);
    const [c1, c2] = tones[i % tones.length];
    photo.style.cssText = `--pc1:${c1};--pc2:${c2}`;
    const emoji = () => (photo.textContent = m.emoji || "💗");
    if (m.photo) {
      const img = el("img", "", photo);
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", emoji);
      img.src = m.photo;
    } else emoji();
    el("span", "pol-cap", front).textContent = fmt(m.title);
    const back = el("span", "pol-face pol-back", inner);
    if (m.date) el("span", "pol-date", back).textContent = fmt(m.date);
    el("span", "pol-text", back).textContent = fmt(m.text);
    el("span", "pol-sign", back).textContent = "♡";
    b.addEventListener("click", () => {
      b.classList.toggle("flipped");
      Sound.sfx.note(pick([81, 83, 86, 88]), 0.045);
    });
  });
}

/* Reasons I adore you */
function buildReasons() {
  const list = (CONFIG.reasons || []).map(fmt);
  if (!list.length) { $("#reasons").hidden = true; return; }
  const card = $("#rCard"), num = $("#rNum"), of = $("#rOf"), text = $("#rText");
  const count = $("#rCount"), btn = $("#rNext"), live = $("#rLive");
  const items = [...list, fmt(CONFIG.reasonsEnd || "…and a thousand more.")];
  let idx = 0, busy = false;

  function render() {
    const end = idx === list.length;
    num.textContent = end ? "∞" : `#${idx + 1}`;
    of.textContent = end ? "And finally" : `Reason ${idx + 1}`;
    text.textContent = items[idx];
    count.textContent = end ? "One last card…" : `${idx + 1} of ${list.length}`;
    card.setAttribute("aria-label", `${end ? "One last card" : `Reason ${idx + 1} of ${list.length}`}. Tap to turn it over`);
    btn.textContent = "Reveal It 💌";
  }
  async function step() {
    if (busy) return;
    if (!card.classList.contains("flipped")) {
      card.classList.add("flipped");
      live.textContent = items[idx];
      const [x, y] = centerOf(card);
      FX.sparkles(x, y, 18);
      if (idx === list.length) FX.hearts(x, y, 22);
      Sound.sfx.sparkle();
      btn.textContent = idx === list.length ? "From the Top ↺" : "Next Reason 💌";
      return;
    }
    busy = true;
    card.classList.add("out");
    Sound.sfx.light();
    await wait(RM ? 0 : 380);
    card.classList.add("snap", "enter");
    card.classList.remove("out", "flipped");
    idx = (idx + 1) % items.length;
    render();
    void card.offsetWidth;
    card.classList.remove("snap", "enter");
    busy = false;
  }
  card.addEventListener("click", step);
  btn.addEventListener("click", step);
  render();
}

/* Birthday coupons */
function buildCoupons() {
  const grid = $("#couponGrid"), list = CONFIG.coupons || [];
  if (!list.length) { $("#coupons").hidden = true; return; }
  const KEY = "birthday-coupons";
  let claimed = {};
  try { claimed = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) {}
  const day = (iso) => new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric" });

  list.forEach((c) => {
    const card = el("article", "coupon", el("div", "cp", grid));
    el("span", "cp-icon", card).textContent = c.icon || "🎁";
    el("h3", "", card).textContent = fmt(c.title);
    el("p", "", card).textContent = fmt(c.text);
    const btn = el("button", "btn btn-glow btn-small cp-btn", card);
    btn.type = "button";
    btn.textContent = "Claim It 🎟️";
    const stamp = el("span", "cp-stamp", card);
    stamp.setAttribute("aria-hidden", "true");
    const key = c.title;
    function mark(iso) {
      card.classList.add("claimed");
      btn.setAttribute("aria-disabled", "true");
      btn.textContent = `Claimed on ${day(iso)} ♡`;
      stamp.textContent = "Claimed";
      el("small", "", stamp).textContent = day(iso);
    }
    if (typeof claimed[key] === "string") mark(claimed[key]);
    btn.addEventListener("click", () => {
      if (card.classList.contains("claimed")) return;
      claimed[key] = new Date().toISOString();
      try { localStorage.setItem(KEY, JSON.stringify(claimed)); } catch (e) {}
      mark(claimed[key]);
      const [x, y] = centerOf(card);
      FX.confetti(x, y, 50, { power: [4, 10] });
      FX.hearts(x, y, 12);
      Sound.sfx.magic();
    });
  });
  $("#couponNote").textContent = fmt(CONFIG.couponNote);
}

/* Little surprises */
function buildSurprises() {
  // Shower of love
  const loveBtn = $("#loveBtn"), loveCount = $("#loveCount");
  const labels = ["Release the Love 💖", "More Love 💞", "Even More 💗", "All the Love 💝"];
  let loves = 0;
  loveBtn.addEventListener("click", () => {
    loves++;
    const [x, y] = centerOf(loveBtn);
    FX.hearts(x, y, 26);
    FX.confetti(x, y, 40, { power: [6, 13] });
    FX.cannons();
    FX.rain(26);
    Sound.sfx.sparkle();
    Sound.sfx.pop();
    loveCount.textContent = `${(loves * 128).toLocaleString()} hearts sent your way`;
    loveBtn.textContent = labels[Math.min(loves, labels.length - 1)];
  });

  // Hidden star
  const star = $("#hiddenStar"), starTip = $("#starTip"), starBtn = $("#starBtn"), starText = $("#starText"), secret = $("#secretModal");
  let found = false, hints = 0;
  star.addEventListener("click", () => {
    const [x, y] = centerOf(star);
    FX.sparkles(x, y, 40);
    FX.confetti(x, y, 30, { power: [3, 9], colors: ["#f3cf86", "#ffe2a8", "#ffffff", "#e8b44e"] });
    Sound.sfx.magic();
    if (!found) {
      found = true;
      star.classList.remove("hinting");
      star.classList.add("found");
      starText.textContent = "You found the star. The secret is yours to keep.";
      starTip.textContent = "";
      starBtn.textContent = "Read the Secret ✨";
    }
    Modal.open(secret);
  });
  starBtn.addEventListener("click", () => {
    if (found) { Modal.open(secret); return; }
    hints++;
    if (hints === 1) {
      starTip.textContent = "Psst… look up at the night sky with the lanterns.";
    } else {
      starTip.textContent = "There it is, twinkling just for you!";
      star.classList.add("hinting");
      star.scrollIntoView({ behavior: RM ? "auto" : "smooth", block: "center" });
    }
  });

  // Balloons
  const sky = $("#balloonSky"), note = $("#balloonNote");
  const colors = ["#ff8fb3", "#c9a7ff", "#ffc09a", "#f3cf86", "#ff7aa6", "#b69bff", "#ffb3cc"];
  const notes = (CONFIG.balloonNotes || []).map(fmt);
  let idx = 0, timer = 0;

  function spawn(delay, staticSpot) {
    if (sky.childElementCount >= 7) return;
    const w = el("button", "sky-balloon", sky);
    w.type = "button";
    w.setAttribute("aria-label", "Pop a balloon");
    const color = pick(colors);
    w.appendChild(makeBalloon(color, rand(46, 60)));
    if (staticSpot) {
      w.classList.add("static");
      w.style.left = staticSpot[0] + "%";
      w.style.setProperty("--top", staticSpot[1] + "%");
    } else {
      w.style.left = rand(3, 85).toFixed(1) + "%";
      w.style.setProperty("--dur", rand(9, 13).toFixed(1) + "s");
      if (delay) w.style.setProperty("--delay", `-${delay}s`);
    }
    w.addEventListener("animationend", (e) => { if (e.target === w) w.remove(); });
    w.addEventListener("click", () => pop(w, color, staticSpot));
  }
  function pop(w, color, spot) {
    if (w.classList.contains("popped")) return;
    w.classList.add("popped");
    const [x, y] = centerOf($(".b-body", w));
    FX.confetti(x, y, 28, { power: [2, 7], colors: [color, "#ffffff", "#f3cf86"] });
    Sound.sfx.pop();
    if (notes.length) {
      note.textContent = notes[idx++ % notes.length];
      note.classList.remove("pop");
      void note.offsetWidth;
      note.classList.add("pop");
    }
    setTimeout(() => w.remove(), 200);
    if (spot) setTimeout(() => spawn(0, spot), 1400);
  }
  if (RM) {
    [[8, 12], [28, 34], [48, 8], [66, 30], [84, 14]].forEach((s) => spawn(0, s));
  } else {
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !timer) {
        if (sky.childElementCount < 3) [2.5, 5, 7.5].forEach((d) => spawn(d));
        timer = setInterval(() => spawn(0), 1500);
      }
      if (!e.isIntersecting) { clearInterval(timer); timer = 0; }
    }).observe(sky);
  }
}

/* Written in the stars */
function buildStars() {
  const sky = $("#constSky"), hint = $("#constHint"), reset = $("#constReset"), names = $("#constNames");
  const N = 10, SCALE = [74, 76, 78, 81, 83, 86, 88, 90, 93, 95];
  const startHint = hint.textContent;
  const pts = [];
  for (let k = 0; k < N; k++) {
    const t = (k / N) * Math.PI * 2;
    pts.push([16 * Math.sin(t) ** 3, 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)]);
  }
  for (let i = 0; i < 46; i++) {
    const d = el("span", "c-dot", sky);
    d.setAttribute("aria-hidden", "true");
    d.style.cssText = `--x:${rand(1, 99).toFixed(1)}%;--y:${rand(2, 97).toFixed(1)}%;--sz:${rand(1, 2.2).toFixed(1)}px;--dur:${rand(2.5, 5).toFixed(1)}s;--delay:${(-rand(0, 5)).toFixed(1)}s`;
  }
  const glow = el("div", "c-glow", sky);
  names.textContent = fmt(CONFIG.stars.names);
  let pos = [], next = 0, done = false, lines = [];

  const stars = pts.map((_, i) => {
    const b = el("button", "c-star", sky);
    b.type = "button";
    b.setAttribute("aria-label", `Star ${i + 1} of ${N}`);
    el("i", "", b);
    el("b", "", b).textContent = i + 1;
    b.addEventListener("click", () => tap(i, b));
    return b;
  });

  function placeLine(l) {
    const [x1, y1] = pos[l.a], [x2, y2] = pos[l.b];
    l.el.style.left = x1 + "px";
    l.el.style.top = y1 + "px";
    l.el.style.width = Math.hypot(x2 - x1, y2 - y1) + "px";
    l.el.style.setProperty("--a", Math.atan2(y2 - y1, x2 - x1) + "rad");
  }
  function layout() {
    const W = sky.clientWidth, H = sky.clientHeight;
    if (!W) return;
    const S = Math.min(W * (W < 520 ? 0.84 : 0.55), H * 0.86), cx = W / 2, cy = H * 0.5;
    pos = pts.map(([x, y]) => [cx + (x / 32) * S * 1.08, cy - ((y + 2.5) / 29) * S]);
    stars.forEach((b, i) => { b.style.left = pos[i][0] + "px"; b.style.top = pos[i][1] + "px"; });
    lines.forEach(placeLine);
    glow.style.cssText = `left:${cx - S * 0.62}px;top:${cy - S * 0.6}px;width:${S * 1.24}px;height:${S * 1.24}px`;
    const fs = Math.max(19, S * 0.12);
    names.style.fontSize = fs + "px";
    names.style.top = cy - S * 0.1 - fs * 0.6 + "px";
  }
  function addLine(a, b) {
    const l = { el: el("span", "c-line", sky), a, b };
    placeLine(l);
    lines.push(l);
    nextFrame(() => l.el.classList.add("on"));
  }
  function setNext() {
    stars.forEach((s, i) => s.classList.toggle("next", i === next && !done));
  }
  function complete() {
    done = true;
    setNext();
    sky.classList.add("done");
    hint.textContent = fmt(CONFIG.stars.message);
    const [x, y] = centerOf(sky);
    FX.sparkles(x, y, 40);
    FX.hearts(x, y, 16);
    Sound.sfx.magic();
    reset.hidden = false;
  }
  function tap(i, b) {
    const [x, y] = centerOf(b);
    if (done) { FX.sparkles(x, y, 8); Sound.sfx.note(SCALE[i]); return; }
    if (i !== next) {
      b.classList.remove("nope");
      void b.offsetWidth;
      b.classList.add("nope");
      hint.textContent = "Start with the star that’s glowing ✨";
      return;
    }
    b.classList.add("lit");
    Sound.sfx.note(SCALE[i]);
    FX.sparkles(x, y, 8);
    if (i > 0) addLine(i - 1, i);
    next++;
    if (next === N) {
      addLine(N - 1, 0);
      setTimeout(complete, 500);
    } else {
      hint.textContent = next === N - 1 ? "Just one more…" : `${N - next} more to go…`;
    }
    setNext();
  }
  reset.addEventListener("click", () => {
    done = false;
    next = 0;
    sky.classList.remove("done");
    lines.forEach((l) => l.el.remove());
    lines = [];
    stars.forEach((s) => s.classList.remove("lit"));
    hint.textContent = startHint;
    reset.hidden = true;
    setNext();
  });
  layout();
  setNext();
  new ResizeObserver(layout).observe(sky);
}

/* Catch the hearts */
function buildGame() {
  const box = $("#gameBox"), cv = $("#gameCanvas"), ctx = cv.getContext("2d");
  const title = $("#gTitle"), text = $("#gText"), start = $("#gStart"), bestEl = $("#gBest"), scoreEl = $("#gScore"), timeEl = $("#gTime");
  const DUR = clamp(Number(CONFIG.game.duration) || 20, 5, 120);
  const KEY = "birthday-heart-best";
  const NOTES = [74, 76, 78, 81, 83, 86, 88, 90];
  const heart = new Path2D(HEART);
  let W = 0, H = 0, playing = false, items = [], pops = [], score = 0, elapsed = 0, spawnIn = 0;
  let jarX = 0, targetX = 0, keyDir = 0, last = 0, combo = 0, best = 0;
  try { best = parseInt(localStorage.getItem(KEY) || "0", 10) || 0; } catch (e) {}

  const jarW = () => (W < 500 ? 66 : 82), jarH = () => (W < 500 ? 56 : 66);
  const showBest = () => (bestEl.textContent = best ? `Best so far: ${best} 💗` : "");

  function rr(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
  function drawHeart(x, y, s, rot, fill, glow) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    if (glow) { ctx.shadowColor = glow; ctx.shadowBlur = 18; }
    const k = s / 24;
    ctx.scale(k, k);
    ctx.translate(-12, -12);
    ctx.fillStyle = fill;
    ctx.fill(heart);
    ctx.restore();
  }
  function drawJar() {
    const dark = isDark(), w = jarW(), h = jarH(), x = jarX - w / 2, y = H - h - 16;
    const fh = (h - 6) * Math.min(1, score / 60);
    ctx.save();
    rr(x, y, w, h, 14);
    ctx.clip();
    const g = ctx.createLinearGradient(0, y + h - fh, 0, y + h);
    g.addColorStop(0, "rgba(255,143,179,.9)");
    g.addColorStop(1, "rgba(180,120,255,.9)");
    ctx.fillStyle = g;
    ctx.fillRect(x, y + h - fh, w, fh);
    ctx.restore();
    rr(x, y, w, h, 14);
    ctx.fillStyle = dark ? "rgba(255,255,255,.12)" : "rgba(255,255,255,.45)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = dark ? "rgba(255,200,225,.85)" : "rgba(217,70,118,.6)";
    ctx.stroke();
    rr(x - 5, y - 8, w + 10, 11, 5);
    ctx.fillStyle = dark ? "#ffb3cc" : "#f08bb0";
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,.55)";
    ctx.fillRect(x + 9, y + 10, 4, h - 24);
    drawHeart(jarX, y + h * 0.5, 20, 0, dark ? "#ff7aa6" : "#e2557f");
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const it of items) drawHeart(it.x, it.y, it.s, Math.sin(it.w) * 0.3, it.gold ? "#f3c45f" : it.c, it.gold ? "rgba(255,210,120,.95)" : null);
    ctx.textAlign = "center";
    ctx.font = "600 18px Jost, 'Segoe UI', sans-serif";
    for (const p of pops) {
      ctx.globalAlpha = 1 - p.t;
      ctx.fillStyle = p.gold ? "#e8a92e" : isDark() ? "#ffd1e3" : "#d94676";
      ctx.fillText(p.txt, p.x, p.y - p.t * 34);
    }
    ctx.globalAlpha = 1;
    drawJar();
  }
  function resize() {
    const r = box.getBoundingClientRect();
    if (!r.width) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    W = r.width; H = r.height;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const hw = jarW() / 2;
    if (!jarX) jarX = targetX = W / 2;
    jarX = clamp(jarX, hw + 6, W - hw - 6);
    targetX = clamp(targetX, hw + 6, W - hw - 6);
    draw();
  }
  function spawn() {
    const gold = Math.random() < 0.1, s = gold ? 32 : rand(20, 28);
    items.push({
      x: rand(s, W - s), y: -s, s, gold, w: rand(0, 6),
      vy: rand(2.3, 3.5) * (H / 420) * (1 + (elapsed / DUR) * 0.7),
      c: pick(["#ff7aa6", "#ff8fb3", "#e2557f", "#c77dff", "#b48cff"]),
    });
  }
  function loop(t) {
    if (!playing) return;
    const raw = t - last;
    const dt = clamp(raw / 16.67, 0, 3);
    last = t;
    if (raw < 250) elapsed += raw / 1000;
    const hw = jarW() / 2, top = H - jarH() - 16;
    if (keyDir) targetX += keyDir * 9 * dt;
    targetX = clamp(targetX, hw + 6, W - hw - 6);
    jarX += (targetX - jarX) * Math.min(1, 0.35 * dt);
    spawnIn -= dt * 16.67;
    if (spawnIn <= 0) { spawn(); spawnIn = 520 - 260 * (elapsed / DUR); }
    for (let i = items.length - 1; i >= 0; i--) {
      const it = items[i];
      it.y += it.vy * dt;
      it.w += 0.05 * dt;
      if (it.y + it.s * 0.4 >= top && it.y - it.s * 0.4 <= top + 22 && Math.abs(it.x - jarX) < hw + it.s * 0.25) {
        items.splice(i, 1);
        const gain = it.gold ? 5 : 1;
        score += gain;
        combo++;
        pops.push({ x: it.x, y: top - 10, t: 0, txt: `+${gain}`, gold: it.gold });
        if (it.gold) {
          const r = cv.getBoundingClientRect();
          FX.sparkles(r.left + it.x, r.top + top, 14);
          Sound.sfx.chime();
        } else {
          Sound.sfx.note(NOTES[combo % NOTES.length], 0.05);
        }
        continue;
      }
      if (it.y - it.s > H) { items.splice(i, 1); combo = 0; }
    }
    for (let i = pops.length - 1; i >= 0; i--) {
      pops[i].t += dt / 40;
      if (pops[i].t >= 1) pops.splice(i, 1);
    }
    const left = Math.max(0, DUR - elapsed);
    scoreEl.textContent = `${score} 💗`;
    timeEl.textContent = `${Math.ceil(left)}s`;
    draw();
    if (left <= 0) end();
    else requestAnimationFrame(loop);
  }
  function begin() {
    Sound.init();
    items = []; pops = []; score = 0; elapsed = 0; spawnIn = 250; combo = 0;
    playing = true;
    box.classList.add("playing");
    start.blur();
    last = performance.now();
    requestAnimationFrame(loop);
  }
  function end() {
    playing = false;
    keyDir = 0;
    box.classList.remove("playing");
    items = []; pops = [];
    draw();
    timeEl.textContent = "0s";
    title.textContent = `You caught ${score} heart${score === 1 ? "" : "s"}! 💗`;
    text.textContent = fmt(CONFIG.game.endLine);
    start.textContent = "Play Again 💗";
    if (score > best) {
      best = score;
      try { localStorage.setItem(KEY, String(best)); } catch (e) {}
      bestEl.textContent = "That’s a new best score! 🎉";
    } else showBest();
    const [x, y] = centerOf(box);
    FX.confetti(x, y, 60, { power: [5, 12] });
    FX.hearts(x, y, 16);
    Sound.sfx.magic();
    start.focus({ preventScroll: true });
  }

  title.textContent = fmt(CONFIG.game.readyTitle);
  timeEl.textContent = `${DUR}s`;
  showBest();
  start.addEventListener("click", begin);
  const aim = (e) => {
    if (!playing) return;
    targetX = e.clientX - cv.getBoundingClientRect().left;
  };
  cv.addEventListener("pointermove", aim);
  cv.addEventListener("pointerdown", aim);
  addEventListener("keydown", (e) => {
    if (!playing || (e.key !== "ArrowLeft" && e.key !== "ArrowRight")) return;
    e.preventDefault();
    keyDir = e.key === "ArrowLeft" ? -1 : 1;
  });
  addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") keyDir = 0;
  });
  resize();
  new ResizeObserver(resize).observe(box);
}

/* Finale */
function buildFinale() {
  new IntersectionObserver(([e]) => { if (!RM) FX.fireworks(e.isIntersecting); }, { threshold: 0.35 }).observe($("#finale"));
  const again = $("#celebrateAgain");
  again.addEventListener("click", () => {
    const [x, y] = centerOf(again);
    FX.confetti(x, y, 80, { power: [7, 15] });
    FX.hearts(x, y, 24);
    FX.cannons();
    if (RM) FX.sparkles(x, y - 80, 30);
    else FX.salvo(5);
    Sound.sfx.magic();
  });
  $("#restartBtn").addEventListener("click", restart);
}

/* Scroll: progress bar, parallax, reveals */
function setupScroll() {
  const bg = $("#bg"), prog = $("#progress"), heroContent = $("#heroContent");
  let ticking = false;
  function update() {
    ticking = false;
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    prog.style.setProperty("--p", max > 0 ? (y / max).toFixed(4) : "0");
    if (RM) return;
    bg.style.setProperty("--py", Math.round(y));
    if (y < innerHeight * 1.3) {
      const k = Math.min(1, y / innerHeight);
      heroContent.style.transform = `translateY(${(y * 0.28).toFixed(1)}px) scale(${(1 - k * 0.06).toFixed(3)})`;
      heroContent.style.opacity = String(Math.max(0, 1 - k * 1.15));
    }
  }
  addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  $$(".reveal").forEach((n) => io.observe(n));
}

/* Start */
fillContent();
splitWords($("#openerTitle"));
document.documentElement.classList.add("locked");
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
Ambient.start();
buildHero();
setupDate();
setupTogether();
Cake.build();
Lanterns.build();
buildScratch();
Letter.build();
buildMoments();
buildReasons();
buildSurprises();
buildStars();
buildCoupons();
buildGame();
buildFinale();
setupScroll();
openBtn.addEventListener("click", openSurprise);
syncSoundUI();
})();
