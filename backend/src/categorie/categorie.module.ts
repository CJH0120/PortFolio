import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_Categorie } from 'src/entity/user.Categorie';
import { User_Table } from 'src/entity/user.entity';
import { UsersService } from 'src/users/users.service';
import { CategorieController } from './categorie.controller';
import { CategorieService } from './Categorie.service';

@Module({
  imports: [TypeOrmModule.forFeature([User_Categorie, User_Table])],

  exports: [TypeOrmModule],
  controllers: [CategorieController],
  providers: [CategorieService, JwtService, UsersService],
})
export class CategorieModule {}
