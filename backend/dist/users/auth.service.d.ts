import { UserDTO } from './dto/user.dto';
import { UsersService } from './users.service';
export declare class AuthService {
    private userSerivce;
    constructor(userSerivce: UsersService);
    JoinUser(NB: UserDTO): Promise<UserDTO>;
}
