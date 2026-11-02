// Arma el portfolio en una sola página imprimible (A4 apaisado) a partir de js/content.js.
(function () {
  const S = window.SITE;
  const lang = new URLSearchParams(location.search).get("lang") || "en";
  const u = S.ui[lang];
  const SITE_URL = "https://sofiafcalvo.github.io/";
  const doc = document.getElementById("doc");

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const t = (o) => (o && typeof o === "object" ? o[lang] : o);
  const img = (src) => "../" + src;

  const flower = (size, color = "var(--flower)") => {
    let petals = "";
    for (let n = 0; n < 8; n++)
      petals += `<ellipse cx="150" cy="86" rx="38" ry="76" fill="${color}" transform="rotate(${n * 45} 150 150)"></ellipse>`;
    return `<svg width="${size}" height="${size}" viewBox="0 0 300 300" aria-hidden="true">${petals}<circle cx="150" cy="150" r="44" fill="var(--paper)"></circle><path d="M130 144v7m39-7v7m-37 14q18 17 36 0" stroke="var(--ink)" stroke-width="5" stroke-linecap="round" fill="none"></path></svg>`;
  };

  const footer = (label) =>
    `<div class="pageFoot"><span>Sofía Fernández Calvo · Product Designer</span><span>${esc(label)}</span></div>`;

  // ── Portada ───────────────────────────────────────────────
  const cover = `<section class="page cover">
    <div class="coverCopy">
      <div class="eyebrow"><i class="dot"></i>PORTFOLIO 2026</div>
      <h1>${esc(u.h1a)}<br><span>${esc(u.h1b)}</span></h1>
      <p class="coverName">Sofía Fernández Calvo</p>
      <p class="coverRole">Product Designer · Senior UX/UI · AI-first</p>
      <p class="coverIntro">${esc(u.intro)}</p>
      <ul class="contact">
        <li><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></li>
        <li><a href="${esc(S.linkedin)}">linkedin.com/in/sofiafcalvo</a></li>
        <li><a href="${SITE_URL}">sofiafcalvo.github.io</a></li>
      </ul>
    </div>
    <div class="coverArt">
      <div class="portrait"><img src="${img(S.photo)}" alt="Sofía Fernández Calvo"></div>
      <div class="portraitFlower">${flower(150)}</div>
      <div class="sticker">${esc(u.sticker)}</div>
      <span class="photoCaption">BUENOS AIRES · ARGENTINA</span>
    </div>
  </section>`;

  // ── Sobre mí + índice de casos ────────────────────────────
  const how = u.how.map(([h, p]) => `<li><strong>${esc(h)}</strong><span>${esc(p)}</span></li>`).join("");
  const index = S.projects
    .map(
      (p, i) => `<a class="indexItem" href="#case-${esc(p.slug)}">
        <div class="indexThumb p${p.layout}"><img src="${img((p.thumb || p.cover).url)}" alt=""></div>
        <span class="indexNum">0${i + 1}</span>
        <strong>${esc(p.company)}</strong>
        <em>${esc(t(p.title))}</em>
      </a>`
    )
    .join("");
  const about = `<section class="page about">
    <div class="aboutGrid">
      <div>
        <div class="eyebrow">${esc(u.about.toUpperCase())}</div>
        <h2>${esc(u.aboutTitle)}</h2>
        ${u.bio.map((b) => `<p class="prose">${esc(b)}</p>`).join("")}
        <div class="availability"><i class="dot"></i><div><strong>${esc(u.availableTitle)}</strong><p>${esc(u.availableText)}</p></div></div>
      </div>
      <div class="howCard">
        ${flower(52, "var(--violet)")}
        <h3>${esc(u.howTitle)}</h3>
        <ul class="howlist">${how}</ul>
      </div>
    </div>
    ${footer("About")}
  </section>
  <section class="page indexPage">
    <div class="eyebrow">${esc(u.selected.toUpperCase())}</div>
    <h2>${esc(u.selectedSub)}</h2>
    <div class="indexGrid">${index}</div>
    ${footer("Selected work")}
  </section>`;

  // ── Casos ─────────────────────────────────────────────────
  const figure = (im) =>
    `<figure${im.width ? ` class="small"` : ""}><img src="${img(im.url)}" alt="${esc(im[lang])}"><figcaption>${esc(im[lang])}</figcaption></figure>`;

  function block(b, n, coverUrl) {
    let h = "";
    if (b.text) h += b.text.map((p) => `<p>${esc(t(p))}</p>`).join("");
    if (b.list) h += `<ul class="caseList">${b.list.map((li) => `<li>${esc(t(li))}</li>`).join("")}</ul>`;
    if (b.quotes) h += `<div class="caseQuotes">${b.quotes.map((q) => `<blockquote>${esc(t(q))}</blockquote>`).join("")}</div>`;
    if (b.cards)
      h += `<div class="caseCards">${b.cards
        .map((c) => `<div class="caseCard"><h4>${esc(t(c.title))}</h4><p>${esc(t(c.text))}</p>${c.meta ? `<span>${esc(c.meta)}</span>` : ""}</div>`)
        .join("")}</div>`;
    if (b.steps)
      h += `<ol class="caseSteps">${b.steps.map((s) => `<li><h4>${esc(t(s.title))}</h4><p>${esc(t(s.text))}</p></li>`).join("")}</ol>`;
    if (b.compare) {
      const side = (key, label) => {
        const c = b.compare[key];
        return `<div class="compareCol ${key}"><span class="compareTag">${esc(label)}</span>${figure(c.image)}${c.points
          .map((pt) => `<h4>${esc(t(pt.title))}</h4><p>${esc(t(pt.text))}</p>`)
          .join("")}</div>`;
      };
      h += `<div class="caseCompare">${side("before", u.before)}${side("after", u.after)}</div>`;
    }
    if (b.after) h += b.after.map((p) => `<p>${esc(t(p))}</p>`).join("");
    if (b.video)
      h += `<figure class="videoStill"><a href="${SITE_URL}"><img src="${img(b.video.poster)}" alt="${esc(t(b.video))}"><span class="play">▶</span></a><figcaption>${esc(t(b.video))} · Watch it at sofiafcalvo.github.io</figcaption></figure>`;
    if (b.images) {
      // En el PDF no repetimos la imagen que ya es la portada del caso
      const ims = b.images.filter((im) => im.url !== coverUrl);
      const cls = ims.length === 1 ? " single" : ims.length === 4 ? " four" : "";
      if (ims.length) h += `<div class="caseGallery${cls}">${ims.map(figure).join("")}</div>`;
    }
    return `<section class="caseSection"><div class="secNum">${String(n + 1).padStart(2, "0")}</div><div class="secBody"><h3>${esc(t(b.title))}</h3>${h}</div></section>`;
  }

  const cases = S.projects
    .map((p, i) => {
      const tl = p.tldr;
      const facts = ["role", "context", "time", "focus", "outcome"]
        .filter((k) => tl[k])
        .map((k) => `<div><dt>${esc(u.tldr[k])}</dt><dd>${esc(t(tl[k]))}</dd></div>`)
        .join("");
      const online = `${SITE_URL}#caso/${p.slug}`;
      return `<article class="case" id="case-${esc(p.slug)}">
        <section class="page caseOpen">
          <div class="caseHead">
            <div>
              <div class="eyebrow">0${i + 1} / ${esc(t(p.label))}</div>
              <p class="caseCompany">${esc(p.company)} · ${esc(t(p.tags))}</p>
              <h2>${esc(t(p.title))}</h2>
              ${p.note ? `<div class="confidentialNote">${esc(t(p.note))}</div>` : ""}
              <dl class="tldr">${facts}</dl>
              <p class="online"><a href="${online}">View this case online ↗</a>${p.link ? ` · <a href="${esc(p.link.url)}">${esc(p.link[lang])} ↗</a>` : ""}</p>
            </div>
            <figure class="caseCover p${p.layout}"><img src="${img(p.cover.url)}" alt="${esc(t(p.cover))}"></figure>
          </div>
          ${footer(p.company)}
        </section>
        <section class="caseFlow">${p.blocks.map((b, n) => block(b, n, p.cover.url)).join("")}</section>
      </article>`;
    })
    .join("");

  // ── Experiencia y contacto ────────────────────────────────
  const jobs = S.jobs
    .map((j) => `<div class="job"><div><h3>${esc(j[0])}</h3><p>${esc(j[1])}</p></div><time>${esc(j[2])}</time></div>`)
    .join("");
  const closing = `<section class="page closing">
    <div class="closingGrid">
      <div>
        <div class="eyebrow">EXPERIENCE</div>
        <h2>${esc(u.journey)}</h2>
        <div class="resume">
          <div><strong>7+</strong><small>${esc(u.experience)}</small></div>
          <div><strong>UBA</strong><small>${esc(u.degree)}</small></div>
        </div>
        <p class="prose">${esc(u.languages)}</p>
        <div class="eyebrow tools">${esc(u.toolbox)}</div>
        ${S.tools.map((l) => `<p class="prose small">${esc(l)}</p>`).join("")}
      </div>
      <div class="timeline">${jobs}</div>
    </div>
    <div class="endBand">
      <div>
        <h2>${esc(u.end)}</h2>
        <p>${esc(u.endText)}</p>
        <ul class="contact">
          <li><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></li>
          <li><a href="${esc(S.linkedin)}">linkedin.com/in/sofiafcalvo</a></li>
          <li><a href="${SITE_URL}">sofiafcalvo.github.io</a></li>
        </ul>
      </div>
      ${flower(120, "var(--sage)")}
    </div>
  </section>`;

  doc.innerHTML = cover + about + cases + closing;

  // El video de un caso enlaza a la página online de ese caso
  doc.querySelectorAll("article.case").forEach((a) => {
    const slug = a.id.replace("case-", "");
    a.querySelectorAll(".videoStill a").forEach((l) => (l.href = `${SITE_URL}#caso/${slug}`));
  });

  // Avisar cuando todas las imágenes y fuentes cargaron (lo usa el generador del PDF)
  Promise.all([document.fonts.ready, ...[...document.images].map((i) => (i.complete ? 0 : new Promise((r) => (i.onload = i.onerror = r))))]).then(
    () => document.body.setAttribute("data-ready", "1")
  );
})();
