import { Injectable, ConflictException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { isRecordWithCode } from 'src/common/utils/isRecordWithCode';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async register(registerDto: RegisterDto): Promise<void> {
    const { email, password, name } = registerDto;

    // 1. Hash the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // 2. Save the user via UsersService
    try {
      await this.usersService.create({
        email,
        password: hashedPassword,
        name,
      });
    } catch (error) {
      if (isRecordWithCode(error) && error.code === '23505') {
        throw new ConflictException('Email already exists');
      }
      throw error;
    }
  }
}
