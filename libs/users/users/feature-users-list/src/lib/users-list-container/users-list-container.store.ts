import { DeepReadonly } from "@users/core/utils";
import { UsersEntity, UsersFacade } from "@users/users/users/data-access";
import { ComponentStore } from "@ngrx/component-store";
import { inject, Injectable } from "@angular/core";
import { tap } from "rxjs";
import { UsersVM } from "../users-vm";
import { usersVMAdapter } from "../users-vm.adapter";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { UsersDeleteUserDialogComponent } from "../users-delete-user-dialog/users-delete-user-dialog.component";

type UsersListState = DeepReadonly<{
  users: UsersVM[];
}>;

const initialState: UsersListState = {
  users: []
};

@Injectable()
export class UsersListContainerStore extends ComponentStore<UsersListState> {
  public readonly users$ = this.select((state) => state.users);
  public readonly dialog = inject(MatDialog);
  private readonly usersFacade = inject(UsersFacade);
  public readonly status$ = this.select(
    this.usersFacade.status$,
    status => status
  );

  constructor() {
    super(initialState);
    this.setUsersFromGlobalLocalStore();
    this.usersFacade.init();
  }

  public deleteUser(user: UsersVM): void {
    const dialogRef: MatDialogRef<UsersDeleteUserDialogComponent> = this.dialog.open(UsersDeleteUserDialogComponent, {
      data: { name: user.name }
    });

    this.effect(() => dialogRef.afterClosed().pipe(
      tap(
        (result: boolean) => {
          if (result) this.usersFacade.deleteUser(user.id);
        }
      )
    ));
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
      users: users.map((user) => usersVMAdapter.entityToVM(user))
    });
  }
}
