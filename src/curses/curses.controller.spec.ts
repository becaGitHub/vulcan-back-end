import { Test, TestingModule } from '@nestjs/testing';
import { CursesController } from './curses.controller';
import { CursesService } from './curses.service';

describe('CursesController', () => {
  let controller: CursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursesController],
      providers: [CursesService],
    }).compile();

    controller = module.get<CursesController>(CursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
