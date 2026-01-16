# ACONDICIONADOSPRO

Sitio web profesional para servicios de instalación de aire acondicionado en Santiago, Chile.

## Características

### Diseño y Experiencia
- **Diseño Responsive**: Optimizado para todos los dispositivos (mobile-first)
- **Animaciones GSAP**: Interacciones fluidas y profesionales
- **Dark Mode**: Soporte completo para modo oscuro
- **Parallax Effects**: Efectos visuales atractivos al hacer scroll
- **Micro-interacciones**: Botones magnéticos y hover effects

### Secciones Principales
1. **Hero Section**: Presentación impactante con CTAs principales
2. **Servicios**: Tres áreas de servicio (Residencial, Comercial, Industrial)
3. **Calculadora BTU**: Herramienta interactiva para clientes
4. **Proceso de Trabajo**: Timeline visual animado
5. **Marcas**: Galería de marcas confiables
6. **Casos de Éxito**: Testimonios con imágenes
7. **Contacto**: Formulario completo con validación

### Funcionalidades Técnicas
- **BTU Calculator**: Cálculo inteligente según tipo de espacio
- **Form Validation**: Validación en tiempo real
- **Smooth Scrolling**: Navegación suave entre secciones
- **Loading Animation**: Pantalla de carga profesional
- **WhatsApp Integration**: Botón flotante para contacto directo

## Tecnologías Utilizadas

### Frontend
- **HTML5**: Semántico y accesible
- **Tailwind CSS**: Framework de estilos utility-first
- **GSAP 3.12+**: Animaciones profesionales con ScrollTrigger
- **JavaScript Vanilla**: Funcionalidad interactiva

### Diseño
- **Material Symbols**: Iconos modernos de Google
- **Inter Font**: Tipografía profesional
- **Color Scheme**: Primary (#1269e2) y Accent Orange (#f97316)

## Optimizaciones

### Performance
- **Lazy Loading**: Imágenes cargadas bajo demanda
- **Minified Assets**: CSS y JavaScript optimizados
- **CDN Integration**: Librerías desde CDNs confiables
- **Will-change CSS**: Optimización para animaciones

### SEO
- **Meta Tags**: Descripciones optimizadas
- **Semantic HTML**: Estructura accesible
- **Alt Text**: Imágenes con descripciones
- **Schema Markup**: Datos estructurados para motores de búsqueda

## Instalación y Desarrollo

### Requisitos Previos
- Node.js 14+ (opcional, para servidor de desarrollo)
- Python 3+ (para servidor local simple)

### Configuración Rápida
1. Clonar o descargar los archivos
2. Navegar al directorio del proyecto
3. Iniciar servidor local:

```bash
# Usando Python (recomendado)
python -m http.server 8000

# O usar el script npm
npm run dev
```

4. Abrir `http://localhost:8000` en el navegador

## Estructura del Proyecto

```
acondicionadospro/
├── index.html          # Página principal
├── package.json        # Configuración del proyecto
├── README.md          # Documentación
└── assets/            # Recursos estáticos (si se agregan)
```

## Personalización

### Colores Principales
- **Primary**: `#1269e2` (Azul profesional)
- **Accent**: `#f97316` (Naranja vibrante)
- **Background Light**: `#f6f7f8`
- **Background Dark**: `#101822`

### Tipografía
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800, 900

## Contacto y Configuración

### Información de Contacto (actualizar en HTML)
- **Teléfono**: +56 9 1234 5678
- **Email**: contacto@acondicionadospro.cl
- **WhatsApp**: https://wa.me/56912345678

### Integración con Backend
El formulario de contacto está preparado para integrarse con:
- EmailJS (envío directo)
- Formspree (backendless)
- Backend personalizado (Node.js, PHP, etc.)

## Configuración del Formulario

Para activar el envío de formularios:

1. **EmailJS** (recomendado para prototipos):
   ```javascript
   // Agregar en el script del formulario
   emailjs.sendForm('service_id', 'template_id', '#contactForm')
   ```

2. **Backend Personalizado**:
   ```javascript
   fetch('/api/contact', {
     method: 'POST',
     body: formData
   })
   ```

## Métricas y Analytics

Para agregar seguimiento:

1. **Google Analytics**:
   ```html
   <!-- Agregar en el head -->
   <script async src="https://www.googletagmanager.com/gtag/js=GA_MEASUREMENT_ID"></script>
   ```

2. **Meta Pixel**:
   ```html
   <!-- Para seguimiento de conversiones -->
   <script>
   !function(f,b,e,v,n,t,s)
   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
   n.queue=[];t=b.createElement(e);t.async=!0;
   t.src=v;s=b.getElementsByTagName(e)[0];
   s.parentNode.insertBefore(t,s)}(window, document,'script',
   'https://connect.facebook.net/en_US/fbevents.js');
   fbq('init', 'YOUR_PIXEL_ID');
   fbq('track', 'PageView');
   </script>
   ```

## Despliegue

### Opciones de Hosting
1. **Vercel** (recomendado para sitios estáticos)
2. **Netlify** (con form processing integrado)
3. **GitHub Pages** (para proyectos open source)
4. **Hosting tradicional** (cPanel, Plesk, etc.)

### Configuración para Producción
1. Minificar HTML, CSS y JavaScript
2. Optimizar imágenes (WebP format)
3. Configurar HTTPS
4. Establecer redirecciones 301 si es necesario

## Licencia

MIT License - Libre para uso comercial y personal

## Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Hacer un fork del proyecto
2. Crear una rama para la característica
3. Enviar un pull request con descripción clara

---

**ACONDICIONADOSPRO** - Expertos en climatización para tu confort y eficiencia energética.
