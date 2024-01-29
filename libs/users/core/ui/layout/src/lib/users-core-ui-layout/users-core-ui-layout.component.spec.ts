import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersCoreUiLayoutComponent } from './users-core-ui-layout.component';

describe('UsersCoreUiLayoutComponent', () => {
  let component: UsersCoreUiLayoutComponent;
  let fixture: ComponentFixture<UsersCoreUiLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersCoreUiLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersCoreUiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
