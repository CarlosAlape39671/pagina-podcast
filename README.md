# Noticiero Regional — Radio en vivo y actualidad

Sitio web de un noticiero regional con radio en vivo (TuneIn) y actualidad en
video (YouTube). Tres apartados públicos —**Inicio**, **Actualidad** y
**Quiénes somos**— y una ruta oculta `/admin` protegida por login para que el
cliente publique contenido.

## Stack

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- React Router
- Supabase (datos + autenticación, con RLS)
- Embeds: TuneIn (radio) y YouTube con carga diferida tipo *facade*

## Puesta en marcha

```bash
npm install
cp .env.example .env.local   # completa las claves de Supabase
npm run dev
```

Variables de entorno (`.env.local`):

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

## Base de datos

Ejecuta [`supabase/schema.sql`](supabase/schema.sql) en el SQL Editor de
Supabase. Crea las tablas `posts` y `ads` con políticas RLS: **lectura pública**
y **escritura solo para usuarios autenticados** (la cuenta del cliente).

## Estructura

```
src/
├── config/site.ts        # TuneIn, WhatsApp, redes, contacto
├── lib/                  # supabase.ts, youtube.ts, utils.ts
├── types/                # Post, Ad, ...
├── data/                 # consultas a Supabase (posts, ads)
├── hooks/                # useAuth, usePosts
├── context/              # AuthProvider
├── components/
│   ├── ui/               # shadcn/ui
│   ├── layout/           # Navbar, Footer, RadioBar, Layout
│   ├── home/             # Destacados, ZonaPublicidad, QrWhatsApp
│   ├── actualidad/       # PostCard, YouTubeEmbed (facade)
│   └── admin/            # LoginForm, PostForm, PostList
└── pages/                # Inicio, Actualidad, QuienesSomos, admin/Admin
```

> Estado actual: **scaffold**. La infraestructura (router, layout, cliente de
> Supabase, auth, capa de datos, helpers y el embed de YouTube) está lista; el
> contenido de cada pantalla son *stubs* a desarrollar pantalla por pantalla.
