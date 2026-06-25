import { useContext } from 'react';
import { AuthContext } from '@/context/AuthProvider';

/** Acceso a la sesión y a las acciones de autenticación. */
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth debe usarse dentro de <AuthProvider>.');
  }
  return ctx;
}
