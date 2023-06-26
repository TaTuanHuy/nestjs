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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth.guard';
import { AuthGuardProfile } from 'src/guard/auth.profile.guard';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/User.service';
import { IUserCreate } from '../../interface/IUsers';
import { IUserInputDTO } from '../../interface/IUsers';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @UsePipes(ValidationPipe)
  signIn(@Body() signInDto: IUserInputDTO) {
    return this.authService.SignIn(signInDto.user_name, signInDto.pass_word);
  }

  //[Post] Create a new User
  @Post('register')
  @UsePipes(ValidationPipe)
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
  @UsePipes(ValidationPipe)
  @Put('updateProfile/:id')
  updateProfile(@Body() updateUser: IUserCreate, @Param('id') id: string) {
    return this.userService.updateUser(updateUser, id);
  }
}
