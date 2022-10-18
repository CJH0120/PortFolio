import { User_Info } from 'src/entity/user.Info.entity';
import { User_Kategorie } from 'src/entity/user.Kategorie.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User_Info)
export class InfoRepository extends Repository<User_Info> {}
