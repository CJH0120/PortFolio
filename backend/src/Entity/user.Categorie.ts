import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { User_Table } from './user.entity';

@Entity({ name: 'User_Categorie' })
export class User_Categorie {
  @PrimaryColumn({ unique: true })
  User_Num: number;

  @Column({ default: null })
  Title_Logo: string;

  @Column({ default: null })
  Title_1: string;

  @Column({ default: null })
  Title_2: string;

  @Column({ default: null })
  Title_3: string;

  @Column({ default: null })
  Title_4: string;

  @ManyToOne(() => User_Table, (user_table) => user_table.User_Num)
  @JoinColumn({ name: 'User_Num' })
  user_table: User_Table;
}
