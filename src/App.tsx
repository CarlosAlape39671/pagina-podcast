import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthProvider';
import { Layout } from '@/components/layout/Layout';
import Inicio from '@/pages/Inicio';
import Actualidad from '@/pages/Actualidad';
import QuienesSomos from '@/pages/QuienesSomos';
import Admin from '@/pages/admin/Admin';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Apartados públicos: comparten Navbar + Footer + barra de radio */}
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/actualidad" element={<Actualidad />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
        </Route>

        {/* Ruta OCULTA (no aparece en el menú público), protegida por login */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </AuthProvider>
  );
}
