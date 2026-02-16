import { MaxLength, IsString, IsEmail } from 'class-validator';

export class LoginDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  @MaxLength(30)
  readonly password: string;
}
