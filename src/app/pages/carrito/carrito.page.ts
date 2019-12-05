import { Component, OnInit } from '@angular/core';
import { ExtrasService } from 'src/app/services/extras.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor(public navExtras: ExtrasService) { }
  ngOnInit() {
    this.order = this.navExtras.getOrder()
  }

  order:any;
  ionViewWillEnter(){
    
    this.order = this.navExtras.getOrder()
  }




}
