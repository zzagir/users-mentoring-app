import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApiService } from "@users/http";

@Component({
  selector: "users-home",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly apiService = inject(ApiService);

  constructor() {
    this.apiService.get("/users").subscribe(console.log);
  }
}
