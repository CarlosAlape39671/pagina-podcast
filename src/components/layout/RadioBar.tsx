import { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { siteConfig } from '@/config/site';

/**
 * Barra de radio fija (RF-01 / RF-02). El audio de la estación se reproduce en
 * SEGUNDO PLANO con un <audio> oculto (stream directo); la barra es nuestra UI.
 * El stream no se carga hasta el primer clic (preload="none", RNF-02).
 */
export function RadioBar() {
  const { stationName, slogan, streamUrl } = siteConfig.radio;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform active:scale-95"
          aria-label={playing ? `Pausar ${stationName}` : `Reproducir ${stationName}`}
        >
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 translate-x-px" />}
        </button>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="truncate text-sm font-bold text-foreground">{stationName}</p>
            <span className="flex shrink-0 items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-red-600">
              <span
                className="inline-block h-2 w-2 rounded-full bg-red-600 motion-safe:animate-blink"
                aria-hidden
              />
              Live
            </span>
          </div>
          <p className="truncate text-xs text-muted-foreground">{slogan}</p>
        </div>

        {/* Audio en segundo plano: stream directo de la estación, sin UI propia. */}
        <audio
          ref={audioRef}
          src={streamUrl}
          preload="none"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setPlaying(false)}
        />
      </div>
    </div>
  );
}
