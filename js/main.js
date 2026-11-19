(function () {
  const S = window.SITE;
  const root = document.getElementById("app");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Idioma: el último elegido, o el del navegador (español por defecto)
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  let lang = store.get("lang") || ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
  if (!S.ui[lang]) lang = "es";

  // Tema: sigue al navegador hasta que la persona elige uno con el botón.
  // (El <head> ya aplica el tema antes de pintar, para que no parpadee.)
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const systemTheme = () => (darkQuery.matches ? "dark" : "light");
  const currentTheme = () => document.documentElement.dataset.theme || systemTheme();
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === "dark" ? "#1c1d19" : "#f8f6ee";
    const btn = root.querySelector("[data-theme-toggle]");
    if (btn) btn.outerHTML = themeButton(S.ui[lang]);
  }
  darkQuery.addEventListener("change", () => {
    if (!store.get("theme")) applyTheme(systemTheme());
  });

  let openCase = null; // índice del caso abierto
  let openedFromPage = false; // true si se abrió con un clic (para que "Cerrar" vuelva atrás en el historial)
  let lastFocus = null;
  const revealed = new Set();

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const t = (o) => (o && typeof o === "object" ? o[lang] : o);
  const caseHash = (p) => "#caso/" + p.slug;
  // Todos los casos (proyectos reales + desafíos) se abren igual; el índice es sobre esta lista
  const allCases = S.projects.concat(S.challenges || []);

  // ── Íconos e ilustraciones ────────────────────────────────
  const arrow = () =>
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" stroke-width="1.7"></path></svg>';

  const flower = (size = 280, color = "var(--flower)") => {
    let petals = "";
    for (let n = 0; n < 8; n++)
      petals += `<ellipse cx="150" cy="86" rx="38" ry="76" fill="${color}" transform="rotate(${n * 45} 150 150)"></ellipse>`;
    return `<svg width="${size}" height="${size}" viewBox="0 0 300 300" aria-hidden="true">${petals}<circle cx="150" cy="150" r="44" fill="var(--paper)"></circle><path d="M130 144v7m39-7v7m-37 14q18 17 36 0" stroke="var(--ink)" stroke-width="5" stroke-linecap="round" fill="none"></path></svg>`;
  };

  const preview = (p) => {
    const img = p.thumb || p.cover;
    return `<div class="preview p${p.layout} hasImg${img.fit === "contain" ? " fitContain" : ""}${img.fit === "art" ? " artCover" : ""}"${img.bg ? ` style="background:${esc(img.bg)}"` : ""}><img src="${esc(img.urlEs && lang === "es" ? img.urlEs : img.url)}" alt="${esc(t(img))}" loading="lazy"></div>`;
  };

  // ── Secciones ─────────────────────────────────────────────
  // data-reveal: aparece con un leve desplazamiento al entrar en pantalla.
  const reveal = (key) =>
    revealed.has(key) || reduceMotion
      ? `data-reveal="${key}" style="opacity: 1; transform: none;"`
      : `data-reveal="${key}" style="opacity: 0.8; transform: translateY(18px);"`;

  const sun =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"></circle><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"></path></svg>';
  const moon =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"></path></svg>';

  // Muestra el ícono del tema al que se cambia (luna en claro, sol en oscuro)
  const themeButton = (u) => {
    const dark = currentTheme() === "dark";
    const label = dark ? u.themeToLight : u.themeToDark;
    return `<button class="themeToggle" data-theme-toggle aria-label="${esc(label)}" title="${esc(label)}">${dark ? sun : moon}</button>`;
  };

  function header(u) {
    return `<header class="nav"><div class="wrap navin">
      <a class="brand" href="#top"><span class="brandFlower">${flower(34)}</span><span>Sofía<br>Fernández Calvo</span></a>
      <nav class="navlinks" aria-label="${esc(u.mainNav)}">
        <a href="#work">${esc(u.work)}</a><a href="#challenges">${esc(u.challenges)}</a><a href="#about">${esc(u.about)}</a><a href="#cv">${esc(u.cvLabel)}</a><a href="#contact">${esc(u.contact)}</a>
      </nav>
      <div class="langs" aria-label="${esc(u.language)}">
        ${["es", "en"].map((l) => `<button class="${lang === l ? "on" : ""}" aria-pressed="${lang === l}" data-lang="${l}">${l.toUpperCase()}</button>`).join("")}
      </div>
      ${themeButton(u)}
      <a class="pill" href="#contact">${esc(u.talk)}${arrow()}</a>
    </div></header>`;
  }

  function intro(u) {
    const portrait = S.photo
      ? `<img src="${esc(S.photo)}" alt="Sofía Fernández Calvo">`
      : `<div class="photoPlaceholder"><span>SFC</span><p>${esc(u.photoPlaceholder)}</p><small>${esc(u.photoPlaceholderSub)}</small></div>`;
    return `<section class="intro"><div class="wrap">
      <div class="introgrid">
        <div class="introcopy">
          <div class="eyebrow"><i class="dot"></i>${esc(u.hello)}</div>
          <h1>${esc(u.h1a)}<br><span>${esc(u.h1b)}</span></h1>
          <div class="introdetails">
            <span class="rolelabel">Product Designer<br>Senior UX/UI · AI-first</span>
            <div><p>${esc(u.intro)}</p><a class="pill" href="#work">${esc(u.view)}${arrow()}</a></div>
          </div>
        </div>
        <div class="collage">
          <div class="portrait">${portrait}</div>
          <div class="portraitFlower">${flower(155)}</div>
          <div class="sticker">${esc(u.sticker)}</div>
          <span class="photoCaption">BUENOS AIRES · ARGENTINA</span>
        </div>
      </div>
      <div class="introfoot"><span>${esc(u.based)}</span><span><i class="dot"></i> ${esc(u.intention)}</span></div>
    </div></section>`;
  }

  function work(u) {
    const items = S.projects
      .map(
        (p, idx) => `<div class="projectItem project${p.layout}" ${reveal("p" + idx)}>
        <a class="card" href="${caseHash(p)}" data-case="${idx}" aria-label="${esc(u.more + ": " + t(p.company) + " · " + t(p.title))}">
          <div class="projectNumber">0${idx + 1} / ${esc(t(p.label))}</div>
          ${preview(p)}
          <div class="cardmeta"><div><h3>${esc(t(p.company))}</h3><p>${esc(t(p.tags))}</p></div><span class="circleArrow">${arrow()}</span></div>
          <p class="projectStory">${esc(t(p.title))}</p>
          <span class="readcase">${esc(u.readCase)}${arrow()}</span>
        </a>
      </div>`
      )
      .join("");
    return `<section id="work" class="work"><div class="wrap">
      <div class="sectionhead">
        <div><div class="eyebrow" style="margin-bottom: 13px;">01 / ${esc(u.work.toUpperCase())}</div><h2>${esc(u.selected)}</h2><p>${esc(u.selectedSub)}</p></div>
        <span class="count">${String(S.projects.length).padStart(2, "0")}</span>
      </div>
      <div class="grid">${items}</div>
    </div></section>`;
  }

  function challenges(u) {
    if (!S.challenges || !S.challenges.length) return "";
    const offset = S.projects.length;
    const items = S.challenges
      .map(
        (p, i) => `<div class="challengeItem" ${reveal("c" + i)}>
        <a class="card" href="${caseHash(p)}" data-case="${offset + i}" aria-label="${esc(u.more + ": " + t(p.company) + " · " + t(p.title))}">
          <div class="projectNumber">0${i + 1} / ${esc(t(p.label))}</div>
          <div class="preview challengePreview hasImg${(p.thumb||p.cover).fit === "art" ? " artCover" : ""}"${(p.thumb||p.cover).bg ? ` style="background:${esc((p.thumb||p.cover).bg)}"` : ""}><img src="${esc((p.thumb || p.cover).urlEs && lang === "es" ? (p.thumb || p.cover).urlEs : (p.thumb || p.cover).url)}" alt="${esc(t(p.thumb || p.cover))}" loading="lazy"></div>
          <div class="cardmeta"><div><h3>${esc(t(p.company))}</h3><p>${esc(t(p.tags))}</p></div><span class="circleArrow">${arrow()}</span></div>
          <p class="projectStory">${esc(t(p.title))}</p>
          <span class="readcase">${esc(u.readCase)}${arrow()}</span>
        </a>
      </div>`
      )
      .join("");
    return `<section id="challenges" class="challenges"><div class="wrap">
      <div class="sectionhead">
        <div><div class="eyebrow" style="margin-bottom: 13px;">02 / ${esc(u.challenges.toUpperCase())}</div><h2>${esc(u.challengesTitle)}</h2><p>${esc(u.challengesSub)}</p></div>
        <span class="count">${String(S.challenges.length).padStart(2, "0")}</span>
      </div>
      <div class="challengeGrid">${items}</div>
    </div></section>`;
  }

  function about(u) {
    const how = u.how.map(([h, p]) => `<li><strong>${esc(h)}</strong><span>${esc(p)}</span></li>`).join("");
    return `<section id="about" class="about"><div class="wrap">
      <div class="aboutRibbon">${esc(u.ribbon)}${flower(60, "var(--sage)")}</div>
      <div class="twocol">
        <div ${reveal("about")}>
          <div class="eyebrow">03 / ${esc(u.about.toUpperCase())}</div>
          <h2>${esc(u.aboutTitle)}</h2>
          ${u.bio.map((b) => `<p class="prose">${esc(b)}</p>`).join("")}
          <div class="availability"><i class="dot"></i><div><strong>${esc(u.availableTitle)}</strong><p>${esc(u.availableText)}</p></div></div>
        </div>
        <div class="chat" ${reveal("chat")}>
          <div class="miniFlower">${flower(65, "var(--violet)")}</div>
          <h3>${esc(u.howTitle)}</h3>
          <ul class="howlist">${how}</ul>
        </div>
      </div>
    </div></section>`;
  }

  function cv(u) {
    const cvUrl = S.cv[lang];
    const cvBtn = cvUrl
      ? `<a class="pill" href="${esc(cvUrl)}" target="_blank" rel="noopener">${esc(u.cv)}${arrow()}</a>`
      : `<button class="pill disabled" disabled>${esc(u.cvMissing)}</button>`;
    const jobs = S.jobs
      .map(
        (j, i) => `<div class="job"><span class="jobIndex">0${i + 1}</span><div><h3>${esc(j[0])}</h3><p>${esc(j[1])}</p></div><time>${esc(j[2])}</time></div>`
      )
      .join("");
    return `<section id="cv" class="cv"><div class="wrap">
      <div class="cvLayout">
        <div class="cvIntro">
          <div class="eyebrow">04 / ${esc(u.cvLabel.toUpperCase())}</div>
          <h2>${esc(u.journey)}</h2>
          <div class="resume">
            <div><strong>7+</strong><small>${esc(u.experience)}</small></div>
            <div><strong class="uba">UBA</strong><small>${esc(u.degree)}</small></div>
          </div>
          ${cvBtn}
          <p class="prose">${esc(u.languages)}</p>
        </div>
        <div class="timeline">${jobs}</div>
      </div>
      <div class="toolbox">
        <div><div class="eyebrow">${esc(u.toolbox)}</div>${S.tools.map((l) => `<p>${esc(l)}</p>`).join("")}</div>
      </div>
    </div></section>`;
  }

  function footer(u) {
    let links = "";
    if (S.email) links += `<a href="mailto:${esc(S.email)}">${esc(S.email)}${arrow()}</a>`;
    if (S.linkedin) links += `<a href="${esc(S.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn${arrow()}</a>`;
    if (!links) links = `<span style="font-size: 12px; color: #77796f;">${esc(u.pending)}</span>`;
    return `<footer id="contact" class="footer"><div class="wrap">
      <div class="twocol">
        <div>
          <div class="eyebrow" style="margin-bottom: 20px;">05 / ${esc(u.contact.toUpperCase())}</div>
          <h2>${esc(u.end)}</h2><p>${esc(u.endText)}</p>
          <div class="contactlinks">${links}</div>
        </div>
        <div class="flowerfoot" style="text-align: right;">${flower(170, "var(--sage)")}</div>
      </div>
      <div class="bottom"><span>© 2026 Sofía Fernández Calvo</span><span>${esc(u.crafted)}</span><a href="#top">${esc(u.back)}</a></div>
    </div></footer>`;
  }

  // ── Caso de estudio ───────────────────────────────────────
  const figure = (img, u, cls = "") =>
    `<figure class="${cls}${img.tall ? " tall" : ""}"${img.width ? ` style="width: ${esc(img.width)}"` : ""}><a href="${esc(img.url)}" target="_blank" rel="noopener" aria-label="${esc(u.enlarge + img[lang])}"><img src="${esc(img.url)}" alt="${esc(img[lang])}" loading="lazy"></a><figcaption>${esc(img[lang])}</figcaption></figure>`;

  function block(b, n, u) {
    let html = "";
    if (b.text) html += b.text.map((p) => `<p>${esc(t(p))}</p>`).join("");
    if (b.list) html += `<ul class="caseList">${b.list.map((li) => `<li>${esc(t(li))}</li>`).join("")}</ul>`;
    if (b.quotes) html += `<div class="caseQuotes">${b.quotes.map((q) => `<blockquote>${esc(t(q))}</blockquote>`).join("")}</div>`;
    if (b.cards)
      html += `<div class="caseCards">${b.cards
        .map((c) => `<div class="caseCard"><h4>${esc(t(c.title))}</h4><p>${esc(t(c.text))}</p>${c.meta ? `<span>${esc(c.meta)}</span>` : ""}</div>`)
        .join("")}</div>`;
    if (b.steps)
      html += `<ol class="caseSteps">${b.steps.map((s) => `<li><h4>${esc(t(s.title))}</h4><p>${esc(t(s.text))}</p></li>`).join("")}</ol>`;
    if (b.compare) {
      const side = (key, label) => {
        const c = b.compare[key];
        return `<div class="compareCol ${key}"><span class="compareTag">${esc(label)}</span>${figure(c.image, u)}${c.points
          .map((pt) => `<h4>${esc(t(pt.title))}</h4><p>${esc(t(pt.text))}</p>`)
          .join("")}</div>`;
      };
      html += `<div class="caseCompare">${side("before", u.before)}${side("after", u.after)}</div>`;
    }
    if (b.after) html += b.after.map((p) => `<p>${esc(t(p))}</p>`).join("");
    if (b.video)
      html += `<figure class="caseVideo"><video controls playsinline preload="metadata" poster="${esc(b.video.poster)}" aria-label="${esc(t(b.video))}"><source src="${esc(b.video.url)}" type="video/mp4"></video><figcaption>${esc(t(b.video))}</figcaption></figure>`;
    if (b.images) html += `<div class="caseGallery${b.images.length === 1 ? " single" : ""}">${b.images.map((img) => figure(img, u)).join("")}</div>`;
    return `<section class="caseSection"><div class="eyebrow">${String(n + 1).padStart(2, "0")}</div><div><h3>${esc(t(b.title))}</h3>${html}</div></section>`;
  }

  function modal(u) {
    if (openCase === null) return "";
    const p = allCases[openCase];
    const next = allCases[(openCase + 1) % allCases.length];
    const tl = p.tldr;
    const facts = ["role", "context", "time", "focus", "outcome"]
      .filter((k) => tl[k])
      .map((k) => `<div><dt>${esc(u.tldr[k])}</dt><dd>${esc(t(tl[k]))}</dd></div>`)
      .join("");
    return `<div class="modalback" data-close>
      <article class="modal" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="caseTitle">
        <div class="caseTop"><span class="eyebrow">${esc(t(p.company))} · ${esc(t(p.tags))}</span><button class="pill" data-close>${esc(u.close)}</button></div>
        <h2 id="caseTitle">${esc(t(p.title))}</h2>
        ${p.note ? `<div class="confidentialNote">${esc(t(p.note))}</div>` : ""}
        <dl class="tldr">${facts}</dl>
        ${p.link ? `<a class="caseWebsite" href="${esc(p.link.url)}" target="_blank" rel="noopener noreferrer">${esc(p.link[lang])}${arrow()}</a>` : ""}
        <figure class="caseCover"><img src="${esc(p.cover.url)}" alt="${esc(t(p.cover))}"><figcaption>${esc(t(p.cover))}</figcaption></figure>
        ${p.blocks.map((b, n) => block(b, n, u)).join("")}
        <div class="caseNav">
          <button class="pill ghost" data-close>${esc(u.backToWork)}</button>
          <a class="pill" href="${caseHash(next)}" data-next>${esc(u.nextCase)}: ${esc(t(next.company))}${arrow()}</a>
        </div>
      </article>
    </div>`;
  }

  // ── Render ────────────────────────────────────────────────
  function render() {
    const u = S.ui[lang];
    root.lang = lang;
    document.documentElement.lang = lang;
    root.innerHTML =
      header(u) +
      `<main id="top">${intro(u)}${work(u)}${challenges(u)}${about(u)}${cv(u)}</main>` +
      footer(u) +
      modal(u);
    document.body.classList.toggle("modalOpen", openCase !== null);
    observeReveals();
  }

  function renderModal() {
    const old = root.querySelector(".modalback");
    if (old) old.remove();
    root.insertAdjacentHTML("beforeend", modal(S.ui[lang]));
    document.body.classList.toggle("modalOpen", openCase !== null);
    const m = root.querySelector(".modal");
    if (m) { m.scrollTop = 0; m.focus(); }
  }

  // Animación de entrada (equivalente a la de Framer: opacidad .8 → 1, y 18px → 0, 0.55s)
  let io;
  function observeReveals() {
    if (io) io.disconnect();
    io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        revealed.add(el.dataset.reveal);
        el.style.transition = "opacity .55s cubic-bezier(.25,.1,.25,1), transform .55s cubic-bezier(.25,.1,.25,1)";
        el.style.opacity = "1";
        el.style.transform = "none";
        io.unobserve(el);
      });
    });
    root.querySelectorAll("[data-reveal]").forEach((el) => {
      if (!revealed.has(el.dataset.reveal) && !reduceMotion) io.observe(el);
    });
  }

  // ── Rutas: cada caso tiene su link (#caso/slug) ───────────
  function syncFromHash() {
    const m = location.hash.match(/^#caso\/(.+)$/);
    const idx = m ? allCases.findIndex((p) => p.slug === m[1]) : -1;
    if (idx >= 0 && idx !== openCase) {
      if (openCase === null) lastFocus = document.activeElement;
      openCase = idx;
      renderModal();
    } else if (idx < 0 && openCase !== null) {
      openCase = null;
      openedFromPage = false;
      renderModal();
      if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
    }
  }

  function closeModal() {
    if (openedFromPage) history.back();
    else {
      history.replaceState(null, "", location.pathname + location.search + "#work");
      syncFromHash();
    }
  }

  // ── Eventos ───────────────────────────────────────────────
  root.addEventListener("click", (e) => {
    if (e.target.closest("[data-theme-toggle]")) {
      const next = currentTheme() === "dark" ? "light" : "dark";
      // Si coincide con el navegador, se olvida la elección y vuelve a seguirlo
      if (next === systemTheme()) {
        try { localStorage.removeItem("theme"); } catch (err) {}
      } else store.set("theme", next);
      applyTheme(next);
      root.querySelector("[data-theme-toggle]").focus();
      return;
    }
    const langBtn = e.target.closest("[data-lang]");
    if (langBtn) {
      lang = langBtn.dataset.lang;
      store.set("lang", lang);
      render();
      return;
    }
    const card = e.target.closest("[data-case]");
    if (card) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return; // abrir en pestaña nueva
      e.preventDefault();
      openedFromPage = true;
      location.hash = card.getAttribute("href");
      return;
    }
    if (e.target.closest("[data-next]")) {
      e.preventDefault();
      history.replaceState(null, "", e.target.closest("[data-next]").getAttribute("href"));
      syncFromHash();
      return;
    }
    const closer = e.target.closest("[data-close]");
    if (closer && (closer.tagName === "BUTTON" || e.target === closer)) closeModal();
  });

  window.addEventListener("hashchange", syncFromHash);

  document.addEventListener("keydown", (e) => {
    if (openCase === null) return;
    const m = root.querySelector(".modal");
    if (e.key === "Escape") closeModal();
    if (e.key === "Tab") {
      const f = m.querySelectorAll("button,a[href]");
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === m)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (document.activeElement === last || document.activeElement === m)) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  render();
  syncFromHash();
})();
