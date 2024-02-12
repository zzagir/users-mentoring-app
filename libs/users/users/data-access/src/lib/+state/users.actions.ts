import { createAction, props } from "@ngrx/store";
import { UsersEntity } from "./users.models";
import { UsersVM } from "../../../../users-vm";
import { CreateUserDTO, UsersDTO } from "../users-dto.model";

export const initUsers = createAction("[Users Page] Init");

export const loadUsersSuccess = createAction(
  "[Users/API] Load Users Success",
  props<{ users: UsersEntity[] }>()
);

export const loadUsersFailure = createAction(
  "[Users/API] Load Users Failure",
  props<{ error: any }>()
);

export const deleteUser = createAction(
  "[Users Page] Delete User", props<{ id: number }>()
);
export const deleteUserSuccess = createAction(
  "[Users/Api] Delete User Success", props<{ id: number }>()
);
export const deleteUserFailed = createAction(
  "[Users/Api] Delete User Failed", props<{ error: any }>()
);

export const createUser = createAction(
  "[Users Page] Create User", props<UsersVM>()
);
export const createUserSuccess = createAction(
  "[Users/Api] Create User Success", props<UsersVM>()
);
export const createUserFailed = createAction(
  "[Users/Api] Create User Failed", props<{ error: any }>()
);

export const editUser = createAction(
  "[Users Page] Edit User", props<UsersDTO>()
);
export const editUserSuccess = createAction(
  "[Users/Api] Edit User Success", props<UsersDTO>()
);
export const editUserFailed = createAction(
  "[Users/Api] Edit User Failed", props<{ error: any }>()
);