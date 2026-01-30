import { IsString, IsEmail, IsInt, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(30)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @MaxLength(30)
  readonly password: string;
}
