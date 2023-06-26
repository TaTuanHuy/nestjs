import { Video } from '../entity/video.entity';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { IVideo } from '../interface/IVideo';
export declare class VideoService {
    private videoRepository;
    private userRepository;
    constructor(videoRepository: Repository<Video>, userRepository: Repository<User>);
    createVideo(IVideo: IVideo, idUser: number): Promise<Video>;
    getAllVideo(userId: string): Promise<Video[]>;
    getOneVideo(videoId: string): Promise<Video>;
    updateVideo(videoId: string, updateVideoDTO: IVideo): Promise<string>;
    deleteOne(video_id: string): Promise<string>;
}
