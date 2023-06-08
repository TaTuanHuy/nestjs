"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    host: process.env.HOST,
    user: process.env.USER1,
    passWord: process.env.PASSWORD,
    database: process.env.DATABASE,
    tbUser: process.env.USER_TABLE,
    tbVideo: process.env.VIDEO_TABLE,
    port: parseInt(process.env.PORT) || 3000,
    privateKey: process.env.PRIVATE_KEY,
    algorithm: process.env.ALGORITHM,
});
//# sourceMappingURL=config.js.map