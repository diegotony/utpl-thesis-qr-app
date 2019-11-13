import { Component, OnInit } from '@angular/core';
// import { ZBar, ZBarOptions } from '@ionic-native/zbar/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { OrdersPage } from '../orders/orders.page';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage {

  scannedData: {};
  ordercheck;
  // constructor(private zbar: ZBar) { }
  constructor(private barcodeScanner: BarcodeScanner, private navCtrl: NavController, public orderService: OrderService) { }

  scanQr() {
  
      this.barcodeScanner.scan().then(barcodeData => {
        this.scannedData = barcodeData;
        this.checkCode(this.scannedData);


      }).catch(err => {
        console.error('Error', err);
      });

  }


  
  checkCode(data){
    console.log("checek")
    console.log(data.text)
    this.orderService.checkTable(data.text).subscribe(data=>{
      console.log("NTES",data)
      if(data.status === "ok"){
        console.log("Important   =>",data.status)
        this.pushPage()
      }else{
        console.log("upps")
      }
    })
  }
  pushPage() {
    this.navCtrl.navigateForward(['menu'],{queryParams:this.ordercheck})
  };

}



