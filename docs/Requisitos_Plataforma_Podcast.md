**NOTICIERO WEB · RADIO EN VIVO Y ACTUALIDAD**

**Documento de Requisitos**

*Especificación de requisitos y stack tecnológico*

Versión 3.1 --- Implementación finalizada

Fecha: 15 de agosto de 2026

Herramientas: React · Tailwind · Supabase · Claude Code

*Cambios v3.0: sitio reducido a 3 apartados (Inicio, Actualidad, Quiénes
somos); Supabase para login y datos (solo el cliente publica, también
desde el móvil); se aplazan búsqueda, categorías, contacto aparte,
compartir y modo claro/oscuro.*

Tabla de contenido

1\. Introducción

1.1 Propósito

Este documento describe los requisitos para rediseñar y mejorar el sitio
web de un noticiero regional con radio en vivo. El cliente ya tiene un
sitio (un tema WordPress "Podcaster Radio") y el objetivo es superarlo
claramente. Reúne los requisitos funcionales y no funcionales, las
herramientas de trabajo y la recomendación de backend, como base para
los mockups y el desarrollo con Claude Code.

1.2 Alcance

El sitio tendrá tres apartados: Inicio, Actualidad y Quiénes somos.
Inicio reúne lo más destacado, la zona de publicidad, el bloque con QR
del canal de WhatsApp, el reproductor de radio en vivo (TuneIn) y el
footer. Actualidad lista las publicaciones, cada una con su video de
YouTube incrustado, título, descripción y fecha. Quiénes somos presenta
el resumen de la empresa del cliente, teléfono y correo de contacto.
Todo el sitio es responsive en móvil, tablet y escritorio.

**Publicación de contenido:** solo el cliente puede publicar. Inicia
sesión (con Supabase) y, pegando un enlace de YouTube, crea una
publicación con título, descripción y fecha (opcional; si la deja vacía,
se usa la fecha actual). Puede hacerlo también desde el teléfono. Los
visitantes solo leen.

**Aplazado en esta etapa:** para mantener el sitio liviano se posponen
la búsqueda, las categorías/etiquetas, un apartado de Contacto separado
(se integra en Quiénes somos), el botón de compartir y el modo
claro/oscuro. Se mantiene la exclusión de donaciones, Pódcasts y
Programación.

1.3 Definiciones

-   Apartado: cada una de las tres secciones principales (Inicio,
    Actualidad, Quiénes somos).

-   Embed: contenido externo (radio de TuneIn o video de YouTube)
    incrustado y reproducible dentro del propio sitio.

-   BaaS (Backend como Servicio): servicio que aporta base de datos y
    autenticación sin montar un servidor propio; aquí se usa Supabase.

-   Autenticación: inicio de sesión que identifica al cliente para
    permitirle publicar.

-   LCP (Largest Contentful Paint): métrica de carga que mide cuándo
    aparece el elemento principal de la página.

2\. Descripción general

2.1 Objetivos del proyecto

1.  Entregar un sitio simple y liviano con solo tres apartados: Inicio,
    Actualidad y Quiénes somos.

2.  Permitir que únicamente el cliente publique contenido pegando un
    enlace de YouTube, también desde el móvil.

3.  Conservar y mejorar lo que ya usa el cliente: radio TuneIn,
    publicidad y QR de WhatsApp.

4.  Garantizar carga ágil, reproducción rápida y diseño responsive en
    los 3 dispositivos.

2.2 Usuarios / actores

-   Visitante: entra a escuchar la radio en vivo y a ver las
    publicaciones de Actualidad. Solo lectura.

-   Cliente (administrador): inicia sesión y publica/edita/elimina
    contenido y publicidad, desde cualquier dispositivo. Es el único con
    permisos de escritura.

2.3 Sitio actual y referencias

El punto de partida es el sitio actual del cliente (tema WordPress
"Podcaster Radio"). Se conservan y mejoran sus elementos clave, y se
toman ideas de las referencias previas:

-   Sitio actual (Eje Presse Radio): radio en vivo con TuneIn, noticias
    en video de YouTube (KF News), zona de publicidad y QR del canal de
    WhatsApp. Es la base a superar.

-   Kfestereo International: tema oscuro, reproductor fijo en la parte
    inferior, indicador "EN VIVO", redes y conmutador de tema.

-   RCF Radio: cuadrícula de publicaciones organizada por temas y
    categorías (sin retomar las donaciones).

-   Radio Gospel: bloque "EN DIRECTO" limpio y sección de actualidad
    como destacado.

