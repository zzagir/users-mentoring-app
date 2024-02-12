import { Injectable, inject } from "@angular/core";
import { select, Store, Action } from "@ngrx/store";

import * as UsersActions from "./users.actions";
import * as UsersSelectors from "./users.selectors";
import { CreateUserDTO, EditUserDTO } from "./users.models";

@Injectable()
export class UsersFacade {
  private readonly store = inject(Store);
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  status$ = this.store.pipe(select(UsersSelectors.selectUsersStatus));
  allUsers$ = this.store.pipe(select(UsersSelectors.selectAllUsers));
  selectedUsers$ = this.store.pipe(select(UsersSelectors.selectEntity));


  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(UsersActions.initUsers());
  }

  deleteUser(id: number) {
    this.store.dispatch(UsersActions.deleteUser({ id }));
  };

  editUser(userData: EditUserDTO) {
    this.store.dispatch(UsersActions.editUser({ userData }));
  }

  addUser(userData: CreateUserDTO) {
    this.store.dispatch(UsersActions.addUser({ userData }));
  }
}
