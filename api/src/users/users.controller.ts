import { Controller, Get, Post, Body, UnauthorizedException, Param, Patch, Req, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginDto } from './dtos/login.dto';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { UpdateUserDto } from './dtos/update-user.dto';
import { Request } from 'express';
import { Schema } from 'mongoose';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async findAll() {
        return await this.usersService.findAll();
    }

    @Get('/:id')
    async findById(@Param('id') id: string) {
        return await this.usersService.findById(id);
    }

    @Post()
    async create(@Body() body: CreateUserDto) {
        return this.usersService.create(body);
    }

    @Post('auth')
    async login(@Body() body: LoginDto) {
        const { email, password } = body;
        const user = await this.usersService.findByEmail(email);

        if (!user) {
            throw new UnauthorizedException({ message: 'Invalid credentials' });
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const token = sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: 3600/*604800*/ });

        return { token };
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: UpdateUserDto, @Req() req: Request) {
        const userId: string | Schema.Types.ObjectId = req['userId'];
        const isAdmin: boolean = req['isAdmin'];

        if (String(userId) !== String(id)) {
            if (!isAdmin) {
                throw new UnauthorizedException();
            }
        }

        await this.usersService.update(userId, body);

        return {
            message: 'User successfully updated'
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string, @Req() req: Request) {
        const userId: string | Schema.Types.ObjectId = req['userId'];
        const isAdmin: boolean = req['isAdmin'];


        if (String(userId) !== String(id)) {
            if (!isAdmin) {
                throw new UnauthorizedException();
            }
        }

        await this.usersService.remove(id);

        return {
            message: 'User successfully deleted'
        };
    }
}
