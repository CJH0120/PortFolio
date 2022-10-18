"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
    path: path.resolve(process.env.NODE_ENV === 'stage' ? '.stage.env' : '.dev.env'),
});
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    app.use(cookieParser());
    await app.listen(3333);
}
bootstrap();
//# sourceMappingURL=main.js.map