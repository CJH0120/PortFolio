import { User_Categorie } from 'src/entity/user.Categorie';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User_Categorie)
export class CategorieRepository extends Repository<User_Categorie> {}
