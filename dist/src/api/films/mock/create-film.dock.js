"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFilmMock = void 0;
const create_film_dto_1 = require("../dto/create-film.dto");
class createFilmMock extends create_film_dto_1.CreateFilmDto {
    constructor(title, description, director, producer, url) {
        super();
        this.title = 'Mock';
        this.description = 'Mock';
        this.director = 'Mock';
        this.producer = 'Mock';
        this.url = 'Mock';
        this.title = title ? title : this.title;
        this.description = description ? description : this.description;
        this.director = director ? director : this.director;
        this.producer = producer ? producer : this.producer;
        this.url = url ? url : this.url;
    }
}
exports.createFilmMock = createFilmMock;
//# sourceMappingURL=create-film.dock.js.map