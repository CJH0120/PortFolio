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
import { User_Categorie } from './Entity/user.Categorie.entity';
import { InfoModule } from './Info/info.module';
import { CategorieModule } from './Categorie/Categorie.module';
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
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    CategorieModule,
    InfoModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
