import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsCursesService } from './students_curses.service';
import { CreateStudentsCurseDto } from './dto/create-students_curse.dto';
import { UpdateStudentsCurseDto } from './dto/update-students_curse.dto';

@Controller('students-curses')
export class StudentsCursesController {
  constructor(private readonly studentsCursesService: StudentsCursesService) {}

  @Post()
  create(@Body() createStudentsCurseDto: CreateStudentsCurseDto) {
    return this.studentsCursesService.create(createStudentsCurseDto);
  }

  @Get()
  findAll() {
    return this.studentsCursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsCursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentsCurseDto: UpdateStudentsCurseDto) {
    return this.studentsCursesService.update(+id, updateStudentsCurseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsCursesService.remove(+id);
  }
}
