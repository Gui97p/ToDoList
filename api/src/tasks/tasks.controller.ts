import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Req, UnauthorizedException } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TasksService } from './tasks.service';
import { Request } from 'express';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { Schema } from 'mongoose';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    async findAll(@Req() req: Request) {
        const isAdmin: boolean = req['isAdmin'];

        if (!isAdmin) {
            throw new UnauthorizedException({
                message: "Only admins can access this route"
            });
        }

        return await this.tasksService.findAll();
    }

    @Get('user')
    async findByUser(@Req() req: Request) {
        const userId: string | Schema.Types.ObjectId = req['userId'];

        const tasks = await this.tasksService.findByUser(userId);

        return tasks;
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.tasksService.findById(id);
    }

    @Post()
    async create(@Body() body: CreateTaskDto, @Req() req: Request) {
        const userId = req["userId"];
        const newTask = await this.tasksService.create(userId, body);
        
        return newTask;
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: UpdateTaskDto, @Req() req: Request) {
        const userId: string | Schema.Types.ObjectId = req['userId'];
        const isAdmin: boolean = req['isAdmin'];

        const task = await this.tasksService.findById(id);

        if (!task) {
            throw new BadRequestException('Task with the given ID not found');
        }

        if (String(userId) !== String(task['user'])) {
            if (!isAdmin) {
                throw new UnauthorizedException();
            }
        }

        await this.tasksService.update(id, body);

        return {
            message: 'Task successfully updated'
        };
    }

    @Delete(':id')
    async remove(@Param('id') id: string, @Req() req: Request) {
        const userId: string | Schema.Types.ObjectId = req['userId'];
        const isAdmin: boolean = req['isAdmin'];

        const task = await this.tasksService.findById(id);

        if (String(userId) !== String(task['user'])) {
            if (!isAdmin) {
                throw new UnauthorizedException();
            }
        }

        await this.tasksService.remove(id);

        return {
            message: 'Task successfully deleted'
        };
    }
}
