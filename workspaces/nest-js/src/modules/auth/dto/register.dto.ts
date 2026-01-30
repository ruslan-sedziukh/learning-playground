import { MaxLength, IsString, IsEmail } from 'class-validator';

export class RegisterDto {
  @IsString()
  @MaxLength(30)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @MaxLength(30)
  readonly password: string;
}