3\. Requisitos funcionales

Identifican lo que el sistema debe hacer. La prioridad orienta el orden
de implementación (Alta = MVP).

  ---------------------------------------------------------------------------------
  **ID**   **Requisito**   **Descripción**                          **Prioridad**
  -------- --------------- ---------------------------------------- ---------------
  RF-01    Radio en vivo   Reproductor de la señal en directo       Alta
           (TuneIn)        integrado mediante TuneIn, con           
                           play/pausa e indicador visible de estado 
                           "EN VIVO".                               

  RF-02    Reproductor     Barra de radio fija que permanece        Media
           persistente     visible al navegar entre los apartados   
                           sin cortar la emisión (deseable).        

  RF-03    Actualidad      Apartado con la lista de publicaciones,  Alta
                           cada una con un video de YouTube         
                           incrustado, su título, su descripción y  
                           su fecha.                                

  RF-04    Reproducción de Los videos de YouTube se reproducen      Alta
           video           dentro de la propia página (embed), sin  
           incrustado      que el usuario salga del sitio.          

  RF-05    Publicar por    El cliente pega un enlace de YouTube; el Alta
           enlace de       sistema lo muestra incrustado y permite  
           YouTube         añadir título, descripción y fecha       
                           (opcional: si se deja vacía, se usa la   
                           fecha actual).                           

  RF-06    Acceso          La publicación requiere iniciar sesión.  Alta
           restringido     Solo la cuenta del cliente puede crear,  
           (solo el        editar o eliminar; los visitantes solo   
           cliente)        pueden leer. La restricción se aplica en 
                           el servidor (Supabase), no solo          
                           ocultando el botón.                      

  RF-07    Publicar desde  El cliente puede iniciar sesión y        Alta
           el móvil        publicar enlaces desde el teléfono; el   
                           panel de administración es responsive y  
                           usable en móvil, tablet y escritorio.    

  RF-08    Gestión de      El cliente puede editar y eliminar las   Alta
           contenido       publicaciones existentes desde el mismo  
           (admin)         panel.                                   

  RF-09    Zona de         Apartado en la página de inicio para     Alta
           publicidad      banners/imágenes publicitarias,          
           (inicio)        administrable por el cliente.            

  RF-10    QR de canal de  Bloque en el inicio con código QR y      Media
           WhatsApp        texto para que los usuarios se unan al   
                           canal de WhatsApp.                       

  RF-11    Destacados en   El inicio muestra lo más destacado de    Media
           inicio          Actualidad (las publicaciones más        
                           recientes).                              

  RF-12    Footer          Pie de página con redes sociales e       Media
                           información breve del sitio, presente en 
                           los tres apartados.                      

  RF-13    Quiénes somos   Apartado con el resumen de la empresa    Alta
                           del cliente, su información laboral y    
                           datos de contacto (absorbe el contacto). 

  RF-14    Redes sociales  Enlaces a Facebook, Instagram, YouTube,   Media
                           X (Twitter) y Spotify del proyecto.      

  RF-15    Navegación      Menú con los 3 apartados, adaptable:     Alta
           responsive      escritorio completo, compacto en tablet  
                           y hamburguesa en móvil.                  
  ---------------------------------------------------------------------------------

4\. Requisitos no funcionales

