import { VideoService } from '../../services/Video.service';
import { Post, Controller, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth.guard';
@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}
  @UseGuards(AuthGuard)
  @Post('/create')
  async createVideo(@Request() req) {
    const result = await this.videoService.createVideo(req);
    return result;
  }
}
