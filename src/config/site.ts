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
    slogan: 'La radio diferente · La radio différente',
    // Stream directo de la estación (suena en segundo plano con <audio>).
    // Estación TuneIn s224307. Si dejara de sonar, reobtén la URL actual con:
    //   https://opml.radiotime.com/Tune.ashx?id=s224307
    // Alternativa: https://radio35.virtualtronics.com/proxy/manizalesnews?mp=/stream
    streamUrl: 'https://sonicpanel.globalstream.pro/8250/stream',
    // Widget embebido de TuneIn (alternativa visible, no usada por defecto).
    tuneInEmbedUrl: 'https://tunein.com/embed/player/s224307/',
  },

  whatsapp: {
    label: 'Únete a nuestro canal',
    description: 'Escanea el QR y recibe las noticias más importantes directo en tu celular.',
    // Canal "KF News. Noticias del Eje" (mismo destino que el QR).
    channelUrl: 'https://whatsapp.com/channel/0029Vb3MQZZJP214uNvMeo0C',
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
