import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  extras: any;

  order:any;
  qr :any = true;
  id_table:any;
  id_client:any;
  id_order:any;
  total:any;


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


  public setTable(data) {
    this.id_table = data;
  }

  public getTable() {
    return this.id_table;
  }

  public setClient(data) {
    this.id_client = data;
  }

  public getClient() {
    return this.id_client;
  }

  public setTotal(data) {
    this.total = data;
  }

  public getTotal() {
    return this.total;
  }

  public setIdOrder(data) {
    this.id_order = data;
  }

  public getIdOrder() {
    return this.id_order;
  }
  
}