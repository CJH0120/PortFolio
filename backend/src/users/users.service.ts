import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User_Table } from 'src/entity/user.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User_Table)
    private userRepository: Repository<User_Table>,
  ) {}
  async FindbyID(
    option: FindOneOptions<UserDTO>,
  ): Promise<UserDTO | undefined> {
    return await this.userRepository.findOne(option);
  }
  async Save(userDto: UserDTO): Promise<UserDTO | undefined> {
    return await this.userRepository.save(userDto);
  }
  async FindbyNick(User_Id: string): Promise<UserDTO> {
    return await this.userRepository.findOne({ where: { User_Id } });
  }
  async FindNum(User_NickName: string): Promise<any> {
    return await (
      await this.userRepository.findOneBy({ User_NickName: User_NickName })
    ).User_Num;
  }
}
