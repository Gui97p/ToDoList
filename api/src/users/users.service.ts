import { sign } from 'jsonwebtoken';
import { HttpException, HttpStatus, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model, Schema } from 'mongoose';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';
import { config } from 'dotenv';
config();

@Injectable()
export class UsersService {
    constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) { }

    findAll() {
        return this.userModel.find();
    }

    findById(id: string | Schema.Types.ObjectId) {
        return this.userModel.findById(id);
    }

    findByEmail(email: string) {
        return this.userModel.findOne({ email }).select('+password');
    }

    async create(body: any) {
        try {
           var user: {password: string} = (await this.userModel.create(body)).toObject();
           delete user['password'];
           return user;
            
        } catch (err) {
            switch (err.code) {
                case 11000:
                    throw new HttpException('This email already exists', HttpStatus.BAD_REQUEST);
                    break;

                default:
                    throw new InternalServerErrorException(err.message);
                    break;
            }
        }
    }

    async update(id: string | Schema.Types.ObjectId, body: any) {
        if (body.password) {
            body.password = await hash(body.password, 10);
        }
        const doc = this.userModel.findByIdAndUpdate(id, body);
        return doc;
    }

    remove(id: string | Schema.Types.ObjectId) {
        return this.userModel.findByIdAndDelete(id);
    }
}
