import { Injectable } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { getRepositoryToken, InjectRepository } from '@nestjs/typeorm';
import typeormConfig from 'src/config/typeorm.config';
import { User_Kategorie } from 'src/entity/user.Kategorie.entity';
import { UsersService } from 'src/users/users.service';
import { getConnection, Repository } from 'typeorm';

@Injectable()
export class KategorieService {
  constructor(
    @InjectRepository(User_Kategorie)
    private KategorieRepository: Repository<User_Kategorie>,
    private readonly userSerivce: UsersService,
    private readonly JwtService: JwtService,
  ) {}

  async verify(Token: string, nickname: string): Promise<any> {
    const secret = typeormConfig().auth.jwt_secret_key;
    const verify = await this.JwtService.verify(Token, { secret });
    const userFind: any = await this.userSerivce.FindbyID({
      where: { User_NickName: verify.userNick },
    });

    // const SaveTitle = await this.KategorieRepository.create;
    if (verify) {
      return verify.userNick !== nickname ? false : userFind.User_Num;
    }
  }
  async find(number: number): Promise<any> {
    const a = await this.KategorieRepository.findOne({
      where: { User_Num: number },
    });
    return a;
  }

  async SaveData(usernum: number, key: string, value: string): Promise<any> {
    const keys = key;
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User_Kategorie)
      .values([
        {
          User_Num: usernum,
        },
      ]);
  }
}
