import { AuthService } from './Auth.Service';
export declare class AuthController {
    private AuthService;
    constructor(AuthService: AuthService);
    Join(body: any): Promise<void>;
}
