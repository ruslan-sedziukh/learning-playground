import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { isRecordWithCode } from 'src/common/utils/is-record-with-code';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

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

  async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const { email, password } = loginDto;
    const user = await this.usersService.findOneByEmail(email);

    // Compare provided password with the hashed password in DB
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { sub: user.id, email: user.email, role: user.role };

      return {
        accessToken: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
