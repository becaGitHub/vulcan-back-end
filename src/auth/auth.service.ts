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
    async register(registerDto : RegisterDto, userFromToken: any) {
        console.log(userFromToken)
        
        const {
            email,
            password,
            dni
        } = registerDto;
        
        let user = await this.usersService.findOneByParameter('email', email);
        console.log(user)
        if(user) {
            throw new BadRequestException('User already exists with this email'); // revisar documentación para mas tipos de errores de nestjs
        }

        user = await this.usersService.findOneByParameter('dni', dni);
        console.log(user)
        if(user) {
            throw new BadRequestException('User already exists with this dni');
        }

        registerDto.password = await bcrypt.hash(password, 10), // Hash the password before saving
        registerDto.tenant_id = registerDto.tenant_id ?? userFromToken.tenant_id;
        registerDto.created_by = registerDto.created_by ?? userFromToken.user_id;
        registerDto.modified_by = registerDto.modified_by ?? userFromToken.user_id;
        console.log(registerDto)

        await this.usersService.create(registerDto);
    }

    async login({email, password}: LoginDto) {
        console.log(email, password)
        const user = await this.usersService.findOneByParameter('email', email);
        const {
            id,
            name,
            username,
        } = user || {};
        
        if (!user) {
            throw new UnauthorizedException('email is wrong');
        }

        // Verifica que el usuario no esté eliminado ni inactivo
        if (user.deleted || !user.active) {
            throw new UnauthorizedException('Usuario eliminado o inactivo');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('password is wrong');
        }

        const payload = {
            tenant_id: user.tenant_id,
            user_id: user.id,
        }
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
