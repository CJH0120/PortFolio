import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User_Info } from 'src/entity/user.Info.entity';
import { KategorieRepository } from 'src/Kategorie/Kategorie.Repository';
import { KategorieService } from 'src/Kategorie/Kategorie.service';
import { InfoRepository } from './info.Repository';

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(User_Info)
    private readonly InfoRepository: InfoRepository,
    private readonly KategorieService: KategorieService,
  ) {}

  async Index(usernum: number): Promise<any> {
    const Kategorie = await this.KategorieService.find(1);
    const Info = await this.InfoRepository.findOne({
      where: { User_Num: usernum },
    });
    return { Kategorie: Kategorie, Info: Info };
  }
}
