import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import typeormConfig from 'src/config/typeorm.config';
import { User_Categorie } from 'src/entity/user.Categorie';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class CategorieService {
  constructor(
    @InjectRepository(User_Categorie)
    private CategorieRepository: Repository<User_Categorie>,
    private readonly userSerivce: UsersService,
    private readonly JwtService: JwtService,
  ) {}

  async verify(Token: string, nickname: string): Promise<any> {
    const secret = typeormConfig().auth.jwt_secret_key;
    const verify = await this.JwtService.verify(Token, { secret });
    const userFind: any = await this.userSerivce.FindNum(verify.userNick);
    if (verify) {
      return userFind !== 1 ? false : userFind;
    }
  }
  async find(number: number): Promise<any> {
    const a = await this.CategorieRepository.findOne({
      where: { User_Num: number },
    });
    return a;
  }

  async SaveData(usernum: number, key: string, values: string): Promise<any> {
    const Inset = this.CategorieRepository.query(
      `
      INSERT INTO User_Categorie
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
    return Inset;
  }
}
