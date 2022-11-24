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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_film_dto_1 = require("./dto/create-film.dto");
const update_film_dto_1 = require("./dto/update-film.dto");
const film_entity_1 = require("./entities/film.entity");
const films_service_1 = require("./films.service");
let FilmsController = class FilmsController {
    constructor(filmsService) {
        this.filmsService = filmsService;
    }
    async create(createFilmDto) {
        return await this.filmsService.create(createFilmDto);
    }
    async import() {
        return await this.filmsService.import();
    }
    async findAll(title) {
        if (!title)
            return await this.filmsService.findAll();
        else
            return await this.filmsService.findOneTitle(title);
    }
    async findExternalApi() {
        return await this.filmsService.findExternalApi();
    }
    async findOne(id) {
        return await this.filmsService.findOne(+id);
    }
    async update(id, updateFilmDto) {
        return await this.filmsService.update(+id, updateFilmDto);
    }
    async remove(id) {
        return await this.filmsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: film_entity_1.FilmEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_film_dto_1.CreateFilmDto]),
    __metadata("design:returntype", Promise)
], FilmsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/api'),
    (0, swagger_1.ApiCreatedResponse)({ type: film_entity_1.FilmEntity }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FilmsController.prototype, "import", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: film_entity_1.FilmEntity, isArray: true }),
    (0, swagger_1.ApiQuery)({ name: 'title', required: false }),
    __param(0, (0, common_1.Query)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilmsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/api'),
    (0, swagger_1.ApiOkResponse)({ type: film_entity_1.FilmEntity }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FilmsController.prototype, "findExternalApi", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: film_entity_1.FilmEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilmsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: film_entity_1.FilmEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_film_dto_1.UpdateFilmDto]),
    __metadata("design:returntype", Promise)
], FilmsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: film_entity_1.FilmEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilmsController.prototype, "remove", null);
FilmsController = __decorate([
    (0, common_1.Controller)('films'),
    (0, swagger_1.ApiTags)('films'),
    __metadata("design:paramtypes", [films_service_1.FilmsService])
], FilmsController);
exports.FilmsController = FilmsController;
//# sourceMappingURL=films.controller.js.map