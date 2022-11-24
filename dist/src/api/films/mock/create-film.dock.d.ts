import { CreateFilmDto } from '../dto/create-film.dto';
export declare class createFilmMock extends CreateFilmDto {
    title: string;
    description?: string;
    director?: string;
    producer?: string;
    url: string;
    constructor(title?: any, description?: any, director?: any, producer?: any, url?: any);
}
