import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
// import connection from '../models/connect';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from '../entity/video.entity';
import { Repository } from 'typeorm';
import { IVideo } from '../interface/IVideo';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Video)
    private videosRepository: Repository<Video>,
  ) {}
  // [Get /] get All Video
  async findAll(): Promise<Video[]> {
    const result = this.videosRepository.find();
    if (!result) {
      throw new Error(`List Video Not Found`);
    }
    return result;
  }

  //[Get /:id] get Profile Video
  async findOne(video_id: string): Promise<Video> {
    const result = await this.videosRepository.findOneBy({
      video_id: video_id,
    });
    if (!result) {
      throw new Error('Video Not Found');
    }
    return result;
  }
}
