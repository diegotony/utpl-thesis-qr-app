import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../interfaces/item';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  getItems() {
    return this.http.get<Item>(
      `${environment.URL_BASE}/${environment.URL_ORDER}/item`)
  }

  checkTable(data) {
    return this.http.get<any>(
      `${environment.URL_BASE}/${environment.URL_ORDER}/table/check/${data}`)
  }

  checkUser(data) {
    return this.http.get<any>(
      `http://localhost:3011/dni/${data}`
    )
  }

  createUser(data) {
    return this.http.post<any>(
      `${environment.URL_BASE}/${environment.URL_USER}`,
      {
        "first_name": data.first_name,
        "last_name": data.last_name,
        "email": data.email,
        "dni": data.email,
        "address": data.address
      })
  }

  createOrder(data) {
    return this.http.post<any>(
      `${environment.URL_BASE}/${environment.URL_ORDER}/decree`,
      {
        "id_table": data.id_table,
        "order": data.order,
        "id_user": data.id_user,
        "total": data.total
      })
  }


}
