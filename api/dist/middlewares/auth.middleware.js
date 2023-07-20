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
exports.AuthMiddleware = void 0;
const users_service_1 = require("./../users/users.service");
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
let AuthMiddleware = exports.AuthMiddleware = class AuthMiddleware {
    constructor(userService) {
        this.userService = userService;
    }
    use(req, res, next) {
        const { authorization } = req.headers;
        if (!authorization) {
            throw new common_1.UnauthorizedException();
        }
        const parts = authorization.split(' ');
        if (parts.length !== 2) {
            throw new common_1.UnauthorizedException();
        }
        const [schema, token] = parts;
        if (schema !== 'Bearer') {
            throw new common_1.UnauthorizedException();
        }
        let error = false;
        (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                error = true;
                return;
            }
            const user = await this.userService.findById(decoded['id']);
            if (!user || !user._id) {
                error = true;
                return;
            }
            req["userId"] = user._id;
            req["isAdmin"] = user['isAdmin'];
            next();
        });
        if (error) {
            throw new common_1.UnauthorizedException('Token invalid or expired');
        }
    }
};
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map