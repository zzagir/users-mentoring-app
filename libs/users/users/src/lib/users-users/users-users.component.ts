import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-users-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-users.component.html',
  styleUrl: './users-users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersUsersComponent {}
