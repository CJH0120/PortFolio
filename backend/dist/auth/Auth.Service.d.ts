import { UserDTO } from '../users/dto/user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userSerivce;
    private jwtServiee;
    constructor(userSerivce: UsersService, jwtServiee: JwtService);
    JoinUser(NB: UserDTO): Promise<UserDTO>;
    Login(Id: string, Pw: string): Promise<any> | undefined;
}
