import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './User.Join.Service';

@Controller('Join')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post()
  async Join(@Body() body) {
    await this.AuthService.Join(body.User_Id, body.User_Pw);
  }
}
