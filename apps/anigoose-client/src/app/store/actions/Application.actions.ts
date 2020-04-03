import { createAction } from '@reduxjs/toolkit';
import { ApplicationTheme } from '../reducers';
import { ClientNotification } from '@anigoose/core';

export const ChangeTheme = createAction(
  'application/ChangeTheme',
  (theme: ApplicationTheme) => ({ payload: theme })
);

export const PushNotification = createAction(
  'application/PushNotification',
  (notification: ClientNotification) => ({ payload: notification })
);

export const DeleteNotifications = createAction(
  'application/DeleteNotification',
  (...notificationIds: number[]) => ({ payload: notificationIds })
);

export const ClearNotifications = createAction(
  'application/ClearNotifications'
);
