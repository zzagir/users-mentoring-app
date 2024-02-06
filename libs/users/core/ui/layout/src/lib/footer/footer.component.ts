import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbar } from "@angular/material/toolbar";
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: "users-footer",
  standalone: true,
  imports: [CommonModule, MatToolbar, MatAnchor],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss"
})
export class FooterComponent {
}
