FROM node:20-alpine

WORKDIR /app

COPY package.json .

COPY . .

RUN npm install

EXPOSE 4455

CMD ["npm","start"]