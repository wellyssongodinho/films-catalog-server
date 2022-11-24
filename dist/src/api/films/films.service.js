"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("./../../../src/config/prisma");
const api_1 = require("./../../../src/service/api");
let FilmsService = class FilmsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createFilmDto) {
        const film = await this.findOneTitle(createFilmDto.title);
        if (film instanceof Error) {
            return await this.prisma.film.create({ data: createFilmDto });
        }
        else {
            return new common_1.ConflictException(`Title ${createFilmDto.title} already exists`);
        }
    }
    async import() {
        const filmsCatalog = JSON.parse(await this.findExternalApi());
        const films = [];
        for (const { title, description, director, producer, url, } of filmsCatalog) {
            const film = await this.create({
                title,
                description,
                director,
                producer,
                url,
            });
            if (film instanceof Error)
                return film;
            else
                films.push(film);
        }
        return films;
    }
    async findAll() {
        return await this.prisma.film.findMany();
    }
    async findOneTitle(title) {
        const film = await this.prisma.film.findUnique({ where: { title } });
        if (!film || film === undefined) {
            return new common_1.NotFoundException(`Film ${title} does not exists`);
        }
        return film;
    }
    async findOne(id) {
        return await this.prisma.film.findUnique({ where: { id } });
    }
    async findExternalApi() {
        const queryParams = {
            limit: 50,
        };
        const response = await api_1.api.get('/films', queryParams);
        return JSON.stringify(response.data);
    }
    async update(id, updateFilmDto) {
        return await this.prisma.film.update({
            where: { id },
            data: updateFilmDto,
        });
    }
    async remove(id) {
        return await this.prisma.film.delete({ where: { id } });
    }
};
FilmsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], FilmsService);
exports.FilmsService = FilmsService;
//# sourceMappingURL=films.service.js.map