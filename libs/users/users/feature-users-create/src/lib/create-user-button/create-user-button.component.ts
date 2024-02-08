import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersListContainerComponent } from "@users/users/users/feature-users-list";
import { MatIcon } from "@angular/material/icon";
import { MatFabButton } from "@angular/material/button";

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
}
