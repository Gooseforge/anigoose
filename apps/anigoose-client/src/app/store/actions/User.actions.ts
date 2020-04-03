import { createAction } from '@reduxjs/toolkit';

export const UpdateUser = createAction('user/Update', user => ({
  payload: user
}));
