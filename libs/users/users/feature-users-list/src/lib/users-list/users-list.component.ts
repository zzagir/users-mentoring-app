import {
  ChangeDetectionStrategy,
  Component, Input,
  ViewEncapsulation
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersListVM } from "./users-list-view-model";

@Component({
  selector: "users-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./users-list.component.html",
  styleUrl: "./users-list.component.scss",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  @Input({ required: true })
  vm!: UsersListVM
}
