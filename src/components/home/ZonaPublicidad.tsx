import { useAds } from '@/hooks/useAds';

/** Zona de publicidad de Inicio: banners administrables desde la tabla `ads` (RF-09). */
export function ZonaPublicidad() {
  const { ads, loading } = useAds();

  // No mostramos nada mientras carga ni si no hay publicidad activa.
  if (loading || ads.length === 0) return null;

  return (
    <section aria-label="Publicidad">
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Publicidad
      </p>
      <div className="flex flex-wrap items-start justify-center gap-4">
        {ads.map((ad) => {
          const img = (
            <img
              src={ad.image_url}
              alt="Publicidad"
              loading="lazy"
              className="h-auto w-full max-w-[220px] rounded-lg border"
            />
          );
          return ad.link_url ? (
            <a
              key={ad.id}
              href={ad.link_url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block transition-opacity hover:opacity-90"
            >
              {img}
            </a>
          ) : (
            <div key={ad.id}>{img}</div>
          );
        })}
      </div>
    </section>
  );
}
