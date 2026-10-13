# Portfolio de Álvaro García

Portfolio personal de **Álvaro García**, estudiante de Ingeniería Informática en la ESI-UCLM. Recoge mi perfil, mis áreas técnicas, mis proyectos y mi forma de trabajar, con un recorrido narrativo por scroll.

- **Sitio:** https://alvarocyber.github.io
- **Autor:** Álvaro García — [GitHub](https://github.com/alvarocyber) · [LinkedIn](https://www.linkedin.com/in/alvarogarciacamara/) · [Correo](mailto:alvaro.garcia69@alu.uclm.es)

## Tecnologías

- **[Astro](https://astro.build)** — generación de sitio estático.
- **[Tailwind CSS v4](https://tailwindcss.com)** — utilidades y tokens de diseño.
- **[GSAP](https://gsap.com) + ScrollTrigger** — animaciones ligadas al scroll.
- **[Lenis](https://lenis.darkroom.engineering)** — scroll suave.
- **[Fontsource](https://fontsource.org)** — tipografías Space Grotesk y Manrope.
- **sharp** — optimización de imágenes.

Sin frameworks de UI, sin vídeo y sin servicios externos: todo el contenido y los recursos se sirven de forma estática.

## Estructura

```text
/
├── public/                 # Recursos estáticos (capturas, favicon, og)
├── src
│   ├── components/         # Componentes de sección (Hero, About, Projects, ...)
│   ├── data/stops.ts       # Fuente única de las paradas del recorrido
│   ├── i18n/               # Contenido y textos del sitio
│   ├── layouts/            # Layout base (SEO, metadatos, estructura)
│   ├── pages/              # Rutas (index, 404, legal, privacidad)
│   ├── scripts/            # Motor de scroll (GSAP, Lenis, estado activo)
│   └── styles/global.css   # Tokens de diseño y estilos base
└── .github/workflows/      # Despliegue a GitHub Pages
```

## Desarrollo

Requiere **Node.js ≥ 22** y **pnpm**.

```sh
pnpm install       # instala dependencias
pnpm dev           # servidor de desarrollo en http://localhost:4321
pnpm build         # genera el sitio estático en dist/
pnpm preview       # previsualiza el build de producción
```

## Contenido

Todo el texto editable está centralizado en `src/i18n/es.ts` (perfil, áreas, proyectos, formación y contacto). La estructura del recorrido por scroll se define en `src/data/stops.ts`.

Los proyectos se presentan como casos de estudio con datos verificados e imágenes reales. No se inventan métricas, tecnologías ni enlaces.

## Accesibilidad y rendimiento

- Contenido legible y navegable sin JavaScript (fallback `<noscript>`).
- Soporte de `prefers-reduced-motion`: se eliminan las animaciones dependientes del scroll.
- Navegación por anclas, foco visible y enlace "saltar al contenido".
- Sitio estático, sin dependencias multimedia ni reproductores.

## Despliegue

El sitio se publica automáticamente en **GitHub Pages** con GitHub Actions (`.github/workflows/deploy.yml`) en cada push a `main`.
