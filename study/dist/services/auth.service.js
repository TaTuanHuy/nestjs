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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const User_service_1 = require("./User.service");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entity/user.entity");
const typeorm_2 = require("typeorm");
let AuthService = exports.AuthService = class AuthService {
    constructor(userService, jwtService, UserRepository) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.UserRepository = UserRepository;
    }
    async SignIn(userName, passWord) {
        const user = await this.userService.findUser(userName);
        if (passWord !== user.pass_word) {
            throw new common_1.UnauthorizedException();
        }
        const payloads = {
            userName: user.user_name,
            fullName: user.full_name,
            userId: user.user_id,
            id: user.id,
        };
        const access_token = await this.jwtService.signAsync(payloads);
        return access_token;
    }
    async getProfile(token) {
        const user = await this.jwtService.verifyAsync(token, {
            secret: 'HS256',
        });
        const result = await this.UserRepository.findOne({
            where: {
                user_id: user.userId,
            },
        });
        return result;
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [User_service_1.UserService,
        jwt_1.JwtService,
        typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map