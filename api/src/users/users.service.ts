import { HttpException, HttpStatus, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model, Schema } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
    constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}

    findAll() {
        return this.userModel.find();
    }

    findById(id: Schema.Types.ObjectId) {
        return this.userModel.findById(id);
    }

    findByEmail(email: string) {
        return this.userModel.findOne({email}).select('+password');
    }

    create(body: any) {
        return this.userModel.create(body)
        .then(doc => ({
            id: doc._id,
            name: doc.name,
            email: doc.email,
            createdAt: doc['createdAt']
        }))
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
}
