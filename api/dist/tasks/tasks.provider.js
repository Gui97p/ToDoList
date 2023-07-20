"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksProviders = void 0;
const task_model_1 = require("./models/task.model");
exports.tasksProviders = [
    {
        provide: 'TASK_MODEL',
        useFactory: (mongoose) => mongoose.model('Task', task_model_1.TaskSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=tasks.provider.js.map