import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfractionPage } from './infraction.page';

describe('InfractionPage', () => {
  let component: InfractionPage;
  let fixture: ComponentFixture<InfractionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfractionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
