import { useState, type FormEvent } from 'react';
import { LogIn } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

/**
 * Formulario de acceso restringido (RF-06). Placeholder funcional: usa
 * Supabase Auth. Solo la cuenta del cliente podrá iniciar sesión.
 */
export function LoginForm() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await signIn(email, password);
    if (error) setError(error);
    setLoading(false);
  }

  return (
    <div className="grid min-h-screen place-items-center bg-muted/40 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-lg border bg-card p-6 shadow-sm"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Administración</p>
          <h1 className="text-lg font-semibold">Acceso restringido</h1>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Usuario
          </label>
          <input
            id="email"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="password" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            required
          />
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60"
        >
          <LogIn className="h-4 w-4" />
          {loading ? 'Ingresando…' : 'Ingresar'}
        </button>
      </form>
    </div>
  );
}
