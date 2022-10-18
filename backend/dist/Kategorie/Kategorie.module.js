"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KategorieModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entity/user.entity");
const user_Kategorie_entity_1 = require("../entity/user.Kategorie.entity");
const users_service_1 = require("../users/users.service");
const Kategorie_controller_1 = require("./Kategorie.controller");
const Kategorie_service_1 = require("./Kategorie.service");
let KategorieModule = class KategorieModule {
};
KategorieModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_Kategorie_entity_1.User_Kategorie, user_entity_1.User_Table])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [Kategorie_controller_1.KategorieController],
        providers: [Kategorie_service_1.KategorieService, jwt_1.JwtService, users_service_1.UsersService],
    })
], KategorieModule);
exports.KategorieModule = KategorieModule;
//# sourceMappingURL=Kategorie.module.js.map