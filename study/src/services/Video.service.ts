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

  //Create Video Service
  async createVideo(IVideo: IVideo, idUser: number): Promise<Video> {
    try {
      const video = new Video();
      video.id = IVideo.id;
      video.video_id = IVideo.video_id;
      video.video_name = IVideo.video_name;
      video.video_description = IVideo.video_description;
      video.author_video = IVideo.author_video;
      video.user = idUser;
      const result = await this.videoRepository.save(video);
      if (!result) {
        throw new Error(`Error saving`);
      }
      return result;
    } catch (error) {
      throw new Error('Lỗi');
    }
  }

  //Get All Video Users Services
  async getAllVideo(userId: string): Promise<Video[]> {
    const result = await this.videoRepository.find({
      relations: { user: true },
      where: {
        user: {
          id: userId,
        },
      },
    });
    if (!result) {
      throw new Error(`List Video Not Found`);
    }
    return result;
  }

  //Get Profile One Video Service
  async getOneVideo(videoId: string): Promise<Video> {
    const result = await this.videoRepository.findOneBy({
      video_id: videoId,
    });
    if (!result) {
      throw new Error(`List Video Not Found`);
    }
    return result;
  }

  //Update Video Services
  async updateVideo(videoId: string, updateVideoDTO: IVideo): Promise<string> {
    const result = await this.videoRepository.update(videoId, updateVideoDTO);
    if (result.affected == 0) {
      throw new Error('Video Not Found');
    }
    return 'Success';
  }

  //Delete Video Service
  async deleteOne(video_id: string): Promise<string> {
    const result = await this.videoRepository.delete(video_id);
    if (!result) {
      throw new Error('Video Not Found');
    }
    return 'Successfully deleted';
  }
}
