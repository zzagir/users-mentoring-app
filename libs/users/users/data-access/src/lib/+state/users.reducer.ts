import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";

import * as UsersActions from "./users.actions";
import { UsersEntity } from "./users.models";

export const USERS_FEATURE_KEY = "users";

export type UsersStatus = "init" | "loading" | "loaded" | "error"

export interface UsersState extends EntityState<UsersEntity> {
  selectedId?: string | number; // which Users record has been selected
  status: UsersStatus;
  error: string | null;
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: UsersState;
}

export const usersAdapter: EntityAdapter<UsersEntity> =
  createEntityAdapter<UsersEntity>();

export const initialUsersState: UsersState = usersAdapter.getInitialState({
  // set initial required properties
  status: "init",
  error: null
});

const reducer = createReducer(
  initialUsersState,
  on(UsersActions.initUsers, (state) => ({
    ...state,
    status: "loading" as const
  })),
  on(UsersActions.loadUsersSuccess, (state, { users }) =>
    usersAdapter.setAll(users, { ...state, status: "loaded" as const })
  ),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    status: "error" as const,
    error
  })),
  on(UsersActions.deleteUserSuccess, (state, { id }) => (
    usersAdapter.removeOne(id, { ...state })
  )),
  on(UsersActions.editUser, (state) => ({
    ...state,
    status: "loading" as const
  })),
  on(UsersActions.editUserSuccess, (state, { userData }) => (
    usersAdapter.updateOne({
      id: userData.id, changes: {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        username: userData.username,
        city: userData.city
      }
    }, { ...state, status: "loaded" as const })
  )),
  on(UsersActions.editUserFailed, (state, { error }) => ({
    ...state,
    status: "error" as const,
    error
  })),
  on(UsersActions.addUser, (state) => ({
    ...state,
    status: "loading" as const
  })),
  on(UsersActions.addUserSuccess, (state, { userData }) => usersAdapter.addOne(userData, {
    ...state,
    status: "loaded" as const
  })),
  on(UsersActions.addUserFailed, (state, { error }) => ({
    ...state,
    status: "error" as const,
    error
  }))
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return reducer(state, action);
}