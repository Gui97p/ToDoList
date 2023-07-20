import { BadRequestException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { UsersService } from "src/users/users.service";

@Injectable()
export class UserMiddleware implements NestMiddleware {
    constructor(private readonly usersService: UsersService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const user = await this.usersService.findById(id);

        if (!user) {
            throw new BadRequestException({
                message: 'User not found'
            });
        }

        req['id'] = id;
        req['user'] = user;

        next();
    }
}