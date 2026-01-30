import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './entities/note.entity';
import { CreateNoteDto } from './dto/note.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  create(createNoteDto: CreateNoteDto): Promise<Note> {
    const newNote = this.notesRepository.create(createNoteDto);

    return this.notesRepository.save(newNote);
  }

  findAll(): Promise<Note[]> {
    return this.notesRepository.find();
  }
}
