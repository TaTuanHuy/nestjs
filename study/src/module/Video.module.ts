import { Module } from '@nestjs/common';
import { VideoController } from '../api/Controller/Video.controller';
import { VideoService } from 'src/services/Video.service';
@Module({
  imports: [],
  providers: [VideoService],
  controllers: [VideoController],
})
export class VideoModule {}
