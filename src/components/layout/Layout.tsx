import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { RadioBar } from './RadioBar';

/** Shell de los apartados públicos: Navbar + contenido + Footer + barra de radio fija. */
export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      {/* pb-20: deja espacio para la barra de radio fija (RF-02) */}
      <main className="container flex-1 py-6 pb-24">
        <Outlet />
      </main>
      <Footer />
      <RadioBar />
    </div>
  );
}
