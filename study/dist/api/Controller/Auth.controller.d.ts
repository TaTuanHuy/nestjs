import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/User.service';
import { IUserCreate } from '../../interface/IUsers';
import { IUserInputDTO } from '../../interface/IUsers';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    signIn(signInDto: IUserInputDTO): Promise<string>;
    Register(registerDto: IUserCreate): Promise<string>;
    getProfile(req: any): Promise<import("../../entity/user.entity").User>;
    updateProfile(updateUser: IUserCreate, id: string): Promise<string>;
}
