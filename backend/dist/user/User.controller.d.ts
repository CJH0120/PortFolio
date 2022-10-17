import { AuthService } from './User.Service';
export declare class AuthController {
    private AuthService;
    constructor(AuthService: AuthService);
    Login(body: any): Promise<{
        User_NickName: string;
    }>;
    Join(body: any): Promise<void>;
}
