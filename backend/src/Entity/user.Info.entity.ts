import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User_Table } from './user.entity';

@Entity({ name: 'User_Info' })
export class User_Info {
  @PrimaryGeneratedColumn('uuid')
  User_Num: string;

  @Column()
  User_Phone: string;

  @Column()
  User_Text: string;

  @Column()
  User_Birth: string;

  @Column()
  User_Adress: string;

  @Column()
  User_Email: string;

  @Column()
  User_Education: string;

  @CreateDateColumn()
  User_CreatDate: Date;

  @UpdateDateColumn()
  User_UpDate: Date;

  @ManyToOne(() => User_Table, (user_table) => user_table.User_Num)
  @JoinColumn({ name: 'User_Num' })
  user_table: User_Table;
}
