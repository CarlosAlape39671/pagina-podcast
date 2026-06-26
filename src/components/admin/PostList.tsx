import { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import type { Post } from '@/types';
import { deletePost } from '@/data/posts';
import { getYouTubeThumbnail } from '@/lib/youtube';
import { formatDate } from '@/lib/date';
import { Button } from '@/components/ui/button';

interface PostListProps {
  posts: Post[];
  loading: boolean;
  error: string | null;
  onEdit: (post: Post) => void;
  onDeleted: () => void;
}

/** Lista de publicaciones con acciones editar / eliminar (RF-08). */
export function PostList({ posts, loading, error, onEdit, onDeleted }: PostListProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function handleDelete(post: Post) {
    if (!window.confirm('¿Eliminar esta publicación? Esta acción no se puede deshacer.')) return;
    setDeletingId(post.id);
    try {
      await deletePost(post.id);
      onDeleted();
    } catch (e) {
      window.alert(e instanceof Error ? e.message : 'No se pudo eliminar.');
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold">
        Publicaciones{posts.length > 0 ? ` (${posts.length})` : ''}
      </h2>

      {loading && <p className="text-sm text-muted-foreground">Cargando…</p>}
      {error && <p className="text-sm text-destructive">{error}</p>}
      {!loading && !error && posts.length === 0 && (
        <p className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
          Aún no hay publicaciones. Crea la primera arriba.
        </p>
      )}

      {posts.length > 0 && (
        <ul className="divide-y rounded-lg border bg-background">
          {posts.map((post) => {
            const thumb = getYouTubeThumbnail(post.youtube_id, 'mq');
            return (
              <li key={post.id} className="flex items-center gap-3 p-3">
                {thumb && (
                  <img
                    src={thumb}
                    alt=""
                    loading="lazy"
                    className="h-12 w-20 shrink-0 rounded bg-muted object-cover"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{post.title ?? 'Sin título'}</p>
                  <p className="text-xs text-muted-foreground">{formatDate(post.published_at)}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(post)}
                  aria-label="Editar"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(post)}
                  disabled={deletingId === post.id}
                  aria-label="Eliminar"
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
