"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entity/user.entity");
const user_Info_entity_1 = require("../entity/user.Info.entity");
const user_Kategorie_entity_1 = require("../entity/user.Kategorie.entity");
const Kategorie_Repository_1 = require("../Kategorie/Kategorie.Repository");
const Kategorie_service_1 = require("../Kategorie/Kategorie.service");
const users_repository_1 = require("../users/users.repository");
const users_service_1 = require("../users/users.service");
const info_controller_1 = require("./info.controller");
const info_service_1 = require("./info.service");
let InfoModule = class InfoModule {
};
InfoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_Info_entity_1.User_Info, user_Kategorie_entity_1.User_Kategorie, user_entity_1.User_Table])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [info_controller_1.InfoController],
        providers: [
            info_service_1.InfoService,
            Kategorie_service_1.KategorieService,
            Kategorie_Repository_1.KategorieRepository,
            jwt_1.JwtService,
            users_service_1.UsersService,
            users_repository_1.UserRepository,
        ],
    })
], InfoModule);
exports.InfoModule = InfoModule;
//# sourceMappingURL=info.module.js.map