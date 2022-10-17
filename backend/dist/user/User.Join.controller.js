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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const User_Join_Service_1 = require("./User.Join.Service");
let AuthController = class AuthController {
    constructor(AuthService) {
        this.AuthService = AuthService;
    }
    async Join(body) {
        await this.AuthService.Join(body.User_Id, body.User_Pw, body.User_NickName);
    }
    async Join(body) {
        await this.AuthService.Join(body.User_Id, body.User_Pw, body.User_NickName);
    }
};
__decorate([
    (0, common_1.Post)('Login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "Join", null);
__decorate([
    (0, common_1.Post)('Join'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "Join", null);
AuthController = __decorate([
    (0, common_1.Controller)('Auth'),
    __metadata("design:paramtypes", [User_Join_Service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=User.Join.controller.js.map