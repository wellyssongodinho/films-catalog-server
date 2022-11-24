import { ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from './../../../src/config/prisma';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { FilmEntity } from './entities/film.entity';
export declare class FilmsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFilmDto: CreateFilmDto): Promise<import(".prisma/client").Film | ConflictException>;
    import(): Promise<ConflictException | FilmEntity[]>;
    findAll(): Promise<import(".prisma/client").Film[]>;
    findOneTitle(title: string): Promise<import(".prisma/client").Film | NotFoundException>;
    findOne(id: number): Promise<import(".prisma/client").Film>;
    findExternalApi(): Promise<string>;
    update(id: number, updateFilmDto: UpdateFilmDto): Promise<import(".prisma/client").Film>;
    remove(id: number): Promise<import(".prisma/client").Film>;
}
