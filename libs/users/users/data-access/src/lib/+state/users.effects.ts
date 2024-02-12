import { inject } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import * as UsersActions from "./users.actions";
import { ApiService } from "@users/http";
import { usersDtoAdapter } from "../users-dto.adapter";
import { UsersDTO } from "../users-dto.model";
import { CreateUserDTO, EditUserDTO } from "./users.models";

export const usersEffects = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    actions$.subscribe(console.log);

    return actions$.pipe(
      ofType(UsersActions.initUsers),
      switchMap(() =>
        apiService.get<UsersDTO[]>("/users").pipe(
          map((users) =>
            UsersActions.loadUsersSuccess({
              users: users.map((user) => usersDtoAdapter.DTOtoEntity(user))
            })
          )
        )
      ),
      catchError((error) => {
        console.error("Error", error);
        return of(UsersActions.loadUsersFailure({ error }));
      })
    );
  },
  { functional: true }
);

export const deleteUsers = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(UsersActions.deleteUser),
      switchMap(({ id }) =>
        apiService.delete<UsersDTO[]>(`/users/${id}`).pipe(
          map(() =>
            UsersActions.deleteUserSuccess({ id })
          )
        )
      ),
      catchError((error) => {
        console.error("Error", error);
        return of(UsersActions.deleteUserFailed({ error }));
      })
    );

  }, { functional: true }
);

export const editUsers = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(UsersActions.editUser),
      switchMap(({ userData: user }) =>
        apiService.patch<EditUserDTO, EditUserDTO>(`/users/${user.id}`, user).pipe(
          map((user) =>
            UsersActions.editUserSuccess({ userData: user })
          )
        )
      ),
      catchError((error) => {
        console.error("Error", error);
        return of(UsersActions.editUserFailed({ error }));
      })
    );

  }, { functional: true }
);

export const addUser = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(UsersActions.addUser),
      switchMap(({ userData: user }) =>
        apiService.post<CreateUserDTO, CreateUserDTO>(`/users`, user).pipe(
          map((user) =>
            UsersActions.addUserSuccess({ userData: user })
          )
        )
      ),
      catchError((error) => {
        console.error("Error", error);
        return of(UsersActions.addUserFailed({ error }));
      })
    );

  }, { functional: true }
);
