import { useAuth } from '@/hooks/useAuth';
import { LoginForm } from '@/components/admin/LoginForm';
import { PostForm } from '@/components/admin/PostForm';
import { PostList } from '@/components/admin/PostList';

/**
 * Ruta oculta /admin protegida por login (RF-06).
 * Sin sesión → formulario de acceso. Con sesión → panel de gestión.
 */
export default function Admin() {
  const { session, loading, signOut } = useAuth();

  if (loading) {
    return <div className="grid min-h-screen place-items-center text-sm text-muted-foreground">Cargando…</div>;
  }

  if (!session) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-muted/40">
      <header className="border-b bg-background">
        <div className="container flex h-14 items-center justify-between">
          <span className="text-sm font-semibold">Admin — Publicaciones</span>
          <button
            type="button"
            onClick={() => void signOut()}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Cerrar sesión
          </button>
        </div>
      </header>
      <main className="container space-y-6 py-6">
        <PostForm />
        <PostList />
      </main>
    </div>
  );
}
