import { ChangeDetectionStrategy, Component, inject, Input, ViewEncapsulation } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "users-users-delete-user-dialog",
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatButton
  ],
  templateUrl: "./users-delete-user-dialog.component.html",
  styleUrl: "./users-delete-user-dialog.component.scss",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersDeleteUserDialogComponent {
  public readonly data: { name: string } = inject(MAT_DIALOG_DATA);
}
