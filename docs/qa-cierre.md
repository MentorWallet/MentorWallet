# Fase 9 — Cierre y calidad (QA)

Última verificación: julio 2026.

## QA-01 · Verificación end-to-end

### Lighthouse (móvil)
Ejecutado con Lighthouse 12 sobre el sitio (build de `public/`):

| Categoría | Puntuación |
|-----------|-----------|
| Performance | **99** |
| Accessibility | **100** |
| Best Practices | **100** |
| SEO | **100** |

Métricas clave: FCP ~1.5 s · LCP ~1.8 s · CLS 0.002 · TBT 50 ms.

> Nota: la auditoría "Enable text compression" solo aparece en el servidor
> local; en producción Netlify sirve con gzip/brotli.

### Producción (dominio apex, que es el primario actual)
- `/`, `/aviso-legal`, `/politica-privacidad`, `/politica-cookies`, `/gracias`,
  `/robots.txt`, `/sitemap.xml` → **200**.
- `*.html` → **301** a la URL limpia.
- URL inexistente → **404** con la página personalizada.
- Sin bucle de redirección (apex responde 200).
- Cabeceras de seguridad presentes (CSP, HSTS, X-Content-Type-Options,
  X-Frame-Options, Referrer-Policy, Permissions-Policy).
- Accesibilidad: axe-core 0 violaciones en las 6 páginas.

### Formulario (pendiente de prueba real por tu parte)
El formulario está correctamente cableado a Netlify Forms (campo `form-name`,
honeypot, estados de envío). Para cerrar la prueba end-to-end:
1. Completa `FORM-05` (abajo) para activar el email de aviso.
2. Envía el formulario en producción con datos de prueba.
3. Comprueba que el envío aparece en **Netlify → Forms → contacto-empresas**
   y que llega el correo a `info@mentorwallet.es`.

## Acciones manuales pendientes (panel, no repositorio)

1. **Dominio canónico = www** *(importante para SEO)*
   Los `<link rel="canonical">`, Open Graph y el sitemap apuntan a
   `https://www.mentorwallet.es` (la versión oficial que indicaste). Ahora mismo
   el **dominio primario en Netlify es el apex** (`mentorwallet.es`) y `www`
   redirige al apex, lo que contradice el canonical. Para alinearlo:
   **Netlify → Domain management → Set `www.mentorwallet.es` as primary domain**
   (y activar *Force HTTPS*). Entonces el apex redirigirá a www sin bucles.

2. **FORM-05 · Notificación de leads por email**
   Netlify → **Forms** (tras el primer deploy con el formulario) →
   *Form notifications* → **Add notification → Email notification** →
   enviar a `info@mentorwallet.es`.

## QA-02 · Monitorización

1. **Notificaciones de deploy (Netlify)**
   Netlify → *Notifications* → **Deploy notifications** → añade email/Slack para
   *Deploy succeeded* y *Deploy failed*.

2. **Uptime check**
   Alta en un servicio de uptime (UptimeRobot, Better Uptime, Pingdom…) con
   chequeo HTTPS cada 5 min sobre `https://www.mentorwallet.es/` y alerta por
   email/SMS.

3. **Google Search Console**
   - Verifica la propiedad (dominio o prefijo de URL, la versión primaria).
   - Envía el sitemap: `https://www.mentorwallet.es/sitemap.xml`.
   - Revisa Cobertura y Experiencia (Core Web Vitals) tras unos días.

## Resumen de estado
- Fases 0–8 completadas y desplegadas.
- Objetivos superados: Lighthouse ≥ 90 en las 4 categorías (99/100/100/100),
  accesibilidad AA (axe 0), cabeceras de seguridad completas, sin terceros.
- Quedan las 3 acciones de panel de arriba (dominio primario, email de leads,
  monitorización/Search Console) que dependen de accesos que no están en el repo.
