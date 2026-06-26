// Configuración del sitio: radio (TuneIn), canal de WhatsApp, redes y contacto.
// Reemplaza los valores de ejemplo por los reales del cliente.

export const siteConfig = {
  name: 'EjePresse Radio',
  tagline: 'Radio en vivo y actualidad',

  // Assets servidos desde public/ (ver también docs/assets/).
  assets: {
    logo: '/logo-ejepresse-horizontal.png',
    whatsappQr: '/qr-canal-whatsapp.jpg',
  },

  // Resumen de la empresa para "Quiénes somos" (editable por el cliente).
  about: {
    title: 'El noticiero de tu comunidad',
    paragraphs: [
      'Somos un medio de comunicación independiente dedicado a informar con veracidad y responsabilidad. Fundado en 2010, combinamos la inmediatez del noticiero digital con la cercanía de la radio en vivo, ofreciendo cobertura las 24 horas.',
      'Nuestro equipo de periodistas comprometidos trabaja para traerte política, economía, cultura, deporte y sociedad, siempre con rigor editorial.',
    ],
  },

  radio: {
    stationName: 'Eje Presse Radio',
    slogan: 'La radio différente',
    // URL del reproductor embebido de TuneIn (Share → Embed en TuneIn).
    tuneInEmbedUrl: 'https://tunein.com/embed/player/sXXXXXXX/',
  },

  whatsapp: {
    label: 'Únete a nuestro canal',
    description: 'Escanea el QR y recibe las noticias más importantes directo en tu celular.',
    channelUrl: 'https://whatsapp.com/channel/XXXXXXXXXXXXXXXXXX',
  },

  social: {
    facebook: '#',
    instagram: '#',
    tiktok: '#',
    youtube: '#',
    x: '#',
  },

  contact: {
    phone: '+1 (555) 234-5678',
    email: 'redaccion@noticiero.com',
    address: 'Av. Principal 400, Ciudad Capital',
  },
} as const;

export type SiteConfig = typeof siteConfig;
