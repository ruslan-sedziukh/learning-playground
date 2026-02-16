// src/modules/auth/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
import { jwtFromCookie } from './extractors/jwt-cookie.extractor';

// Define the shape of the JWT payload
interface JwtPayload {
  sub: number; // The user ID
  email: string;
  role: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private usersService: UsersService,
    private configService: ConfigService,
  ) {
    const secret = configService.get<string>('JWT_SECRET');

    if (!secret) {
      throw new Error('JWT_SECRET is not defined in the environment variables');
    }

    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        jwtFromCookie,
      ]),
      ignoreExpiration: false,
      // IMPORTANT: Use the same secret as in your auth.module.ts
      // In production, this MUST be from a secure environment variable
      secretOrKey: secret,
    });
  }

  /**
   * This method is called by Passport after it has verified the JWT's signature.
   * The payload is the decoded JSON from the token.
   * Whatever is returned from this method will be attached to the Request object as `req.user`.
   */
  async validate(payload: JwtPayload) {
    const user = await this.usersService.findOneById(payload.sub);

    if (!user) {
      throw new UnauthorizedException('User not found.');
    }

    return user;
  }
}
