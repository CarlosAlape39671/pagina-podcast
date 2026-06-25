import { useState } from 'react';
import { Play } from 'lucide-react';
import { getYouTubeEmbedUrl, getYouTubeThumbnail } from '@/lib/youtube';

interface YouTubeEmbedProps {
  /** ID o URL de YouTube. */
  video: string;
  title?: string;
}

/**
 * Embed de YouTube con carga diferida tipo "facade" (estilo lite-youtube):
 * primero miniatura + botón play; el iframe se carga al hacer clic (RNF-02).
 * Proporción 16:9 y responsive (RF-04).
 */
export function YouTubeEmbed({ video, title }: YouTubeEmbedProps) {
  const [active, setActive] = useState(false);
  const embedUrl = getYouTubeEmbedUrl(video);
  const thumb = getYouTubeThumbnail(video, 'hq');

  if (!embedUrl) {
    return (
      <div className="grid aspect-video w-full place-items-center rounded-lg bg-muted text-sm text-muted-foreground">
        Enlace de YouTube no válido
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`${embedUrl}?autoplay=1&rel=0`}
          title={title ?? 'Video de YouTube'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Reproducir ${title ?? 'video'}`}
        >
          {thumb && (
            <img
              src={thumb}
              alt={title ?? ''}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          )}
          <span className="absolute inset-0 grid place-items-center bg-black/10 transition group-hover:bg-black/20">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-black/60 text-white transition group-hover:bg-red-600">
              <Play className="h-7 w-7 translate-x-0.5" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
