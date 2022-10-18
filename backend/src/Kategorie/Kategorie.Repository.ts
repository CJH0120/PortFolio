import { User_Kategorie } from 'src/entity/user.Kategorie.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User_Kategorie)
export class KategorieRepository extends Repository<User_Kategorie> {}
