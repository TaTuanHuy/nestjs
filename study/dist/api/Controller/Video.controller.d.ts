import { VideoService } from '../../services/Video.service';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    createVideo(req: any): Promise<import("../../entity/video.entity").Video>;
    getAllMyVideo(req: any): Promise<import("../../entity/video.entity").Video[]>;
}
