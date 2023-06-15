import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { IUserInputUpdate } from '../interface/IUsers';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findUser(userName: string): Promise<IUserInputUpdate | undefined>;
}
