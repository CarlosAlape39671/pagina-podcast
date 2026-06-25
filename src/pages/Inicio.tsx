import { Destacados } from '@/components/home/Destacados';
import { ZonaPublicidad } from '@/components/home/ZonaPublicidad';
import { QrWhatsApp } from '@/components/home/QrWhatsApp';

/** Inicio: destacados + publicidad + QR de WhatsApp (RF-09/10/11). STUB. */
export default function Inicio() {
  return (
    <div className="space-y-8">
      <Destacados />
      <ZonaPublicidad />
      <QrWhatsApp />
    </div>
  );
}
