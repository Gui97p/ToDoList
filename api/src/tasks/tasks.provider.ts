import { Mongoose } from 'mongoose';
import { TaskSchema } from './models/task.model';

export const tasksProviders = [
  {
    provide: 'TASK_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Task', TaskSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
