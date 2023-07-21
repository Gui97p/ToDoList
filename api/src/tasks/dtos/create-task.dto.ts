import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly description: string;
}