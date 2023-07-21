import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { DatabaseModule } from 'src/database/database.module';
import { tasksProviders } from './tasks.provider';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';
import { UsersModule } from 'src/users/users.module';
import { IdMiddleware } from 'src/middlewares/id.middleware';

@Module({
    imports: [DatabaseModule, UsersModule],
    controllers: [TasksController],
    providers: [TasksService, ...tasksProviders]
})
export class TasksModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes(TasksController);
        
            consumer
            .apply(IdMiddleware)
            .forRoutes(
                {path: 'tasks/:id', method: RequestMethod.GET},
                {path: 'tasks/:id', method: RequestMethod.PATCH},
                {path: 'tasks/:id', method: RequestMethod.DELETE}
            );
    }
}
