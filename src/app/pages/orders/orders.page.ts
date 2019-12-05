import { Component, OnInit } from '@angular/core';
import { ExtrasService } from 'src/app/services/extras.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage  {

  constructor(public navExtras: ExtrasService) { }



}
