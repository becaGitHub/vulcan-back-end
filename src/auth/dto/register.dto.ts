import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterDto {
    @IsString()
    @MinLength(3)
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    password: string;

    @IsString()
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    dni: string;

    @IsString()
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    username: string;

    @IsOptional()
    @IsString()
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    image?: string;

    @IsOptional()
    @IsString()
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    phone?: string;

    @IsOptional()
    @IsString()
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    address?: string;

    @IsOptional()
    @IsString()
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    gender?: string;

    @IsOptional()
    @IsString()
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    role?: string;

    @IsOptional()
    @IsString()
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    tenant_id?: string;

    @IsOptional()
    @IsString()
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    subsidiary_id?: string;

    @IsOptional()
    created_by?: string;

    @IsOptional()
    modified_by?: string;

    @IsOptional()
    date_entered?: Date;

    @IsOptional()
    date_modified?: Date;

    @IsOptional()
    birthday?: Date;
}