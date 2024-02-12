import {
  ChangeDetectionStrategy,
  Component, DestroyRef, inject,
  ViewEncapsulation
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersListContainerComponent } from "@users/users/users/feature-users-list";
import { MatIcon } from "@angular/material/icon";
import { MatFabButton } from "@angular/material/button";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CreateUserDialogComponent } from "../create-user-dialog/create-user-dialog.component";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { CreateUserDTO, UsersFacade } from "@users/users/users/data-access";

@Component({
  selector: "users-create-user-button",
  standalone: true,
  imports: [CommonModule, UsersListContainerComponent, MatIcon, MatFabButton],
  templateUrl: "./create-user-button.component.html",
  styleUrl: "./create-user-button.component.scss",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserButtonComponent {
  public dialog = inject(MatDialog);
  private name!: string;
  private email!: string;
  private username!: string;
  private city!: string;
  private readonly usersFacade = inject(UsersFacade);
  private readonly destroyRef = inject(DestroyRef);

  onCreateUser(): void {
    const dialogRef: MatDialogRef<CreateUserDialogComponent> = this.dialog.open(CreateUserDialogComponent, {
      data: { name: this.name, email: this.email, username: this.username, city: this.city }
    });
    dialogRef.afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
        if (result) {
          const newUserData: CreateUserDTO = {
            id: Number(new Date().toISOString()),
            name: result.name,
            email: result.email,
            username: result.city,
            city: result.city
          };

          this.usersFacade.addUser(newUserData);
        }
      });
  }
}
