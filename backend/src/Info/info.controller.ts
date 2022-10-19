import {
  Controller,
  Get,
  Headers,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CategorieService } from 'src/Categorie/Categorie.service';
import { Repository } from 'typeorm';
import { InfoService } from './info.service';

@Controller()
export class InfoController {
  constructor(
    private readonly infoService: InfoService,
    private CategorieService: CategorieService,
  ) {}

  @Get('Categorie')
  async Categorie(@Res() res: Response): Promise<any> {
    const Categorie = await this.infoService.Index();
    return res.status(HttpStatus.OK).send(Categorie);
  }
  @Get('Info')
  async Info(@Res() res: Response): Promise<any> {
    const Info = await this.infoService.Info(1);
    return res.status(HttpStatus.OK).send(Info);
  }
  @Post('Info')
  async PostInfo(
    @Res() res: Response,
    @Headers() headers,
    @Req() req: Request,
  ): Promise<any> {
    const Token: string = headers['authorization'];
    const nickname: string = headers['nickname'];
    const key: string = req.body['key'];
    const value: string = req.body['value'];
    const a = await this.CategorieService.verify(Token, nickname);
    return a === false
      ? res.status(HttpStatus.BAD_REQUEST).send('접근권한없음')
      : await this.infoService.InfoPost(key, value);
  }
}
