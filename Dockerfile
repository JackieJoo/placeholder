FROM node:16

WORKDIR /app

COPY *.json /app
RUN npm ci

COPY . /app
RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]
