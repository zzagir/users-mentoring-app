import {
  ChangeDetectionStrategy,
  Component, DestroyRef, EventEmitter, inject, Output,
  ViewEncapsulation
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButton } from "@angular/material/button";
import {
  MAT_DIALOG_DATA, MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import { MatFormField } from "@angular/material/form-field";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { CreateUserDTO, UsersFacade } from "@users/users/users/data-access";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: "users-users-edit-user-dialog",
  standalone: true,
  imports: [CommonModule, MatButton, MatDialogActions, MatDialogContent, MatDialogTitle, MatDialogClose, MatFormField, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./users-edit-user-dialog.component.html",
  styleUrl: "./users-edit-user-dialog.component.scss",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersEditUserDialogComponent {
  private readonly usersFacade = inject(UsersFacade);
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialogRef = inject(MatDialogRef<UsersEditUserDialogComponent>);
  private readonly data = inject(MAT_DIALOG_DATA);
  public readonly form: FormGroup = new FormGroup({
    name: new FormControl(this.data.name, Validators.required),
    username: new FormControl(this.data.username, Validators.required),
    email: new FormControl(this.data.email, [Validators.required, Validators.email])
  });

  save() {
    if (this.form.valid) {
      const formData = {
        name: this.form.value.name,
        username: this.form.value.username,
        email: this.form.value.email
      };
      this.dialogRef.close(formData);
      this.dialogRef.afterClosed().pipe(
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(result => {
        if (result) {
          console.log(result);
          this.usersFacade.editUser(result);
        }
      });
    }
  }

}
