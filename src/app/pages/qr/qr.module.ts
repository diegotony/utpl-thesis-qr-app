import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QrPage } from './qr.page';
// import { ZBar, ZBarOptions } from '@ionic-native/zbar/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
const routes: Routes = [
  {
    path: '',
    component: QrPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QrPage],
  providers:[  BarcodeScanner]
})
export class QrPageModule {}
