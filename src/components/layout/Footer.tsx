import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { siteConfig } from '@/config/site';

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.118-.959-.12-1.08-.6-.119-.479.12-.96.6-1.08 4.26-1.26 9.541-.68 13.08 1.438.361.22.559.659.301 1.1zm.12-3.36c-3.9-2.32-10.32-2.52-14.028-1.386-.6.18-1.32-.12-1.5-.72s.12-1.32.72-1.5c4.26-1.26 11.28-1.02 15.721 1.62.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const socials = [
  { href: siteConfig.social.facebook, label: 'Facebook', Icon: Facebook },
  { href: siteConfig.social.instagram, label: 'Instagram', Icon: Instagram },
  { href: siteConfig.social.youtube, label: 'YouTube', Icon: Youtube },
  { href: siteConfig.social.x, label: 'X', Icon: Twitter },
  { href: siteConfig.social.spotify, label: 'Spotify', Icon: SpotifyIcon },
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
