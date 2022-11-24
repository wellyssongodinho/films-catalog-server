import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { createFilmMock } from './../src/api/films/mock/create-film.dock';
import { AppModule } from './../src/app.module';

const filmMock = new createFilmMock();

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe('FilmsModule', () => {
    it('/ (GET FILMS) ', async () => {
      const response = await request(app.getHttpServer())
        .get('/films')
        .query({ title: filmMock.title });
      expect(response.body.status).toEqual(404);
      expect(response.body.message).toEqual(
        `Film ${filmMock.title} does not exists`,
      );
    });
    it('/ (POST FILMS) ', async () => {
      return await request(app.getHttpServer())
        .post('/films')
        .send(filmMock)
        .expect(201);
    });
    it('/ (PATCH FILMS) ', async () => {
      const response = await request(app.getHttpServer())
        .get('/films')
        .query({ title: filmMock.title })
        .expect(200);
      expect(response.body.title).toEqual(filmMock.title);
      await request(app.getHttpServer())
        .patch(`/films/${response.body.id}`)
        .send({
          title: response.body.title + '@',
          description: response.body.description,
          director: response.body.director,
          producer: response.body.producer,
          url: response.body.url,
        })
        .expect(200);
    });
    it('/ (DELETE FILMS) ', async () => {
      const response = await request(app.getHttpServer())
        .get('/films')
        .query({ title: filmMock.title + '@' })
        .expect(200);
      expect(response.body.title).toEqual(filmMock.title + '@');
      await request(app.getHttpServer())
        .delete(`/films/${response.body.id}`)
        .expect(200);
    });
  });
});
