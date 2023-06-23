import { Video } from '../entity/video.entity';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { IVideo } from '../interface/IVideo';
export declare class VideoService {
    private videoRepository;
    private userRepository;
    constructor(videoRepository: Repository<Video>, userRepository: Repository<User>);
    createVideo(IVideo: IVideo, idUser: number): Promise<Video>;
    getAllVideo(userId: any): Promise<Video[]>;
}
