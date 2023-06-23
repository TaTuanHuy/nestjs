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
exports.VideoService = void 0;
const video_entity_1 = require("../entity/video.entity");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entity/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let VideoService = exports.VideoService = class VideoService {
    constructor(videoRepository, userRepository) {
        this.videoRepository = videoRepository;
        this.userRepository = userRepository;
    }
    async createVideo(IVideo, idUser) {
        try {
            const video = new video_entity_1.Video();
            video.id = IVideo.id;
            video.video_id = IVideo.video_id;
            video.video_name = IVideo.video_name;
            video.video_description = IVideo.video_description;
            video.author_video = IVideo.author_video;
            video.userId = idUser;
            const result = await this.videoRepository.save(video);
            if (!result) {
                throw new Error(`Error saving`);
            }
            return result;
        }
        catch (error) {
            throw new Error('Lỗi');
        }
    }
    async getAllVideo(userId) {
        console.log(userId);
        const result = this.videoRepository.find();
        return result;
    }
};
exports.VideoService = VideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(video_entity_1.Video)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], VideoService);
//# sourceMappingURL=Video.service.js.map