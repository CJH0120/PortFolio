import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User_Table } from './user.entity';

@Entity({ name: 'User_Kategorie' })
export class User_Kategorie {
  @PrimaryGeneratedColumn()
  User_Num: number;

  @Column({ default: null })
  LogoTitle: string;

  @Column({ default: null })
  Titile_1: string;
  @Column({ default: null })
  Titile_2: string;
  @Column({ default: null })
  Titile_3: string;
  @Column({ default: null })
  Titile_4: string;

  @ManyToOne(() => User_Table, (user_table) => user_table.User_Num)
  @JoinColumn({ name: 'User_Num' })
  user_table: User_Table;
}
