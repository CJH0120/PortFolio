import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_Table } from 'src/entity/user.entity';
import { User_Kategorie } from 'src/entity/user.Kategorie.entity';
import { UsersService } from 'src/users/users.service';
import { KategorieController } from './Kategorie.controller';
import { KategorieService } from './Kategorie.service';

@Module({
  imports: [TypeOrmModule.forFeature([User_Kategorie, User_Table])],

  exports: [TypeOrmModule],
  controllers: [KategorieController],
  providers: [KategorieService, JwtService, UsersService],
})
export class KategorieModule {}
