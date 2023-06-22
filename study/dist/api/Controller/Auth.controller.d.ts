import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/User.service';
import { IUserCreate } from '../../interface/IUsers';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    signIn(signInDto: Record<string, any>): Promise<string>;
    Register(registerDto: IUserCreate): Promise<string>;
    getProfile(req: any): Promise<import("../../entity/user.entity").User>;
    updateProfile(updateUser: IUserCreate, id: string): Promise<string>;
}
