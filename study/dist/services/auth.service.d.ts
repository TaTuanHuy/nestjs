import { UserService } from './User.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private userService;
    private jwtService;
    private UserRepository;
    constructor(userService: UserService, jwtService: JwtService, UserRepository: Repository<User>);
    SignIn(userName: string, passWord: string): Promise<string | undefined>;
    getProfile(token: string): Promise<User>;
}
