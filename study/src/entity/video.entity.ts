import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

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
  @ManyToOne(() => User, (user) => user.user_id)
  user: User;
}
