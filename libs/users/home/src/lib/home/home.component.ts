import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersListContainerComponent } from "@users/users/users/feature-users-list";
import {
  CreateUserButtonComponent
} from "@users/users/users/feature-users-create";


@Component({
  selector: "users-home",
  standalone: true,
  imports: [CommonModule, UsersListContainerComponent, CreateUserButtonComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
