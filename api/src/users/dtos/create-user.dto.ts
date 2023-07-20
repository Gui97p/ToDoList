import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @Length(3)
    @ApiProperty()
    readonly name: string;

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
