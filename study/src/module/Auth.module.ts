import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserModule } from '../module/User.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '../api/Controller/Auth.controller';
import { UserService } from '../services/User.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: 'HS256',
      signOptions: { expiresIn: '1h', algorithm: 'HS512' },
    }),
  ],
  providers: [AuthService, UserService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
