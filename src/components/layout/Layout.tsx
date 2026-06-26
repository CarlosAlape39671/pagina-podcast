import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { RadioBar } from './RadioBar';

/** Shell de los apartados públicos: Navbar + contenido + Footer + barra de radio fija. */
export function Layout() {
  return (
    // pb-16: reserva el alto de la barra de radio fija para que no tape el footer (RF-02)
    <div className="flex min-h-screen flex-col bg-background pb-16 text-foreground">
      <Navbar />
      <main className="container flex-1 py-6">
        <Outlet />
      </main>
      <Footer />
      <RadioBar />
    </div>
  );
}
