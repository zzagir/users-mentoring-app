import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbar } from "@angular/material/toolbar";
import { MatButton, MatIconButton } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "users-header",
  standalone: true,
  imports: [CommonModule, MatToolbar, MatButton, RouterLink, MatIcon, MatIconButton],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss"
})
export class HeaderComponent {
}
