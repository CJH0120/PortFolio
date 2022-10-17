import { User_Table } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private AuthRepository;
    constructor(AuthRepository: Repository<User_Table>);
}
