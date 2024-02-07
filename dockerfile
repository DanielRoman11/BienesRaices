# Usa la imagen base de Node.js 20
FROM node:20

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo el archivo package.json primero para aprovechar el caché de la capa de Docker
COPY package.json .

# Instala pnpm de forma global
RUN npm install -g pnpm
RUN pnpm i

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Ejecuta el comando para iniciar tu aplicación
CMD ["pnpm", "start:server"]

