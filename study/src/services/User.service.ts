import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUserInputUpdate, IUserInputDTO } from '../interface/IUsers';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findUser(userName: string): Promise<IUserInputUpdate | undefined> {
    const res = await this.usersRepository.findOneBy({
      user_name: userName,
    });
    if (!res) {
      throw new Error('User Not Found');
    }
    return res;
  }
}
