import { Facebook, Instagram, Youtube, Music2, Twitter } from 'lucide-react';
import { siteConfig } from '@/config/site';

const socials = [
  { href: siteConfig.social.facebook, label: 'Facebook', Icon: Facebook },
  { href: siteConfig.social.instagram, label: 'Instagram', Icon: Instagram },
  { href: siteConfig.social.tiktok, label: 'TikTok', Icon: Music2 },
  { href: siteConfig.social.youtube, label: 'YouTube', Icon: Youtube },
  { href: siteConfig.social.x, label: 'X', Icon: Twitter },
];

/** Pie de página con redes e info breve, presente en los 3 apartados (RF-12). */
export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-3 py-4 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <ul className="flex items-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
