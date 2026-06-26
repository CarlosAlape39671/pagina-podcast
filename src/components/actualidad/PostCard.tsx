import type { Post } from '@/types';
import { YouTubeEmbed } from './YouTubeEmbed';
import { formatDate } from '@/lib/date';

interface PostCardProps {
  post: Post;
}

/** Publicación: video (YouTubeEmbed), fecha, título y descripción (RF-03). */
export function PostCard({ post }: PostCardProps) {
  return (
    <article className="space-y-3">
      <YouTubeEmbed video={post.youtube_id} title={post.title ?? undefined} />
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground">{formatDate(post.published_at)}</p>
        {post.title && <h2 className="text-lg font-semibold leading-snug">{post.title}</h2>}
        {post.description && (
          <p className="text-sm text-muted-foreground">{post.description}</p>
        )}
      </div>
    </article>
  );
}
