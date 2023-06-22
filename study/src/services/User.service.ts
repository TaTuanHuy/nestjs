import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUserInputUpdate, IUserCreate } from '../interface/IUsers';
// import { Request } from 'express';
// import { IVideo } from '../interface/IVideo';
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
  async RegisterUser(reqBody: IUserCreate): Promise<string> {
    const user = new User();
    user.user_id = reqBody.user_id;
    user.id = reqBody.id;
    user.full_name = reqBody.full_name;
    user.user_name = reqBody.user_name;
    user.pass_word = reqBody.pass_word;
    const result = this.usersRepository.save(user);
    if (!result) {
      throw new Error("Can't create New User");
    }
    return 'Success';
  }
  async updateUser(reqBody: IUserCreate, id: string): Promise<string> {
    const result = await this.usersRepository.update(id, reqBody);
    if (result.affected == 0) {
      throw new Error('User Not Found');
    }
    return 'Update Complete';
  }
}
