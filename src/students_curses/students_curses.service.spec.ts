import { Test, TestingModule } from '@nestjs/testing';
import { StudentsCursesService } from './students_curses.service';

describe('StudentsCursesService', () => {
  let service: StudentsCursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsCursesService],
    }).compile();

    service = module.get<StudentsCursesService>(StudentsCursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
