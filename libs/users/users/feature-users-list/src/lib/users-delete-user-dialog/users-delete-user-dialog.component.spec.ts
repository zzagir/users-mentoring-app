import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDeleteUserDialogComponent } from './users-delete-user-dialog.component';

describe('UsersDeleteUserDialogComponent', () => {
  let component: UsersDeleteUserDialogComponent;
  let fixture: ComponentFixture<UsersDeleteUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersDeleteUserDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersDeleteUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
