import { sign } from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    genToken(id: string) {
        return sign({id}, process.env.JWT_SECRET, { expiresIn: 604800 });
    }
}
