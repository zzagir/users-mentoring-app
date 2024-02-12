import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { UsersVM } from "@users/users/users/feature-users-list";
import { MatCard, MatCardActions, MatCardContent } from "@angular/material/card";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "users-users-card",
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButton
  ],
  templateUrl: "./users-card.component.html",
  styleUrl: "./users-card.component.scss",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersCardComponent {
  @Input({ required: true })
  user!: UsersVM;

  @Output() deleteUser = new EventEmitter();
  @Output() editUser = new EventEmitter();

  onDeleteUser() {
    this.deleteUser.emit();
  }

  onEditUser() {
    this.editUser.emit();
  }
}
