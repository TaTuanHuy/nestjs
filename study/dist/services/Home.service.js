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
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const video_entity_1 = require("../entity/video.entity");
const typeorm_2 = require("typeorm");
let HomeService = exports.HomeService = class HomeService {
    constructor(videosRepository) {
        this.videosRepository = videosRepository;
    }
    async findAll() {
        const result = this.videosRepository.find();
        if (!result) {
            throw new Error(`List Video Not Found`);
        }
        return result;
    }
    async create(IVideo) {
        const video = new video_entity_1.Video();
        video.id = IVideo.id;
        video.video_id = IVideo.video_id;
        video.video_name = IVideo.video_name;
        video.video_description = IVideo.video_description;
        video.author_video = IVideo.author_video;
        video.user = IVideo.user;
        const result = this.videosRepository.save(video);
        if (!result) {
            throw new Error(`Can't save video`);
        }
        return result;
    }
    async findOne(video_id) {
        const result = await this.videosRepository.findOneBy({
            video_id: video_id,
        });
        if (!result) {
            throw new Error('Video Not Found');
        }
        return result;
    }
    async update(video_id, updateVideoDTO) {
        const result = await this.videosRepository.update(video_id, updateVideoDTO);
        if (result.affected == 0) {
            throw new Error('Video Not Found');
        }
        return 'Update Complete';
    }
    async deleteOne(video_id) {
        const result = await this.videosRepository.delete(video_id);
        if (!result) {
            throw new Error('Video Not Found');
        }
    }
};
exports.HomeService = HomeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(video_entity_1.Video)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HomeService);
//# sourceMappingURL=Home.service.js.map