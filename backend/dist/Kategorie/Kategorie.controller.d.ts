import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { KategorieService } from './Kategorie.service';
export declare class KategorieController {
    private KategorieService;
    private JwtService;
    constructor(KategorieService: KategorieService, JwtService: JwtService);
    Change(req: Request, headers: any, response: Response): Promise<any>;
}
