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
exports.VideoController = void 0;
const Video_service_1 = require("../../services/Video.service");
const common_1 = require("@nestjs/common");
const auth_profile_guard_1 = require("../../guard/auth.profile.guard");
const auth_video_guard_1 = require("../../guard/auth.video.guard");
const IVideo_1 = require("../../interface/IVideo");
let VideoController = exports.VideoController = class VideoController {
    constructor(videoService) {
        this.videoService = videoService;
    }
    async createVideo(req, reqBody) {
        try {
            return await this.videoService.createVideo(reqBody, req.user.id);
        }
        catch (err) {
            throw new common_1.HttpException({
                status: 400,
                error: `Can't create video`,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getAllMyVideo(req) {
        try {
            return await this.videoService.getAllVideo(req.user.id);
        }
        catch (err) {
            throw new common_1.HttpException({
                status: 400,
                error: `Can't get video`,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getProfileVideo(req) {
        try {
            return await this.videoService.getOneVideo(req.params.id);
        }
        catch (err) {
            throw new common_1.HttpException({
                status: 400,
                error: `Can't get video`,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateVideo(req, reqBody) {
        try {
            return await this.videoService.updateVideo(req.user.id, reqBody);
        }
        catch (err) {
            throw new common_1.HttpException({
                status: 400,
                error: `Can't update Video`,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteVideo(req) {
        try {
            return await this.videoService.deleteOne(req.user.id);
        }
        catch (err) {
            throw new common_1.HttpException({
                status: 400,
                error: `Can't delete Video`,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.UseGuards)(auth_profile_guard_1.AuthGuardProfile),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, IVideo_1.IVideo]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "createVideo", null);
__decorate([
    (0, common_1.Get)('myVideo'),
    (0, common_1.UseGuards)(auth_profile_guard_1.AuthGuardProfile),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "getAllMyVideo", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(auth_video_guard_1.AuthGuardVideo),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "getProfileVideo", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.UseGuards)(auth_video_guard_1.AuthGuardVideo),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, IVideo_1.IVideo]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "updateVideo", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(auth_video_guard_1.AuthGuardVideo),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "deleteVideo", null);
exports.VideoController = VideoController = __decorate([
    (0, common_1.Controller)('video'),
    __metadata("design:paramtypes", [Video_service_1.VideoService])
], VideoController);
//# sourceMappingURL=Video.controller.js.map