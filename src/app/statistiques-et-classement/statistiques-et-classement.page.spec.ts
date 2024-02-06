import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatistiquesEtClassementPage } from './statistiques-et-classement.page';

describe('StatistiquesEtClassementPage', () => {
  let component: StatistiquesEtClassementPage;
  let fixture: ComponentFixture<StatistiquesEtClassementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StatistiquesEtClassementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
