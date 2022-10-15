"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
exports.default = () => ({
    database: {
        host: process_1.default.env.DATABASE_HOST || '',
        port: process_1.default.env.DATABASE_PORT || '1234',
        user: process_1.default.env.DATABASE_USER || 'root',
        pass: process_1.default.env.DATABASE_PASSWORD || '',
        name: process_1.default.env.DataBASE_NAME,
    },
});
//# sourceMappingURL=configuration.js.map