FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm install @angular/cli -g

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]

