import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constant'

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UsersModule, // Import UsersModule to use UsersService
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d'},
    })
  ] 
})
export class AuthModule {}
