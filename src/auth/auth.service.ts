import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';

//////// otro servicio hash
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

/////

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService
    ) {}
    async register(registerDto : RegisterDto) {
        console.log(registerDto)
        const {
            email,
            password,
        } = registerDto;
        
        const user = await this.usersService.findOneByEmail(email);
        console.log(user)
        if(user) {
            throw new BadRequestException('User already exists with this email'); // revisar documentación para mas tipos de errores de nestjs
        }

        registerDto.password = await bcrypt.hash(password, 10), // Hash the password before saving
        await this.usersService.create(registerDto);
    }

    async login({email, password}: LoginDto) {
        console.log(email, password)
        const user = await this.usersService.findOneByEmail(email);
        const {
            id,
            name,
            username,
        } = user || {};
        
        if (!user) {
            throw new UnauthorizedException('email is wrong');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('password is wrong');
        }

        const payload = {email: user.email}
        const token = await this.jwtService.signAsync(payload)
        return {
            token,
            user:{
                id,
                name,
                username,
            }
        };
    }
}
