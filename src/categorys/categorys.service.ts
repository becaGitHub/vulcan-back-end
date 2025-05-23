import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CategorysService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    createCategoryDto.id = uuidv4();
    createCategoryDto.date_entered = new Date();
    createCategoryDto.date_modified = new Date();    
    createCategoryDto.date_modified = new Date();
    const category = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(category);
  }

  findAll() {
    return this.categoryRepository.find({
      where: { deleted: false }
    });
  }

  findOne(id: string) {
    return this.categoryRepository.findOne({
      where: { id, deleted: false }
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update(id, updateCategoryDto);
  }

  async remove(id: string, user_id: string): Promise<Category> {
    const category = await this.categoryRepository.findOne({ where: { id } });    
    if (!category) {
      throw new Error('Categoría no encontrada');
    }
    category.deleted = true;
    category.date_modified = new Date();
    category.modified_by = user_id;
    return this.categoryRepository.save(category);
  }

  async findAllJoinSubCategory(): Promise<Category[]> {
    return this.categoryRepository.find({
      relations: ['sub_categories'],
      where: { deleted: false },
    });
  }
}
