import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @ApiProperty()
    readonly email: string;
    
    @IsNotEmpty()
    @IsString()
    @Length(8)
    @ApiProperty()
    readonly password: string;
}
