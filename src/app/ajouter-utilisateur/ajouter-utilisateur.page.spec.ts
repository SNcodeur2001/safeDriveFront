import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterUtilisateurPage } from './ajouter-utilisateur.page';

describe('AjouterUtilisateurPage', () => {
  let component: AjouterUtilisateurPage;
  let fixture: ComponentFixture<AjouterUtilisateurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterUtilisateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
