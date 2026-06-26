# EjePresse Radio — Noticiero web con radio en vivo

Sitio web del noticiero regional **EjePresse Radio**, con radio en vivo (TuneIn) y
actualidad en video (YouTube). Tres apartados públicos —**Inicio**, **Actualidad**
y **Quiénes somos**— y una ruta oculta `/admin` protegida por login para que solo
el cliente publique contenido.

## Stack

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- React Router
- Supabase (datos + autenticación, con RLS)
- Embeds: TuneIn (radio) y YouTube con carga diferida tipo *facade*

## Documentación

- [Manual de usuario](docs/manual-de-usuario.md) — guía para visitantes y para el administrador.
- [Manual técnico](docs/manual-tecnico.md) — arquitectura, modelo de datos, puesta en marcha y **diagramas** (clases, secuencia, estados, actividades y flujo).
- [Requisitos](docs/Requisitos_Plataforma_Podcast.md) — especificación (fuente de verdad).

## Puesta en marcha

```bash
npm install
cp .env.example .env.local   # completa las claves de Supabase
npm run dev                  # http://localhost:5173
```

Variables de entorno (`.env.local`):

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

Componentes base de shadcn/ui ya incluidos (`button`, `input`, `card`, `textarea`,
`label`). Para agregar más:

```bash
npx shadcn@latest add dialog dropdown-menu
```

## Base de datos

Ejecuta [`supabase/schema.sql`](supabase/schema.sql) en el SQL Editor de
Supabase. Crea las tablas `posts` y `ads` con políticas RLS: **lectura pública**
y **escritura solo para usuarios autenticados** (la cuenta del cliente).

## Estructura

```
pagina-podcast/
├── docs/                     # documentación y recursos del cliente
│   ├── manual-de-usuario.md
│   ├── manual-tecnico.md
│   ├── Requisitos_Plataforma_Podcast.md
│   └── assets/               # identidad/, publicidad/, qr/, diagramas/
├── mockups/                  # mockups de referencia (Figma)
├── public/                   # estáticos servidos tal cual
├── supabase/schema.sql       # tablas + políticas RLS
└── src/
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
> Ver pendientes en el [Manual técnico](docs/manual-tecnico.md#15-estado-actual-y-pendientes).
