# NestJS with Prisma and Postgres

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

****

# NestJS with Prisma and Postgres (Step by Step)

## Technologies you will use

You will be using the following tools to build this application:

- [![Nest][NestJS]][Nest-url] NestJS as the backend framework
- [![PostgreSQL][PostgreSQL]][PostgreSQL-url] PostgreSQL as the database
- [![Prisma][Prisma]][Prisma-url] Prisma as the Object-Relational Mapper (ORM)
- [![Swagger][Swagger]][Swagger-url] Swagger as the API documentation tool
- [![TypeScript][TypeScript.org]][TypeScript-url] TypeScript as the programming language

## Prerequisites

### Assumed knowledge

This is a beginner friendly tutorial. However, this tutorial assumes:

- Basic knowledge of JavaScript or TypeScript (preferred)
- Basic knowledge of NestJS

> Note: If you're not familiar with NestJS, you can quickly learn the basics by following the overview section in the NestJS docs.

You need Node.js v14.17.0 or higher for this guide (learn more about system requirements).

## Development environment

To follow along with this tutorial, you will be expected to:

- ... have Node.js installed.
- ... have Docker or PostgreSQL installed.
- ... have the Prisma VSCode Extension installed. (optional)
- ... have access to a Unix shell (like the terminal/shell in Linux and macOS) to run the commands provided in this series. (optional)

>Note 1: The optional Prisma VSCode extension adds some really nice IntelliSense and syntax highlighting for Prisma.
>Note 2: If you don't have a Unix shell (for example, you are on a Windows machine), you can still follow along, but the shell commands may need to be modified for your machine.

## Generate the NestJS Project

The first thing you will need is to install the NestJS CLI. The NestJS CLI comes in very handy when working with a NestJS project. It comes with built-in utilities that help you initialize, develop and maintain your NestJS application.

You can use the NestJS CLI to create an empty project. To start, run the following command in the location where you want the project to reside:

```bash
npx @nestjs/cli new films-catalog
```

The CLI will prompt you to choose a package manager for your project — choose npm. Afterward, you should have a new NestJS project in the current directory.

Open the project in your preferred code editor (we recommend VSCode). You should see the following files:

```bash
FILMS-CATALOG
  ├── node_modules
  ├── src
  │   ├── app.controller.spec.ts
  │   ├── app.controller.ts
  │   ├── app.module.ts
  │   ├── app.service.ts
  │   └── main.ts
  ├── test
  │   ├── app.e2e-spec.ts
  │   └── jest-e2e.json
  ├── README.md
  ├── nest-cli.json
  ├── package-lock.json
  ├── package.json
  ├── tsconfig.build.json
  └── tsconfig.json
```

Most of the code you work on will reside in the src directory. The NestJS CLI has already created a few files for you. Some of the notable ones are:

- src/app.module.ts: The root module of the application.
- src/app.controller.ts: A basic controller with a single route: /. This route will return a simple 'Hello World!' message.
- src/main.ts: The entry point of the application. It will start the NestJS application.
You can start your project by using the following command:

```bash
npm run start:dev
```

This command will watch your files, automatically recompiling and reloading the server whenever you make a change. To verify the server is running, go to the URL <http://localhost:3000/>. You should see an empty page with the message 'Hello World!'.

>Note: You should keep the server running in the background as you go through this tutorial.

## Create a PostgreSQL instance

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

## Set up Prisma

To get started, first install the Prisma CLI as a development dependency. The Prisma CLI will allow you to run various commands and interact with your project.

```bash
npm install -D prisma
```

You can initialize Prisma inside your project by running:

```bash
npx prisma init
```

This will create a new `prisma` directory with a `schema.prisma` file. This is the main configuration file that contains your database schema. This command also creates a `.env` file inside your project.

## Set your environment variable

Inside the `.env` file, you should see a `DATABASE_URL` environment variable with a dummy connection string. Replace this connection string with the one for your PostgreSQL instance.

