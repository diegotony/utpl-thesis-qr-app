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
      `${environment.URL_BASE}/${environment.URL_USER}/dni/${data}`
    )
  }

  createUser(data) {
    return this.http.post<any>(
      `${environment.URL_BASE}/${environment.URL_USER}`,
      {
        "first_name": data.firstName,
        "last_name": data.lastName,
        "email": data.email,
        "dni": data.dni,
        "address": data.address
      })
  }

  createOrder(data) {
    return this.http.post<any>(
      `${environment.URL_BASE}/${environment.URL_ORDER}/decree`,
      {
        "id_table": data.id_table,
        "order": data.order,
        "id_client": data.id_client,
        "total": data.total
      })
  }


}
