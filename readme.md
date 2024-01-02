# API

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/28040393-1f16e70d-f301-42e9-b54d-a3fe5220a51c?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D28040393-1f16e70d-f301-42e9-b54d-a3fe5220a51c%26entityType%3Dcollection%26workspaceId%3D2cdf8573-33be-4e05-9f25-575ec6773398)

## Run Locally

1. clone

`
git clone https://github.com/gaonkarBhai/skillstreet-assignment-.git
`

2. cd into project

`
cd skillstreet-assignment-
`

3. install dependency

`
npm i
`

4. set environment variable
should look like this :

``` 
PORT=

MONGO_URL = 

JWT_SECRET = 

```

5. start development server

`
npm run dev
`

# API Documentation

## Auth Routes

| Method | Endpoint           | Description           | Auth Required |
| ------ | ------------------- | --------------------- | ------------- |
| POST   | `/api/v1/auth/register` | Register a new user   | No            |
| POST   | `/api/v1/auth/login`    | Log in existing user  | No            |

## Note Routes

**Note:** Authentication is required for all Note routes. Provide a valid token in the `Authorization` header.

| Method | Endpoint              | Description              |
| ------ | ---------------------- | ------------------------ |
| GET    | `/api/v1/note/`        | Get all user's notes     |
| GET    | `/api/v1/note/:id`     | Get a single note by ID  |
| POST   | `/api/v1/note/`        | Create a new note        |
| PATCH  | `/api/v1/note/:id`     | Update a note by ID      |
| DELETE | `/api/v1/note/:id`     | Delete a note by ID      |

## Authentication Middleware

- **requireSignIn:** Ensure the request is authenticated with a valid token.


