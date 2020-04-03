import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

import { environment } from '../../environments/environment';
import { UserTokenPayload } from '@anigoose/core';
import { UserEntity } from '../user/user.entity';
const { secret, expiry } = environment.authentication;

@Injectable()
export class JwtStrategu extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: secret
    });
  }

  async validate({ id, username }: UserTokenPayload): Promise<UserEntity> {
    try {
      return await this.authService.validate({ id, username });
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
