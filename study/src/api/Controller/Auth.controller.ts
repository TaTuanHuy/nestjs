import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  HttpCode,
  HttpStatus,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth.guard';
import { AuthGuardProfile } from 'src/guard/auth.profile.guard';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/User.service';
import { IUserCreate } from '../../interface/IUsers';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @HttpCode(HttpStatus.OK)
  //[Post] User Login
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.SignIn(signInDto.username, signInDto.password);
  }

  //[Post] Create a new User
  @Post('register')
  Register(@Body() registerDto: IUserCreate) {
    return this.userService.RegisterUser(registerDto);
  }

  //[GET] get Profile by Auth
  @UseGuards(AuthGuardProfile)
  @Get('profile')
  getProfile(@Request() req) {
    const token = req.headers.authorization.split(' ');
    return this.authService.getProfile(token[1]);
  }

  @UseGuards(AuthGuard)
  @Put('updateProfile/:id')
  updateProfile(@Body() updateUser: IUserCreate, @Param('id') id: string) {
    return this.userService.updateUser(updateUser, id);
  }
}
