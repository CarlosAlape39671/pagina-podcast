import { Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

/** Quiénes somos: resumen de la empresa + contacto (RF-13). */
export default function QuienesSomos() {
  const { about, contact } = siteConfig;
  const telHref = `tel:${contact.phone.replace(/[^+\d]/g, '')}`;

  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <section>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Quiénes somos
        </p>
        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">{about.title}</h1>
        <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="contacto-title">
        <h2
          id="contacto-title"
          className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
        >
          Contacto
        </h2>
        <ul className="mt-4 space-y-3">
          <li>
            <a href={telHref} className="group flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-4 w-4" />
              </span>
              <span className="group-hover:text-primary">{contact.phone}</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} className="group flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-4 w-4" />
              </span>
              <span className="group-hover:text-primary">{contact.email}</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
