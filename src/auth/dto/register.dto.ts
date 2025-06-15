import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterDto {
  @IsString()
  @MinLength(3)
  @Transform(({ value }) => value.trim())
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @Transform(({ value }) => value.trim())
  password: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  dni: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  username: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  image?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  phone?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  address?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  gender?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  role?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  tenant_id?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  subsidiary_id?: string;
}