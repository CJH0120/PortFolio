import { User_Table } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private AuthRepository;
    constructor(AuthRepository: Repository<User_Table>);
    Join(User_Id: string, User_Pw: string, User_NickName: string): Promise<void>;
    Login(User_Id: string, User_Pw: string): Promise<void>;
}
