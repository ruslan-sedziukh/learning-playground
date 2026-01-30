import { IsString, MaxLength } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @MaxLength(30)
  readonly title: string;

  @IsString()
  readonly description: string;
}
