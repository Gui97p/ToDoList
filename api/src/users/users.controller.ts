import { Controller, Get, Post, Body, UseFilters, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginDto } from './dtos/login.dto';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async findAll() {
        return await this.usersService.findAll();
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

        const token = sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: 60/*604800*/ });

        return { token };
    }
}
