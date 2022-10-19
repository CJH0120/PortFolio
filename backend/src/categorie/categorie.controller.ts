import {
  Body,
  Controller,
  Head,
  Headers,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { CategorieService } from './Categorie.service';

@Controller('Categorie')
export class CategorieController {
  constructor(
    private CategorieService: CategorieService,
    private JwtService: JwtService,
  ) {}

  @Post()
  async Change(
    @Req() req: Request,
    @Headers() headers,
    @Res() response: Response,
  ): Promise<any> {
    const Token: string = headers['authorization'];
    const nickname: string = headers['nickname'];
    const key: string = req.body['key'];
    const value: string = req.body['value'];
    const a = await this.CategorieService.verify(Token, nickname);
    const b = await this.CategorieService.SaveData(a, key, value);
    return a === false
      ? response.status(HttpStatus.BAD_REQUEST).send('누구세요?')
      : b;
  }
}
