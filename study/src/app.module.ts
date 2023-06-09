import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { HomeModule } from './module/Home.module';
import { AuthModule } from './module/Auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Video } from './entity/video.entity';
import { VideoModule } from './module/Video.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      // port: Number(process.env.PORT) || 3000,
      host: process.env.HOST,
      username: process.env.USER1,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [Video],
      synchronize: true,
      autoLoadEntities: true,
    }),
    HomeModule,
    AuthModule,
    VideoModule,
  ],
})
export class AppModule {}
