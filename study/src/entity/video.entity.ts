import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';
import { clear } from 'console';

@Entity()
export class Video {
  @PrimaryColumn()
  id: number;
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
  userId: User | number;
}
