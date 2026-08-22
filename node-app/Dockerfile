FROM node:alpine-22

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY index.js ./

EXPOSE 3000
CMD ["npm", "start"]
