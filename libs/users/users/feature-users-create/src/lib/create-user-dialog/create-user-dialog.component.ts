import {
  ChangeDetectionStrategy,
  Component, Inject, inject,
  ViewEncapsulation
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";

@Component({
  selector: "users-create-user-dialog",
  standalone: true,
  imports: [CommonModule, MatButton, MatDialogActions, MatDialogContent, MatDialogTitle, MatDialogClose, FormsModule, MatFormField, MatInput, MatLabel, ReactiveFormsModule],
  templateUrl: "./create-user-dialog.component.html",
  styleUrl: "./create-user-dialog.component.scss",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserDialogComponent {
  public formGroup: FormGroup;
  public dialogRef = inject(MatDialogRef<CreateUserDialogComponent>);
  public data: { name: string, email: string, username: string, city: string } = inject(MAT_DIALOG_DATA);
  private formBuilder = inject(FormBuilder);

  constructor() {
    this.formGroup = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      username: ["", [Validators.required]],
      city: ["", [Validators.required]]
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.formGroup.valid) {
      const formData = {
        name: this.formGroup.value.name,
        email: this.formGroup.value.email.trim().toLowerCase(),
        username: this.formGroup.value.username,
        city: this.formGroup.value.city
      };
      this.dialogRef.close(formData);
    }
  }
}
