import { VideoService } from '../../services/Video.service';
import {
  Post,
  Controller,
  UseGuards,
  Request,
  Get,
  Put,
  Delete,
  HttpException,
  HttpStatus,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuardProfile } from 'src/guard/auth.profile.guard';
import { AuthGuardVideo } from '../../guard/auth.video.guard';
import { IVideo } from '../../interface/IVideo';
@Controller('video')
//[Post] create new Video
export class VideoController {
  constructor(private readonly videoService: VideoService) {}
  @Post('/create')
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuardProfile)
  async createVideo(@Request() req, @Body() reqBody: IVideo) {
    try {
      return await this.videoService.createVideo(reqBody, req.user.id);
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

  //[Get] Get all userVideo
  @Get('myVideo')
  @UseGuards(AuthGuardProfile)
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

  //[Get] Get one video
  @Get(':id')
  @UseGuards(AuthGuardVideo)
  async getProfileVideo(@Request() req) {
    try {
      return await this.videoService.getOneVideo(req.params.id);
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

  //[Put] Update video
  @Put(':id')
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuardVideo)
  async updateVideo(@Request() req, @Body() reqBody: IVideo) {
    try {
      return await this.videoService.updateVideo(req.user.id, reqBody);
    } catch (err) {
      throw new HttpException(
        {
          status: 400,
          error: `Can't update Video`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  //[Put] Update video
  @Delete(':id')
  @UseGuards(AuthGuardVideo)
  async deleteVideo(@Request() req) {
    try {
      return await this.videoService.deleteOne(req.user.id);
    } catch (err) {
      throw new HttpException(
        {
          status: 400,
          error: `Can't delete Video`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
