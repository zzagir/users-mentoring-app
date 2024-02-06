import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersListComponent } from "../users-list/users-list.component";
import { UsersListContainerStore } from "./users-list-container.store";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { UsersFacade } from "@users/users/users/data-access";
import { UsersVM } from "../users-vm";
import { UsersDeleteUserDialogComponent } from "../users-delete-user-dialog/users-delete-user-dialog.component";

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
  public dialog = inject(MatDialog);
  public usersFacade = inject(UsersFacade);
  private readonly componentStore = inject(UsersListContainerStore);
  public readonly users$ = this.componentStore.users$;
  public readonly status$ = this.componentStore.status$;

  onDeleteUser(user: UsersVM) {
    const dialogRef: MatDialogRef<UsersDeleteUserDialogComponent> = this.dialog.open(UsersDeleteUserDialogComponent, {
      data: { name: user.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.usersFacade.deleteUser(user.id);
      } else {
        // Обработка события "Нет"
      }
    });
  }
}
