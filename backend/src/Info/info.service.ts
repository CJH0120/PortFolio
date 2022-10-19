import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User_Info } from 'src/entity/user.Info.entity';
import { CategorieRepository } from 'src/Categorie/Categorie.Repository';
import { CategorieService } from 'src/Categorie/Categorie.service';
import { InfoRepository } from './info.Repository';

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(User_Info)
    private readonly InfoRepository: InfoRepository,
    private readonly CategorieService: CategorieService,
  ) {}

  async Index(): Promise<any> {
    const Categorie = await this.CategorieService.find(1);
    return { Categorie: Categorie };
  }
  async Info(usernum: number): Promise<any> {
    const Info = await this.InfoRepository.findOne({
      where: { User_Num: usernum },
    });
    return { Info };
  }
  async InfoPost(key: string, values: string): Promise<any> {
    const PostInfo = await this.InfoRepository.query(
      `
      INSERT INTO User_Info
      (User_Num) Values(1)
      ON DUPLICATE KEY 
      UPDATE 
      ` +
        key +
        ` ="` +
        values +
        `"
     `,
    );
    return PostInfo;
  }
}
