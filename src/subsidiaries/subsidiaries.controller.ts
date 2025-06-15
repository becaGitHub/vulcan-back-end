import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SubsidiariesService } from './subsidiaries.service';
import { CreateSubsidiaryDto } from './dto/create-subsidiary.dto';
import { UpdateSubsidiaryDto } from './dto/update-subsidiary.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/guard/auth.guard';

@ApiTags('subsidiaries')
@Controller('subsidiaries')
export class SubsidiariesController {
  constructor(private readonly subsidiariesService: SubsidiariesService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiBody({
    type: CreateSubsidiaryDto,
    description: 'Datos para crear una sucursal',
    required: true,
    examples: {
      ejemplo: {
        summary: 'Sucursal básica',
        description: 'Ejemplo de creación de una sucursal',
        value: {
          name: "Sucursal Centro",
          city: "La Paz",
          active: true,
          deleted: false,
          created_by: "admin",
          modified_by: "admin",
          tenant_id: "tenant-123"
        }
      }
    }
  })
  create(@Body() createSubsidiaryDto: CreateSubsidiaryDto) {
    return this.subsidiariesService.create(createSubsidiaryDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  findAll() {
    return this.subsidiariesService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.subsidiariesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateSubsidiaryDto: UpdateSubsidiaryDto) {
    return this.subsidiariesService.update(id, updateSubsidiaryDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.subsidiariesService.remove(id);
  }
}