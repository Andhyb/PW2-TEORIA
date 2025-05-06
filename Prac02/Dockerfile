# Imagen base de Node
FROM node:18

# Crear y usar directorio de la app
WORKDIR /app

# Copiar archivos del proyecto al contenedor
COPY . .

# Instalar dependencias del proyecto
RUN npm install

# Exponer el puerto 
EXPOSE 8091

# Comando para iniciar el servidor
CMD ["node", "server.js"]
