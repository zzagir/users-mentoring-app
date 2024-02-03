import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApiService } from "@users/http";
import { UsersListContainerComponent } from "@users/users/users/feature-users-list";
import { UsersFacade } from "@users/users/users/data-access";

@Component({
  selector: "users-home",
  standalone: true,
  imports: [CommonModule, UsersListContainerComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  
}
