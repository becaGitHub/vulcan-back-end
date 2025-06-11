import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
    register(
        @Body()
        registerDto: RegisterDto
    ) {
        console.log(registerDto);
        return this.authService.register(registerDto);
    }

    @Post('login')
    login(
        @Body()
        LoginDto: LoginDto
    ) {
        return this.authService.login(LoginDto);
    }

    @Get('profile')
    @UseGuards(AuthGuard)
    profile(
        @Request() //payload del token
        req
    ){
        console.log(req.user)
        return 'profile'
    }
}
