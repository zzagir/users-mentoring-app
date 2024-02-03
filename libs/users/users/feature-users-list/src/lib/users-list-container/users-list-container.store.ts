import { DeepReadonly } from '@users/core/utils';
import { UsersEntity, UsersFacade } from '@users/users/users/data-access';
import { ComponentStore } from '@ngrx/component-store';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { UsersVM } from '../users-vm';
import { usersVMAdapter } from '../users-vm.adapter';

type UsersListState = DeepReadonly<{
  users: UsersVM[];
}>;

const initialState: UsersListState = {
  users: [],
};

@Injectable()
export class UsersListContainerStore extends ComponentStore<UsersListState> {
  private readonly usersFacade = inject(UsersFacade);
  public readonly users$ = this.select((state) => state.users);

  constructor() {
    super(initialState);
    this.setUsersFromGlobalLocalStore();
    this.usersFacade.init();
  }

  private setUsersFromGlobalLocalStore(): void {
    this.effect(() =>
      this.usersFacade.allUsers$.pipe(
        tap((users: UsersEntity[]) => this.patchUsers(users))
      )
    );
  }

  private patchUsers(users: UsersEntity[]): void {
    this.patchState({
      users: users.map((user) => usersVMAdapter.entityToVM(user)),
    });
  }
}
