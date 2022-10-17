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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userSerivce, jwtServiee) {
        this.userSerivce = userSerivce;
        this.jwtServiee = jwtServiee;
    }
    async JoinUser(NB) {
        const userFind = await this.userSerivce.FindbyID({
            where: { User_Id: NB.User_Id },
        });
        const userNickName = await this.userSerivce.FindbyID({
            where: { User_NickName: NB.User_NickName },
        });
        if (userFind) {
            throw new common_1.HttpException('아이디 중복', common_1.HttpStatus.BAD_REQUEST);
        }
        if (userNickName) {
            throw new common_1.HttpException('닉네임 중복', common_1.HttpStatus.BAD_REQUEST);
        }
        return await this.userSerivce.Save(NB);
    }
    async Login(Id, Pw) {
        const userFind = await this.userSerivce.FindbyID({
            where: { User_Id: Id },
        });
        if (!userFind || Pw !== userFind.User_Pw) {
            throw new common_1.HttpException(`일치하는 정보가 없습니다`, common_1.HttpStatus.BAD_REQUEST);
        }
        const payload = {
            id: userFind.User_Id,
            userNick: userFind.User_NickName,
        };
        return {
            assessToken: await this.jwtServiee.sign(payload),
            nickname: userFind.User_NickName,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map