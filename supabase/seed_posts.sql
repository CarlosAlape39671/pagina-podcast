-- =============================================================
-- OPCIONAL — Publicaciones de EJEMPLO solo para previsualizar
-- Inicio (Destacados) y Actualidad. Los videos son genéricos.
-- Reemplázalos por los del cliente, o bórralos cuando termines:
--   delete from public.posts;   -- elimina TODAS las publicaciones
-- Ejecutar en Supabase → SQL Editor.
-- =============================================================
insert into public.posts (youtube_url, youtube_id, title, description, published_at) values
  ('https://www.youtube.com/watch?v=aqz-KE-bpKQ', 'aqz-KE-bpKQ',
   'Cobertura especial: sesión ordinaria del Congreso',
   'Seguimiento en tiempo real de los debates y votaciones del día en el Congreso Nacional.',
   '2026-06-23'),
  ('https://www.youtube.com/watch?v=jNQXAC9IVRw', 'jNQXAC9IVRw',
   'Economía local: nuevas medidas del Banco Central',
   'Análisis de las decisiones de política monetaria y su impacto en los ciudadanos.',
   '2026-06-22'),
  ('https://www.youtube.com/watch?v=9bZkp7q19f0', '9bZkp7q19f0',
   'Selección avanza a cuartos de final',
   'Resumen del partido y las reacciones de la afición.',
   '2026-06-21');
