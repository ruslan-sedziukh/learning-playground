import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private itemsRepository: Repository<Task>,
  ) {}

  create(createItemDto: CreateTaskDto): Promise<Task> {
    const newItem = this.itemsRepository.create(createItemDto);

    return this.itemsRepository.save(newItem);
  }

  findAll(): Promise<Task[]> {
    return this.itemsRepository.find();
  }
}
