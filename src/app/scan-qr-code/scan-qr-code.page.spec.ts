import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanQRCodePage } from './scan-qr-code.page';

describe('ScanQRCodePage', () => {
  let component: ScanQRCodePage;
  let fixture: ComponentFixture<ScanQRCodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScanQRCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
