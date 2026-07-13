# MentorWallet — Design System

> **MentorWallet** is a financial-education and money-coaching brand. Per its brand manual, the brand *"is the fruit of its strategy and positioning. Its objective is financial advice and education to help people organise and improve how they manage their money."* (translated from the Spanish source). The product helps everyday people build better money habits — *"Hábitos financieros para organizar mejor tu dinero"* — and get started today — *"Empieza a organizar tus finanzas hoy."*

It is a Spanish-language brand (primary market), warm and encouraging in tone, with a calm editorial look: a deep-green palette, a fluor-green accent, soft mint/sky tints, and a refined serif wordmark paired with the humanist sans **Fustat**.

---

## Sources

This design system was reverse-engineered from the materials the client provided. Keep these references even though the reader may not have access:

- **Brand manual (PDF):** `uploads/MENTOR WALLET_manual de marca.pdf` — *"Guía de Marca / Identidad Visual"*, 2 pages. Covers the brand statement, logo + respect area, typography, the colour palette (with Pantone/CMYK/RGB/HEX), background-application rules, corporate-piece layout rules, and incorrect-use rules.
- **Logo lockups (provided by the user):** six JPGs, now in `assets/logos/` — the wordmark on light-blue, mint, and dark-green backgrounds, each with a plain and a *"Educación financiera"* tagline variant. Plus `symbol-mark.png` (the real symbol on a mint circle) and `symbol.svg` (recolourable single-ink mark).
- **Visual system deck (PDF):** `uploads/MENTOR WALLET_Sistema_Visual_100326_01.pdf` — *"Sistema Visual"*, 12 pages of brand applications (posters, social templates, business cards). Source of the campaign taglines, the `#MentorWallet` hashtag, the topic taxonomy, and founder contact details. Pages are image-heavy; text mined via PDF parse.
- **Fonts (provided by the user):** the seven Fustat weights (.ttf), now self-hosted in `assets/fonts/` with `@font-face` rules in `tokens/fonts.css`.
- There was **no codebase, Figma file, or existing product UI**. The brand manual defines identity only; the UI kits in this system are faithful *interpretations* built on the documented foundations, not recreations of existing screens. **See the caveat in the index.**

No website HTML/CSS was available to inspect (`www.mentorwallet.com` is referenced in the manual but was not provided).

---

## CONTENT FUNDAMENTALS

How MentorWallet writes.

- **Language:** Spanish (España). All brand copy in the manual is Spanish. If you need English, treat it as a translation and keep the same warmth.
- **Person & address:** Second person informal — **"tú"**, not "usted". The brand speaks *to* one person, like a coach: *"organizar mejor **tu** dinero"*, *"**Empieza** a organizar **tus** finanzas hoy"*. Verbs are often imperative and encouraging ("Empieza", "Organiza", "Aprende").
- **Tone:** Supportive, plain-spoken, optimistic. It is *education*, not finance jargon. Avoid intimidating banking language; favour everyday words ("dinero", "hábitos", "gastos", "ahorro") over technical ones ("activos", "apalancamiento").
- **Casing:** Sentence case for headlines and UI. The wordmark is the only place "MentorWallet" runs together as one capitalised compound. Taglines are sentence case ("Educación financiera").
- **Length:** Short, scannable. Headlines are one line, often a benefit or an invitation. Body copy is concise and concrete.
- **Vibe words:** organised, calm, confident, approachable, "got this". Money as something you *manage and improve*, not something to fear.
- **Emoji:** None. The manual shows no emoji; do not introduce them. Use the brand symbol or simple line icons for visual punctuation instead.
- **Example phrases (verbatim from brand sources, reuse these):**
  - *"Educación financiera"* — the brand descriptor / tagline.
  - *"Hábitos financieros para organizar mejor tu dinero"*
  - *"Empieza a organizar tus finanzas hoy"*
  - *"Invertir en tu jubilación reduce tu base imponible"* — example of a concrete, practical educational hook.
  - *"Educación financiera aplicada a tu día a día"*
  - *"Una nueva forma de relacionarte con tu dinero"*
  - *"Bienvenido a #MentorWallet"* — onboarding / welcome line; **`#MentorWallet`** is the brand hashtag.
