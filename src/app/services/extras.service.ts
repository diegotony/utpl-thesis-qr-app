import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  extras: any;

  order:any;
  qr :any = true;
  id_table:any;
  constructor() { }

  public setExtras(data) {
    this.extras = data;
  }

  public getExtras() {
    return this.extras;
  }

  public setOrder(data) {
    this.order = data;
  }

  public getOrder() {
    return this.order;
  }


  public setQr(data) {
    this.qr = data;
  }

  public getQr() {
    return this.qr;
  }


  public setTable(data) {
    this.id_table = data;
  }

  public getTable() {
    return this.id_table;
  }
}