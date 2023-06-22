import { HomeService } from '../../services/Home.service';
import { Video } from '../../entity/video.entity';
export declare class HomeConTrollers {
    private readonly appService;
    constructor(appService: HomeService);
    getAllVideo(): Promise<Video[]>;
    getProfile(Params: string): Promise<Video>;
}
