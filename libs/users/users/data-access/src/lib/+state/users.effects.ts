import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as UsersActions from './users.actions';
import { ApiService } from '@users/http';
import { UsersEntity } from './users.models';
import { usersDtoAdapter } from '../users-dto.adapter';
import { UsersDTO } from '../users-dto.model';

export const usersEffects = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    actions$.subscribe(console.log);

    return actions$.pipe(
      ofType(UsersActions.initUsers),
      switchMap(() =>
        apiService.get<UsersDTO[]>('/users').pipe(
          map((users) =>
            UsersActions.loadUsersSuccess({
              users: users.map((user) => usersDtoAdapter.DTOtoEntity(user)),
            })
          )
        )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(UsersActions.loadUsersFailure({ error }));
      })
    );
  },
  { functional: true }
);
