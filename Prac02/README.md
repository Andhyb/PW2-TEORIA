# Página web personal – Programación Web 2

Este proyecto corresponde a la **Práctica 2** del curso de **Programación Web 2**, y consiste en una página web personal desarrollada con HTML, CSS, JavaScript, Node.js y Express, empaquetada en un contenedor Docker para facilitar su ejecución en cualquier entorno.

---

## 📁 Estructura del Proyecto

```bash
Prac02/
├── public/               # Archivos estáticos (CSS, JS, imágenes)
│   ├── css/
│   │   └── estilo.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       └── foto1.jpg ...
├── views/                # Todas las páginas HTML
│   ├── index.html
│   ├── autor.html
│   ├── hobbies.html
│   ├── galeria.html
│   ├── ingSoftware.html
│   ├── estandaresWeb.html
│   └── contactame.html
├── server.js             # Servidor con Express
├── package.json
└── Dockerfile

## 📁 Estructura del Proyecto

# Inicializa el proyecto Node
npm init -y

# Instala Express
npm install express

# Ejecuta el servidor
node server.js

# Accede a la web desde:
http://localhost:8091

## 📁 DOCKERFILE
docker build -t practica2 .
docker run -d -p 8091:8091 --name practica2 practica2
http://localhost:8091

📌 Detalles técnicos
El contenedor está configurado para escuchar en el puerto 8091.
La app se inicia con node server.js, y sirve las páginas HTML desde la carpeta /views. (esto para mas orden)
Los recursos estáticos (CSS, JS, imágenes) están en public/.
Todo el código JavaScript del cliente está en public/js/script.js.


