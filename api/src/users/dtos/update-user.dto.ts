import { CreateUserDto } from "./create-user.dto";
import { PickType } from "@nestjs/swagger";

export class UpdateUserDto extends PickType(CreateUserDto, ['name', 'email', 'password'] as const) {}
