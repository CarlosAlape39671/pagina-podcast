# Diagramas

Versiones exportadas de los diagramas del [Manual Técnico](../../manual-tecnico.md)
(sección 14). La **fuente de verdad** son los bloques `mermaid` dentro del propio
manual; estos archivos son una exportación para incrustar en informes o abrir sin
un visor con soporte Mermaid.

```
diagramas/
├── svg/   # vectorial — versionado en el repositorio
└── png/   # mapa de bits 2x — NO versionado (.gitignore); local, regenerable
```

> Los **SVG** se versionan; los **PNG** quedan fuera de git (ver `.gitignore`) y se
> conservan en local para informes Word / presentaciones. Si clonas el repo, la
> carpeta `png/` no estará: regenérala con el comando de más abajo.

| Archivo | Diagrama |
|---|---|
| `14-1-componentes` | Componentes / arquitectura del frontend |
| `14-2-clases` | Clases (dominio y servicios) |
| `14-3-modelo-er` | Modelo entidad-relación (Supabase) |
| `14-4-secuencia-login` | Secuencia — inicio de sesión del admin |
| `14-5-secuencia-publicar` | Secuencia — publicar una noticia |
| `14-6-secuencia-actualidad` | Secuencia — visitante ve Actualidad |
| `14-7-estados-sesion` | Estados — sesión / autenticación |
| `14-8-estados-reproductor` | Estados — reproductor diferido (facade) |
| `14-9-actividades-publicacion` | Actividades — flujo de publicación |
| `14-10-flujo-youtube-id` | Flujo — extracción del ID de YouTube |
| `14-11-flujo-navegacion` | Flujo — mapa de navegación del sitio |

## Regenerar

Los diagramas se exportan desde los bloques `mermaid` del manual con
[`@mermaid-js/mermaid-cli`](https://github.com/mermaid-js/mermaid-cli). Con Node 18:

```bash
# por cada bloque, ya extraído a un archivo .mmd:
npx @mermaid-js/mermaid-cli@10.9.1 -i diagrama.mmd -o svg/diagrama.svg -b white
npx @mermaid-js/mermaid-cli@10.9.1 -i diagrama.mmd -o png/diagrama.png -b white -s 2
```

> Nota: con Node ≥ 20 puedes usar `@mermaid-js/mermaid-cli@latest`.
