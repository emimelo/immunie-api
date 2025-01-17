# immunie-api
API de uma aplicação com objetivo de permitir que um usuário crie uma carteira eletrônica de acesso.

## **Endpoints**

A API tem um total de 4 endpoints, sendo em volta principalmente do usuário - possibilitando criar usuário, atualizar: nome, sobrenome, email e imagem de perfil do usuário, listar usuário e deletar.

O url base da API é https://immunie-api.vercel.app/

## Índice:

- [User](#1-user)
  - [POST - /api/user](#11-criação-de-usuário)
  - [GET - /api/user](#12-listar-todos-os-usuários)
  - [GET - /api/user/:id](#13-apenas-um-usuário)
  - [PATCH - /api/user/:id](#14-update-de-usuário)
  - [DELETE - /api/user/:id](#15-delete-user)
 
## 1. **User**

### 1.1. **Criação de Usuário**

Esse endpoint tem como propósito o criação de um novo usuário, sendo necessário tais campos: name, last_name, email, image_url.

`POST /api/user - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Emilly",
  "last_name": "Melo",
  "email": "emilly@mail.com",
  "image_url": "emilly.jpg"
}
```
Caso dê tudo certo, a resposta será assim:

`POST /api/user - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"response": {
		"name": "Emilly",
		"last_name": "Melo",
		"email": "emilly@mail.com",
		"image_url": "emilly.jpg",
		"_id": "667edeaab8044423f990fa27",
		"createdAt": "2024-06-28T16:02:50.829Z",
		"updatedAt": "2024-06-28T16:02:50.829Z",
		"__v": 0
	},
	"message": "User created"
}
```
### 1.2. **Listar todos os usuários**

`GET /api/user - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

`GET /api/user - FORMATO DE RESPOSTA - STATUS 200`

```json
[
	{
		"_id": "667e58dd1f1a58ece94cdc23",
		"name": "Lucas",
		"last_name": "Barreto",
		"email": "lucas@mail.com",
		"image_url": "lucas.jpg",
		"createdAt": "2024-06-28T06:31:57.111Z",
		"updatedAt": "2024-06-28T06:52:49.128Z",
		"__v": 0
	},
	{
		"_id": "667edeaab8044423f990fa27",
		"name": "Emilly",
		"last_name": "Melo",
		"email": "emilly@mail.com",
		"image_url": "emilly.jpg",
		"createdAt": "2024-06-28T06:51:24.206Z",
		"updatedAt": "2024-06-28T06:51:24.206Z",
		"__v": 0
	}
]
```
### 1.3. **Listar apenas um usuário**

`GET /api/user/:id - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

`GET /api/user/:id - FORMATO DE RESPOSTA - STATUS 200`

```json
{
    "_id": "667edeaab8044423f990fa27",
		"name": "Emilly",
		"last_name": "Melo",
		"email": "emilly@mail.com",
		"image_url": "emilly.jpg",
		"createdAt": "2024-06-28T06:51:24.206Z",
		"updatedAt": "2024-06-28T06:51:24.206Z",
		"__v": 0
}
```
### 1.4. **Atualização de usuário**

`PATCH - /api/user/:id - FORMATO DE REQUISIÇÃO`

```json
{
  "image_url": "emillynewimage.jpg"
}
```

`PATCH - /api/user/:id - FORMATO DE RESPOSTA - STATUS 200`

```json
{
	"_id": "667edeaab8044423f990fa27",
	"name": "Emilly",
	"last_name": "Melo",
	"email": "fulanod@gmail.com",
	"image_url": "emillynewimage.jpg",
	"createdAt": "2024-06-28T14:17:13.094Z",
	"updatedAt": "2024-06-28T16:05:12.248Z",
	"__v": 0
}
```
### 1.5. **Deletar usuário**

`DELETE - /api/user/:id - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

`DELETE - /api/user/:id - FORMATO DE RESPOSTA - STATUS 200`
```json
{
	"_id": "667edeaab8044423f990fa83",
	"name": "Emilly2",
	"last_name": "Melo",
	"email": "emilly2@gmail.com",
	"image_url": "emilly2.jpg",
	"createdAt": "2024-06-28T16:02:50.829Z",
	"updatedAt": "2024-06-28T16:02:50.829Z",
	"__v": 0
}
```
