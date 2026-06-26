<p align="center">
  <img src="assets/identidad/ejepresse-radio-horizontal.png" alt="EjePresse Radio" height="64" />
</p>

# Manual de Usuario — EjePresse Radio

> Guía para usar el sitio web del noticiero: escuchar la radio en vivo, ver la
> actualidad en video y —para el administrador— publicar contenido.

| | |
|---|---|
| **Sitio** | Noticiero web con radio en vivo y actualidad (EjePresse Radio) |
| **Versión del documento** | 1.2 |
| **Fecha** | 23 de junio de 2026 |
| **Dirigido a** | Visitantes y administrador (cliente) |

---

## Tabla de contenido

1. [¿Qué es este sitio?](#1-qué-es-este-sitio)
2. [Cómo se ve y cómo moverse](#2-cómo-se-ve-y-cómo-moverse)
3. [Guía para visitantes](#3-guía-para-visitantes)
   - [Escuchar la radio en vivo](#31-escuchar-la-radio-en-vivo)
   - [Ver la actualidad (videos)](#32-ver-la-actualidad-videos)
   - [Unirse al canal de WhatsApp](#33-unirse-al-canal-de-whatsapp)
   - [Quiénes somos y contacto](#34-quiénes-somos-y-contacto)
4. [Guía para el administrador (cliente)](#4-guía-para-el-administrador-cliente)
   - [Entrar al panel](#41-entrar-al-panel)
   - [Publicar una noticia](#42-publicar-una-noticia)
   - [Editar o eliminar una publicación](#43-editar-o-eliminar-una-publicación)
   - [Publicar desde el celular](#44-publicar-desde-el-celular)
   - [Cerrar sesión](#45-cerrar-sesión)
5. [Estado actual de las funciones](#5-estado-actual-de-las-funciones)
6. [Preguntas frecuentes](#6-preguntas-frecuentes)

---

## 1. ¿Qué es este sitio?

Es el sitio web de **EjePresse Radio**, un noticiero regional. En él puedes:

- 🎧 **Escuchar la radio en vivo** en cualquier momento.
- 📺 **Ver las noticias en video** (apartado *Actualidad*).
- 💬 **Unirte al canal de WhatsApp** para recibir lo más importante.
- ℹ️ Conocer al medio en **Quiénes somos** y sus datos de contacto.

Hay **dos tipos de usuario**:

- **Visitante:** solo consulta el contenido (no necesita cuenta).
- **Administrador (el cliente):** inicia sesión para publicar y gestionar las
  noticias y la publicidad.

---

## 2. Cómo se ve y cómo moverse

El sitio tiene **tres apartados**, siempre accesibles desde el menú superior:

| Apartado | Para qué sirve |
|---|---|
| **Inicio** | Lo más destacado, publicidad y el QR de WhatsApp. |
| **Actualidad** | La lista completa de noticias en video. |
| **Quiénes somos** | Información del medio y datos de contacto. |

- En **computador y tablet** el menú se ve completo en la parte superior.
- En **celular** el menú se abre con el botón **☰** (hamburguesa).
- La **barra de radio** permanece **fija en la parte inferior** mientras navegas,
  para que no se corte la emisión.

El sitio es **responsive**: se adapta a celular, tablet y computador sin
desplazamiento horizontal.

---

## 3. Guía para visitantes

### 3.1 Escuchar la radio en vivo

1. En la **barra inferior** verás el nombre de la emisora (**Eje Presse Radio**),
   su eslogan y el indicador **🔴 LIVE** (parpadea mientras la señal está al aire).
2. Pulsa el botón **▶ (play)** para iniciar la transmisión.
3. La radio **sigue sonando** aunque cambies de apartado.

> 💡 La radio empieza a sonar **al pulsar play** (no antes), para que el sitio
> cargue rápido.

### 3.2 Ver la actualidad (videos)

1. Entra al apartado **Actualidad**.
2. Cada noticia muestra una **miniatura del video**, su **título**, una
   **descripción** y la **fecha**.
3. Pulsa la miniatura (botón **▶**) para reproducir el video **dentro de la misma
   página**, sin salir del sitio.

### 3.3 Unirse al canal de WhatsApp

En **Inicio** encontrarás el bloque de WhatsApp con un **código QR**:

<p align="left">
  <img src="assets/qr/qr-canal-whatsapp.jpg" alt="QR del canal de WhatsApp" width="130" />
</p>

1. Abre la **cámara** o **WhatsApp** en tu celular.
2. **Escanea el QR**.
3. Toca el enlace para **unirte al canal** y recibir las noticias más importantes.

### 3.4 Quiénes somos y contacto

En **Quiénes somos** encontrarás la presentación del medio y sus datos de
contacto (teléfono, correo y dirección).

---

## 4. Guía para el administrador (cliente)

Solo **la cuenta del cliente** puede publicar. Esta sección es para esa persona.

### 4.1 Entrar al panel

1. Ve a la dirección **`/admin`** (por ejemplo `https://tu-sitio.com/admin`).
   > Esta página **no aparece en el menú**; es de uso interno.
2. Verás el formulario **“Acceso restringido”**.
3. Escribe tu **usuario** (correo) y **contraseña** y pulsa **Ingresar**.

> 🔒 Solo tu cuenta puede entrar. Aunque alguien conozca la dirección `/admin`,
> sin tus credenciales no puede publicar ni modificar nada.

### 4.2 Publicar una noticia

En **“Nueva publicación”**:

1. **Pega el enlace de YouTube** del video (sirve `youtube.com/watch?v=…`,
   `youtu.be/…` o un *Short*).
2. Aparecerá una **vista previa** del video.
3. Escribe el **Título** y la **Descripción**.
4. *(Opcional)* Elige una **Fecha**. Si la dejas vacía, se usa la **fecha de hoy**.
5. Pulsa **Publicar**. La noticia aparecerá en **Actualidad** (y entre los
   destacados de Inicio).

### 4.3 Editar o eliminar una publicación

1. En el panel, abre la lista **“Publicaciones”**.
2. Cada noticia tiene los botones de **✏️ editar** y **🗑️ eliminar**.
3. **Editar:** cambia título, descripción, fecha o el enlace y guarda.
4. **Eliminar:** confirma para quitarla del sitio.

### 4.4 Publicar desde el celular

Todo lo anterior funciona igual **desde el teléfono**: el panel es responsive.
Puedes iniciar sesión, pegar el enlace y publicar desde donde estés.

### 4.5 Cerrar sesión

Pulsa **“Cerrar sesión”** en la parte superior del panel. Recomendado si usas un
equipo compartido.

---

## 5. Estado actual de las funciones

> El sitio está en construcción. Esta tabla refleja lo disponible **hoy**.

| Función | Estado |
|---|---|
| Navegación entre los 3 apartados | ✅ Disponible |
| Menú responsive (hamburguesa en móvil) | ✅ Disponible |
| Barra de radio fija con play / LIVE | ✅ Disponible (falta enlazar la señal real de TuneIn) |
| Inicio de sesión en `/admin` | ✅ Funcional (Supabase configurado y verificado) |
| Reproductor de video diferido (16:9) | ✅ Disponible |
| **Inicio**: destacados, publicidad y QR de WhatsApp | ✅ Disponible |
| **Actualidad**: lista de publicaciones en video | ✅ Disponible |
| Publicar / editar / eliminar noticias (admin) | ✅ Disponible (probado en vivo) |
| Contenido de **Quiénes somos** | ✅ Disponible |

Las **4 pantallas del MVP** ya están operativas. Lo que resta es pulido:
enlazar la señal real de TuneIn y el canal de WhatsApp, y el despliegue.

---

## 6. Preguntas frecuentes

**¿Necesito crear una cuenta para escuchar o ver las noticias?**
No. Cualquier visitante puede usar el sitio libremente. La cuenta es solo para
que el cliente publique.

**Pulsé play en la radio pero no suena.**
Verifica el volumen del dispositivo y la conexión a internet. La señal proviene
de TuneIn (servicio externo); si está caído, vuelve a intentar más tarde.

**Pegué un enlace de YouTube y dice que no es válido.**
Asegúrate de copiar el enlace completo del video (`youtube.com/watch?v=…`,
`youtu.be/…` o un *Short*). Enlaces de listas o de canal no funcionan.

**Olvidé la contraseña del administrador.**
Se restablece desde el panel de **Supabase → Authentication** (lo gestiona el
equipo técnico).

**¿La radio se corta si cambio de sección?**
No. La barra de radio es fija y la emisión continúa mientras navegas.

---

<p align="center"><sub>EjePresse Radio · Manual de Usuario v1.2 · 23-06-2026</sub></p>
