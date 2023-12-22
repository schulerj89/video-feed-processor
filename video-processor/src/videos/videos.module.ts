import { Module } from '@nestjs/common';
import { VideosController } from './videos.controller';
import { VideoService } from './videos.service';

@Module({
  controllers: [VideosController],
  providers: [VideoService],
})
export class VideosModule {}