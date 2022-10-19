import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDTO } from '../users/dto/user.dto';
import { UsersService } from '../users/users.service';
import { Payload } from './jwt/payload.interface';
import { JwtModule, JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private userSerivce: UsersService,
    private jwtServiee: JwtService,
  ) {}

  async JoinUser(NB: UserDTO): Promise<UserDTO> {
    const userFind: UserDTO = await this.userSerivce.FindbyID({
      where: { User_Id: NB.User_Id },
    });
    const userNickName: UserDTO = await this.userSerivce.FindbyID({
      where: { User_NickName: NB.User_NickName },
    });
    if (userFind) {
      throw new HttpException('아이디 중복', HttpStatus.BAD_REQUEST);
    }
    if (userNickName) {
      throw new HttpException('닉네임 중복', HttpStatus.BAD_REQUEST);
    }
    return await this.userSerivce.Save(NB);
  }

  async Login(Id: string, Pw: string): Promise<any> | undefined {
    const userFind: UserDTO = await this.userSerivce.FindbyID({
      where: { User_Id: Id },
    });
    if (!userFind || Pw !== userFind.User_Pw) {
      throw new HttpException(
        `일치하는 정보가 없습니다`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const payload: Payload = {
      id: userFind.User_Id,
      userNick: userFind.User_NickName,
    };
    return {
      assessToken: await this.jwtServiee.sign(payload),
      nickname: userFind.User_NickName,
    };
  }
}
