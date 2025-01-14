import { Injectable } from '@nestjs/common';
import { CreateStudentsCurseDto } from './dto/create-students_curse.dto';
import { UpdateStudentsCurseDto } from './dto/update-students_curse.dto';

@Injectable()
export class StudentsCursesService {
  create(createStudentsCurseDto: CreateStudentsCurseDto) {
    return 'This action adds a new studentsCurse';
  }

  findAll() {
    return `This action returns all studentsCurses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentsCurse`;
  }

  update(id: number, updateStudentsCurseDto: UpdateStudentsCurseDto) {
    return `This action updates a #${id} studentsCurse`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentsCurse`;
  }
}