```bash
// .env
DATABASE_URL="postgres://postgres:postgres@localhost:5432/films-catalog-db"
```

## Understand the Prisma schema

If you open prisma`/schema.prisma`, you should see the following default schema:

```bash
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

This file is written in the _Prisma Schema Language_, which is a language that Prisma uses to define your database schema. The `schema.prisma` file has three main components:

- Data source: Specifies your database connection. The above configuration means that your database provider is PostgreSQL and the database connection string is available in the DATABASE_URL environment variable.

- Generator: Indicates that you want to generate Prisma Client, a type-safe query builder for your database. It is used to send queries to your database.

- Data model: Defines your database models. Each model will be mapped to a table in the underlying database. Right now there are no models in your schema, you will explore this part in the next section.

>Note: For more information on Prisma schema, check out the Prisma docs.

## Model the data

Now it's time to define the data models for your application. For this tutorial, you will only need an Film model to represent each film in the catalog.

Inside the prisma/prisma.schema file, add a new model to your schema named Film

```javascript
// prisma/schema.prisma

model Film {
  id          Int      @id @default(autoincrement())
  title       String   @unique
  description String?
  director    String
  producer    String
  url         String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

Here, you have created an `Film` model with several fields. Each field has a name (`id, title`, etc.), a type (`Int, String`, etc.), and other optional attributes (`@id, @unique`, etc.). Fields can be made optional by adding a `?` after the field type.

The id field has a special attribute called `@id`. This attribute indicates that this field is the primary key of the model. The `@default(autoincrement())` attribute indicates that this field should be automatically incremented and assigned to any newly created record.

The two `DateTime` fields, `createdAt and updatedAt`, will track when an film is created and when it was last updated. The @updatedAt attribute will automatically update the field with the current timestamp whenever an film is modified.date the field with the current timestamp any time an film is modified.

## Migrate the database

With the Prisma schema defined, you will run migrations to create the actual tables in the database. To generate and execute your first migration, run the following command in the terminal:

```bash
npx prisma migrate dev --name "init"
```

This command will do three things:

- **Save the migration**: Prisma Migrate will take a snapshot of your schema and figure out the SQL commands necessary to carry out the migration. Prisma will save the migration file containing the SQL commands to the newly created `prisma/migrations` folder.
- **Execute the migration**: Prisma Migrate will execute the SQL in the migration file to create the underlying tables in your database.
- **Generate Prisma Client**: Prisma will generate Prisma Client based on your latest schema. Since you did not have the Client library installed, the CLI will install it for you as well. You should see the `@prisma/client` package inside dependencies in your package.json file. Prisma Client is a TypeScript query builder auto-generated from your Prisma schema. It is tailored to your Prisma schema and will be used to send queries to the database.

>Note: You can learn more about Prisma Migrate in the Prisma docs.

If completed successfully, you should see a message like this :

```bash
...
The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20221121151455_init/
    └─ migration.sql

Your database is now in sync with your schema.

...
✔ Generated Prisma Client (4.6.1 | library) to ./node_modules/@prisma/client in 187ms
```

Check the generated migration file to get an idea about what Prisma Migrate is doing behind the scenes:

```bash
-- prisma/migrations/20221121151455_init/migration.sql

-- CreateTable
CREATE TABLE "Film" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "director" TEXT,
    "producer" TEXT,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Film_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Film_title_key" ON "Film"("title");
```

>Note: The name of your migration file will be slightly different.

This is the SQL needed to create the film table inside your PostgreSQL database. It was automatically generated and executed by Prisma based on your Prisma schema.

## Seed the database (not used in this application)

Currently, the database is empty. So you will create a seed script that will populate the database with some dummy data.

Firstly, create a seed file called `prisma/seed.ts`. This file will contain the dummy data and queries needed to seed your database.

```bash
touch prisma/seed.ts
```

Then, inside the seed file, add the following code:

```bash
// prisma/seed.ts (not used in this application)

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy films
  const post1 = await prisma.article.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: 'Prisma Adds Support for MongoDB',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: false,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "What's new in Prisma? (Q1/22)",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
```

Inside this script, you first initialize Prisma Client. Then you create two articles using the `prisma.upsert()` function. The upsert function will only create a new article if no article matches the `where` condition. You are using an `upsert` query instead of a `create` query because `upsert` removes errors related to accidentally trying to insert the same record twice.

You need to tell Prisma what script to execute when running the seeding command. You can do this by adding the prisma.seed key to the end of your package.json file:

```javascript
// package.json

// ...
  "scripts": {
    // ...
  },
  "dependencies": {
    // ...
  },
  "devDependencies": {
    // ...
  },
  "jest": {
    // ...
  },
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  }
```

You should see the following output:

```bash
Seeding finished.

🌱  The seed command has been executed.
```

## Create the Prisma's module for NestJS

### Opt1: Create a Prisma service

Inside your NestJS application, it is good practice to abstract away the Prisma Client API from your application. To do this, you will create a new service that will contain Prisma Client. This service, called `PrismaService`, will be responsible for instantiating a `PrismaClient` instance and connecting to your database.

The Nest CLI gives you an easy way to generate modules and services directly from the CLI. Run the following command in your terminal:

```bash
npx nest generate module prisma
npx nest generate service prisma
```

>Note 1: If necessary, refer to the NestJS docs for an introduction to services and modules.
>Note 2: In some cases running the `nest generate` command with the server already running may result in NestJS throwing an exception that says: Error: `Cannot find module './app.controller'.` If you run into this error, run the following command from the terminal: `rm -rf dist` and restart the server.

This should generate a new subdirectory ./src/prisma with a prisma.module.ts and prisma.service.ts file. Update the service file to contain the following code:

```javascript
// src/prisma/prisma.service.ts

import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
```

The `enableShutdownHooks` definition is needed to ensure your application shuts down gracefully. More information is available in the NestJS docs.

The Prisma module will be responsible for creating a singleton instance of the `PrismaService` and allow sharing of the service throughout your application. To do this, you will add the `PrismaService` to the exports array in the `prisma.module`.ts file:

```javascript
// src/prisma/prisma.module.ts

import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

Now, any module that imports the `PrismaModule` will have access to `PrismaService` and can inject it into its own components/services. This is a common pattern for NestJS applications.

With that out of the way, you are done setting up Prisma! You can now get to work on building the REST API.

### Opt2: Create the files

**src/config/prisma/prisma.service.ts**

```javascript
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect()
    console.log('Database connection has been established.')
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }
}
```

**src/config/prisma/prisma.module.ts**

```javascript
import { Module, Global } from '@nestjs/common'

