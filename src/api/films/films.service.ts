/* eslint-disable prettier/prettier */
import {
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { Film, Prisma, PrismaService } from './../../../src/config/prisma';
import api from './../../../src/service/api';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { FilmEntity } from './entities/film.entity';

@Injectable()
export class FilmsService {
  constructor(private prisma: PrismaService) {}

  async create(createFilmDto: CreateFilmDto) {
    //'This action adds a new film';
    const film = await this.findOneTitle(createFilmDto.title);
    if (film instanceof Error) {
      return await this.prisma.film.create({ data: createFilmDto });
    } else {
      return new ConflictException(
        `Title ${createFilmDto.title} already exists`,
      );
    }
  }

  async import() {
    //'This action adds a new film using the external API';
    const filmsCatalog: CreateFilmDto[] = JSON.parse(
      await this.findExternalApi(),
    );
    // console.log(JSON.stringify(films));
    const films: FilmEntity[] = [];
    for (const {
      title,
      description,
      director,
      producer,
      url,
    } of filmsCatalog) {
      const film = await this.create({
        title,
        description,
        director,
        producer,
        url,
      });
      if (film instanceof Error) return film;
      else films.push(film);
    }
    return films;
  }

  async findAll(limit?: number, cursor?: Prisma.FilmWhereUniqueInput): Promise<Film[]> {
    //`This action returns all films`;
    if (isNaN(limit) )
      return await this.prisma.film.findMany();
    else{
      if (!cursor)
        return await this.prisma.film.findMany({
          take: limit
        });  
      else
        return await this.prisma.film.findMany({
        take: limit,
        skip: 1,
        cursor
      });
    }  
  }

  async findOneTitle(title: string) {
    //`This action returns a #${id} film or #${title} film`;
    const film = await this.prisma.film.findUnique({ where: { title } });
    if (!film || film === undefined) {
      return new NotFoundException(`Film ${title} does not exists`);
    }
    return film;
  }

  async findOne(id: number) {
    //`This action returns a #${id} film`;
    return await this.prisma.film.findUnique({ where: { id } });
  }

  async findExternalApi() {
    //`This action returns all films external API`;
    // Axios GET Query Parameters
    const queryParams: AxiosRequestConfig = {
      params: {limit: 50},
    };
    const response = await api.get('/films', queryParams);
    return JSON.stringify(response.data);
  }

  async update(id: number, updateFilmDto: UpdateFilmDto) {
    //`This action updates a #${id} film`;
    return await this.prisma.film.update({
      where: { id },
      data: updateFilmDto,
    });
  }

  async remove(id: number) {
    // `This action removes a #${id} film`;
    return await this.prisma.film.delete({ where: { id } });
  }
}
