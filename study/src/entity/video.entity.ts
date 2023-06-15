import { Entity, Column, PrimaryColumn, Unique } from 'typeorm';

@Entity()
export class Video {
  @PrimaryColumn()
  id: string;
  @Column()
  video_name: string;
  @Column({
    unique: true,
  })
  video_id: string;
  @Column()
  video_description: string;
  @Column()
  author_video: string;
}
