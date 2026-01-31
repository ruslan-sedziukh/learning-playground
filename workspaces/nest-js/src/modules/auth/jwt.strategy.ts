// src/modules/auth/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';

// Define the shape of the JWT payload
interface JwtPayload {
  sub: number; // The user ID
  email: string;
  role: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // IMPORTANT: Use the same secret as in your auth.module.ts
      // In production, this MUST be from a secure environment variable
      secretOrKey: 'SECRET_KEY',
    });
  }

  /**
   * This method is called by Passport after it has verified the JWT's signature.
   * The payload is the decoded JSON from the token.
   * Whatever is returned from this method will be attached to the Request object as `req.user`.
   */
  async validate(payload: JwtPayload) {
    // You can add more validation here, e.g., check if the user still exists
    const user = await this.usersService.findOneById(payload.sub);
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }
    // Passport will attach this user object to the request
    return user;
  }
}
