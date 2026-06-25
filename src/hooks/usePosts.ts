import { useCallback, useEffect, useState } from 'react';
import type { Post } from '@/types';
import { getPosts } from '@/data/posts';

/** Carga la lista de publicaciones y expone un refresh manual. */
export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      setPosts(await getPosts());
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'No se pudieron cargar las publicaciones.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return { posts, loading, error, refresh };
}
