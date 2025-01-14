import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentsCurseDto } from './create-students_curse.dto';

export class UpdateStudentsCurseDto extends PartialType(CreateStudentsCurseDto) {}
