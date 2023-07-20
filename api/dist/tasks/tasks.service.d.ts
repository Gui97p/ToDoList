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
/// <reference types="mongoose/types/inferschematype" />
import { Task } from './interfaces/task.interface';
import { Model, Types } from 'mongoose';
export declare class TasksService {
    private readonly taskModel;
    constructor(taskModel: Model<Task>);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Task> & Task & {
        _id: Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, Task> & Task & {
        _id: Types.ObjectId;
    }, {}, Task, "find">;
    findById(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, Task> & Task & {
        _id: Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, Task> & Task & {
        _id: Types.ObjectId;
    }, {}, Task, "findOne">;
    create(id: Types.ObjectId | string, body: any): Promise<import("mongoose").Document<unknown, {}, Task> & Task & {
        _id: Types.ObjectId;
    }>;
    update(id: Types.ObjectId | string, body: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, Task> & Task & {
        _id: Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, Task> & Task & {
        _id: Types.ObjectId;
    }, {}, Task, "findOneAndUpdate">;
    remove(id: Types.ObjectId | string): import("mongoose").Query<import("mongoose").Document<unknown, {}, Task> & Task & {
        _id: Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, Task> & Task & {
        _id: Types.ObjectId;
    }, {}, Task, "findOneAndDelete">;
}
