import { useState } from 'react';
import { Play } from 'lucide-react';
import { siteConfig } from '@/config/site';

/**
 * Barra de radio fija (RF-01 / RF-02). Para cumplir el objetivo de arranque
 * rápido (RNF-02), el iframe de TuneIn NO se carga hasta el primer gesto del
 * usuario: hasta entonces se muestra un botón "play" ligero.
 */
export function RadioBar() {
  const [started, setStarted] = useState(false);
  const { stationName, tuneInEmbedUrl } = siteConfig.radio;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center gap-3">
        {!started ? (
          <button
            type="button"
            onClick={() => setStarted(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
            aria-label={`Reproducir ${stationName}`}
          >
            <Play className="h-5 w-5" />
          </button>
        ) : (
          // El widget de TuneIn se incrusta al primer clic.
          <iframe
            title={stationName}
            src={tuneInEmbedUrl}
            className="h-12 w-full max-w-md rounded"
            allow="autoplay"
          />
        )}

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{stationName}</p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-red-600" aria-hidden />
            EN VIVO
          </p>
        </div>
      </div>
    </div>
  );
}
