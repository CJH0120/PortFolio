import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import typeormConfig from './config/typeorm.config';
import { User_Table } from './entity/user.entity';
import { User_Info } from './entity/user.Info.entity';
import { User_Kategorie } from './entity/user.Kategorie.entity';
import { InfoModule } from './Info/info.module';
import { KategorieModule } from './Kategorie/Kategorie.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('database.host'),
        port: Number(configService.get('database.port')),
        username: configService.get('database.user'),
        password: configService.get('database.pass'),
        database: configService.get('database.name'),
        entities: [User_Table, User_Info, User_Kategorie],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    KategorieModule,
    InfoModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
