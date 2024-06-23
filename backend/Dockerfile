FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4455

# Adição do Sleep para garantir que o backend roda após o banco de dados iniciar.
# Existem implementações bem mais apropriadas.
CMD ["sh", "-c", "sleep 30 && npx prisma migrate dev && npm start"]