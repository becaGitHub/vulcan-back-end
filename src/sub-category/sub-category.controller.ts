import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('sub-category')
@Controller('sub-category')
export class SubCategoryController {
  constructor(private readonly subCategoryService: SubCategoryService) {}
  
  @Post()
  @ApiBody({
    type: CreateSubCategoryDto,
    examples: {
      ejemplo: {
        summary: 'Ejemplo de SubCategoría',
        value: {
          name: "F. de Moe",
          icon: "local_bar",
          created_by: "admin",
          modified_by: "admin",
          category_id: "0eb63863-1f17-42ca-b680-4a421a8791f5",
        }
      }
    }
  })
  @ApiResponse({ status: 201, description: 'SubCategoría creada exitosamente', type: CreateSubCategoryDto })
  create(@Body() createSubCategoryDto: CreateSubCategoryDto) {
    return this.subCategoryService.create(createSubCategoryDto);
  }

  @Get()
  findAll() {
    return this.subCategoryService.findAll();
  }

  @Get()
  findOne(@Param('id') id: string) {
    return this.subCategoryService.findOne(+id);
  }

  @Patch()
  update(@Param('id') id: string, @Body() updateSubCategoryDto: UpdateSubCategoryDto) {
    return this.subCategoryService.update(+id, updateSubCategoryDto);
  }

  @Delete()
  remove(@Param('id') id: string) {
    return this.subCategoryService.remove(+id);
  }
}
