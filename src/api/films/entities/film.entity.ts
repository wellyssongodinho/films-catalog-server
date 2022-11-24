import { ApiProperty } from '@nestjs/swagger';
import { Film } from '@prisma/client';

export class FilmEntity implements Film {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty({ required: false, nullable: true })
  director: string | null;

  @ApiProperty({ required: false, nullable: true })
  producer: string | null;

  @ApiProperty()
  url: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
