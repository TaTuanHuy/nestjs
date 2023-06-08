import { Controller, Response, Request, Get } from '@nestjs/common';
import { HomeService } from '../../services/Home.service';
import { Video } from '../../entity/video.entity';

@Controller()
export class HomeConTrollers {
  constructor(private readonly appService: HomeService) {}
  @Get()
  async getAllVideo(): Promise<Video[]> {
    return await this.appService.findAll();
  }
}
