import { siteConfig } from '@/config/site';

/** Bloque de Inicio con QR + texto para unirse al canal de WhatsApp (RF-10). */
export function QrWhatsApp() {
  const { whatsapp, assets } = siteConfig;

  return (
    <section aria-label="Canal de WhatsApp">
      <a
        href={whatsapp.channelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-accent"
      >
        <img
          src={assets.whatsappQr}
          alt="Código QR del canal de WhatsApp"
          className="h-20 w-20 shrink-0 rounded-md border bg-white object-contain p-1"
        />
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">WhatsApp</p>
          <p className="font-medium">{whatsapp.label}</p>
          <p className="text-sm text-muted-foreground">{whatsapp.description}</p>
        </div>
      </a>
    </section>
  );
}
