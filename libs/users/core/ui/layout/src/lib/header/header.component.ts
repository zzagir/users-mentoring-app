import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
