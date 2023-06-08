"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeModule = void 0;
const common_1 = require("@nestjs/common");
const Home_controller_1 = require("../api/Controller/Home.controller");
const Home_service_1 = require("../services/Home.service");
let HomeModule = exports.HomeModule = class HomeModule {
};
exports.HomeModule = HomeModule = __decorate([
    (0, common_1.Module)({
        controllers: [Home_controller_1.Home],
        providers: [Home_service_1.HomeService],
    })
], HomeModule);
//# sourceMappingURL=Home.module.js.map