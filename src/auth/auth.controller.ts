import { Controller, Post, Body, Get, UseGuards, Request, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}

    @Post('register')
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    @ApiBody({
        type: RegisterDto,
        description: 'Datos de registro',
        required: true,
        examples: {
            ejemplo: {
                summary: 'login prueba 1',
                description: 'Ejemplo de inicio de sesión con email y password',
                value: {
                    name: "Juan Perez",
                    username: "jperez",
                    email: "juan@email",
                    dni: "12345678",
                    password: "123",
                    created_by: "admin",
                    modified_by: "admin",
                    tenant_id: "tenant-123",
                    image: "default.png",
                    phone: "123456789",
                    address: "123 Main St",
                    gender: "Masculino",  
                    role: "user",
                    subsidiary_id: "f7d224a4-3330-4022-b085-4f99943b207f"
                }
            }
        }
    })
    register(
        @Body()
        registerDto: RegisterDto,
        @Req()
        req
    ) {
        return this.authService.register(registerDto, req.user);
    }

    @Post('login')
    @ApiBody({
        type: LoginDto,
        description: 'Datos de inicio de sesión',
        required: true,
        examples: {
            ejemplo: {
                summary: 'login prueba 1',
                description: 'Ejemplo de inicio de sesión con email y password',
                value: {
                    email: "test@email.com",
                    password: "123123"
                }
            },
            ejemplo2: {
                summary: 'login prueba 2',
                description: 'Ejemplo de inicio de sesión con email y password',
                value: {
                    email: "test@email.com",
                    password: "123123"
                }
            },
        }
    })
    login(
        @Body()
        LoginDto: LoginDto
    ) {
        return this.authService.login(LoginDto);
    }

    // @Get('profile')
    // @UseGuards(AuthGuard)
    // profile(
    //     @Request() //payload del token
    //     req
    // ){
    //     console.log(req.user)
    //     return 'profile'
    // }
}
