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
  producer?: string;

  @ApiProperty()
  url: string;
}
