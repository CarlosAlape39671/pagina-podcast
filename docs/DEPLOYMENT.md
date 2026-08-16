# Guía de Despliegue - Eje Presse Radio

**Versión:** 1.0  
**Fecha:** 15 de agosto de 2026

## Resumen

Este documento describe el proceso de despliegue del sitio web de Eje Presse Radio en el hosting cPanel del cliente.

## Infraestructura

- **Dominio:** ejepresse-radio.com
- **Hosting:** cPanel (acceso en https://www.ejepresse-radio.com:2083/)
- **Frontend:** React + Vite (build estático)
- **Backend:** Supabase (servicio externo)

## Pasos de Despliegue

### 1. Preparar el Build

```bash
cd pagina-podcast
npm run build
```

Esto genera la carpeta `dist/` con todos los archivos estáticos listos para producción.

### 2. Conectar al Hosting cPanel

1. Acceder al panel de control: `https://www.ejepresse-radio.com:2083/`
2. Iniciar sesión con las credenciales del cliente
3. Navegar a **Gestor de Archivos** o **File Manager**
4. Acceder a la carpeta **public_html** (donde están los archivos públicos del sitio)

### 3. Subir los Archivos

Opciones:

**Opción A: Gestor de Archivos cPanel (GUI)**
1. Eliminar contenido anterior en `public_html` (opcional, si hay)
2. Subir los archivos de `dist/` a `public_html`
3. Asegurar que `index.html` esté en la raíz de `public_html`

**Opción B: FTP/SFTP (recomendado para archivos grandes)**
1. Usar un cliente FTP (ej. FileZilla, WinSCP)
2. Conectarse con las credenciales de cPanel
3. Navegar a `public_html`
4. Transferir los archivos de `dist/`

**Opción C: Terminal SSH (si está disponible)**
```bash
# Acceder por SSH
ssh usuario@ejepresse-radio.com

# Navegar a public_html
cd public_html

# Descargar/subir el build
# (usando rsync, scp, o herramientas similares)
```

### 4. Configurar redirecciones (URL rewriting)

Para que React Router funcione correctamente, todas las rutas deben redirigir a `index.html`.

**En cPanel:**
1. Ir a **Gestor de Archivos** → `public_html`
2. Crear un archivo `.htaccess` con el siguiente contenido:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # No reescribir si es un archivo o directorio existente
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Reescribir todas las rutas a index.html
  RewriteRule ^ index.html [QSA,L]
</IfModule>
```

**Alternativa:** Si usas Node.js o hay configuración especial en cPanel, contactar con soporte del hosting.

### 5. Verificar HTTPS/SSL

1. En cPanel, ir a **SSL/TLS**
2. Confirmar que el certificado SSL esté activo para `ejepresse-radio.com`
3. Esto es importante para las variables de entorno de Supabase (requiere HTTPS)

### 6. Variables de Entorno

Las variables de Supabase están incluidas en el build (archivo `.env.local`). 
**Verificar:** No commit `.env.local` a GitHub; solo los desarrolladores lo tienen localmente.

En cPanel, si fuera necesario:
- Las variables están compiladas en el build estático, no se necesita `.env` en el servidor
- Si en futuro se necesitan variables dinámicas, contactar con soporte del hosting

### 7. Pruebas Post-Despliegue

1. **Abrir el sitio:**
   - https://ejepresse-radio.com
   - https://www.ejepresse-radio.com

2. **Verificar rutas:**
   - Inicio: https://ejepresse-radio.com/
   - Actualidad: https://ejepresse-radio.com/actualidad
   - Quiénes somos: https://ejepresse-radio.com/quienes-somos
   - Admin (oculta): https://ejepresse-radio.com/admin

3. **Verificar funcionalidades:**
   - Radio TuneIn reproduce sin errores
   - Videos de YouTube se cargan (si hay)
   - Redes sociales en footer enlazan correctamente
   - QR de WhatsApp visible

4. **Performance:**
   - Tiempo de carga < 3s
   - No hay errores en consola del navegador

## Rollback (si es necesario)

Si algo falla:

1. **Desde cPanel:**
   - Ir a **Gestor de Archivos** → `public_html`
   - Eliminar archivos nuevos
   - Restaurar versión anterior (si hay backup)

2. **Contactar con soporte del hosting** si hay problemas críticos

## Actualizaciones Futuras

Para próximos despliegues:

1. Hacer cambios en rama local
2. Testear localmente: `npm run dev`
3. Build de producción: `npm run build`
4. Subir `dist/` a cPanel (reemplazar archivos anteriores)
5. Limpiar caché del navegador (Ctrl+F5 o Cmd+Shift+R)

## Contacto Soporte

- **Hosting cPanel:** soporte@[proveedor-hosting]
- **Supabase:** soporte@supabase.io
- **Desarrollador:** [contacto del desarrollador]

---

**Nota:** Este documento puede actualizarse conforme se identifiquen mejoras o cambios en el proceso.
