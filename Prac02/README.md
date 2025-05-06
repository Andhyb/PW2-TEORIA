Proyecto Web Personal - Laboratorio 2

Este proyecto corresponde la practica 2 de Programación Web 2, y consiste en una página web personal desarrollada con HTML, CSS, JavaScript, Node.js y Express, empaquetada en un contenedor Docker para facilitar su ejecución en cualquier entorno.



ESTRUCTURA DE MI PROYECTO:
Prac02/
├── public/               # Archivos estáticos (CSS, JS, imágenes)
│   ├── css/
│   │   └── estilo.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       └── foto1.jpg ...
├── views/               # Todas las paginas HTML
│   ├── index.html
│   ├── autor.html
│   ├── hobbies.html
│   ├── galeria.html
│   ├── ingSoftware.html
│   ├── estandaresWeb.html
│   └── contactame.html
├── server.js            # Servidor con Express
├── package.json         
└── Dockerfile           


# En este directorio:
# Iniciar proyecto node
npm init -y
#Instalar Express
npm install express
#Ejecutar el servidor localmente
node server.js
#Ver la pagina en local
http://localhost:8091

#En Dockerfile
#1: Construir la imagen
docker build -t prac02 .
#2: Construir el contenedor
docker run -d -p 8091:8091 --name practica2 prac02
#3: Abrir en el navegador:
http://localhost:8091

- El contenedor está configurado para escuchar en el puerto 8091.

- La app se inicia con node server.js, y sirve los HTML desde /views. (esto para mayor orden)

- Todo el código JavaScript está separado en public/js/script.js.
