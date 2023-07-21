import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcrypt';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService, private readonly usersService: UsersService) {}

    @Post()
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

        const token = this.authService.genToken(user._id);

        return { token };
    }
}
