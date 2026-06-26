import { Link } from 'react-router-dom';
import { usePosts } from '@/hooks/usePosts';
import { YouTubeEmbed } from '@/components/actualidad/YouTubeEmbed';
import { formatDate } from '@/lib/date';

const MAX_DESTACADOS = 3;

/** Destacados de Inicio: las publicaciones más recientes de Actualidad (RF-11). */
export function Destacados() {
  const { posts, loading, error } = usePosts();
  const featured = posts.slice(0, MAX_DESTACADOS);

  return (
    <section aria-labelledby="destacados-title">
      <div className="mb-3 flex items-end justify-between gap-4">
        <h2
          id="destacados-title"
          className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
        >
          Últimas publicaciones
        </h2>
        <Link to="/actualidad" className="text-sm font-medium text-primary hover:underline">
          Ver todas
        </Link>
      </div>

      {loading && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: MAX_DESTACADOS }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="aspect-video animate-pulse rounded-lg bg-muted" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
          No se pudieron cargar las publicaciones.
        </p>
      )}

      {!loading && !error && featured.length === 0 && (
        <p className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
          Aún no hay publicaciones. Pronto verás aquí lo más reciente.
        </p>
      )}

      {!loading && !error && featured.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((post) => (
            <article key={post.id} className="space-y-2">
              <YouTubeEmbed video={post.youtube_id} title={post.title ?? undefined} />
              <h3 className="line-clamp-2 font-medium leading-snug">
                {post.title ?? 'Sin título'}
              </h3>
              <p className="text-xs text-muted-foreground">{formatDate(post.published_at)}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
