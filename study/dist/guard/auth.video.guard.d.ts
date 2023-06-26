import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Video } from '../entity/video.entity';
import { Repository } from 'typeorm';
export declare class AuthGuardVideo implements CanActivate {
    private jwtService;
    private videoRepository;
    constructor(jwtService: JwtService, videoRepository: Repository<Video>);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
