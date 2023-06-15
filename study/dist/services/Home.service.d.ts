import { Video } from '../entity/video.entity';
import { Repository } from 'typeorm';
import { IVideo } from '../interface/IVideo';
export declare class HomeService {
    private videosRepository;
    constructor(videosRepository: Repository<Video>);
    findAll(): Promise<Video[]>;
    create(IVideo: IVideo): Promise<Video>;
    findOne(video_id: string): Promise<Video>;
    update(video_id: string, updateVideoDTO: Video): Promise<string>;
    deleteOne(video_id: string): Promise<void>;
}
