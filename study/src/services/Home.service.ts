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
  //[Post /] create new video
  async create(IVideo: IVideo): Promise<Video> {
    const video = new Video();
    video.id = IVideo.id;
    video.video_id = IVideo.video_id;
    video.video_name = IVideo.video_name;
    video.video_description = IVideo.video_description;
    video.author_video = IVideo.author_video;
    video.userId = IVideo.user;
    const result = this.videosRepository.save(video);
    if (!result) {
      throw new Error(`Can't save video`);
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
  //[Update /:id] Update Video
  async update(video_id: string, updateVideoDTO: Video): Promise<string> {
    const result = await this.videosRepository.update(video_id, updateVideoDTO);
    if (result.affected == 0) {
      throw new Error('Video Not Found');
    }
    return 'Update Complete';
  }

  //[Delete /:id] delete Video by Video_id
  async deleteOne(video_id: string): Promise<void> {
    const result = await this.videosRepository.delete(video_id);
    if (!result) {
      throw new Error('Video Not Found');
    }
  }
}
