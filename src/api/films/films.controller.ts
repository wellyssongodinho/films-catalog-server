/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags
} from '@nestjs/swagger';
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
  async create(@Body() createFilmDto: CreateFilmDto) {
    return await this.filmsService.create(createFilmDto);
  }

  @Post('/api')
  @ApiCreatedResponse({ type: FilmEntity })
  async import() {
    return await this.filmsService.import();
  }


  @Get()
  @ApiOkResponse({ type: FilmEntity, isArray: true })
  @ApiQuery({ name: 'title', required: false, })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'id', description: 'Last unique ID shown on page. Required param limit', required: false, type: Number })
  async findAll(@Query('title') title?: string, @Query('limit') limit?: number, @Query('id') id?: number) {

    if (!title) {
      if (isNaN(id))
        return await this.filmsService.findAll(+limit, null);
      else{
        const cursor = JSON.parse(`{"id":${+id}}`);
        return await this.filmsService.findAll(+limit, cursor);
      }
    }  
    else return await this.filmsService.findOneTitle(title);
  }

  @Get('/api')
  @ApiOkResponse({ type: FilmEntity })
  async findExternalApi() {
    return await this.filmsService.findExternalApi();
  }

  @Get(':id')
  @ApiOkResponse({ type: FilmEntity })
  async findOne(@Param('id') id: string) {
    return await this.filmsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: FilmEntity })
  async update(@Param('id') id: string, @Body() updateFilmDto: UpdateFilmDto) {
    return await this.filmsService.update(+id, updateFilmDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: FilmEntity })
  async remove(@Param('id') id: string) {
    return await this.filmsService.remove(+id);
  }
}
