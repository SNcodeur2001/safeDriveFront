import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner as mlkit, LensFacing, BarcodeFormat } from '@capacitor-mlkit/barcode-scanning';



@Component({
  selector: 'app-scan-qr-code',
  templateUrl: './scan-qr-code.page.html',
  styleUrls: ['./scan-qr-code.page.scss'],
})

export class ScanQRCodePage implements OnInit {
  barcode:any;



  constructor() { }

  ngOnInit() {
  
  }

  async scanCode() {
    const { barcodes } = await mlkit.scan({ formats: [BarcodeFormat.QrCode] });
    this.barcode = barcodes[0].displayValue;
  }
}
