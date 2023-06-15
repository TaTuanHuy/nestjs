import {
  Module,
  RequestMethod,
  MiddlewareConsumer,
  HostParam,
} from '@nestjs/common';
import { HomeConTrollers } from '../api/Controller/Home.controller';
import { HomeService } from '../services/Home.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from '../entity/video.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  providers: [HomeService],
  controllers: [HomeConTrollers],
})
export class HomeModule {}
