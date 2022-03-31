#La configuaracion facil
FROM node:16-alpine
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
# NEXT USER
EXPOSE 3000
CMD ["npm","start"]

##Para correr en la terminal 
## docker run --name=nextjs-practice-app -p 80:3000 (puerto mio: puerto docker) nextjs-practice (nombre de la imagen)

docker run --name=nextjs-practice-app -p 80:3000 nextjs-practice
