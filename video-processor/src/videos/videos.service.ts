import { Injectable } from '@nestjs/common';
import { Video } from './interfaces/video.interface';

@Injectable()
export class VideoService {
  private readonly videos: Video[] = [];

  create(video: Video) {
    this.videos.push(video);
  }

  findAll(): Video[] {
    return this.videos;
  }
}