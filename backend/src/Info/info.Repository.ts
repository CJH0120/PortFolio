import { User_Info } from 'src/entity/user.Info.entity';
import { User_Categorie } from 'src/Entity/user.Categorie.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User_Info)
export class InfoRepository extends Repository<User_Info> {}
