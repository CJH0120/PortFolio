import { KategorieService } from 'src/Kategorie/Kategorie.service';
import { InfoRepository } from './info.Repository';
export declare class InfoService {
    private readonly InfoRepository;
    private readonly KategorieService;
    constructor(InfoRepository: InfoRepository, KategorieService: KategorieService);
    Index(usernum: number): Promise<any>;
}
