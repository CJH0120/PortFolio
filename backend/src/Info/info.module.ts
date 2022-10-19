import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_Table } from 'src/entity/user.entity';
import { User_Info } from 'src/entity/user.Info.entity';
import { CategorieRepository } from 'src/Categorie/Categorie.Repository';
import { CategorieService } from 'src/Categorie/Categorie.service';
import { UserRepository } from 'src/users/users.repository';
import { UsersService } from 'src/users/users.service';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';
import { User_Categorie } from 'src/entity/user.Categorie';

@Module({
  imports: [TypeOrmModule.forFeature([User_Info, User_Categorie, User_Table])],

  exports: [TypeOrmModule],
  controllers: [InfoController],
  providers: [
    InfoService,
    CategorieService,
    CategorieRepository,
    JwtService,
    UsersService,
    UserRepository,
  ],
})
export class InfoModule {}
