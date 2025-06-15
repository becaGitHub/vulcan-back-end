import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubsidiaryDto } from './dto/create-subsidiary.dto';
import { UpdateSubsidiaryDto } from './dto/update-subsidiary.dto';
import { Subsidiary } from './entities/subsidiary.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SubsidiariesService {
  constructor(
    @InjectRepository(Subsidiary)
    private readonly subsidiaryRepository: Repository<Subsidiary>,
  ) {}

  async create(createSubsidiaryDto: CreateSubsidiaryDto): Promise<Subsidiary> {
    createSubsidiaryDto.id = uuidv4();
    createSubsidiaryDto.date_entered = new Date();
    createSubsidiaryDto.date_modified = new Date();
    const subsidiary = this.subsidiaryRepository.create(createSubsidiaryDto);
    return this.subsidiaryRepository.save(subsidiary);
  }

  async findAll(): Promise<Subsidiary[]> {
    return this.subsidiaryRepository.find();
  }

  async findOne(id: string): Promise<Subsidiary | null> {
    return this.subsidiaryRepository.findOne({ where: { id } });
  }

  async update(id: string, updateSubsidiaryDto: UpdateSubsidiaryDto): Promise<any> {
    updateSubsidiaryDto.date_modified = new Date();
    return this.subsidiaryRepository.update(id, updateSubsidiaryDto);
  }

  async remove(id: string): Promise<any> {
    return this.subsidiaryRepository.update(id, { deleted: true, date_modified: new Date() });
  }
}