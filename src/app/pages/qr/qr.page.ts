import { Component, OnInit } from '@angular/core';
// import { ZBar, ZBarOptions } from '@ionic-native/zbar/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { OrderService } from 'src/app/services/order.service';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ExtrasService } from 'src/app/services/extras.service';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage {

  scannedData: {};
  ordercheck;
  toast: any;
  table: any;

  
  constructor(public toastController: ToastController,
    private barcodeScanner: BarcodeScanner,
    private navCtrl: NavController,
    public router: Router,
    public orderService: OrderService,
    public activatedRoute: ActivatedRoute,
    public navExtras: ExtrasService) { }

  scanQr() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedData = barcodeData;
      this.table = barcodeData.text;
      this.checkCode(this.scannedData);
    }).catch(err => {
      console.error('Error', err);
    });

  }

  checkCode(data) {
    console.log(data.text)
    this.orderService.checkTable(data.text).subscribe(data => {
      console.log("NTES", data)
      if (data.status === "ok") {
        this.pushPage();
      } else {
        console.log("upps")
        this.showToast();
      }
    })
  }

  pushPage() {
    // this.navCtrl.navigateForward(['menu'], { queryParams: this.ordercheck })
    console.log(this.table);
    this.navExtras.setExtras(this.table)
    this.router.navigateByUrl("menu");
  };

  showToast() {
    this.toast = this.toastController.create({
      message: 'Intenta de nuevo',
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }

  HideToast() {
    this.toast = this.toastController.dismiss();
  }
}



