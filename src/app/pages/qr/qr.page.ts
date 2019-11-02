import { Component, OnInit } from '@angular/core';
// import { ZBar, ZBarOptions } from '@ionic-native/zbar/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { OrdersPage } from '../orders/orders.page';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage  {

  data;
  // constructor(private zbar: ZBar) { }
  constructor(private barcodeScanner: BarcodeScanner, private navCtrl: NavController) { }
  scanQr(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData.text);
      this.data= barcodeData.text;
      this.pushPage()
     }).catch(err => {
         console.log('Error', err);
     });
  }

  pushPage(){
    this.navCtrl.navigateForward(['menu'],{queryParams:this.data})
    console.log(this.data)
  };

}

 

