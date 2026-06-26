-- =============================================================
-- Siembra de PUBLICIDAD (tabla ads) — piezas reales del cliente.
-- Las imágenes se sirven desde public/ (rutas relativas al sitio).
-- Ejecutar en Supabase → SQL Editor. Ajusta link_url cuando tengas
-- los destinos de cada anuncio.
-- =============================================================
insert into public.ads (image_url, link_url, position, active) values
  ('/publicidad/amarillo-somos-todos.jpg',      null, 1, true),
  ('/publicidad/impuesto-vehicular-caldas.jpg', null, 2, true),
  ('/publicidad/manizales-03.jpg',              null, 3, true),
  ('/publicidad/spirits-business-01.jpg',       null, 4, true);
