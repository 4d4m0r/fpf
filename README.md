# Cadastro de Estudantes - CRUD

## Descrição do Projeto

Este projeto consiste em uma aplicação web simples que permite o cadastro de estudantes. A aplicação é dividida em frontend e backend separados, ambos disponíveis utilizando contêineres Docker.

O frontend foi desenvolvido com Angular, enquanto o backend utiliza Node.js com Express.

O banco de dados escolhido é o MySQL.

O projeto inclui operações de CRUD (Create, Read, Update, Delete) para estudantes, com campos como nome, idade, e-mail e curso.

## Tecnologias Utilizadas

- **Frontend:** Angular
- **Backend:** Node.js com Express
- **Banco de Dados:** MySQL
- **Containerização:** Docker e Docker Compose

## Estrutura do Repositório

- `frontend/`: Código-fonte do frontend em Angular
- `backend/`: Código-fonte do backend em Node.js com Express
- `docker-compose.yml`: Arquivo para orquestração dos contêineres Docker

## Instruções para Rodar o Projeto Localmente

### Pré-requisitos

- Node.js
- npm ou yarn
- MySQL
- Docker

Clonar o repositório

```
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### Backend

1. Navegue até o diretório `backend`:
   ```
   cd backend
   ```
2. Instale as dependências:
   ```
   npm install
   ```
3. Execute a migração do banco de dados:
   ```
   npm start
   ```
4. Inicie o servidor:
   ```
   npm start
   ```

### Frontend

1. Navegue até o diretório `frontend`:
   ```
   cd frontend
   ```
2. Instale as dependências:
   ```
   npm install
   ```
3. Inicie o servidor:
   ```
   npm start
   ```

## Instruções para Rodar o Projeto com Docker

1. Construa e inicie os contêineres:
   ```
   docker-compose up --build
   ```
2. Inicialize as migrações do banco de dados:
   ```
   docker exec -t fpf_backend npx prisma generate
   ```

## Exemplos de Uso da API

```
 GET v1/estudante

 Resposta:
    [
        {
            "id": "384b2ff2-0807-4506-bec7-fe10ee827061",
            "nome": "Adamor",
            "email": "adamor@gmail",
            "senha": "$2a$10$jauVCrRyrCf1kPcvJnXeX.VWPnEDpzrZEyCDxOf5VT6ps7v0xi5BG",
            "idade": 20,
            "curso": "Curso do Estudante",
            "createdAt": "2024-06-21T17:20:26.211Z",
            "updatedAt": "2024-06-21T17:20:26.211Z"
	    }
    ]
```

```
 POST /v1/estudante

 Corpo da requisição:
    [
        {
        "nome": "teste",
        "email": "teste@gmail",
        "senha": "123",
        "idade": 20,
        "curso": "Curso"
        }
    ]
```

```
 PUT /v1/estudante/{id}

 Corpo da requisição:
    [
        {
        "nome": "teste",
        "email": "teste@gmail",
        "senha": "123",
        "idade": 20,
        "curso": "Curso"
        }
    ]
```

```
 DELETE /v1/estudante/{id}
```
