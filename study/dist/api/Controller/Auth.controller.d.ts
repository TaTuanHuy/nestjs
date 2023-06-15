import { AuthService } from '../../services/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>): Promise<string>;
    getProfile(req: any): Promise<import("../../entity/user.entity").User>;
}
