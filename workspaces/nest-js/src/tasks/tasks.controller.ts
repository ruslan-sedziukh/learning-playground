import { Controller, Post, Body, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task.dto';
import { Task } from './entities/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() CreateTaskDto: CreateTaskDto): Promise<Task> {
    return await this.tasksService.create(CreateTaskDto);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return await this.tasksService.findAll();
  }
}
