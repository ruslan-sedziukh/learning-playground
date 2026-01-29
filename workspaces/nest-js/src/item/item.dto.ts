import { MaxLength, IsString } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @MaxLength(30)
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly type: string;
}
