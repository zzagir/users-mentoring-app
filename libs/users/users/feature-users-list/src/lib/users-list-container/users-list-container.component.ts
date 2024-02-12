import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersListComponent } from "../users-list/users-list.component";
import { UsersListContainerStore } from "./users-list-container.store";
import { UsersVM } from "../../../../users-vm";
import { User } from "../../../../../../../apps/users/src/app/user.interface";
import { CreateUserDTO, EditUserDTO, UsersDTO, UsersFacade } from "@users/users/users/data-access";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { UsersDeleteUserDialogComponent } from "../users-delete-user-dialog/users-delete-user-dialog.component";
import { tap } from "rxjs";
import { UsersEditUserDialogComponent } from "../users-edit-user-dialog/users-edit-user-dialog.component";

@Component({
  selector: "users-list-container",
  standalone: true,
  imports: [CommonModule, UsersListComponent],
  templateUrl: "./users-list-container.component.html",
  styleUrl: "./users-list-container.component.scss",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UsersListContainerStore]
})
export class UsersListContainerComponent {
  private readonly componentStore = inject(UsersListContainerStore);
  public readonly users$ = this.componentStore.users$;
  public readonly status$ = this.componentStore.status$;
  private readonly usersFacade = inject(UsersFacade);
  private readonly dialog = inject(MatDialog);

  onDeleteUser(user: UsersVM): void {
    this.componentStore.deleteUser(user);
  }

  onEditUser(user: EditUserDTO): void {
    const dialogRef: MatDialogRef<UsersEditUserDialogComponent> = this.dialog.open(UsersEditUserDialogComponent, {
      data: user
    });

    dialogRef.afterClosed().pipe(
      tap(
        (result: boolean) => {
          if (result) this.usersFacade.editUser(user);
        }
      )
    );

  }
}
