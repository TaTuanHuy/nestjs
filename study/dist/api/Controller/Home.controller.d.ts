import { HomeService } from '../../services/Home.service';
import { Video } from '../../entity/video.entity';
import { IVideo } from '../../interface/IVideo';
export declare class HomeConTrollers {
    private readonly appService;
    constructor(appService: HomeService);
    getAllVideo(): Promise<Video[]>;
    createUser(body: IVideo): Promise<Video>;
    getProfile(Params: string): Promise<Video>;
    update(id: string, updateVideoDTO: Video): Promise<string>;
    DeleteVideo(Params: string): Promise<void>;
}
