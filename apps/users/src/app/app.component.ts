import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent, HeaderComponent } from "@users/layout";

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, TuiRootModule, TuiDialogModule, TuiAlertModule],
  selector: "users-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent {
  title = "users";
}
