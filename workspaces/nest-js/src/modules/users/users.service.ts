import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private itemsRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const newItem = this.itemsRepository.create(createUserDto);

    return this.itemsRepository.save(newItem);
  }

  findAll(): Promise<User[]> {
    return this.itemsRepository.find();
  }
}
