import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbar } from "@angular/material/toolbar";
import { MatButton } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: "users-header",
  standalone: true,
  imports: [CommonModule, MatToolbar, MatButton, RouterLink],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss"
})
export class HeaderComponent {
}
