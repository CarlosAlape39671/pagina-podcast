import { siteConfig } from '@/config/site';

/**
 * Bloque con QR + texto para unirse al canal de WhatsApp (RF-10).
 * STUB — se implementará al desarrollar la pantalla de Inicio.
 */
export function QrWhatsApp() {
  return (
    <section aria-label="Canal de WhatsApp">
      <div className="flex items-center gap-4 rounded-lg border p-4">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-md border border-dashed text-[10px] text-muted-foreground">
          QR
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">WhatsApp</p>
          <p className="font-medium">{siteConfig.whatsapp.label}</p>
          <p className="text-sm text-muted-foreground">{siteConfig.whatsapp.description}</p>
        </div>
      </div>
    </section>
  );
}
