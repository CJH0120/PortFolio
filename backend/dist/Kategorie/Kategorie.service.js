"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KategorieService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("../config/typeorm.config");
const user_Kategorie_entity_1 = require("../entity/user.Kategorie.entity");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
let KategorieService = class KategorieService {
    constructor(KategorieRepository, userSerivce, JwtService) {
        this.KategorieRepository = KategorieRepository;
        this.userSerivce = userSerivce;
        this.JwtService = JwtService;
    }
    async verify(Token, nickname) {
        const secret = (0, typeorm_config_1.default)().auth.jwt_secret_key;
        const verify = await this.JwtService.verify(Token, { secret });
        const userFind = await this.userSerivce.FindbyID({
            where: { User_NickName: verify.userNick },
        });
        if (verify) {
            return verify.userNick !== nickname ? false : userFind.User_Num;
        }
    }
    async find(number) {
        const a = await this.KategorieRepository.findOne({
            where: { User_Num: number },
        });
        return a;
    }
    async SaveData(usernum, key, value) {
        const keys = key;
        return await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .insert()
            .into(user_Kategorie_entity_1.User_Kategorie)
            .values([
            {
                User_Num: usernum,
            },
        ]);
    }
};
KategorieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_Kategorie_entity_1.User_Kategorie)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        jwt_1.JwtService])
], KategorieService);
exports.KategorieService = KategorieService;
//# sourceMappingURL=Kategorie.service.js.map