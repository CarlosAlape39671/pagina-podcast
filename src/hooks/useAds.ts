import { useEffect, useState } from 'react';
import type { Ad } from '@/types';
import { getActiveAds } from '@/data/ads';

/** Carga los banners de publicidad activos (ordenados por posición). */
export function useAds() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    getActiveAds()
      .then((data) => {
        if (active) {
          setAds(data);
          setError(null);
        }
      })
      .catch((e) => {
        if (active) setError(e instanceof Error ? e.message : 'No se pudo cargar la publicidad.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return { ads, loading, error };
}
