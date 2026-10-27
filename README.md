# Portfolio — Sofía Fernández Calvo

Sitio estático (HTML + CSS + JS, sin build), listo para GitHub Pages.

- `index.html` — página
- `css/styles.css` — estilos y paleta de colores
- `js/content.js` — **todo el contenido** (textos ES/EN, casos de estudio, CV, links)
- `js/main.js` — render, cambio de idioma, páginas de caso y animaciones
- `assets/img/` — foto e imágenes de los casos (JPG optimizados)
- `assets/cv/` — CV en PDF
- `assets/favicon.svg`, `assets/og-image.jpg` — ícono y vista previa para redes

Cada caso tiene link directo: `/#caso/<slug>` (por ejemplo `/#caso/numia-organizaciones`).

## Previsualizar en local

```bash
perl serve.pl 8000
```

y abrir http://localhost:8000

## Publicar cambios

El sitio está en GitHub Pages: https://sofiafcalvo.github.io/

Después de editar (por ejemplo `js/content.js`):

```bash
git add -A && git commit -m "Describe el cambio" && git push
```

GitHub publica la nueva versión en uno o dos minutos.
