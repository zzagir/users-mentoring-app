import {
  ChangeDetectionStrategy,
  Component, inject,
  ViewEncapsulation
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "users-create-user-dialog",
  standalone: true,
  imports: [CommonModule, MatButton, MatDialogActions, MatDialogContent, MatDialogTitle, MatDialogClose],
  templateUrl: "./create-user-dialog.component.html",
  styleUrl: "./create-user-dialog.component.scss",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserDialogComponent {
  public readonly data: { name: string } = inject(MAT_DIALOG_DATA);
}
