import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  async findAll() {
    return await this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `This returns items with ID: ${id}`;
  }

  @Post()
  async create(@Body() body: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(body);
  }
}
