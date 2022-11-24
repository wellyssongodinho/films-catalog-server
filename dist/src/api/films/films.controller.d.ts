import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { FilmEntity } from './entities/film.entity';
import { FilmsService } from './films.service';
export declare class FilmsController {
    private readonly filmsService;
    constructor(filmsService: FilmsService);
    create(createFilmDto: CreateFilmDto): Promise<import(".prisma/client").Film | import("@nestjs/common").ConflictException>;
    import(): Promise<import("@nestjs/common").ConflictException | FilmEntity[]>;
    findAll(title?: string): Promise<import(".prisma/client").Film | import("@nestjs/common").NotFoundException | import(".prisma/client").Film[]>;
    findExternalApi(): Promise<string>;
    findOne(id: string): Promise<import(".prisma/client").Film>;
    update(id: string, updateFilmDto: UpdateFilmDto): Promise<import(".prisma/client").Film>;
    remove(id: string): Promise<import(".prisma/client").Film>;
}
