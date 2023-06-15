import { Entity, Column, PrimaryColumn } from 'typeorm';
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
}
