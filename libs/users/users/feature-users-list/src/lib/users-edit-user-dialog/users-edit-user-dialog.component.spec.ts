import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersEditUserDialogComponent } from './users-edit-user-dialog.component';

describe('UsersEditUserDialogComponent', () => {
  let component: UsersEditUserDialogComponent;
  let fixture: ComponentFixture<UsersEditUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersEditUserDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersEditUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
