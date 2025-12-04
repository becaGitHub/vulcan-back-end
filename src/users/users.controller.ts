import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  findAllByTenant(@Req() req) {
    return this.usersService.findAllByTenant(req.user.tenant_id);
  }

  // @Get()
  // @UseGuards(AuthGuard)
  // @ApiBearerAuth()
  // findAllByTenant(
  //   @Req() req,
  //   @Query('page') page = 1,
  //   @Query('limit') limit = 10,
  //   @Query('name') name?: string,
  //   @Query('email') email?: string,
  //   @Query('role') role?: string
  // ) {
  //   return this.usersService.findAllByTenant(
  //     req.user.tenant_id,
  //     Number(page),
  //     Number(limit),
  //     { name, email, role }
  //   );
  // }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Patch('active/:id/:active')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  updateActiveStatus(
    @Req() req,
    @Param('id') id: string,
    @Param('active') active: boolean
  ) {
    return this.usersService.updateActiveStatus(id, active, req.user.user_id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
