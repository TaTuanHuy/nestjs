import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Video {
  @Column()
  video_name: string;
  @PrimaryGeneratedColumn()
  video_id: string;
  @Column()
  video_description: string;
  @Column()
  author_video: string;
}
