import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Param,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { jwtConstants } from './constants';
import { Request } from 'express';
import { Video } from '../entity/video.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthGuardVideo implements CanActivate {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Video)
    private videoRepository: Repository<Video>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: 'HS256',
      });
      const result = await this.videoRepository.find({
        relations: { user: true },
        where: {
          video_id: request.params.id,
          user: {
            id: payload.id,
          },
        },
      });
      request['user'] = result[0];
      if (result.length <= 0) {
        throw new UnauthorizedException();
      }
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
