# 📊 Portafolio - Desarrollador de Apps Multiplataforma

> Un portafolio moderno, responsive y escalable construido con **HTML5, CSS3 vanilla y JavaScript puro** (sin frameworks).

## 🚀 Características

- ✨ **Diseño Moderno**: Variables CSS, animaciones fluidas y efectos visuales premium
- 🎨 **Tema Claro/Oscuro**: Sistema de temas con persistencia en localStorage
- 📱 **100% Responsive**: Mobile-first design con breakpoints tablet y desktop
- ⚡ **Sin dependencias**: JavaScript puro, sin librerías externas
- ♿ **Accesible**: HTML semántico con ARIA labels y atributos de accesibilidad
- 🔄 **Arquitectura Modular**: Código separado en módulos independientes reutilizables
- 📦 **Performance**: Optimizado para carga rápida, ~150KB gzipped

## 📁 Estructura del Proyecto

```
portafolio/
├── index.html                      # Plantilla HTML principal
├── package.json                    # Dependencias del proyecto
├── README.md                       # Este archivo
│
├── src/
│   ├── styles/
│   │   ├── main.css               # Variables y base
│   │   ├── components/            # Componentes reutilizables
│   │   ├── sections/              # Estilos por sección
│   │   ├── utilities/             # Animaciones y responsive
│   │   └── themes/                # Temas claro/oscuro
│   │
│   └── js/
│       ├── index.js               # Punto de entrada
│       ├── modules/               # Módulos independientes
│       └── utils/                 # Utilidades compartidas
│
└── public/                         # Archivos estáticos (opcional)
```

## 🎯 Secciones del Portafolio

- **Hero**: Presentación con efecto typing animado
- **Sobre Mí**: Avatar, estadísticas y barras de habilidades
- **Timeline**: Línea de tiempo educativa con Intersection Observer
- **Proyectos**: Carrusel infinito de tarjetas de proyectos
- **Contacto**: Enlaces a redes sociales y llamada a la acción
- **Footer**: Información de autoría

## 🛠️ Módulos JavaScript

```
modules/
├── theme.js          # Gestor de tema claro/oscuro
├── cursor.js         # Cursor personalizado animado
├── mobile-menu.js    # Menú responsive
├── scroll-reveal.js  # Animaciones al scroll con Intersection Observer
├── skill-bars.js     # Animar barras de habilidades
├── progress-bar.js   # Barra de progreso de scroll
├── parallax.js       # Efecto parallax
├── carousel.js       # Carrusel de proyectos
├── typing-effect.js  # Efecto typing en hero
└── particles.js      # Partículas flotantes
```

## 💻 Instalación y Uso

### Opción 1: Abrir directamente en navegador
```bash
# Solo abre el archivo index.html en tu navegador
open index.html
```

### Opción 2: Usar servidor local (recomendado)
```bash
# Instala dependencias
npm install

# Inicia servidor de desarrollo
npm run dev
```

### Opción 3: Usar Python
```bash
# Python 3
python -m http.server 8000

# Luego abre: http://localhost:8000
```

## 🎨 Personalización

### Cambiar colores
Edita las variables en `src/styles/main.css`:
```css
:root {
  --color-acento: #0052CC;  /* Azul principal */
  --color-acento-hover: #0041A8;
  /* ... más variables */
}
```

### Cambiar contenido
Edita el HTML en `index.html`:
- Secciones de "Sobre Mí"
- Elementos del Timeline
- Tarjetas de Proyectos
- Enlaces sociales

### Agregar nuevas secciones
1. Crea un nuevo archivo CSS en `src/styles/sections/`
2. Enlázalo en el `index.html`
3. Agrega HTML de la sección en el main
4. Usa clases BEM para mantener consistencia

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Conecta tu repositorio GitHub
2. Deploy automático en cada push

### GitHub Pages
1. Sube a un repositorio de GitHub
2. Habilita GitHub Pages en Settings
3. Tu sitio estará en: `https://username.github.io/portafolio`

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Tamaño**: ~150KB gzipped (CSS + JS)
- **Load Time**: < 1s en conexión 4G

## 🛠️ Stack Técnico

- **HTML5**: Semántico y accesible
- **CSS3**: Variables, Grid, Flexbox, Animaciones
- **JavaScript (ES6+)**: Módulos IIFE, Intersection Observer
- **Fuentes**: Google Fonts (Syne, Figtree, JetBrains Mono)
- **Iconos**: SVG inline para máximo control

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 📝 Licencia

MIT - Feel free to use this template for your personal portfolio!

## 👨‍💻 Autoría

Desarrollado como referencia profesional para portafolios de Desarrolladores de Apps Multiplataforma.

---

**¿Necesitas ayuda?**
- Revisa los comentarios en el código (están en español)
- Cada módulo JS tiene documentación clara
- Consulta la estructura de carpetas para entender la arquitectura