import { PrismaService } from './prisma.service'

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
```

**src/modules/prisma/index.ts**

```javascript
export * from './prisma.module'
export * from './prisma.service'
export * from '@prisma/client'
```

Import this module in AppModule:

```javascript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

Now we have a global Prisma module, that is, we can use PrismaClient in any class without having to create an instance or even import it in its respective module.

## Set up Swagger

Swagger is a tool to document your API using the OpenAPI specification. Nest has a dedicated module for Swagger, which you will be using shortly.

Get started by installing the required dependencies:

```javascript
npm install --save @nestjs/swagger swagger-ui-express
```

Now open `main.ts` and initialize Swagger using the `SwaggerModule` class:

```javascript
// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
```

While the application is running, open your browser and navigate to `http://localhost:3000/api`. You should see the Swagger UI.
![swagger-ui](./git/swagger-ui.png)

## Implement CRUD operations

In this section, you will implement the Create, Read, Update, and Delete (CRUD) operations for the Film model and any accompanying business logic.

### Generating a new resource

Before you can implement the REST API, you will need to generate the REST resources for the Film model. This can be done quickly using the Nest CLI. Run the following command in your terminal:

```bash
npx nest generate resource
```

You will be given a few CLI prompts. Answer the questions accordingly:

1. What name would you like to use for this resource (plural, e.g., "users")? **films**
2. What transport layer do you use? **REST API**
3. Would you like to generate CRUD entry points? **Yes**

