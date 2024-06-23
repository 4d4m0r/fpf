FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npx prisma migrate

EXPOSE 4455

CMD ["npm","start"]