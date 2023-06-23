import { VideoService } from '../../services/Video.service';
import {
  Post,
  Controller,
  UseGuards,
  Request,
  Get,
  Param,
  ParseIntPipe,
  HttpException,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { AuthGuardProfile } from 'src/guard/auth.profile.guard';
@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}
  @Post('/create')
  @UseGuards(AuthGuardProfile)
  async createVideo(@Request() req) {
    try {
      return await this.videoService.createVideo(req.body, req.user.id);
    } catch (err) {
      throw new HttpException(
        {
          status: 400,
          error: `Can't create video`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('myVideo')
  // @UseGuards(AuthGuardProfile)
  async getAllMyVideo(@Request() req) {
    try {
      return await this.videoService.getAllVideo(req.user.id);
    } catch (err) {
      throw new HttpException(
        {
          status: 400,
          error: `Can't get video`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
