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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const create_task_dto_1 = require("./dtos/create-task.dto");
const tasks_service_1 = require("./tasks.service");
const update_task_dto_1 = require("./dtos/update-task.dto");
let TasksController = exports.TasksController = class TasksController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    async findAll() {
        return await this.tasksService.findAll();
    }
    async findById(id) {
        return await this.tasksService.findById(id);
    }
    async create(body, req) {
        const userId = req["userId"];
        const newTask = await this.tasksService.create(userId, body);
        return newTask;
    }
    async update(id, body, req) {
        const userId = req['userId'];
        const isAdmin = req['isAdmin'];
        const task = await this.tasksService.findById(id);
        if (!task) {
            throw new common_1.BadRequestException('Task with the given ID not found');
        }
        if (String(userId) !== String(task['user'])) {
            if (!isAdmin) {
                throw new common_1.UnauthorizedException();
            }
        }
        await this.tasksService.update(id, body);
        return {
            message: 'Task successfully updated'
        };
    }
    async remove(id, req) {
        const userId = req['userId'];
        const isAdmin = req['isAdmin'];
        const task = await this.tasksService.findById(id);
        if (String(userId) !== String(task['user'])) {
            if (!isAdmin) {
                throw new common_1.UnauthorizedException();
            }
        }
        await this.tasksService.remove(id);
        return {
            message: 'Task successfully deleted'
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_task_dto_1.UpdateTaskDto, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "remove", null);
exports.TasksController = TasksController = __decorate([
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
//# sourceMappingURL=tasks.controller.js.map