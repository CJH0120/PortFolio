import { User_Table } from 'src/entity/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User_Table)
export class UserRepository extends Repository<User_Table> {}
