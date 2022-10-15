import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_Table } from 'src/entity/user.entity';
import { AuthController } from './User.Join.controller';
import { AuthService } from './User.Join.Service';

@Module({
  imports: [TypeOrmModule.forFeature([User_Table])],
  exports: [AuthService],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