- **Topic taxonomy** (from the visual-system deck — use these as content categories / chips): Gastos · Inversión · Ahorro · Estabilidad financiera · Ventajas fiscales · Pensiones.
- **Brand contact (for footers, business cards, sign-offs):** Patricia Fitzgerald, Founder · +34 678 987 987 · hola@mentorwallet.com · www.mentorwallet.com

---

## VISUAL FOUNDATIONS

The look and feel, head to toe.

### Colour

- **Deep green `#0D352E` (verde oscuro) is the primary colour** and the brand's "near-black". It carries the wordmark, headings, primary buttons, and full-bleed dark sections.
- **Fluor green `#74FFC4` is the accent** — used sparingly to highlight, to draw the eye (the symbol's dots, a key word, a small CTA chip, focus rings). It is *not* a large-area colour; it pops against the deep green.
- **Mint `#DDFFF0` (verde claro)** and **sky `#E1F7FF` (azul claro)** are soft tint backgrounds — used for calm section fills, cards, and the light logo grounds. Mint is the dominant tint; sky is complementary.
- **White** is the default page background. The palette overall reads **fresh, cool, clean** — minty greens with a cool blue note, no warm tones.
- On photos or busy colour grounds, the manual instructs using the **single-ink logo, preferably white**, to guarantee legibility.

### Typography

- **Primary typeface: Fustat** (Google Fonts) — a humanist sans inspired by Kufic manuscript forms; calm, friendly, distinctive. Used for headings, UI, and body.
- **Secondary typeface: DM Sans** (Google Fonts) — used only where Fustat cannot be (per the manual). Acts as the system fallback.
- **DM Mono** is added for tabular/figure contexts (balances, amounts) — pairs with DM Sans.
- **The "MentorWallet" wordmark is a custom serif logotype** — a refined, high-contrast serif. It is a *locked image asset*, not a working typeface; never re-typeset the brand name in a serif yourself, use the logo files.
- Text is **left-aligned** by default (the manual: *"Los textos se maquetarán principalmente con alineación a la izquierda"*).

### Layout & shape

- **Corner radii are soft and generous** — the brand symbol itself is built from rounded squares (\~28% radius). Cards use \~24px radius, buttons are pill or 14–20px, chips are pills.
- **Cards:** white (or mint) surface, no heavy borders — separation comes from a soft, green-tinted shadow rather than strokes. Optional 1px `--border-subtle` hairline on flat layouts.
- **Generous whitespace**; uncluttered, breathing layouts. Content sits in centred containers (640–1240px).

### Backgrounds

- Mostly **flat solid fills**: white, mint, sky, or full-bleed deep green. **No gradients**, no noise, no busy patterns.
- Photography (when used) shows **real people in calm, well-lit advisory/everyday moments** — natural light, soft and neutral, documentary feel (the manual's corporate-piece mockups use bright, airy candid photography). Imagery is bright and cool-neutral, never heavily filtered or moody.
- The **brand symbol** (rounded-square corner mark) can be used as a large, low-contrast graphic motif on dark or tint grounds.

### Elevation & depth

- **Soft, diffuse, green-tinted shadows** (`rgba(13,53,46,…)`), low opacity — fintech-soft, never hard drop shadows. See `--shadow-xs … --shadow-xl`.
- No inner shadows or skeuomorphism. Depth is gentle.

### Borders

- Thin, low-contrast hairlines (`--border-subtle`/`--border-default`, green-tinted neutrals). On dark grounds, borders are translucent mint (`--border-on-dark`). The brand avoids the "rounded card + coloured left-border accent" cliché — don't use it.

### Motion

- **Calm and smooth.** Standard easing is a gentle decelerate (`--ease-standard`, `--ease-out`); durations 140–360ms. Fades and soft slides; **no bounces, no springy overshoot, no flashy animation.** Respect `prefers-reduced-motion`.

### Interaction states

- **Hover:** primary (green) buttons darken one step (`--color-primary-hover`); accent (fluor) buttons brighten/deepen slightly; tinted surfaces shift one tint step. Links underline.
- **Press/active:** darken further (`--color-primary-active`); a subtle scale-down (\~0.98) is acceptable but optional — keep it gentle.
- **Focus:** a **fluor focus ring** (`--focus-ring`, 3px `rgba(116,255,196,.55)`) — the accent does double duty as the visible focus state.
- **Disabled:** reduced opacity (\~0.45), no shadow, `cursor: not-allowed`.

### Transparency & blur

- Used sparingly: translucent mint borders on dark, and optional light blur behind sticky headers/overlays. Not a defining motif.

---

## ICONOGRAPHY

- **The brand provides one proprietary mark: the MentorWallet symbol** — five rounded squares arranged as a top row of three plus a right-hand column of three (a corner/arrow motif suggesting forward progress and growth). It was traced faithfully from the logo into a crisp, recolourable SVG at `assets/logos/symbol.svg` (uses `currentColor`). Use it for app icons, favicons, loading states, and as a large decorative graphic. Do not redraw or restyle it.
- **No icon font or icon set ships with the brand manual.** For UI icons, this system standardises on **[Lucide](https://lucide.dev)** — a clean, consistent 1.5–2px **stroke** (outline) set whose rounded line caps echo the soft, rounded brand shapes. **This is a substitution** (the brand had no documented UI icon set) and is flagged for the user's confirmation. Lucide is loaded from CDN in the UI kits.
  - Use **outline** icons at \~1.75px stroke, rounded caps/joins, sized 20–24px in UI; colour them with `currentColor` so they inherit text colour (deep green on light, mint on dark, fluor for accents).
- **Emoji:** not used. **Unicode glyphs as icons:** avoid — use Lucide or the brand symbol instead.

---

## VISUAL INDEX / MANIFEST

Root files:

- `styles.css` — global entry point (consumers link this); `@import`s the token files below.
- `tokens/fonts.css` — self-hosted Fustat `@font-face` (7 weights, `assets/fonts/`) + Google Fonts import (DM Sans, DM Mono).
- `tokens/colors.css` — brand palette + ramps + semantic aliases.
- `tokens/typography.css` — families, scale, weights, line-heights, tracking.
- `tokens/spacing.css` — spacing grid, radii, elevation, motion, layout/container tokens.
- `tokens/base.css` — element resets + typographic helper classes (`.mw-h1`, `.mw-display-lg`, …).
- `assets/logos/` — six wordmark JPG lockups + `symbol.svg` (the recolourable brand mark).
- `SKILL.md` — Agent-Skill manifest so this folder can be used as a Claude skill.

Foundations (Design System tab cards): see the `guidelines/` folder — colour, type, spacing, radius, elevation, logo and symbol specimen cards.

Components (`components/`): reusable React primitives — Button, IconButton, Badge, Tag, Input, Select, Checkbox, Switch, Card, StatCard, Avatar, Tabs, ProgressBar, ListItem. Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a directory card.

UI kits (`ui_kits/`):

- `app/` — the MentorWallet money-management mobile app (interpretation).
- `marketing/` — the marketing site (interpretation of `www.mentorwallet.com`).

> ⚠️ **Caveat:** No product UI, codebase, or Figma was provided — only the brand manual and logos. The UI kits are brand-faithful *interpretations* to demonstrate the system in use, not recreations of existing MentorWallet screens. Treat them as directional.

Templates (`templates/`) — tweakable starting points (Design Components; consuming projects copy a folder and edit one file):

- `social-square/` — Instagram square post (1080×1080). Tweak: layout (Statement / Big stat / Quote).
- `social-story/` — Instagram story (1080×1920). Tweak: layout (Statement / Big stat / Tip).
- `social-linkedin/` — LinkedIn post (1200×627). Tweak: layout (Statement / Big stat).
- `business-card/` — double-sided business card (1050×600 per face). Tweak: front face (Logo / Tagline).
- `webinar-deck/` — educational webinar deck (1280×720): title, agenda, lesson, stat, quote, closing slides.

All social/card copy, colours and the deck slides are **directly editable** in place; the enum tweaks above switch layouts that inline editing can't. All use the deep-green / fluor / mint "punchy" treatment and pull the real symbol + wordmark assets.
