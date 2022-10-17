import { User_Table } from 'src/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'User_Info' })
export class User_Info {
  @PrimaryGeneratedColumn('increment')
  User_Num: number;

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