Definen cómo debe comportarse el sistema. Se destacan los de rendimiento
que solicitó el cliente.

  ---------------------------------------------------------------------------------
  **ID**   **Categoría**    **Criterio / métrica**                  **Prioridad**
  -------- ---------------- --------------------------------------- ---------------
  RNF-01   Rendimiento ---  Tiempo de carga inicial percibido bajo: Alta
           carga            LCP ≤ 2,5 s y página interactiva ≤ 3 s  
                            en conexión 4G. Peso de la primera      
                            carga ≤ 1,5 MB.                         

  RNF-02   Rendimiento ---  El audio en vivo (TuneIn) y los videos  Alta
           reproducción     de YouTube deben iniciar rápido: desde  
                            el clic en "play" hasta el inicio ≤ 5   
                            s; objetivo preferente ≤ 2 s. Los       
                            embeds se cargan de forma diferida para 
                            no penalizar la carga inicial.          

  RNF-03   Usabilidad /     Diseño responsive mobile-first,         Alta
           responsive       totalmente adaptable a los 3 tipos de   
                            dispositivo (móvil, tablet y            
                            escritorio), sin scroll horizontal y    
                            con controles cómodos al tacto.         

  RNF-04   Compatibilidad   Funciona en las 2 últimas versiones de  Alta
                            Chrome, Firefox, Safari y Edge, en      
                            Android e iOS.                          

  RNF-05   Accesibilidad    Cumplir WCAG 2.1 nivel AA: navegación   Media
                            por teclado, contraste suficiente y     
                            textos alternativos.                    

  RNF-06   Disponibilidad   Disponibilidad objetivo del sitio ≥     Media
                            99,5 % mensual.                         

  RNF-07   SEO              Meta etiquetas, Open Graph,             Media
                            sitemap.xml, URLs semánticas y datos    
                            estructurados de las publicaciones.     

  RNF-08   Seguridad y      Todo el tráfico bajo HTTPS/TLS. La      Alta
           acceso           autenticación y el control de acceso    
                            (solo el cliente publica) se gestionan  
                            con Supabase: lectura pública y         
                            escritura restringida por reglas en el  
                            servidor (RLS), no solo en la interfaz. 

  RNF-09   Mantenibilidad   Código modular y documentado, bajo      Media
                            control de versiones (Git), con estilo  
                            consistente.                            

  RNF-10   Escalabilidad    Soportar el crecimiento de visitantes   Media
                            concurrentes sin degradar la            
                            experiencia.                            

  RNF-11   Dependencia de   Radio (TuneIn), videos (YouTube) y      Media
           terceros         datos/login (Supabase) son servicios    
                            externos. El sitio debe degradar con    
                            elegancia si alguno no responde.        
  ---------------------------------------------------------------------------------

4.1 Notas sobre el tiempo de reproducción (RNF-02)

La radio (TuneIn) y los videos (YouTube) son servicios externos que el
sitio incrusta. Para acercarse al objetivo de ≤ 2 s al pulsar "play", se
recomienda:

-   Cargar los embeds de YouTube de forma diferida (facade tipo
    lite-youtube): mostrar primero solo la miniatura y el botón de play,
    y cargar el reproductor real al hacer clic.

-   Inicializar el widget de TuneIn al primer gesto del usuario, no en
    la carga de la página.

-   Evitar que imágenes y scripts compitan con la reproducción:
    lazy-load de imágenes y publicidad.

-   Servir estáticos por CDN y comprimir/minificar CSS y JS.

4.2 Diseño responsive y dispositivos (RNF-03)

La página debe ser responsive y adaptarse a los tres tipos de
dispositivo. Se adopta un enfoque mobile-first: se diseña primero para
móvil y se amplía hacia tablet y escritorio. Tamaños de referencia y
comportamiento esperado:

  ----------------------------------------------------------------------------
  **Dispositivo**   **Ancho de          **Comportamiento del diseño**
                    referencia**        
  ----------------- ------------------- --------------------------------------
  Móvil             360--430 px (ref.   Una sola columna; menú hamburguesa;
                    390 px)             videos y publicidad a ancho completo;
                                        barra de radio inferior compacta.

  Tablet            768--1024 px (ref.  Cuadrículas de dos columnas;
                    768 px)             navegación visible o compacta; barra
                                        de radio de tamaño medio.

  Escritorio        ≥ 1200 px (ref.     Cuadrículas de tres columnas;
                    1280 px)            navegación completa; barra de radio
                                        inferior completa.
  ----------------------------------------------------------------------------

-   Sin scroll horizontal en ningún tamaño; imágenes y multimedia
    fluidos.

-   Objetivos táctiles de tamaño adecuado (mín. \~44 px) en móvil y
    tablet.

-   El reproductor de radio permanece accesible y utilizable en los tres
    dispositivos.

-   Verificación en dispositivos reales además de emuladores.

5\. Herramientas y stack tecnológico

