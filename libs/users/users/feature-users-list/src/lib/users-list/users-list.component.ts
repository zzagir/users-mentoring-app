import {
  ChangeDetectionStrategy,
  Component, EventEmitter, inject, Input, Output,
  ViewEncapsulation
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersListVM } from "./users-list-view-model";
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { UsersCardComponent } from "../users-card/users-card.component";
import { UsersVM } from "../users-vm";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { UsersDeleteUserDialogComponent } from "../users-delete-user-dialog/users-delete-user-dialog.component";
import { UsersFacade } from "@users/users/users/data-access";

@Component({
  selector: "users-list",
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, MatButtonModule, MatDividerModule, MatIconModule, UsersCardComponent],
  templateUrl: "./users-list.component.html",
  styleUrl: "./users-list.component.scss",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  @Input({ required: true })
  vm!: UsersListVM;

  @Output() deleteUser = new EventEmitter();

  onDeleteUser(user: UsersVM) {
    this.deleteUser.emit(user);
  }
}
