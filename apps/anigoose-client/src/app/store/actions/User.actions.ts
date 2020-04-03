import { createAction } from '@reduxjs/toolkit';
import { CreateUserDTO } from '@anigoose/core';

export const UpdateUser = createAction(
  'user/Update',
  (payload: Partial<CreateUserDTO>) => ({
    payload
  })
);
