import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    console.log(await this.studentsRepository.find());
    return await this.studentsRepository.find();
  }

  findOne(id: number): Promise<Student> {
    return this.studentsRepository.findOneBy({ id });
  }

  create(student: Student): Promise<Student> {
    return this.studentsRepository.save(student);
  }

  async update(id: number, updateData: Partial<Student>): Promise<Student> {
    await this.studentsRepository.update(id, updateData); // Actualiza los datos en la base
    return this.findOne(id); // Retorna el estudiante actualizado
  }

  async remove(id: number): Promise<void> {
    await this.studentsRepository.delete(id);
  }
}
