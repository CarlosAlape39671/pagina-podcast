import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';

/** Acceso al tema actual y a las acciones para cambiarlo. */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme debe usarse dentro de <ThemeProvider>.');
  }
  return ctx;
}
