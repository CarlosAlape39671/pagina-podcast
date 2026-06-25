import type { Post } from '@/types';

interface PostCardProps {
  post: Post;
}

/**
 * Tarjeta de publicación: video (YouTubeEmbed), título, descripción y fecha (RF-03).
 * STUB — se implementará al desarrollar el apartado Actualidad.
 */
export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-lg border p-4">
      {/* TODO: <YouTubeEmbed video={post.youtube_id} title={post.title ?? ''} /> */}
      <p className="text-sm text-muted-foreground">PostCard (stub) — {post.id}</p>
    </article>
  );
}
