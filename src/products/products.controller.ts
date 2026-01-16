import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiResponse, ApiTags, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { Query } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@ApiTags('products')
@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  // @UseGuards(AuthGuard)
  @ApiBody({
    type: CreateProductDto,
    examples: {
      ejemplo: {
        summary: 'Producto sin subcategoría',
        value: {
          name: "KrustyBurger Premium",
          price: 28,
          image: "pollospiedoentero.jpg",
          active: true,
          created_by: "admin",
          modified_by: "admin",
          category_id: "5d6cabd3-511b-4237-a3b6-21ba7507dbb3",
        }
      },
      ejemplo2: {
        summary: 'Producto con subcategoría',
        value: {
          name: "Olvidame ya",
          price: 29,
          image: "default.png",
          active: true,
          created_by: "admin",
          modified_by: "admin",
          category_id: "0eb63863-1f17-42ca-b680-4a421a8791f5",
          sub_category_id: "9eb247c9-3b28-4e6a-adb4-14b82a02f4c2",
        }
      }
    }
  })
  @ApiResponse({ status: 201, description: 'Producto creado exitosamente', type: CreateProductDto })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get()
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch()
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete()
  remove(@Param('id') id: string, @Query('user_id') user_id: string) {
    return this.productsService.remove(id, user_id);
  }
}
