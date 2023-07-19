import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    async findAll() {
        return this.tasksService.findAll();
    }

    @Post()
    async create(@Body() body: CreateTaskDto) {
        const newTask = await this.tasksService.create(body);
        
        return newTask;
    }
}
