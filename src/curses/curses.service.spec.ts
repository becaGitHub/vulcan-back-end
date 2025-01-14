import { Test, TestingModule } from '@nestjs/testing';
import { CursesService } from './curses.service';

describe('CursesService', () => {
  let service: CursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CursesService],
    }).compile();

    service = module.get<CursesService>(CursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
