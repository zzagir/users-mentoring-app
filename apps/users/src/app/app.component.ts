import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from './users.service';
import { FooterComponent, HeaderComponent } from '@users/layout';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'users-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [],
})
export class AppComponent {
  title = 'users';
  private readonly userService = inject(UsersService);
}
