import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { SubCategory } from './entities/sub-category.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SubCategoryService {
  constructor(
    @InjectRepository(SubCategory)
    private readonly subCategoryRepository: Repository<SubCategory>,
  ) {}

  create(createSubCategoryDto: CreateSubCategoryDto) {    
    createSubCategoryDto.id = uuidv4(); // Genera un UUID para el id
    createSubCategoryDto.date_entered = new Date(); // Establece la fecha de creación
    createSubCategoryDto.date_modified = new Date(); // Establece la fecha de actualización
    const subCategory = this.subCategoryRepository.create(createSubCategoryDto);
    return this.subCategoryRepository.save(subCategory);
  }

  findAll() {
    return this.subCategoryRepository.find({
      where: { deleted: false }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} subCategory`;
  }

  update(id: number, updateSubCategoryDto: UpdateSubCategoryDto) {
    return `This action updates a #${id} subCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} subCategory`;
  }
}
