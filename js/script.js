// =========================================================
// Cecilia Solsona Sandoval — script principal del sitio
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  // Textos según el idioma de la página (atributo lang del <html>)
  var LANG = document.documentElement.lang === 'ca' ? 'ca' : 'es';
  var MESSAGES = {
    es: { formSuccess: 'Gracias por tu mensaje. Te responderé lo antes posible.' },
    ca: { formSuccess: 'Gràcies pel teu missatge. Et respondré tan aviat com pugui.' }
  };

  // Año dinámico en el footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Cierra el menú al pulsar un enlace (en móvil)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Formulario de contacto
  // NOTA: este formulario aún no envía correos. Conéctalo a un servicio como
  // Formspree, Web3Forms o similar (ver guía de despliegue incluida).
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = MESSAGES[LANG].formSuccess;
      form.reset();
    });
  }

  // Aviso de cookies (usa una cookie propia, no localStorage)
  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }
  function setCookie(name, value, days) {
    var expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + value + '; expires=' + expires + '; path=/';
  }

  var banner = document.getElementById('cookieBanner');
  var acceptBtn = document.getElementById('cookieAccept');
  var rejectBtn = document.getElementById('cookieReject');

  if (banner && !getCookie('cookie_consent')) {
    banner.hidden = false;
  }
  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      setCookie('cookie_consent', 'accepted', 365);
      banner.hidden = true;
    });
  }
  if (rejectBtn) {
    rejectBtn.addEventListener('click', function () {
      setCookie('cookie_consent', 'rejected', 365);
      banner.hidden = true;
    });
  }

  // Animación de aparición al hacer scroll
  var reveals = document.querySelectorAll('.reveal');
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reveals.length) return;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(function (el) { observer.observe(el); });
});
