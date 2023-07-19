import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string;
    
    @IsNotEmpty()
    @IsString()
    @Length(8)
    readonly password: string;
}
