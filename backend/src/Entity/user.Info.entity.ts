import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User_Table } from './user.entity';

@Entity({ name: 'User_Info' })
export class User_Info {
  @PrimaryGeneratedColumn()
  User_Num: number;

  @Column({ default: null })
  User_Text: string;

  @Column({ default: null })
  User_Comment: string;

  @Column({ default: null })
  User_Img: string;

  @CreateDateColumn()
  User_CreatDate: Date;

  @UpdateDateColumn()
  User_UpDate: Date;

  @ManyToOne(() => User_Table, (user_table) => user_table.User_Num)
  @JoinColumn({ name: 'User_Num' })
  user_table: User_Table;
}
