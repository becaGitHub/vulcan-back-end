import { Module } from '@nestjs/common';
import { StudentsCursesService } from './students_curses.service';
import { StudentsCursesController } from './students_curses.controller';

@Module({
  controllers: [StudentsCursesController],
  providers: [StudentsCursesService],
})
export class StudentsCursesModule {}