You should now find a new `src/films` directory with all the boilerplate for your REST endpoints. Inside the `src/films/films.controller.ts` file, you will see the definition of different routes (also called route handlers). The business logic for handling each request is encapsulated in the `src/films/films.service.ts` file. Currently, this file contains dummy implementations.

`nest g resource` command not only generates all the NestJS building blocks (module, service, controller classes) but also an entity class, DTO classes as well as the testing (`.spec`) files. For this project let's use resource `"films"` for `REST API` and `CRUD`.

Below you can see the generated controller file (for `REST API`):

```javascript
// src/films
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Post()
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmsService.create(createFilmDto);
  }

  @Get()
  findAll() {
    return this.filmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmsService.update(+id, updateFilmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmsService.remove(+id);
  }
}
```

Also, it automatically creates placeholders for all the CRUD endpoints (routes for REST APIs, queries and mutations for GraphQL, message subscribes for both Microservices and WebSocket Gateways) - all without having to lift a finger.

Move the created folder films to `src/api`
Our project tree should look similar to this right now:
![crud-generator](./git/crud-generator.png)

If you open the Swagger API page again, you should see something like this:
![swagger-crud1](./git/swagger-crud1.png)

The `SwaggerModule` searches for all @`Body()`, `@Query()`, and `@Param()` decorators on the route handlers to generate this API page.

Create a new file to agrupate the API's services. Below you can see the generated module file:

```javascript
// src/api/api.module.ts

import { Module } from '@nestjs/common';
import { FilmsModule } from './films/films.module';

@Module({
  imports: [FilmsModule],
})
export class ApiModule {}
```

## Add PrismaClient to the App module

To access `PrismaClient` inside the `App module`, you must add the `PrismaModule` as an `import`. Add the following imports to `app.module.ts`:

```javascript
// src/app.module.ts
import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './config/prisma';

@Module({
  imports: [PrismaModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### Define GET /films endpoint

The controller for this endpoint is called `findAll`. This endpoint will return all published films in the database. The `findAll` controller looks like this:

```javascript
// src/api/films/films.controller.ts

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Post()
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmsService.create(createFilmDto);
  }

  @Get()
  findAll() {
    return this.filmsService.findAll();
  }
```

You need to update `FilmsService.findAll()` to return an array of all published films in the database:

```javascript
// src/api/films/films.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';

@Injectable()
export class FilmsService {
  constructor(private prisma: PrismaService) {}

  create(createFilmDto: CreateFilmDto) {
    return 'This action adds a new film';
  }

  findAll() {
    //`This action returns all films`;
    return this.prisma.film.findMany();
  }
  ...
```

The findMany query will return all films records.

### Define GET /films/:id endpoint

The controller route handler for this endpoint is called findOne. It looks like this:

```javascript
// src/api/films/films.controller.ts
  ...
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(+id);
  }
  ...
```

The route accepts a dynamic id parameter, which is passed to the `findOne` controller route handler. Since the Film model has an integer id field, the id parameter needs to be casted to a number using the + operator.

Now, update the `findOne` method in the `FilmService` to return the film with the given id:

```javascript
  // src/api/films/films.service.ts

  ...
  findOne(id: number) {
    //`This action returns a #${id} film`;
    return this.prisma.film.findUnique({ where: { id } });
  }
```

### Define POST /films endpoint

This is the endpoint for creating new films. The controller route handler for this endpoint is called create. It looks like this:

```javascript
  ...
  constructor(private readonly filmsService: FilmsService) {}

  @Post()
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmsService.create(createFilmDto);
  }
  ...
