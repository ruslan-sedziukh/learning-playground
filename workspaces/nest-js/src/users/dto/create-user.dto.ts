import { IsString, IsEmail, IsInt, Min, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(30)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsInt()
  @Min(18)
  readonly age: number;
}
