import { Test, TestingModule } from '@nestjs/testing';
import { StudentsCursesController } from './students_curses.controller';
import { StudentsCursesService } from './students_curses.service';

describe('StudentsCursesController', () => {
  let controller: StudentsCursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsCursesController],
      providers: [StudentsCursesService],
    }).compile();

    controller = module.get<StudentsCursesController>(StudentsCursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
