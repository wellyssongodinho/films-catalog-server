import { CreateFilmDto } from '../dto/create-film.dto';

export class createFilmMock extends CreateFilmDto {
  title = 'Mock';
  description? = 'Mock';
  director? = 'Mock';
  producer? = 'Mock';
  url = 'Mock';
  constructor(title?, description?, director?, producer?, url?) {
    super();
    this.title = title ? title : this.title;
    this.description = description ? description : this.description;
    this.director = director ? director : this.director;
    this.producer = producer ? producer : this.producer;
    this.url = url ? url : this.url;
  }
}
