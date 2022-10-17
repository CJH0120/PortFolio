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
exports.User_Table = void 0;
const typeorm_1 = require("typeorm");
const user_Info_entity_1 = require("./user.Info.entity");
let User_Table = class User_Table {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], User_Table.prototype, "User_Num", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User_Table.prototype, "User_Id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User_Table.prototype, "User_Pw", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User_Table.prototype, "User_NickName", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User_Table.prototype, "User_regDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_Info_entity_1.User_Info, (user_info) => user_info.User_Num),
    __metadata("design:type", Array)
], User_Table.prototype, "user_infos", void 0);
User_Table = __decorate([
    (0, typeorm_1.Entity)({ name: 'User_Table' })
], User_Table);
exports.User_Table = User_Table;
//# sourceMappingURL=user.entity.js.map