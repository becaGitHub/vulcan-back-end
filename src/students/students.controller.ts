import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('students') // Etiqueta que se usará en la interfaz de Swagger
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new student' })
  @ApiBody({ type: CreateStudentDto }) // Cuerpo de la solicitud (request body)
  @ApiResponse({ status: 201, description: 'The student has been successfully created.', type: CreateStudentDto })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  create(@Body() createStudentDto: any) { CreateStudentDto
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all students' })
  @ApiResponse({ status: 200, description: 'List of students', type: [CreateStudentDto] })
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single student by ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID of the student to retrieve' })
  @ApiResponse({ status: 200, description: 'The student has been found.', type: CreateStudentDto })
  @ApiResponse({ status: 404, description: 'Student not found.' })
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update student details' })
  @ApiParam({ name: 'id', type: String, description: 'ID of the student to update' })
  @ApiBody({ type: UpdateStudentDto }) // Cuerpo de la solicitud para actualizar
  @ApiResponse({ status: 200, description: 'The student has been successfully updated.', type: UpdateStudentDto })
  @ApiResponse({ status: 404, description: 'Student not found.' })
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a student by ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID of the student to delete' })
  @ApiResponse({ status: 200, description: 'The student has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Student not found.' })
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}
