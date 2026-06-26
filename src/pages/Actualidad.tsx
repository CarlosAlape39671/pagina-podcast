import { usePosts } from '@/hooks/usePosts';
import { PostCard } from '@/components/actualidad/PostCard';

/** Actualidad: lista de publicaciones con video, título, descripción y fecha (RF-03). */
export default function Actualidad() {
  const { posts, loading, error } = usePosts();

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Actualidad
      </h1>

      {loading && (
        <div className="space-y-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="aspect-video animate-pulse rounded-lg bg-muted" />
              <div className="h-4 w-1/3 animate-pulse rounded bg-muted" />
              <div className="h-5 w-2/3 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
          No se pudieron cargar las publicaciones. Intenta de nuevo más tarde.
        </p>
      )}

      {!loading && !error && posts.length === 0 && (
        <p className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
          Aún no hay publicaciones.
        </p>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="space-y-10">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
