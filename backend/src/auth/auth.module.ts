import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_Table } from 'src/entity/user.entity';
import { AuthController } from './auth.contorller';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeormConfig from 'src/config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([User_Table]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('auth.jwt_secret_key'),
        signOptions: {
          expiresIn: `${configService.get('auth.JWT_EXPIRATION_TIME')}m`,
        },
      }),
    }),
  ],
  exports: [TypeOrmModule],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
})
export class AuthModule {}
