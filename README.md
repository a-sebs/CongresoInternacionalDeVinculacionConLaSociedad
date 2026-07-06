# Congreso Internacional de Vinculación con la Sociedad - Landing Page

Esta es la página principal (landing page) para el **Congreso Internacional de Vinculación con la Sociedad**. 

Este proyecto está construido utilizando tecnologías web modernas para asegurar un alto rendimiento, accesibilidad y una excelente experiencia de usuario.

## 🚀 Tecnologías Principales

- **Framework:** [Next.js](https://nextjs.org/)
- **Librería UI:** [React](https://react.dev/) (v19)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Carruseles / Sliders:** [Swiper](https://swiperjs.com/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)

## 🛠️ Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu entorno local:
- [Node.js](https://nodejs.org/) (Versión 20.0 o superior)
- npm (o yarn, pnpm, bun)

## 📦 Instalación y Uso Local

Sigue estos pasos para levantar el entorno de desarrollo en tu máquina local:

1. **Clona el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. **Ingresa al directorio del proyecto:**
   ```bash
   cd CongresoInternacionalDeVinculacionConLaSociedad
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   # o yarn install / pnpm install
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   # o yarn dev / pnpm dev
   ```

5. **Abre la aplicación:**
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el proyecto en vivo. Puedes comenzar a editar la página modificando los archivos dentro de la carpeta `src/`. La página se actualizará automáticamente a medida que guardes los cambios gracias al Fast Refresh.

## 📜 Scripts Disponibles

Dentro del directorio del proyecto, puedes ejecutar los siguientes comandos:

- `npm run dev`: Inicia el servidor en modo desarrollo.
- `npm run build`: Construye la aplicación optimizada para producción.
- `npm run start`: Inicia el servidor de producción (requiere ejecutar el build previamente).
- `npm run lint`: Ejecuta el linter (ESLint) para analizar el código y encontrar posibles errores.

## 📁 Estructura del Proyecto

El código fuente principal se encuentra en el directorio `src/`. A continuación se detalla su estructura básica:

- `src/app/`: Define el enrutamiento de la aplicación utilizando el App Router de Next.js (ej: `/inscribete`, `/panelistas`).
- `src/components/`: Componentes de interfaz de usuario reutilizables en toda la aplicación.
- `src/data/`: Datos estáticos utilizados para poblar la información en los componentes (ej. `homeData.ts`).

## 🤝 Contribución

Si deseas contribuir, por favor crea un *fork* del repositorio, crea una nueva rama (*branch*) para tus cambios y envía un *Pull Request* para su revisión.

---
*Desarrollado para el Congreso Internacional de Vinculación con la Sociedad.*