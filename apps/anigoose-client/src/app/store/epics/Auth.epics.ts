import { Epic } from 'redux-observable';
import { Action } from 'redux';
import {
  filter,
  catchError,
  map,
  withLatestFrom,
  mergeMap
} from 'rxjs/operators';

import { AuthActions, ApplicationActions } from '../actions';
import { from, of } from 'rxjs';
import { UserLogin } from '../../services/Api.service';
import { NotificationType } from '@anigoose/core';
import { AnyState } from '../reducers';

export const LoginEpic: Epic<Action, Action, AnyState> = (action$, store) =>
  action$.pipe(
    filter(AuthActions.Login.match),
    withLatestFrom(store),
    mergeMap(([action, state]) => {
      if (state.User.authenticated) return;

      return from(UserLogin({ ...action.payload })).pipe(
        map(AuthActions.AuthSuccess),
        catchError(() => {
          return of(
            ApplicationActions.PushNotification({
              id: 1141,
              message: 'authentication_failed',
              type: NotificationType.ERROR
            })
          );
        })
      );
    })
  );
