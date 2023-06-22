import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './User.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}
  async SignIn(
    userName: string,
    passWord: string,
  ): Promise<string | undefined> {
    const user = await this.userService.findUser(userName);
    if (passWord !== user.pass_word) {
      throw new UnauthorizedException();
    }
    const payloads = {
      userName: user.user_name,
      fullName: user.full_name,
      userId: user.user_id,
      id: user.id,
    };
    const access_token = await this.jwtService.signAsync(payloads);
    return access_token;
  }
  //[GET] Profile Video
  async getProfile(token: string): Promise<User> {
    const user = await this.jwtService.verifyAsync(token, {
      secret: 'HS256',
    });

    const result = await this.UserRepository.findOne({
      where: {
        user_id: user.userId,
      },
    });
    return result;
  }
}
