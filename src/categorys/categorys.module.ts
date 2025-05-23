import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorysService } from './categorys.service';
import { CategorysController } from './categorys.controller';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategorysController],
  providers: [CategorysService],
})
export class CategorysModule {}