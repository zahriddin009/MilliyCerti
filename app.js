/* Shared UI: theme, navigation, toasts, modals, reveal, counters, particles */
(function () {
  const root = document.documentElement;
  const saved = (() => { try { return localStorage.getItem("mc_theme"); } catch (e) { return null; } })();
  root.dataset.theme = saved || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

  const page = document.body.dataset.page || "";
  const link = (href, key, label) =>
    `<a href="${href}" class="${page === key ? "active" : ""}">${label}</a>`;

  const headerHTML = `
  <a class="skip" href="#main">Asosiy kontentga o'tish</a>
  <header class="nav"><div class="wrap nav-in">
    <a class="logo" href="index.html" aria-label="MilliyCerti.uz"><span class="logo-mark">M</span><span>MilliyCerti<span class="grad">.uz</span></span></a>
    <nav class="links" id="links" aria-label="Asosiy navigatsiya">
      ${link("index.html", "home", "Bosh sahifa")}
      ${link("practice.html", "practice", "Mashq")}
      ${link("exam.html", "exam", "Mock imtihon")}
      ${link("index.html#levels", "levels", "CEFR darajalari")}
      ${link("index.html#structure", "structure", "Imtihon tuzilmasi")}
    </nav>
    <div class="nav-actions">
      <button class="icon-btn" id="themeBtn" aria-label="Mavzuni almashtirish" title="Dark / Light">🌓</button>
      <a class="btn primary sm" href="exam.html">Bepul mock</a>
      <button class="icon-btn burger" id="burger" aria-label="Menyu" aria-expanded="false">☰</button>
    </div>
  </div></header>`;
  const footerHTML = `
  <footer><div class="wrap foot">
    <div><div class="logo"><span class="logo-mark">M</span>MilliyCerti.uz</div>
    <p style="margin-top:8px">Milliy sertifikat sari ishonchli qadam.<br><em>Your Journey to English Proficiency.</em></p></div>
    <p style="max-width:470px">MilliyCerti — mustaqil tayyorgarlik platformasi. Bu yerdagi mock natijalar <b>rasmiy Milliy sertifikat emas</b> va rasmiy imtihon bilan bog'liq emas. Savollar original, namuna sifatida yozilgan.</p>
  </div></footer>
  <div id="toasts" aria-live="polite"></div>
  <div class="modal-bg" id="modalBg" role="dialog" aria-modal="true"><div class="card modal" id="modal"></div></div>
  <div class="bg" aria-hidden="true"><div class="orb o1"></div><div class="orb o2"></div><div class="orb o3"></div></div>
  <canvas id="particles" aria-hidden="true"></canvas>`;

  document.addEventListener("DOMContentLoaded", () => {
    const h = document.getElementById("site-header");
    if (h && !document.body.dataset.noheader) h.innerHTML = headerHTML;
    else if (h) h.innerHTML = `<a class="skip" href="#main">Asosiy kontentga o'tish</a>`;
    const f = document.getElementById("site-footer");
    if (f) f.innerHTML = footerHTML;

    const tb = document.getElementById("themeBtn");
    if (tb) tb.onclick = () => {
      const t = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = t;
      try { localStorage.setItem("mc_theme", t); } catch (e) {}
      MC.toast(t === "dark" ? "Qorong'i mavzu yoqildi" : "Yorug' mavzu yoqildi", "ok");
    };
    const burger = document.getElementById("burger"), links = document.getElementById("links");
    if (burger) burger.onclick = () => {
      const o = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", o);
    };
    document.getElementById("modalBg")?.addEventListener("click", e => { if (e.target.id === "modalBg") MC.closeModal(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") MC.closeModal(); });

    // loading screen
    const ld = document.getElementById("loader");
    if (ld) setTimeout(() => ld.classList.add("hide"), 450);

    // scroll reveal
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));

    // animated counters + bars
    const io2 = new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target; io2.unobserve(el);
      if (el.dataset.count !== undefined) MC.count(el);
      if (el.dataset.bar !== undefined) el.style.width = el.dataset.bar + "%";
    }), { threshold: .3 });
    document.querySelectorAll("[data-count],[data-bar]").forEach(el => io2.observe(el));

    MC.particles();
  });

  const MC = window.MC = {
    toast(msg, type = "ok") {
      const box = document.getElementById("toasts"); if (!box) return;
      const t = document.createElement("div"); t.className = "toast " + type; t.textContent = msg;
      box.appendChild(t); setTimeout(() => t.remove(), 3800);
    },
    confirm(title, body, okLabel, cb, danger) {
      const bg = document.getElementById("modalBg"), m = document.getElementById("modal");
      m.innerHTML = `<h3>${title}</h3><p style="color:var(--muted);margin-top:10px">${body}</p>
        <div class="row"><button class="btn" id="mNo">Bekor qilish</button>
        <button class="btn ${danger ? "danger" : "primary"}" id="mYes">${okLabel}</button></div>`;
      bg.classList.add("open");
      document.getElementById("mNo").onclick = MC.closeModal;
      document.getElementById("mYes").onclick = () => { MC.closeModal(); cb(); };
      document.getElementById("mYes").focus();
    },
    closeModal() { document.getElementById("modalBg")?.classList.remove("open"); },
    count(el) {
      const to = +el.dataset.count, dur = 1200, t0 = performance.now();
      const step = n => { const p = Math.min((n - t0) / dur, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    },
    particles() {
      const c = document.getElementById("particles");
      if (!c || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const x = c.getContext("2d"); let W, H, ps = [];
      const size = () => { W = c.width = innerWidth; H = c.height = innerHeight; };
      size(); addEventListener("resize", size);
      for (let i = 0; i < 38; i++) ps.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.8 + .4, v: Math.random() * .3 + .05 });
      (function draw() {
        x.clearRect(0, 0, W, H);
        x.fillStyle = root.dataset.theme === "light" ? "rgba(99,102,241,.35)" : "rgba(180,170,255,.5)";
        ps.forEach(p => { p.y -= p.v; if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; } x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7); x.fill(); });
        requestAnimationFrame(draw);
      })();
    },
    esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); },
    // ---- audio: real audio via the browser's speech synthesis (synthetic voice) ----
    speech: {
      supported: () => "speechSynthesis" in window,
      speak(script, rate, onend) {
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(script);
        u.lang = "en-GB"; u.rate = rate || 1;
        const v = speechSynthesis.getVoices().find(v => /^en/i.test(v.lang));
        if (v) u.voice = v;
        u.onend = onend; u.onerror = onend;
        speechSynthesis.speak(u); return u;
      },
      stop() { speechSynthesis.cancel(); }
    },
    // ---- scoring ----
    check(q, ans) {
      if (ans === undefined || ans === null || ans === "") return false;
      if (q.type === "gap") return q.answer.includes(String(ans).trim().toLowerCase());
      return ans === q.answer;
    },
    cefr(scaled) {
      const t = MC_CONFIG.cefrThresholds.find(x => scaled >= x.min);
      return t ? t.level : "A1";
    }
  };
})();
