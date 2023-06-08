import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
// import connection from '../models/connect';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from '../entity/video.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HomeService {
  contructor(
    @InjectRepository(Video)
    private readonly videosRepo: Repository<Video>,
  ) {}
  async findAll(): Promise<Video[]> {
    return await this.videosRepo.find();
  }
}
