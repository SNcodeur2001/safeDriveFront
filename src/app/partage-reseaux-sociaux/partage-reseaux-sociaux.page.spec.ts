import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartageReseauxSociauxPage } from './partage-reseaux-sociaux.page';

describe('PartageReseauxSociauxPage', () => {
  let component: PartageReseauxSociauxPage;
  let fixture: ComponentFixture<PartageReseauxSociauxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PartageReseauxSociauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
