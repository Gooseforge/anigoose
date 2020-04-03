import { createReducer } from '@reduxjs/toolkit';
import { AuthActions, UserActions } from '../actions';

export interface UserState {
  authenticated: boolean;
  user: {};
}

const initState: UserState = {
  authenticated: false,
  user: {}
};

export default createReducer(initState, builder =>
  builder
    .addCase(AuthActions.AuthSuccess, (state, action) => {
      const { id, username } = action.payload;

      state.authenticated = true;
      state.user = { id, username };
    })
    .addCase(AuthActions.Logout, state => {
      state.authenticated = false;
      state.user = {};

      window.sessionStorage.clear();
    })
    .addCase(UserActions.UpdateUser, (state, action) => {
      state.user = Object.assign(state, action.payload);
    })
);
