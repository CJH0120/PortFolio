import { User_Table } from 'src/entity/user.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User_Table>);
    FindbyID(option: FindOneOptions<UserDTO>): Promise<UserDTO | undefined>;
    Save(userDto: UserDTO): Promise<UserDTO | undefined>;
    FindbyNick(User_Id: string): Promise<UserDTO>;
}
