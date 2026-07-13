/* ==========================================================================
   MentorWallet — mejora progresiva del formulario de contacto (Netlify Forms).

   Sin JS: el <form> hace POST nativo y Netlify redirige a /gracias.html.
   Con JS: interceptamos el envío, hacemos POST por fetch y mostramos estados
   reales — cargando, éxito (solo tras HTTP 200) y error con reintento —
   sin recargar la página.

   Script de primera parte, sin dependencias ni eval: compatible con una CSP
   estricta (script-src 'self').
   ========================================================================== */
(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form) return;

  var btn = document.getElementById('contact-submit');
  var btnLabel = btn ? btn.querySelector('span') : null;
  var errorBox = document.getElementById('form-error');
  var successBox = document.getElementById('form-success');
  var defaultLabel = btnLabel ? btnLabel.textContent : 'Solicitar información';

  function setError(show) {
    if (errorBox) errorBox.hidden = !show;
  }

  function setLoading(loading) {
    if (!btn) return;
    btn.disabled = loading;
    btn.setAttribute('aria-busy', loading ? 'true' : 'false');
    if (btnLabel) btnLabel.textContent = loading ? 'Enviando…' : defaultLabel;
  }

  function showSuccess() {
    // El form lleva `display:flex` en línea, que gana al atributo [hidden];
    // por eso lo ocultamos vía style.display.
    form.style.display = 'none';
    if (successBox) {
      successBox.hidden = false;
      successBox.setAttribute('role', 'status');
      successBox.setAttribute('aria-live', 'polite');
      if (typeof successBox.focus === 'function') {
        successBox.setAttribute('tabindex', '-1');
        successBox.focus();
      }
    }
  }

  form.addEventListener('submit', function (e) {
    // Deja que el navegador valide required/email antes de interceptar.
    if (typeof form.reportValidity === 'function' && !form.reportValidity()) return;

    e.preventDefault();
    setError(false);
    setLoading(true);

    var body = new URLSearchParams(new FormData(form)).toString();

    // Netlify intercepta el POST (form-name coincide) y registra el envío.
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    })
      .then(function (res) {
        if (res.ok) {
          showSuccess();
        } else {
          setLoading(false);
          setError(true);
        }
      })
      .catch(function () {
        // Fallo de red — el formulario permanece para reintentar.
        setLoading(false);
        setError(true);
      });
  });
})();

/* ==========================================================================
   Facade de vídeo (PERF-03): carga el iframe de YouTube (youtube-nocookie)
   solo cuando el usuario pulsa el póster. Nada de YouTube se carga antes.
   ========================================================================== */
(function () {
  'use strict';
  var btn = document.querySelector('.mw-video__btn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var wrap = btn.closest('.mw-video');
    var id = btn.getAttribute('data-video-id');
    var title = btn.getAttribute('data-video-title') || 'Vídeo';
    if (!wrap || !id) return;
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?rel=0&modestbranding=1&autoplay=1';
    iframe.title = title;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.setAttribute('allowfullscreen', '');
    wrap.innerHTML = '';
    wrap.appendChild(iframe);
    iframe.focus();
  });
})();
