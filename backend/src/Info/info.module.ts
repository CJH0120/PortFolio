import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_Table } from 'src/entity/user.entity';
import { User_Info } from 'src/entity/user.Info.entity';
import { User_Kategorie } from 'src/entity/user.Kategorie.entity';
import { KategorieRepository } from 'src/Kategorie/Kategorie.Repository';
import { KategorieService } from 'src/Kategorie/Kategorie.service';
import { UserRepository } from 'src/users/users.repository';
import { UsersService } from 'src/users/users.service';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';

@Module({
  imports: [TypeOrmModule.forFeature([User_Info, User_Kategorie, User_Table])],

  exports: [TypeOrmModule],
  controllers: [InfoController],
  providers: [
    InfoService,
    KategorieService,
    KategorieRepository,
    JwtService,
    UsersService,
    UserRepository,
  ],
})
export class InfoModule {}
