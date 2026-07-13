# RAT — Registro de Actividades de Tratamiento

**Documento interno (no publicado).** Registro de la actividad de tratamiento
del flujo de captación de leads del sitio web, conforme al art. 30 RGPD.
Última revisión: julio 2026.

> Este documento es un punto de partida operativo, no asesoramiento jurídico.
> Conviene que un profesional en protección de datos lo valide y complete.

## 1. Responsable del tratamiento
- **Entidad:** MentorWallet, S.L. (NIF B88963301)
- **Domicilio:** Calle del Darro 7, 28002 Madrid
- **Contacto RGPD:** privacidad@mentorwallet.es

## 2. Actividad de tratamiento
- **Nombre:** Gestión de solicitudes de información / leads (formulario web).
- **Descripción:** El formulario de contacto de la home recoge datos de empresas
  interesadas para atender su solicitud y concertar una demo.

## 3. Categorías de interesados
- Personas de contacto de empresas potencialmente clientes (leads B2B).

## 4. Categorías de datos
- Nombre y apellidos.
- Correo electrónico corporativo.
- Nombre de la empresa.
- Metadatos técnicos del envío (fecha/hora, gestionados por Netlify Forms).
- No se tratan categorías especiales de datos (art. 9 RGPD).

## 5. Finalidad
- Atender la solicitud de información y concertar una reunión de demostración;
  gestión de la relación precomercial.

## 6. Base jurídica
- Consentimiento del interesado (art. 6.1.a RGPD), recabado mediante casilla no
  premarcada en el formulario, con enlace a la Política de Privacidad.
- Medidas precontractuales a petición del interesado (art. 6.1.b RGPD).

## 7. Destinatarios / encargados del tratamiento
- **Netlify, Inc.** (EE. UU.) — alojamiento web y gestión del formulario
  (Netlify Forms). Los envíos se almacenan en el panel de Netlify. Encargado
  del tratamiento (art. 28 RGPD).
- **Notificación por email** de nuevos leads a `info@mentorwallet.es`
  (buzón corporativo).
- No se utiliza Brevo ni ninguna plataforma de email marketing.
- No hay cesiones a terceros con fines comerciales propios.

## 8. Transferencias internacionales
- Netlify (EE. UU.): amparada en el EU–US Data Privacy Framework y/o cláusulas
  contractuales tipo (SCC).

## 9. Almacenamiento y acceso
- **Dónde:** panel de Netlify Forms (submissions) + buzón info@mentorwallet.es.
- **Quién accede:** personal autorizado de MentorWallet (dirección / comercial).
- **Cómo:** acceso autenticado a Netlify y al correo corporativo.

## 10. Plazo de conservación
- Hasta **3 años** desde el último contacto; después, supresión o anonimización.
- Datos de comunicaciones comerciales: hasta que se retire el consentimiento.

## 11. Medidas de seguridad (técnicas y organizativas)
- Sitio y formulario servidos por HTTPS (HSTS activo).
- Cabeceras de seguridad (CSP, X-Content-Type-Options, etc.).
- Honeypot anti-spam en el formulario.
- Acceso a los envíos restringido a cuentas autorizadas de Netlify/correo.

## 12. Derechos de los interesados
- Acceso, rectificación, supresión, oposición, limitación, portabilidad y
  retirada del consentimiento, ejercitables en privacidad@mentorwallet.es.
- Reclamación ante la AEPD (www.aepd.es).

## Pendientes / a revisar
- Firmar/archivar el acuerdo de encargado del tratamiento (DPA) con Netlify.
- Si se añade analítica o LinkedIn Insight Tag en el futuro: implementar CMP de
  consentimiento previo y actualizar la Política de Cookies (ver LEG-04).
