import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  HttpException,
  HttpStatus,
  Post,
  Body,
} from '@nestjs/common';
import { IVideo } from '../../interface/IVideo';
import { HomeService } from '../../services/Home.service';
import { Video } from '../../entity/video.entity';

@Controller()
export class HomeConTrollers {
  constructor(private readonly appService: HomeService) {}
  @Get()
  //GetALlVideo
  async getAllVideo(): Promise<Video[]> {
    try {
      return await this.appService.findAll();
    } catch (err) {
      throw new HttpException(
        {
          status: 404,
          error: 'List Video Not Found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
  //Get One Video
  @Get(':id')
  async getProfile(@Param('id', ParseIntPipe) Params: string): Promise<Video> {
    try {
      return await this.appService.findOne(Params);
    } catch (err) {
      throw new HttpException(
        {
          status: 404,
          error: 'Video Not Found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
