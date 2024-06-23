FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4455

CMD ["sh", "-c", "npx prisma migrate dev && npm start"]