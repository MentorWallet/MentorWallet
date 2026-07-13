# MentorWallet — Landing page

Sitio web estático de MentorWallet. HTML servido tal cual (sin build step) y
desplegado de forma continua en **Netlify** desde `main`.

Las páginas son **HTML estático puro** (pre-renderizado): no hay runtime de
cliente, ni React, ni evaluación de plantillas en el navegador. Solo se sirven
HTML, CSS (tokens del DS + `site.css`), fuentes y un pequeño script de primera
parte para la mejora progresiva del formulario.

## Estructura del repositorio

```
.
├── netlify.toml            # Config de Netlify (publish = "public")
├── README.md
├── public/                 # ← Directorio publicado (raíz del sitio en Netlify)
│   ├── index.html
│   ├── gracias.html        # Página de éxito del formulario (fallback sin JS)
│   ├── aviso-legal.html
│   ├── politica-cookies.html
│   ├── politica-privacidad.html
│   ├── site.css            # Estilos propios sobre los tokens del DS
│   ├── js/form.js          # Mejora progresiva del formulario (Netlify Forms)
│   ├── _redirects          # Reglas de redirección de Netlify
│   ├── assets/             # Logo, símbolo SVG
│   └── _ds/                # Design system: tokens CSS y fuentes Fustat
└── docs/                   # Material NO publicado (fuera del deploy)
    ├── design-system/      # readme, manifest y adherence del DS
    ├── legal-source/       # JSON fuente de los textos legales
    ├── screenshots/        # Capturas de referencia
    └── uploads/            # Documentos .docx originales de los textos legales
```

Todo lo que se sirve al público vive bajo `public/`. `docs/` guarda material de
apoyo (fuentes de los textos legales, capturas, metadatos del design system) que
no debe formar parte del sitio desplegado.

## Design system

Los tokens de color, tipografía (Fustat), spacing y componentes están en
`public/_ds/mentorwallet-design-system-.../`. El punto de entrada de estilos es
`styles.css`, que importa los ficheros de `tokens/`. Los estilos de los
componentes del DS que la landing usa (Button, Badge, Card, StatCard) están
copiados en `public/site.css`. **Antes de modificar cualquier archivo del design
system**, verifica que no rompes rutas relativas.

## Formulario de contacto (Netlify Forms)

El formulario de la home usa **Netlify Forms**:

- El `<form name="contacto-empresas" data-netlify="true">` incluye un campo
  oculto `form-name` y un honeypot `bot-field` (anti-spam).
- **Sin JavaScript**: el formulario hace POST nativo y Netlify redirige a
  `gracias.html`.
- **Con JavaScript** (`js/form.js`, mejora progresiva): el envío se hace por
  `fetch` y se muestran estados reales (enviando / éxito solo tras HTTP 200 /
  error con reintento) sin recargar la página.

### Paso manual en el panel de Netlify (obligatorio)

Netlify solo detecta el formulario **tras el primer deploy** que contenga el
HTML. Después, configurar la **notificación por email de nuevos envíos**:

> Site settings → **Forms** → Form notifications → *Add notification* →
> **Email notification** → enviar a `info@mentorwallet.es`.

Esto no se puede fijar desde el repositorio; es configuración del panel.

## SEO y metadatos

- **Dominio canónico:** `https://www.mentorwallet.es` (con www). El `_redirects`
  fuerza apex→www (301) y URLs limpias sin `.html` (301 desde `.html`, rewrite
  200 a la versión limpia). Cada página incluye `<link rel="canonical">`.
- **Metadatos:** `<title>`, `meta description`, Open Graph + Twitter Cards en
  todas las páginas; JSON-LD (`Organization` + `WebSite`) en la home.
- **Assets generados desde `assets/symbol.svg`:** `favicon.svg`,
  `favicon-16/32.png`, `apple-touch-icon.png`, `icon-192/512.png`,
  `site.webmanifest`. La imagen social `og-image.png` (1200×630) se generó con
  el design system.
- **Indexación:** `robots.txt` + `sitemap.xml` (URLs limpias). `404.html`
  personalizada (Netlify la sirve automáticamente). `gracias.html` y `404.html`
  van con `noindex`.

## Rendimiento

- **Fuentes:** Fustat en **WOFF2 subseteado a latin**, solo pesos 400/500/600/700
  (~670 KB en 7 `.ttf` → ~38 KB en 4 `.woff2`). Preload de Regular y Bold.
- **Logo:** `logo-green.webp` (~6 KB, antes JPG de ~147 KB); `width`/`height` en
  todas las `<img>` para evitar CLS.
- **Vídeo:** facade *click-to-load* — el iframe de `youtube-nocookie` solo se
  carga al pulsar el póster (`js/form.js`). Nada de YouTube en la carga inicial.
- **Caché:** cabeceras en `netlify.toml` (fuentes `immutable`; CSS/JS con caché
  corta + revalidación al no llevar hash en el nombre).
- Transferencia inicial de la home ≈ **107 KB** (sin abrir el vídeo).

## Seguridad

- **Sin terceros:** todas las fuentes se autohospedan (Fustat + DM Mono en
  WOFF2). No hay peticiones a Google Fonts, ni `new Function`, ni scripts de
  terceros; el único JS es `js/form.js` (primera parte).
- **Cabeceras** (`netlify.toml`, aplican a `/*`): CSP estricta
  (`default-src 'self'`, `script-src 'self'`, `frame-src` solo
  youtube-nocookie, `frame-ancestors 'none'`), `X-Content-Type-Options`,
  `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` y HSTS
  (`Strict-Transport-Security`, sin `preload` de momento).
- `style-src` incluye `'unsafe-inline'` porque la página usa estilos inline;
  el JS sí queda restringido a `'self'`.

## Despliegue

Netlify hace deploy continuo desde git. El directorio publicado es `public/`,
configurado en `netlify.toml` (`publish = "public"`). Cada push a `main`
dispara un nuevo deploy.

## Flujo de trabajo

1. Crea una **rama nueva** a partir de `main`. No se commitea directamente a
   `main`.
2. Realiza tus cambios con commits claros y descriptivos.
3. Abre un **Pull Request** hacia `main`.
4. Al hacer merge, Netlify despliega automáticamente.
