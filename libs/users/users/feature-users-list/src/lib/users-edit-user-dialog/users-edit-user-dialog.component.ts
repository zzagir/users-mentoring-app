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
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
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
  public readonly formGroup: FormGroup;
  public readonly dialogRef = inject(MatDialogRef<UsersEditUserDialogComponent>);
  public readonly data: {
    id: string,
    name: string,
    email: string,
    username: string
    city: string
  } = inject(MAT_DIALOG_DATA);
  private readonly formBuilder = inject(FormBuilder);

  constructor() {
    this.formGroup = this.formBuilder.group({
      name: [this.data.name, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]],
      username: [this.data.username, [Validators.required]],
      city: [this.data.city, [Validators.required]]
    });
  }

  save(): void {
    if (this.formGroup.valid) {
      const formData = {
        id: this.data.id,
        name: this.formGroup.value.name,
        email: this.formGroup.value.email.trim().toLowerCase(),
        username: this.formGroup.value.username,
        city: this.formGroup.value.city
      };
      this.dialogRef.close(formData);
    }
  }

}
