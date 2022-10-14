import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import { User_Info } from './userInfoentity'import {} from '@nestjs/common';
// 엔티티  name : 테이블 이름
@Entity({ name: 'User_Table' })
export class User_Table {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  User_Id: string;

  @Column()
  User_Pw: string;

  @CreateDateColumn()
  createdAt: Date;
}
