import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../interfaces/item';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  getItems(){
    return this.http.get<Item>(`${environment.SERVICE_ORDER}/item`)
  }
  checkTable(data){
    return this.http.get<any>(`${environment.SERVICE_ORDER}/table/check/${data}`)
  }
  checkUser(data){
    return this.http.get<any>(`${environment.SERVICE_ORDER}/table/check/${data}`)
  }

}
