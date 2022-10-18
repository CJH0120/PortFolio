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
exports.InfoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_Info_entity_1 = require("../entity/user.Info.entity");
const Kategorie_service_1 = require("../Kategorie/Kategorie.service");
const info_Repository_1 = require("./info.Repository");
let InfoService = class InfoService {
    constructor(InfoRepository, KategorieService) {
        this.InfoRepository = InfoRepository;
        this.KategorieService = KategorieService;
    }
    async Index(usernum) {
        const Kategorie = await this.KategorieService.find(1);
        const Info = await this.InfoRepository.findOne({
            where: { User_Num: usernum },
        });
        return { Kategorie: Kategorie, Info: Info };
    }
};
InfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_Info_entity_1.User_Info)),
    __metadata("design:paramtypes", [info_Repository_1.InfoRepository,
        Kategorie_service_1.KategorieService])
], InfoService);
exports.InfoService = InfoService;
//# sourceMappingURL=info.service.js.map