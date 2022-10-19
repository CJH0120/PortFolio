import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from '../users/dto/user.dto';
import { User_Table } from 'src/entity/user.entity';
import { Response } from 'express';
import { Http2ServerResponse } from 'http2';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('Join')
  async Join(@Body() UserDTO: UserDTO): Promise<any> {
    return await this.authService.JoinUser(UserDTO);
  }
  @Post('Login')
  async Login(
    @Body() UserDTO: UserDTO,
    @Res() response: Response,
  ): Promise<any> {
    const aa = await this.authService.Login(UserDTO.User_Id, UserDTO.User_Pw);
    response.header('Cookies', aa.assessToken);
    console.log(aa);
    response.header('is_Login', encodeURI(aa.nickname));
    return response.status(HttpStatus.OK).send;
  }
}
