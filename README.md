<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

**<p align="center">NestJS</p>**

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

<div id="top"></div>

# Challenge

As a full stack developer, your task is to create a application using Node and React to controll a films' catalog.

## Requirements

Your application must contain:

1. The backend should be a Node API that contains:

- End-point that consults 50 films, extracts the title, banner, description, director and producer information and saves it in the application's database. The API for extracting movies is:
<https://ghibliapi.herokuapp.com/#tag/Films>
- Consultation end-point with pagination of 10 to all movies that are in our database.
- Use NodeJs
- Have an API documentation;

2. Your front-end should be made in React and will contain:

- Screen with the display of films consulted in a paginated way to the application's back-end;
- Update button that will access the end-point that queries the 50 films and updates our database;
basic requirements
- Use React;
- Have a readme that explains how to run the projects;
- Be versioned on GitHub

Differentials:

- Have test coverage;
- Good development practices;
- CleanCode;
- Have deployed the projects.

My contriburing:
You can to use open-source frameworks or components available in the community – why reinvent the wheel, right? 😜

## :pencil2: Design

Not specified. Free creativity.

## :truck: Deliverable

<p align="center">
  <a href="#rocket-tecnologies">Tecnologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-contribure">How to contribure</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Tecnologies

You will be using the following tools to build this application:

- [![Nest][NestJS]][Nest-url] NestJS as the backend framework
- [![PostgreSQL][PostgreSQL]][PostgreSQL-url] PostgreSQL as the database
- [![Prisma][Prisma]][Prisma-url] Prisma as the Object-Relational Mapper (ORM)
- [![Swagger][Swagger]][Swagger-url] Swagger as the API documentation tool
- [![TypeScript][TypeScript.org]][TypeScript-url] TypeScript as the programming language

## 💻 Project

The films-catolog aims to be a film catalog with basic information on title, description, director and producer.

## 🔖 Layout

Not defined yet.

## 🤔 How to contribure

- Make a fork this repository;
- Create a branch with your feature: `git checkout -b <my feature>`;
- Make commit of your updates: `git commit -m 'feat: <my feature>'`;
- Faça push para a sua branch: `git push origin <my feature>`.

After merging your code, you can delete your branch.

## :memo: License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installation

#### Clone the project and access the folder

```bash
git clone https://github.com/wellyssongodinho/films-catalog-server.git
```

#### Create a PostgreSQL instance

You will be using PostgreSQL as the database for your NestJS application. This tutorial will show you how to install and run PostgreSQL on your machine through a Docker container.

> Note: If you don't want to use Docker, you can set up a PostgreSQL instance natively or get a hosted PostgreSQL database on Heroku.

First, create a docker-compose.yml file in the main folder of your project:

```bash
touch docker-compose.yml
```

This `docker-compose.yml` file is a configuration file that will contain the specifications for running a docker container with PostgreSQL setup inside. Create the following configuration inside the file:

```bash
version: "3.8"
services:
  postgres:
    image: postgres:latest
    restart: always
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    ports:
      - "5432:5432"
    volumes:
      - postgres:/var/lib/postgresql/data
volumes:
  postgres:
```

A few things to understand about this configuration:

The `image` option defines what Docker image to use. Here, you are using the `postgres`  image version 13.5.
The `environment` option specifies the environment variables passed to the container during initialization. You can define the configuration options and secrets – such as the username and password – the container will use here.
The `volumes` option is used for persisting data in the host file system.
The `ports` option maps ports from the host machine to the container. The format follows a `'host_port:container_port'` convention. In this case, you are mapping the port 5432 of the host machine to port 5432 of the postgres container. 5432 is conventionally the port used by PostgreSQL.

Make sure that nothing is running on port `5432` of your machine. To start the postgres container, open a new terminal window and run the following command in the main folder of your project:

```bash
docker-compose up
```

If everything worked correctly, the new terminal window should show logs that the database system is ready to accept connections. You should see logs similar to the following inside the terminal window:

```bash
...
films-catalog-postgres-1  | 
films-catalog-postgres-1  | PostgreSQL init process complete; ready for start up.
films-catalog-postgres-1  | 
films-catalog-postgres-1  | 2022-11-21 13:49:09.525 UTC [1] LOG:  starting PostgreSQL 14.2 (Debian 14.2-1.pgdg110+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 10.2.1-6) 10.2.1 20210110, 64-bit
films-catalog-postgres-1  | 2022-11-21 13:49:09.525 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
films-catalog-postgres-1  | 2022-11-21 13:49:09.525 UTC [1] LOG:  listening on IPv6 address "::", port 5432
films-catalog-postgres-1  | 2022-11-21 13:49:09.526 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
films-catalog-postgres-1  | 2022-11-21 13:49:09.530 UTC [59] LOG:  database system was shut down at 2022-11-21 13:49:09 UTC
films-catalog-postgres-1  | 2022-11-21 13:49:09.534 UTC [1] LOG:  database system is ready to accept connections
```

Congratulations 🎉. You now have your own PostgreSQL database to play around with!

> Note: If you close the terminal window, it will also stop the container. You can avoid this if you add a -d option to the end of the command, like this: docker-compose up -d. This will indefinitely run the container in the background.

To facilitate, add the following command to your package.json.
>package.json
    "db:up": "docker-compose up -d",
    "db:down": "docker-compose down"

### Installing the app

```bash
npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Roadmap

1. backend:

- [x] Create API's (with NestJS)
- [x] Create API's documentation (with Swagger)
- [x] Add Test E2E (with Jest)
- [ ] Add Deploy Heroku
- [ ] Add Test Unit (with Jest)
- [ ] Add Pagination

2. frontend:

- [ ] Create Layout (with React/Figma)
- [ ] Add Hooks (with React)

### Preview Project

- [![CodeSandbox][CodeSandbox]][CodeSandbox-url]:

>Note: This feature is being developed.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add feature AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<h1 id="autor">Author</h1>

- [![Linkedin][Linkedin]][Linkedin-url]
- [![Gmail][Gmail]][Gmail-url]

## Support NestJS

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

[CodeSandbox]: https://img.shields.io/badge/CodeSandbox-20232A?style=for-the-badge&logo=codesandbox&logoColor=#000000
[CodeSandbox-url]: https://codesandbox.io/

[Gmail]: https://img.shields.io/badge/-wellysson.gomes@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:wellysson.gomes@gmail.com
[Gmail-url]: mailto:wellysson.gomes@gmail.com

[Linkedin]: https://img.shields.io/badge/-Wellysson_Godinho-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/wellyssongodinho-236170234/
[Linkedin-url]: https://linkedin.com/in/wellyssongodinho/

[NestJS]: https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=NestJS&logoColor=#E0234E
[Nest-url]: https://nextjs.org

[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/

[Prisma]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io

[Swagger]: https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=black
[Swagger-url]: https://www.prisma.io

[TypeScript.org]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org
