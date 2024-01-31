import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersUsersComponent } from './users-users.component';

describe('UsersUsersComponent', () => {
  let component: UsersUsersComponent;
  let fixture: ComponentFixture<UsersUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersUsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
