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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const bcrypt_1 = require("bcrypt");
let UsersService = exports.UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    findAll() {
        return this.userModel.find();
    }
    findById(id) {
        return this.userModel.findById(id);
    }
    findByEmail(email) {
        return this.userModel.findOne({ email }).select('+password');
    }
    create(body) {
        return this.userModel.create(body)
            .catch(err => {
            switch (err.code) {
                case 11000:
                    throw new common_1.HttpException('This email already exists', common_1.HttpStatus.BAD_REQUEST);
                    break;
                default:
                    throw new common_1.InternalServerErrorException(err.message);
                    break;
            }
        });
    }
    async update(id, body) {
        if (body.password) {
            body.password = await (0, bcrypt_1.hash)(body.password, 10);
        }
        const doc = this.userModel.findByIdAndUpdate(id, body);
        return doc;
    }
    remove(id) {
        return this.userModel.findByIdAndDelete(id);
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map