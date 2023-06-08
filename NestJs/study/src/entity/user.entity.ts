import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: string | number;
  @Column()
  user_name: string | number;
  @Column()
  pass_word: string;
  @Column()
  full_name: string;
}
