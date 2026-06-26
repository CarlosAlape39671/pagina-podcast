import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { usePosts } from '@/hooks/usePosts';
import type { Post } from '@/types';
import { LoginForm } from '@/components/admin/LoginForm';
import { PostForm } from '@/components/admin/PostForm';
import { PostList } from '@/components/admin/PostList';
import { RadioBar } from '@/components/layout/RadioBar';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { Button } from '@/components/ui/button';

/**
 * Ruta oculta /admin protegida por login (RF-06).
 * Sin sesión → formulario de acceso. Con sesión → panel de gestión.
 */
export default function Admin() {
  const { session, loading, signOut } = useAuth();
  const { posts, loading: postsLoading, error, refresh } = usePosts();
  const [editing, setEditing] = useState<Post | null>(null);

  if (loading) {
    return (
      <div className="grid min-h-screen place-items-center text-sm text-muted-foreground">
        Cargando…
      </div>
    );
  }

  if (!session) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-muted/40 pb-16">
      <header className="border-b bg-background">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
          <span className="text-sm font-semibold">Admin — Publicaciones</span>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => void signOut()}>
              Cerrar sesión
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-8 px-4 py-6">
        <PostForm
          editing={editing}
          onSaved={() => {
            setEditing(null);
            void refresh();
          }}
          onCancel={() => setEditing(null)}
        />
        <PostList
          posts={posts}
          loading={postsLoading}
          error={error}
          onEdit={(p) => {
            setEditing(p);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onDeleted={() => void refresh()}
        />
      </main>

      <RadioBar />
    </div>
  );
}
