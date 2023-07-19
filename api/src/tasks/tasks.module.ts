import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { DatabaseModule } from 'src/database/database.module';
import { tasksProviders } from './tasks.provider';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [DatabaseModule, UsersModule],
    controllers: [TasksController],
    providers: [TasksService, ...tasksProviders]
})
export class TasksModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes('tasks');
    }
}
