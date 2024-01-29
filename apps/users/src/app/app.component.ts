import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { UsersService } from "./users.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HttpClientModule],
  selector: "users-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  providers: []
})
export class AppComponent {
  title = "users";
  private readonly userService = inject(UsersService);
}
