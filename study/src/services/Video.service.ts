import { Video } from '../entity/video.entity';
import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { IVideo } from '../interface/IVideo';
@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(User)
    @InjectRepository(Video)
    private usersRepository: Repository<User>,
    private videoRepository: Repository<Video>,
  ) {}

  async createVideo(reqBody: Video): Promise<string> {
    try {
      console.log(reqBody);
      // const video = new Video();
      // video.video_id = reqBody.video_id;
      // video.video_name = reqBody.video_name;
      // video.video_description = reqBody.video_description;
      // video.author_video = reqBody.author_video;
      // const result = this.videoRepository.save(video);
      // if (!result) {
      //   throw new Error('Tạo mới video bị lỗi');
      // }
      return 'Success!';
    } catch (error) {
      throw new Error('Lỗi');
    }
  }
}
