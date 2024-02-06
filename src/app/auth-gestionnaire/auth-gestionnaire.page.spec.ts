import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthGestionnairePage } from './auth-gestionnaire.page';

describe('AuthGestionnairePage', () => {
  let component: AuthGestionnairePage;
  let fixture: ComponentFixture<AuthGestionnairePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuthGestionnairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
