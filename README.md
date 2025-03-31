# react-spa-app
Solución al punto de desarrollo frontend de la prueba técnica por Daniela Castrillón.

Este es un proyecto de SPA (Single Page Application) desarrollado con React.js que consume la API pública JSONPlaceholder y muestra una lista de publicaciones, las cuales se pueden filtrar por título en tiempo real.

![react-spa-app](https://github.com/user-attachments/assets/2c56aae8-8ba3-43a7-8fc8-6b4b01773794)

## Detalles de instalación y configuración antes de ejecutar el proyecto

Para ejecutar este proyecto es necesario tener instalado `Node.js` y `npm (Node Package Manager)`.

- Node.js: [Descargar Node.js](https://nodejs.org/)
- npm: Se instala automáticamente con Node.js

## Instrucciones para ejecutar el proyecto

Seguir los siguientes pasos para ejecutar el proyecto en una máquina local.

**1. Clonar el repositorio**

Clonar el repositorio en la máquina local utilizando el comando `git clone https://github.com/dcastrillonc/react-spa-app.git` o usando `GitHub Desktop`.

**2. Instalar las dependencias**

Dirigirse a la carpeta del proyecto `cd react-spa-app` y ejecutar el comando `npm install` para instalar las dependencias necesarias.

**3. Ejecutar la aplicación**

Usar el comando `npm start`, lo que iniciará el servidor de desarrollo y abrirá la aplicación en una pestaña del navegador en `http://localhost:3000`.

## Vulnerabilidades y advertencias

Durante la instalación pueden aparecer advertencias de vulnerabilidades en las dependencias. 

Recomiendo ejecutar el siguiente comando `npm audit fix` para intentar solucionar automáticamente algunas de ellas. Si las vulnerabilidades persisten, se puede revisar a más detalles con el comando `npm audit`.
