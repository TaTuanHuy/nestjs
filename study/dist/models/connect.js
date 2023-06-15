"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const connection = promise_1.default.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.passWord,
    database: process.env.database,
});
exports.default = connection;
//# sourceMappingURL=connect.js.map