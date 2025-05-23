import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { Query } from '@nestjs/common';

@Controller('categorys')
export class CategorysController {
  constructor(private readonly categorysService: CategorysService) {}

  @Post()
  @ApiBody({
      type: CreateCategoryDto,
      examples: {
        ejemplo: {
          summary: 'Ejemplo de producto',
          value: {
            name: 'Hamburguesas',
            icon: 'lunch_dining',
            created_by: 'admin',
            modified_by: 'admin',
          }
        }
      }
    })
  @ApiResponse({ status: 201, description: 'Producto creado exitosamente', type: CreateCategoryDto })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categorysService.create(createCategoryDto);
  }

  @Get('/category-join-sub-category')
  findAllJoinSubCategory() {
    return this.categorysService.findAllJoinSubCategory();
  }

  @Get()
  findAll() {
    return this.categorysService.findAll();
  }

  @Get(':id([0-9a-fA-F-]{36})')
  findOne(@Param('id') id: string) {
    return this.categorysService.findOne(id);
  }

  @Patch(':id([0-9a-fA-F-]{36})')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categorysService.update(+id, updateCategoryDto);
  }

  @Delete(':id([0-9a-fA-F-]{36})')
  remove(@Param('id') id: string, @Query('user_id') user_id: string) {
    return this.categorysService.remove(id, user_id);
  }  
}
