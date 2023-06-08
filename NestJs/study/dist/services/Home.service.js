"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
const connect_1 = require("../models/connect");
let HomeService = exports.HomeService = class HomeService {
    async getAllVideo() {
        try {
            const con = await connect_1.default;
            const query = `SELECT * FROM ${process.env.VIDEO_TABLE}`;
            const [rows, fieilds] = await con.execute(query);
            return rows;
        }
        catch (error) {
            throw new common_1.HttpException('Error executing', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.HomeService = HomeService = __decorate([
    (0, common_1.Injectable)()
], HomeService);
//# sourceMappingURL=Home.service.js.map