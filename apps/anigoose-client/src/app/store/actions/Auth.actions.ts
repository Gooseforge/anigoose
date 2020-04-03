import { createAction } from '@reduxjs/toolkit';
import {
  CreateUserDTO,
  LoginUserDTO,
  UserAuthenticationDTO
} from '@anigoose/core';

export const Login = createAction('auth/Login', (payload: LoginUserDTO) => ({
  payload
}));

export const Logout = createAction('auth/Logout');

export const Register = createAction(
  'auth/Register',
  (payload: CreateUserDTO) => ({
    payload
  })
);

export const AuthSuccess = createAction(
  'auth/AuthSuccess',
  (payload: UserAuthenticationDTO) => ({
    payload
  })
);
