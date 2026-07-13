# MentorWallet — Landing page

Sitio web estático de MentorWallet. HTML servido tal cual (sin build step) y
desplegado de forma continua en **Netlify** desde `main`.

> Nota: en el estado actual las páginas todavía se renderizan en cliente con un
> runtime propietario (`support.js` + `_ds_bundle.js`, React desde CDN). El plan
> de trabajo contempla aplanarlas a HTML estático puro; hasta entonces esos
> ficheros siguen formando parte del deploy.

## Estructura del repositorio

```
.
├── netlify.toml            # Config de Netlify (publish = "public")
├── README.md
├── public/                 # ← Directorio publicado (raíz del sitio en Netlify)
│   ├── index.html
│   ├── aviso-legal.html
│   ├── politica-cookies.html
│   ├── politica-privacidad.html
│   ├── support.js          # Runtime "dc" (temporal, ver plan de flatten)
│   ├── _redirects          # Reglas de redirección de Netlify
│   ├── assets/             # Logo, símbolo SVG
│   └── _ds/                # Design system: tokens CSS, fuentes Fustat, bundle
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
`styles.css`, que importa los ficheros de `tokens/`. **Antes de modificar
cualquier archivo del design system**, verifica que no rompes rutas relativas ni
referencias usadas en runtime.

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
