import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { HomeModule } from './module/Home.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Video } from './entity/video.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      username: process.env.USER1,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [Video],
      synchronize: true,
      autoLoadEntities: true,
    }),
    HomeModule,
  ],
})
export class AppModule {}
