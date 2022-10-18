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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_Kategorie = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let User_Kategorie = class User_Kategorie {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User_Kategorie.prototype, "User_Num", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], User_Kategorie.prototype, "LogoTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], User_Kategorie.prototype, "Titile_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], User_Kategorie.prototype, "Titile_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], User_Kategorie.prototype, "Titile_3", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], User_Kategorie.prototype, "Titile_4", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User_Table, (user_table) => user_table.User_Num),
    (0, typeorm_1.JoinColumn)({ name: 'User_Num' }),
    __metadata("design:type", user_entity_1.User_Table)
], User_Kategorie.prototype, "user_table", void 0);
User_Kategorie = __decorate([
    (0, typeorm_1.Entity)({ name: 'User_Kategorie' })
], User_Kategorie);
exports.User_Kategorie = User_Kategorie;
//# sourceMappingURL=user.Kategorie.entity.js.map