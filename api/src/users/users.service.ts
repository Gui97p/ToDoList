import { HttpException, HttpStatus, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model, Schema } from 'mongoose';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

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

    create(body: any) {
        return this.userModel.create(body)
            .catch(err => {
                switch (err.code) {
                    case 11000:
                        throw new HttpException('This email already exists', HttpStatus.BAD_REQUEST);
                        break;

                    default:
                        throw new InternalServerErrorException(err.message);
                        break;
                }
            });
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
