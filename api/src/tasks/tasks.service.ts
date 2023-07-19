import { Inject, Injectable } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
    constructor(@Inject('TASK_MODEL') private readonly taskModel: Model<Task>) {}

    findAll() {
        return this.taskModel.find();
    }

    create(body: any) {
        return this.taskModel.create(body);
    }
}

