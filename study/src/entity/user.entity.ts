import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Video } from './video.entity';
@Entity()
export class User {
  @PrimaryColumn()
  id: string;
  @Column({
    unique: true,
  })
  user_id: string;
  @Column({
    unique: true,
  })
  user_name: string;
  @Column()
  pass_word: string;
  @Column()
  full_name: string;

  @OneToMany(() => Video, (video) => video.author_video)
  video: Video[];
}
