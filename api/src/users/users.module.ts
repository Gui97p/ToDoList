import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.provider';
import { DatabaseModule } from 'src/database/database.module';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';
import { IdMiddleware } from 'src/middlewares/id.middleware';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [UsersService, ...usersProviders],
    exports: [UsersService]
})
export class UsersModule {
    configure(consumer: MiddlewareConsumer) {        
        consumer
            .apply(AuthMiddleware)
            .forRoutes(
                {path: 'users', method: RequestMethod.GET},
                {path: 'users/:id', method: RequestMethod.PATCH},
                {path: 'users/:id', method: RequestMethod.DELETE}
            );
        
        consumer
            .apply(IdMiddleware)
            .forRoutes(
                {path: 'users/:id', method: RequestMethod.GET},
                {path: 'users/:id', method: RequestMethod.PATCH},
                {path: 'users/:id', method: RequestMethod.DELETE}
            );
    }
}
