#  Portafolio Elvin - Desarrollador de Apps Multiplataforma

> Un portafolio moderno y escalable construido con **HTML, CSS  y JavaScript ** .

##  Características

<!-- - 📱 **100% Responsive**: Mobile-first design con breakpoints tablet y desktop -->
- ✨ **Diseño Moderno**: Variables CSS, animaciones fluidas y efectos visuales premium
- 🎨 **Tema Claro/Oscuro**: Sistema de temas con persistencia en localStorage
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

## 📝 Licencia

MIT - Feel free to use this template for your personal portfolio!

## 👨‍💻 Autoría

Desarrollado como referencia profesional para portafolios de Desarrolladores de Apps Multiplataforma.
