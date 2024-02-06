import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersListContainerComponent } from "@users/users/users/feature-users-list";
import { MatFabButton } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "users-home",
  standalone: true,
  imports: [CommonModule, UsersListContainerComponent, MatFabButton, MatIconModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
