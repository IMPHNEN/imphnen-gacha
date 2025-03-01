FROM node:20.14.0-alpine

WORKDIR /app

RUN apk add git
RUN npm -g install serve
RUN corepack enable

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run lint
RUN npm run build

ENV PORT=8080
EXPOSE 8080

CMD ["serve", "-s", "dist"]
