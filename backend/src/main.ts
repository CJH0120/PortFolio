import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({
  path: path.resolve(
    process.env.NODE_ENV === 'stage' ? '.stage.env' : '.dev.env',
  ),
});
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.use(cookieParser());
  await app.listen(3333);
}

bootstrap();
