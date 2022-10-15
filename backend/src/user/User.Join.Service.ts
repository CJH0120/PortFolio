import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User_Table } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User_Table)
    private AuthRepository: Repository<User_Table>,
  ) {}
  async Join(User_Id: string, User_Pw: string) {
    console.log(User_Id);
    const NewB = await this.AuthRepository.findOne({ where: { User_Id } });

    if (NewB) {
      throw new UnauthorizedException('존재하는 아이디');
      return;
    } else {
      await this.AuthRepository.save({
        User_Id,
        User_Pw,
      });

      return;
    }
  }
}
