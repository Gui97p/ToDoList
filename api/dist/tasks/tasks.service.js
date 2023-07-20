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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let TasksService = exports.TasksService = class TasksService {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    findAll() {
        return this.taskModel.find();
    }
    findById(id) {
        return this.taskModel.findById(id);
    }
    create(id, body) {
        const doc = {
            title: body.title,
            description: body.description,
            user: id
        };
        return this.taskModel.create(doc);
    }
    update(id, body) {
        return this.taskModel.findByIdAndUpdate(id, body);
    }
    remove(id) {
        return this.taskModel.findByIdAndDelete(id);
    }
};
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TASK_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TasksService);
//# sourceMappingURL=tasks.service.js.map