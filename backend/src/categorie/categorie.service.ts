import { Injectable } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { getRepositoryToken, InjectRepository } from '@nestjs/typeorm';
import typeormConfig from 'src/config/typeorm.config';
import { User_Categorie } from 'src/entity/user.Categorie';
import { UsersService } from 'src/users/users.service';
import { getConnection, Repository } from 'typeorm';

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
    const userFind: any = await this.userSerivce.FindbyID({
      where: { User_NickName: verify.userNick },
    });

    if (verify) {
      return verify.userNick !== nickname ? false : userFind.User_Num;
    }
  }
  async find(number: number): Promise<any> {
    const a = await this.CategorieRepository.findOne({
      where: { User_Num: number },
    });
    return a;
  }

  async SaveData(usernum: number, key: string, value: string): Promise<any> {
    const keys = key;
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User_Categorie)
      .values([
        {
          User_Num: usernum,
        },
      ]);
  }
}
