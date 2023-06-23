import { Module } from '@nestjs/common';
import { VideoController } from '../api/Controller/Video.controller';
import { VideoService } from 'src/services/Video.service';
import { Video } from '../entity/video.entity';
import { User } from '../entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Video]),
  ],
  providers: [VideoService],
  controllers: [VideoController],
})
export class VideoModule {}
