import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionnairePage } from './gestionnaire.page';

describe('GestionnairePage', () => {
  let component: GestionnairePage;
  let fixture: ComponentFixture<GestionnairePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionnairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
