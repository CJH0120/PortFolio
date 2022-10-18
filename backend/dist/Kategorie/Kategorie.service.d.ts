import { JwtService } from '@nestjs/jwt';
import { User_Kategorie } from 'src/entity/user.Kategorie.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
export declare class KategorieService {
    private KategorieRepository;
    private readonly userSerivce;
    private readonly JwtService;
    constructor(KategorieRepository: Repository<User_Kategorie>, userSerivce: UsersService, JwtService: JwtService);
    verify(Token: string, nickname: string): Promise<any>;
    find(number: number): Promise<any>;
    SaveData(usernum: number, key: string, value: string): Promise<any>;
}