```

Notice that it expects arguments of type CreateFilmDto in the request body. A DTO (Data Transfer Object) is an object that defines how the data will be sent over the network. Currently, the CreateFilmDto is an empty class. You will add properties to it to define the shape of the request body.

```javascript
// src/api/films/dto/create-film.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateFilmDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  director?: string;

  @ApiProperty({ required: false })
  producer: string;

  @ApiProperty()
  url: string;
}
```

The `@ApiProperty` decorators are required to make the class properties visible to the `SwaggerModule`. More information about this is available in the NestJS docs.

The CreateFilmDto should now be defined in the Swagger API page under Schemas. The shape of `UpdateFilmDto` is automatically inferred from the `CreateFilmDto` definition. So `UpdateFilmDto` is also defined inside `Swagger`.

![create-film-dto](./git/create-film-dto.png)

Now update the create method in the FilmService to create a new film in the database:

```javascript
// src/api/films/films.service.ts

export class FilmsService {
  constructor(private prisma: PrismaService) {}

  create(createFilmDto: CreateFilmDto) {
    //'This action adds a new film';
    return this.prisma.film.create({ data: createFilmDto });
  }
```

### Define PATCH /films/:id endpoint

This endpoint is for updating existing films. The route handler for this endpoint is called `update`. It looks like this:

```javascript
// src/api/films/films.constroller.ts
...
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmsService.update(+id, updateFilmDto);
  }
  ...
```

The `updateFilmDto` definition is defined as a PartialType of `CreateFilmDto`. So it can have all the properties of `CreateFilmDto`.

```javascript
// import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateFilmDto } from './create-film.dto';

export class UpdateFilmDto extends PartialType(CreateFilmDto) {}
```

Just like before, you must update the corresponding service method for this operation:

```javascript
// src/api/films/films.service.ts
  ...
  update(id: number, updateFilmDto: UpdateFilmDto) {
    //`This action updates a #${id} film`;
    return this.prisma.film.update({
      where: { id },
      data: updateFilmDto,
    });
  }
  ...
```

The `film.update` operation will try to find an Film record with the given id and update it with the data of `updateFilmDto`.

If no such Film record is found in the database, Prisma will return an error. In such cases, the API does not return a user-friendly error message. You will learn about error handling with NestJS in a future tutorial.

### Define DELETE /films/:id endpoint

This endpoint is to delete existing films. The route handler for this endpoint is called `remove`. It looks like this:

```javascript
// src/api/films/films.controller.ts
  ...
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmsService.remove(+id);
  }
```

Just like before, go to `FilmsService` and update the corresponding method:

```javascript
// src/api/films/films.service.ts
  ...
  remove(id: number) {
    // `This action removes a #${id} film`;
    return this.prisma.film.delete({ where: { id } });
  }
```

That was the last operation for the films endpoint. Congratulations your API is almost ready! 🎉

## Group endpoints together in Swagger

Add an `@ApiTags` decorator to the `FilmsControlle`r class, to group all the film endpoints together in Swagger:

```javascript
...
import { ApiTags } from '@nestjs/swagger';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { FilmsService } from './films.service';

@Controller('films')
@ApiTags('films')
export class FilmsController {
...
```

The API page now has the films endpoints grouped together.

![film-endpoints-grouped](./git/film-endpoints-grouped.png)

## Update Swagger response types

If you look at the Responses tab under each endpoint in Swagger, you will find that the Description is empty. This is because Swagger does not know the response types for any of the endpoints. You're going to fix this using a few decorators.

First, you need to define an entity that Swagger can use to identify the shape of the returned entity object. To do this, update the FilmEntity class in the film.entity.ts file as follows:

```javascript
import { ApiProperty } from '@nestjs/swagger';
import { Film } from '@prisma/client';

export class FilmEntity implements Film {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty({ required: false, nullable: true })
  director: string | null;

  @ApiProperty({ required: false, nullable: true })
  producer: string | null;

