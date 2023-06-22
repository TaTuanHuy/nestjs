import { Video } from '../entity/video.entity';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
export declare class VideoService {
    private usersRepository;
    private videoRepository;
    constructor(usersRepository: Repository<User>, videoRepository: Repository<Video>);
    createVideo(reqBody: Video): Promise<string>;
}
