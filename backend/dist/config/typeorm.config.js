"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
exports.default = {
    type: process.env.DATABASE_CONNCTION,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: parseInt(process.env.DATABASE_PORT),
    logging: process.env.DATABASE_LOGGING,
    entities: [
        `${path.resolve(__dirname, '..')}${String(process.env.DATABASE_ENTITIES)}`,
    ],
    migrationsRun: process.env.DATABASE_MIGRATIONS_RUN,
    synchronize: process.env.DATABASE_SYNCHRONIZE,
};
//# sourceMappingURL=typeorm.config.js.map