import { IsString, MinLength, IsEmail } from "class-validator";
import { Transform } from "class-transformer";

export class LoginDto {
    @IsString()
    @MinLength(3)
    @Transform(({value}) => value.trim())
    name?: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @Transform(({value}) => value.trim())
    password: string;
}