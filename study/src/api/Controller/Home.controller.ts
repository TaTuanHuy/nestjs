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
  @Post()
  async createUser(@Body() body: IVideo): Promise<Video> {
    try {
      return await this.appService.create(body);
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

  // @Put(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateVideoDTO: Video,
  // ): Promise<string> {
  //   try {
  //     return this.appService.update(id, updateVideoDTO);
  //   } catch (err) {
  //     throw new HttpException(
  //       {
  //         status: 404,
  //         error: `Can't Found Video you want delete`,
  //       },
  //       HttpStatus.NOT_FOUND,
  //     );
  //   }
  // }

  // @Delete(':id')
  // async DeleteVideo(@Param('id', ParseIntPipe) Params: string): Promise<void> {
  //   try {
  //     return await this.appService.deleteOne(Params);
  //   } catch (err) {
  //     throw new HttpException(
  //       {
  //         status: 404,
  //         error: `Can't Found Video you want delete`,
  //       },
  //       HttpStatus.NOT_FOUND,
  //     );
  //   }
  // }
}
