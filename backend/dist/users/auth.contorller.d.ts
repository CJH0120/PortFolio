/// <reference types="node" />
import { RequestListener } from 'http';
import { AuthService } from './auth.service';
import { UserDTO } from './dto/user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    Join(req: RequestListener, UserDTO: UserDTO): Promise<any>;
}
