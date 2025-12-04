import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // este servicio se consume desde register
  create(createUserDto: CreateUserDto) {
    createUserDto.date_entered = new Date();
    createUserDto.date_modified = new Date();
    createUserDto.deleted = false;
    createUserDto.active = true;
    return this.userRepository.save(createUserDto);
  }

  async findOneByParameter(field: string, value: string): Promise<User | null> {
    return await this.userRepository.findOneBy({ [field]: value });
  }

  async findAllByTenant(tenant_id: string): Promise<User[]> {
    return this.userRepository.find({
      where: { tenant_id, deleted: false }
    });
  }

  // async findAllByTenant(
  //   tenant_id: string,
  //   page = 1,
  //   limit = 10,
  //   filters: { name?: string; email?: string; role?: string } = {}
  // ): Promise<{ data: User[]; total: number; page: number; limit: number }> {
  //   const where: any = { tenant_id, deleted: false };

  //   if (filters.name) where.name = filters.name;
  //   if (filters.email) where.email = filters.email;
  //   if (filters.role) where.role = filters.role;

  //   const [data, total] = await this.userRepository.findAndCount({
  //     where,
  //     skip: (page - 1) * limit,
  //     take: limit,
  //   });
  //   return { data, total, page, limit };
  // }

  async findOne(id: string): Promise<User | null> {
    return await this.userRepository.findOne({
      where: { id, deleted: false }
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    await this.userRepository.update({ id }, { ...updateUserDto, date_modified: new Date() });
    return this.findOne(id);
  }

  async updateActiveStatus(user_id: string, active_aux: boolean, user_id_login: string): Promise<User | null> {
    active_aux = String(active_aux).toLowerCase() === 'true';
    await this.userRepository.update({ id: user_id }, { active: active_aux, date_modified: new Date(), modified_by: user_id_login });
    return this.findOne(user_id);
  }

  async remove(id: string): Promise<{ message: string }> {
    await this.userRepository.update({ id }, { deleted: true, date_modified: new Date() });
    return { message: `User #${id} has been removed (soft delete)` };
  }
}
