import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CategorieService } from 'src/Categorie/Categorie.service';
import { Repository } from 'typeorm';
import { InfoService } from './info.service';

@Controller('Idx')
export class InfoController {
  constructor(
    private readonly infoService: InfoService,
    private CategorieService: CategorieService,
  ) {}

  @Get()
  async Idx(@Res() res: Response): Promise<any> {
    const UserInfo = await this.infoService.Index(1);
    return res.status(HttpStatus.OK).send(UserInfo);
  }
}
