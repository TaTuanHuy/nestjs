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
exports.HomeConTrollers = void 0;
const common_1 = require("@nestjs/common");
const Home_service_1 = require("../../services/Home.service");
const video_entity_1 = require("../../entity/video.entity");
let HomeConTrollers = exports.HomeConTrollers = class HomeConTrollers {
    constructor(appService) {
        this.appService = appService;
    }
    async getAllVideo() {
        try {
            return await this.appService.findAll();
        }
        catch (err) {
            throw new common_1.HttpException({
                status: 404,
                error: 'List Video Not Found',
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async createUser(body) {
        try {
            return await this.appService.create(body);
        }
        catch (err) {
            throw new common_1.HttpException({
                status: 400,
                error: `Can't create video`,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getProfile(Params) {
        try {
            return await this.appService.findOne(Params);
        }
        catch (err) {
            throw new common_1.HttpException({
                status: 404,
                error: 'Video Not Found',
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    update(id, updateVideoDTO) {
        try {
            return this.appService.update(id, updateVideoDTO);
        }
        catch (err) {
            throw new common_1.HttpException({
                status: 404,
                error: `Can't Found Video you want delete`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async DeleteVideo(Params) {
        try {
            return await this.appService.deleteOne(Params);
        }
        catch (err) {
            throw new common_1.HttpException({
                status: 404,
                error: `Can't Found Video you want delete`,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeConTrollers.prototype, "getAllVideo", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HomeConTrollers.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HomeConTrollers.prototype, "getProfile", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, video_entity_1.Video]),
    __metadata("design:returntype", Promise)
], HomeConTrollers.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HomeConTrollers.prototype, "DeleteVideo", null);
exports.HomeConTrollers = HomeConTrollers = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [Home_service_1.HomeService])
], HomeConTrollers);
//# sourceMappingURL=Home.controller.js.map