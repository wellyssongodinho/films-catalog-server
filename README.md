<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
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
git clone https://github.com/wellyssongodinho/films-catalog.git
```

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

[![Linkedin][Linkedin]][Linkedin-url]
[![Gmail][Gmail]]([Gmail-url])

## Support NestJS

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

[CodeSandbox]: https://img.shields.io/badge/CodeSandbox-20232A?style=for-the-badge&logo=codesandbox&logoColor=#000000
[CodeSandbox-url]: https://codesandbox.io/

[Gmail]: https://img.shields.io/badge/-wellysson.gomes@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:wellysson.gomes@gmail.com
[Gmail-url]: mailto: wellysson.gomes@gmail.com

[Linkedin]: https://img.shields.io/badge/-Wellysson_Godinho-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/wellyssongodinho-236170234/
[Linkedin-url]: linkedin.com/in/wellyssongodinho/

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