  @ApiProperty()
  url: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
```

This is an implementation of the Film type generated by Prisma Client, with @ApiProperty decorators added to each property.

Now, it's time to annotate the controller route handlers with the correct response types. NestJS has a set of decorators for this purpose.

```javascript
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { FilmEntity } from './entities/film.entity';
import { FilmsService } from './films.service';

@Controller('films')
@ApiTags('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Post()
  @ApiCreatedResponse({ type: FilmEntity })
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmsService.create(createFilmDto);
  }

  @Get()
  @ApiOkResponse({ type: FilmEntity, isArray: true })
  findAll() {
    return this.filmsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: FilmEntity })
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: FilmEntity })
  update(@Param('id') id: string, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmsService.update(+id, updateFilmDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: FilmEntity })
  remove(@Param('id') id: string) {
    return this.filmsService.remove(+id);
  }
}
```

You added the `@ApiOkResponse` for GET, PATCH and DELETE endpoints and `@ApiCreatedResponse` for POST endpoints. The type property is used to specify the return type. You can find all the response decorators that NestJS provides in the NestJS docs.

Now, Swagger should properly define the response type for all endpoints on the API page.

![response-types](./git/response-types.png)

# Summary and final remarks

Congratulations! You've built a rudimentary REST API using NestJS. Throughout this tutorial you:

Built a REST API with NestJS
Smoothly integrated Prisma in a NestJS project
Documented your REST API using Swagger and OpenAPI
One of the main takeaways from this tutorial is how easy it is to build a REST API with NestJS and Prisma. This is an incredibly productive stack for rapidly building well structured, type-safe and maintainable backend applications.

## Adds

After uploading your code to github

### CI/CD with GitHub Actions: Automatic Deploy

#### Set up GitHub Actions

1- Acess your repository in the github
2- Click on Tab Actions
3- Select the Nodejs Workflow Model
4- This will create a file node.js.yml that will be responsible for automatic deployed.
5- At the end it will automatically run the workflow as defined.

For more information access, [read more here](https://docs.github.com/en/actions/learn-github-actions).

![git-hub-actions](./git/git-hub-actions.png)
![github-workflows](./git/github-workflows.png)

### Install Local Heroku

```bash
sudo npm install -g heroku
````

#### Verify Your Installation

To verify your CLI installation, use the heroku --version command:

```bash
heroku --version
  heroku/7.66.4 linux-x64 node-v16.18.1
```

#### Register or access your account in Heroku

1- Create a new app;
2- Choose your name <films-catalog-server>
3- Choose a region <> 'us-east-1'

#### Get Started with the Heroku CLI

After you install the CLI, run the heroku login command. Enter any key to go to your web browser to complete login. The CLI then logs you in automatically:

```bash
$ heroku login
heroku: Press any key to open up the browser to login or q to exit
 ›   Warning: If browser does not open, visit
 ›   https://cli-auth.heroku.com/auth/browser/***
heroku: Waiting for login...
Logging in... done
Logged in as me@example.com
```

If you’d prefer to stay in the CLI to enter your credentials, run heroku login -i.

```bash
heroku login -i
heroku: Enter your login credentials
Email: me@example.com
Password: ***************
Two-factor code: ********
Logged in as me@heroku.com
```

#### Join your Git repository

Access your repository directory <films-catalog-server>

```bash
heroku git:remote -a films-catalog-server

/media/wellysson/SW/JavaScript Projects/films-catalog-server main
❯ heroku git:remote -a films-catalog-server
set git remote heroku to https://git.heroku.com/films-catalog-server.git
```

#### Deployment method GitHub

1- Access your application in Heroku and select the Deploy Sheet
2- Connect to GitHub
3- Search for a repository to connect
![heroku-connect-github](./git/heroku-connect-github.png)
4- Click in Connect
5- Select Automatic Deploy
![heroku-connected-github](./git/heroku-connected-github.png)
#### Deploy your application

Commit your code to the repository and deploy it to Heroku using Git.

```bash
$ git add .
$ git commit -am "make it better"
$ git push heroku main
```



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
