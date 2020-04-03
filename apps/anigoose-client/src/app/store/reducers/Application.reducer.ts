import { createReducer } from '@reduxjs/toolkit';
import { ClientNotification, NotificationType } from '@anigoose/core';

import { ApplicationActions, AuthActions } from '../actions';

export interface ApplicationState {
  theme: ApplicationTheme;
  notifications: ClientNotification[];
}

const initState: ApplicationState = {
  theme: 'dark',
  notifications: []
};

export type ApplicationTheme = 'light' | 'dark';
export default createReducer(initState, builder =>
  builder
    .addCase(ApplicationActions.ChangeTheme, (state, action) => {
      state.theme = action.payload;
    })
    .addCase(ApplicationActions.PushNotification, (state, action) => {
      state.notifications.unshift(action.payload);
    })
    .addCase(ApplicationActions.DeleteNotifications, (state, action) => {
      state.notifications = state.notifications.filter(
        x => !action.payload.includes(x.id)
      );
    })
    .addCase(ApplicationActions.ClearNotifications, state => {
      state.notifications = [];
    })
    .addCase(AuthActions.AuthSuccess, state => {
      state.notifications.unshift({
        id: 1142,
        message: 'authentication_success',
        type: NotificationType.SUCCESS
      });
    })
);
