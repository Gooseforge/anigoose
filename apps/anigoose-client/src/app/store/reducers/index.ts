import { combineReducers } from '@reduxjs/toolkit';

import User from './User.reducer';
import Application from './Application.reducer';

const Reducer = combineReducers({
  User,
  Application
});

export type ApplicationState = Omit<ReturnType<typeof Reducer>, symbol>;
export type AnyState = ApplicationState & {};

export * from './User.reducer';
export * from './Application.reducer';

export default Reducer;
