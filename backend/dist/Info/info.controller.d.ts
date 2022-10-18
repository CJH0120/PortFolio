import { Response } from 'express';
import { KategorieService } from 'src/Kategorie/Kategorie.service';
import { InfoService } from './info.service';
export declare class InfoController {
    private readonly infoService;
    private KategorieService;
    constructor(infoService: InfoService, KategorieService: KategorieService);
    Idx(res: Response): Promise<any>;
}
