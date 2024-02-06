import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierUtilisateurPage } from './modifier-utilisateur.page';

describe('ModifierUtilisateurPage', () => {
  let component: ModifierUtilisateurPage;
  let fixture: ComponentFixture<ModifierUtilisateurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierUtilisateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
