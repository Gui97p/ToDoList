/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateTaskDto } from './dtos/create-task.dto';
import { TasksService } from './tasks.service';
import { Request } from 'express';
import { UpdateTaskDto } from './dtos/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./interfaces/task.interface").Task> & import("./interfaces/task.interface").Task & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findById(id: string): Promise<import("mongoose").Document<unknown, {}, import("./interfaces/task.interface").Task> & import("./interfaces/task.interface").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(body: CreateTaskDto, req: Request): Promise<import("mongoose").Document<unknown, {}, import("./interfaces/task.interface").Task> & import("./interfaces/task.interface").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, body: UpdateTaskDto, req: Request): Promise<{
        message: string;
    }>;
    remove(id: string, req: Request): Promise<{
        message: string;
    }>;
}
