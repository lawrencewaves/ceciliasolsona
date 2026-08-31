# Web de Cecilia Solsona Sandoval — Guía rápida

## 1. Qué contiene esta carpeta

- `index.html` — página principal (toda la web, una sola página con anclas).
- `aviso-legal.html`, `politica-privacidad.html`, `politica-cookies.html` — páginas legales (RGPD/LSSI España).
- `css/style.css` — estilos.
- `js/script.js` — menú móvil, formulario y aviso de cookies.
- `sitemap.xml`, `robots.txt` — SEO técnico básico.

## 2. Antes de subirla: datos por completar

Busca y sustituye estos marcadores en `index.html` y en las páginas legales:

| Marcador | Dónde |
|---|---|
| `Calle Ejemplo, 123, 1º 2ª — 08000 Barcelona` | Dirección real de la consulta |
| `+34 600 00 00 00` | Teléfono real |
| `hola@ceciliasolsona.com` | Email real (o el que uses con tu dominio) |
| `COPC XXXXX` | Tu número de colegiada |
| `[Universidad]`, `[Institución]`, `[X] años` | Tu formación y experiencia |
| `[Completar]` (NIF, tarifas) | Aviso legal y FAQ de precios |
| `www.ceciliasolsona.com` | Tu dominio real, si es distinto |
| Foto CS (círculo) | Sustituir por tu fotografía real en `img/` y enlazarla en el `<div class="about-photo">` |

## 3. Conectar el formulario de contacto

El formulario de `index.html` está listo visualmente pero **no envía correos todavía** (es una web estática, sin servidor propio de backend). Dos opciones sencillas y gratuitas:

**Opción A — Formspree (recomendada, sin tocar código de servidor)**
1. Crea una cuenta gratuita en formspree.io
2. Copia el "endpoint" que te dan (algo como `https://formspree.io/f/xxxxxxx`)
3. En `index.html`, cambia `<form class="contact-form" id="contactForm">` por:
   `<form class="contact-form" id="contactForm" action="https://formspree.io/f/xxxxxxx" method="POST">`
4. Elimina o adapta el `e.preventDefault()` de `js/script.js` si quieres que el propio Formspree gestione el envío.

**Opción B — Si tu hosting soporta PHP**, se puede añadir un pequeño script `enviar.php` con la función `mail()`. Dímelo si quieres que te lo prepare.

## 4. Subir la web al servidor

1. Contrata hosting + dominio (ver recomendaciones abajo).
2. Accede al **Gestor de archivos** del panel (o por FTP con FileZilla).
3. Sube **todo el contenido** de esta carpeta dentro de `public_html` (o `www`, según el hosting).
4. Activa el certificado SSL gratuito (Let's Encrypt) desde el panel — casi todos lo activan en un clic.
5. Verifica que la web carga en `https://tudominio.com`.
6. Da de alta el sitio en **Google Search Console** y envía el `sitemap.xml`.
7. Crea o reclama la ficha de **Google Perfil de Empresa** con el mismo nombre, dirección y teléfono que aparecen en la web (esto es lo que más ayuda al SEO local de una consulta de psicología).

## 5. Hosting recomendado (con buen SEO/velocidad para España)

El hosting en sí no "posiciona" en Google directamente, pero si el servidor es lento o no está bien ubicado, penaliza el SEO (Core Web Vitals) y la experiencia de las visitas. Para una web como esta (poco tráfico, muchas visitas desde España), lo importante es: servidor en España/Europa, SSD/NVMe, SSL gratis y buen soporte en español.

- **Raiola Networks** — servidores en España, muy buena velocidad, soporte en español; opción muy popular entre profesionales y pequeños negocios españoles.
- **SiteGround** — muy buen rendimiento y seguridad, algo más caro, soporte 24/7, buena reputación para SEO técnico.
- **Hostinger** — el más económico, rendimiento correcto, fácil de usar; buena opción para empezar con presupuesto ajustado.
- **Webempresa** — alternativa española, buen soporte, orientado también a WordPress.

Cualquiera de las cuatro es válida para esta web estática; si el presupuesto es limitado, Hostinger es la opción más barata; si se prioriza velocidad y soporte en español, Raiola Networks suele ser la recomendación más repetida para proyectos en España.

## 6. Después de publicar

- Da de alta la web en Google Search Console y Bing Webmaster Tools.
- Crea la ficha de Google Perfil de Empresa (antes "Google My Business").
- Pide 2-3 reseñas a pacientes que quieran dejarlas en Google (mejora mucho el SEO local).
- Revisa que el título y la descripción de cada página (los `<meta>` en el `<head>`) mencionen "Barcelona" y tu especialidad, tal y como ya están configurados.
