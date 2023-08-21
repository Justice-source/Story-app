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
exports.StoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const story_entity_ts_1 = require("./entities/story.entity.ts");
let StoriesService = exports.StoriesService = class StoriesService {
    constructor(storyRepository) {
        this.storyRepository = storyRepository;
    }
    create(story) {
        return this.storyRepository.save(story);
    }
    findAll() {
        return this.storyRepository.find();
    }
    async findOne(id) {
        return await this.storyRepository.findOne({ where: { id } });
    }
    async update(id, updateData) {
        const product = await this.storyRepository.findOneBy({ id });
        Object.assign(story_entity_ts_1.Story, updateData);
        return this.storyRepository.save(story_entity_ts_1.story);
    }
    async delete(id) {
        const story = await this.storyRepository.findOneBy({ id });
        if (!story) {
            throw new common_1.NotFoundException('Story not found');
        }
        await this.storyRepository.remove(story);
    }
};
exports.StoriesService = StoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(story_entity_ts_1.Story)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StoriesService);
//# sourceMappingURL=stories.service.js.map