import { combineReducers } from '@reduxjs/toolkit';

const Reducer = combineReducers({});

export type ApplicationState = Omit<ReturnType<typeof Reducer>, symbol>;
export type AnyState = ApplicationState & {};

export default Reducer;