Los mockups ya existen en React + Vite + Tailwind + shadcn/ui
(exportados desde Figma). A continuación se completa el stack y se
justifica la recomendación de backend.

  -------------------------------------------------------------------------
  **Capa**         **Tecnología**        **Justificación**
  ---------------- --------------------- ----------------------------------
  Frontend         React + Vite +        Base actual de los mockups
  (mockups/base)   Tailwind + shadcn/ui  (exportados desde Figma). Frontend
                                         estático y liviano. Es la que
                                         Claude Code unificará.

  Asistente IA     Claude Code           Unificación de las dos versiones,
                                         refactor, integración responsive y
                                         apoyo en pruebas.

  Datos + login    Supabase              Backend como servicio elegido:
  (BaaS)                                 aporta base de datos
                                         (publicaciones, publicidad),
                                         autenticación (solo el cliente
                                         publica) y API automática, sin
                                         montar ni mantener un servidor
                                         propio.

  Radio en vivo    Embed de TuneIn       La señal en directo se integra con
                                         el reproductor de TuneIn (mismo
                                         proveedor del sitio actual). La
                                         web solo incrusta el widget.

  Video /          Embed de YouTube      Las publicaciones de Actualidad
  publicaciones    (IFrame /             muestran videos de YouTube
                   lite-youtube)         incrustados y reproducibles en el
                                         sitio. Se sugiere carga diferida
                                         (lite-youtube) para el
                                         rendimiento.

  Backend propio   Node.js               No es necesario ahora: Supabase
  (futuro)         (Express/Fastify) --- cubre datos y login. Solo si más
                   opcional              adelante se requiere lógica de
                                         servidor a medida; alternativa de
                                         máximo rendimiento: Go.

  Alojamiento      Hosting estático con  El frontend es estático; un
                   CDN (Vercel/Netlify)  hosting con CDN ayuda a cumplir
                                         los tiempos de carga (RNF-01).
                                         Supabase se aloja aparte como
                                         servicio.
  -------------------------------------------------------------------------

5.1 Por qué Supabase y no un backend propio

El sitio necesita guardar una lista pequeña de publicaciones y
garantizar que solo el cliente pueda escribir. Para eso no hace falta
montar ni mantener un servidor propio: Supabase (un backend como
servicio) aporta la base de datos, la autenticación y una API
automática. Es el punto justo entre simple y seguro.

Cómo cubre lo que pide el cliente

-   Login: se crea una sola cuenta (el correo del cliente). Solo esa
    cuenta puede publicar, desde el móvil o el escritorio.

-   Datos: una tabla de publicaciones (enlace de YouTube, título,
    descripción, fecha) que el sitio público solo lee.

-   Seguridad real: con las reglas de acceso de Supabase (RLS), la
    escritura queda bloqueada para cualquiera que no sea el cliente; no
    basta con ocultar el botón (RF-06, RNF-08).

-   Frontend liviano: la página sigue siendo estática (React/Vite);
    Supabase solo aporta datos y login.

¿Y un backend propio?

No es necesario ahora. Si en el futuro hiciera falta lógica de servidor
a medida, la recomendación sería Node.js (Express/Fastify) por compartir
lenguaje con el frontend y su buena sinergia con Claude Code; Go
quedaría como alternativa de máximo rendimiento. Firebase sería un
equivalente válido a Supabase.

**Importante sobre servicios externos:** radio (TuneIn), videos
(YouTube) y datos/login (Supabase) son servicios de terceros que el
sitio integra. El sitio debe degradar con elegancia si alguno no
responde (RNF-11).

6\. Restricciones y exclusiones

-   El sitio tiene solo 3 apartados: Inicio, Actualidad y Quiénes somos.

-   Aplazado en esta etapa: búsqueda, categorías/etiquetas, apartado de
    Contacto separado (se integra en Quiénes somos), botón de compartir
    y modo claro/oscuro.

-   No se incluyen donaciones, Pódcasts ni Programación.

-   El cliente publica pegando un enlace de YouTube; no se suben
    archivos de video al sitio.

-   La radio (TuneIn) y los videos (YouTube) se integran por embed; no
    se desarrolla un reproductor propio de streaming.

7\. Arquitectura de información (mapa del sitio)

Estructura final acordada con el cliente:

5.  Inicio: destacados de Actualidad, zona de publicidad, bloque con QR
    de WhatsApp, reproductor de radio (TuneIn) y footer.

6.  Actualidad: lista de publicaciones con video de YouTube incrustado,
    título, descripción y fecha.

7.  Quiénes somos: resumen de la empresa, teléfono de contacto y correo
    electrónico (sin dirección física).

**Ruta oculta para el cliente:** una página de administración (p. ej.
/admin) protegida por login de Supabase, accesible desde cualquier
dispositivo, para publicar y gestionar el contenido. No aparece en el
menú público.

8\. Próximos pasos

8.  Validar este listado actualizado (v3.0) con el cliente.

9.  Generar el mockup completo en Figma con el prompt simple acordado.

10. Crear el proyecto en Supabase: cuenta del cliente, tabla de
    publicaciones y reglas de acceso (RLS).

11. Implementar los 3 apartados y la página de administración
    (publicar/editar/eliminar) responsive.

12. Integrar radio TuneIn, publicidad y QR de WhatsApp, y verificar el
    responsive en los 3 dispositivos.
