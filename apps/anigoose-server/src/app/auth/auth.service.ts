import { Injectable } from '@nestjs/common';
import {
  LoginUserDTO,
  UserAuthenticationDTO,
  CreateUserDTO,
  UserTokenPayload
} from '@anigoose/core';

import { UserService } from '../user/user.service';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login({
    username,
    password
  }: LoginUserDTO): Promise<UserAuthenticationDTO> {
    return null; // TODO
  }

  async register({
    username,
    email,
    password
  }: CreateUserDTO): Promise<UserAuthenticationDTO> {
    return null; // TODO
  }

  async validate({ id, username }: UserTokenPayload): Promise<UserEntity> {
    return null; // TODO
  }
}
