import { Video } from '../entity/video.entity';
import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IVideo } from '../interface/IVideo';
// import { IVideo } from '../interface/IVideo';
@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video)
    private videoRepository: Repository<Video>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createVideo(IVideo: IVideo, idUser: number): Promise<Video> {
    try {
      const video = new Video();
      video.id = IVideo.id;
      video.video_id = IVideo.video_id;
      video.video_name = IVideo.video_name;
      video.video_description = IVideo.video_description;
      video.author_video = IVideo.author_video;
      video.userId = idUser;
      const result = await this.videoRepository.save(video);
      if (!result) {
        throw new Error(`Error saving`);
      }
      return result;
    } catch (error) {
      throw new Error('Lỗi');
    }
  }

  async getAllVideo(userId): Promise<Video[]> {
    console.log(userId);
    const result = this.videoRepository.find();
    return result;
  }
}
