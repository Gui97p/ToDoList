import { Inject, Injectable } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { Model, Schema } from 'mongoose';

@Injectable()
export class TasksService {
    constructor(@Inject('TASK_MODEL') private readonly taskModel: Model<Task>) {}

    findAll() {
        return this.taskModel.find();
    }

    findById(id: string) {
        return this.taskModel.findById(id);
    }

    findByUser(id: Schema.Types.ObjectId | string) {
        return this.taskModel.find({ user: id }).populate('user');
    }

    create(id: Schema.Types.ObjectId | string, body: any) {
        const doc = {
            title: body.title,
            description: body.description,
            user: id
        }
        return this.taskModel.create(doc);
    }

    update(id: Schema.Types.ObjectId | string, body: any) {
        return this.taskModel.findByIdAndUpdate(id, body);
    }

    remove(id: Schema.Types.ObjectId | string) {
        return this.taskModel.findByIdAndDelete(id);
    }
}
