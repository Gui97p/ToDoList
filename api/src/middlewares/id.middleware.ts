import { BadRequestException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { Types } from "mongoose";

@Injectable()
export class IdMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        if (!Types.ObjectId.isValid(id)) {
            throw new BadRequestException('ID not valid');
        }

        next();
    }
}