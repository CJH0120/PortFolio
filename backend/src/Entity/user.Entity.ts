import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User_Info } from './user.Info.entity';
import { User_Kategorie } from './user.Kategorie.entity';

@Entity({ name: 'User_Table' })
export class User_Table {
  @PrimaryGeneratedColumn('increment')
  User_Num: number;

  @Column()
  User_Id: string;

  @Column()
  User_Pw: string;

  @Column()
  User_NickName: string;

  @CreateDateColumn()
  User_regDate: Date;

  @OneToMany(() => User_Info, (user_info) => user_info.User_Num)
  user_infos: User_Info[];

  @OneToMany(() => User_Kategorie, (user_k) => user_k.User_Num)
  User_Kategorie: User_Kategorie[];
}
