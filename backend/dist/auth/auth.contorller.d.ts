import { AuthService } from './auth.service';
import { UserDTO } from '../users/dto/user.dto';
import { Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    Join(UserDTO: UserDTO): Promise<any>;
    Login(UserDTO: UserDTO, response: Response): Promise<any>;
}
