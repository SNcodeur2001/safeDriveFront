import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContenuEducatifPage } from './contenu-educatif.page';

describe('ContenuEducatifPage', () => {
  let component: ContenuEducatifPage;
  let fixture: ComponentFixture<ContenuEducatifPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContenuEducatifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
