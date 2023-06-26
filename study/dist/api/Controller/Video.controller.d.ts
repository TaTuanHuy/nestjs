import { VideoService } from '../../services/Video.service';
import { IVideo } from '../../interface/IVideo';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    createVideo(req: any, reqBody: IVideo): Promise<import("../../entity/video.entity").Video>;
    getAllMyVideo(req: any): Promise<import("../../entity/video.entity").Video[]>;
    getProfileVideo(req: any): Promise<import("../../entity/video.entity").Video>;
    updateVideo(req: any, reqBody: IVideo): Promise<string>;
    deleteVideo(req: any): Promise<string>;
}
