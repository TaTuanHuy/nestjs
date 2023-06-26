"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../services/auth.service");
const User_module_1 = require("../module/User.module");
const jwt_1 = require("@nestjs/jwt");
const Auth_controller_1 = require("../api/Controller/Auth.controller");
const User_service_1 = require("../services/User.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entity/user.entity");
const video_entity_1 = require("../entity/video.entity");
let AuthModule = exports.AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            User_module_1.UserModule,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            typeorm_1.TypeOrmModule.forFeature([video_entity_1.Video]),
            jwt_1.JwtModule.register({
                global: true,
                secret: 'HS256',
                signOptions: { expiresIn: '1h', algorithm: 'HS512' },
            }),
        ],
        providers: [auth_service_1.AuthService, User_service_1.UserService],
        controllers: [Auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=Auth.module.js.map