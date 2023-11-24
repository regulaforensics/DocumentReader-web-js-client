FROM node:18.18-alpine3.18

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . /app

CMD [ "node", "index.js" ]
