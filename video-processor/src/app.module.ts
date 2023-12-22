import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VideosModule } from './videos/videos.module';

require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    VideosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
