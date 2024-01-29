import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-users-core-ui-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-core-ui-layout.component.html',
  styleUrl: './users-core-ui-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersCoreUiLayoutComponent {}
