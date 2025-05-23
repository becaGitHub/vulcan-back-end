import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { v4 as uuidv4 } from 'uuid';

import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  
  async create(createProductDto: CreateProductDto): Promise<Product> {
    createProductDto.id = uuidv4(); // Genera un UUID para el id
    createProductDto.date_entered = new Date(); // Establece la fecha de creación
    createProductDto.date_modified = new Date(); // Establece la fecha de actualización
    createProductDto.deleted = false; // Marca el producto como no eliminado
    createProductDto.active = true; // Marca el producto como activo
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  findAll() {    
    return this.productRepository.find({
      where: { deleted: false }
    })
  }

  findOne(id: string) {    
    return this.productRepository.findOne({
      where: { id, deleted: false }
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  async remove(id: string, user_id: string): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    product.deleted = true;
    product.date_modified = new Date();
    product.modified_by = user_id;
    return this.productRepository.save(product);
  }
}
