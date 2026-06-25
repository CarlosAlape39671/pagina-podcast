// Helpers para trabajar con enlaces de YouTube.
// Soporta: watch?v=ID, youtu.be/ID, /shorts/ID, /embed/ID, /live/ID y el ID suelto.

const ID_RE = /^[\w-]{11}$/;

/**
 * Extrae el ID de 11 caracteres de un enlace de YouTube.
 * Devuelve null si no se reconoce.
 */
export function getYouTubeId(input: string): string | null {
  if (!input) return null;
  const raw = input.trim();

  // ¿Ya es un ID suelto?
  if (ID_RE.test(raw)) return raw;

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }

  const host = url.hostname.replace(/^www\./, '');

  // youtu.be/<id>
  if (host === 'youtu.be') {
    const id = url.pathname.slice(1).split('/')[0];
    return ID_RE.test(id) ? id : null;
  }

  if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
    // watch?v=<id>
    const v = url.searchParams.get('v');
    if (v && ID_RE.test(v)) return v;

    // /shorts/<id>, /embed/<id>, /live/<id>, /v/<id>
    const match = url.pathname.match(/^\/(?:shorts|embed|live|v)\/([^/?#]+)/);
    if (match && ID_RE.test(match[1])) return match[1];
  }

  return null;
}

/** true si el enlace contiene un ID de YouTube válido. */
export function isValidYouTubeUrl(input: string): boolean {
  return getYouTubeId(input) !== null;
}

/** URL del reproductor embebido (sin privacidad reforzada). */
export function getYouTubeEmbedUrl(idOrUrl: string): string | null {
  const id = getYouTubeId(idOrUrl);
  return id ? `https://www.youtube.com/embed/${id}` : null;
}

/** Miniatura del video. quality: 'hq' (default) | 'mq' | 'sd' | 'max'. */
export function getYouTubeThumbnail(
  idOrUrl: string,
  quality: 'mq' | 'hq' | 'sd' | 'max' = 'hq',
): string | null {
  const id = getYouTubeId(idOrUrl);
  if (!id) return null;
  const file = {
    mq: 'mqdefault',
    hq: 'hqdefault',
    sd: 'sddefault',
    max: 'maxresdefault',
  }[quality];
  return `https://i.ytimg.com/vi/${id}/${file}.jpg`;
}
