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
exports.KategorieController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const Kategorie_service_1 = require("./Kategorie.service");
let KategorieController = class KategorieController {
    constructor(KategorieService, JwtService) {
        this.KategorieService = KategorieService;
        this.JwtService = JwtService;
    }
    async Change(req, headers, response) {
        const Token = headers['authorization'];
        const nickname = headers['nickname'];
        const key = req.body['key'];
        const value = req.body['value'];
        const a = await this.KategorieService.verify(Token, nickname);
        const b = await this.KategorieService.SaveData(a, key, value);
        return a === false
            ? response.status(common_1.HttpStatus.BAD_REQUEST).send('누구세요?')
            : b;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Headers)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], KategorieController.prototype, "Change", null);
KategorieController = __decorate([
    (0, common_1.Controller)('Kategorie'),
    __metadata("design:paramtypes", [Kategorie_service_1.KategorieService,
        jwt_1.JwtService])
], KategorieController);
exports.KategorieController = KategorieController;
//# sourceMappingURL=Kategorie.controller.js.map