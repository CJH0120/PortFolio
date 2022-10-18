import { User_Info } from './user.Info.entity';
import { User_Kategorie } from './user.Kategorie.entity';
export declare class User_Table {
    User_Num: number;
    User_Id: string;
    User_Pw: string;
    User_NickName: string;
    User_regDate: Date;
    user_infos: User_Info[];
    User_Kategorie: User_Kategorie[];
}
