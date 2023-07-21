import { UsersService } from './../users/users.service';
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { config } from 'dotenv';
config();

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly userService: UsersService) { }

    use(req: Request, res: Response, next: NextFunction) {
        const { authorization } = req.headers;

        if (!authorization) {
            throw new UnauthorizedException();
        }

        const parts = authorization.split(' ');

        if (parts.length !== 2) {
            throw new UnauthorizedException();
        }

        const [schema, token] = parts;

        if (schema !== 'Bearer') {
            throw new UnauthorizedException();
        }


        let error = false
        verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                error = true;
                return;
            }

            const user = await this.userService.findById(decoded['id']);

            if (!user || !user._id) {
                error = true;
                return;
            }

            req["userId"] = user._id;
            req["isAdmin"] = user['isAdmin'];

            next();
        });
        if (error) { throw new UnauthorizedException('Token invalid or expired') }
    }
}
