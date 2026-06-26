import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/actualidad', label: 'Actualidad', end: false },
  { to: '/quienes-somos', label: 'Quiénes somos', end: false },
];

/** Barra de navegación con los 3 apartados. Hamburguesa en móvil (RF-15). */
export function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
      isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground',
    );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <nav className="container flex h-14 items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label={`${siteConfig.name} — Inicio`}
        >
          <img src={siteConfig.assets.logo} alt={siteConfig.name} className="h-8 w-auto" />
        </NavLink>

        {/* Desktop / tablet */}
        <div className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Móvil: botón hamburguesa */}
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground sm:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Menú desplegable móvil */}
      {open && (
        <div className="border-t sm:hidden">
          <div className="container flex flex-col py-2">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
