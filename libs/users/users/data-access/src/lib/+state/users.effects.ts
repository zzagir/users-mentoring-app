import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as UsersActions from './users.actions';
import { ApiService } from '@users/http';
import { UsersEntity } from './users.models';

export const usersEffects = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(UsersActions.initUsers),
      switchMap(() =>
        apiService
          .get<UsersEntity[]>('/users')
          .pipe(map((users) => UsersActions.loadUsersSuccess({ users })))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(UsersActions.loadUsersFailure({ error }));
      })
    );
  },
  { functional: true }
);
