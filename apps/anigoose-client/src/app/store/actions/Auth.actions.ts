import { createAction } from '@reduxjs/toolkit';

export const Login = createAction('auth/Login', ({ username, password }) => ({
  payload: { username, password }
}));

export const Logout = createAction('auth/Logout');

export const Register = createAction(
  'auth/Register',
  ({ username, email, password }) => ({
    payload: { username, email, password }
  })
);
