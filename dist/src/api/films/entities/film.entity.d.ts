import { Film } from '@prisma/client';
export declare class FilmEntity implements Film {
    id: number;
    title: string;
    description: string | null;
    director: string | null;
    producer: string | null;
    url: string;
    createdAt: Date;
    updatedAt: Date;
}
