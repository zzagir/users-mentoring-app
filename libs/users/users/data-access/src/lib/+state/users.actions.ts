import { createAction, props } from "@ngrx/store";
import { CreateUserDTO, EditUserDTO, UsersEntity } from "./users.models";
import { UsersVM } from "../../../../users-vm";
import { UsersDTO } from "../users-dto.model";

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


export const editUser = createAction(
  "[Users Page] Edit User", props<{ userData: EditUserDTO }>()
);
export const editUserSuccess = createAction(
  "[Users/Api] Edit User Success", props<{ userData: EditUserDTO }>()
);
export const editUserFailed = createAction(
  "[Users/Api] Edit User Failed", props<{ error: any }>()
);

export const addUser = createAction(
  "[Users Page] Add User", props<{ userData: CreateUserDTO }>()
);
export const addUserSuccess = createAction(
  "[Users/Api] Add User Success", props<{ userData: CreateUserDTO }>()
);
export const addUserFailed = createAction(
  "[Users/Api] Add User Failed", props<{ error: any }>()
);
