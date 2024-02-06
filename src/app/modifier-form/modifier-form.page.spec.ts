import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierFormPage } from './modifier-form.page';

describe('ModifierFormPage', () => {
  let component: ModifierFormPage;
  let fixture: ComponentFixture<ModifierFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
