import { Component, OnInit } from '@angular/core';
import { ExtrasService } from 'src/app/services/extras.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor(public navExtras: ExtrasService,  public nav: NavController) { }
  order =[];
  table:any;

  ngOnInit() {
    this.order = this.navExtras.getOrder()
    this.table = this.navExtras.getTable()
  }
  ionViewWillEnter(){
    this.order = this.navExtras.getOrder()
  }

async delete(item){
  this.order.splice(this.order.indexOf(item),1)
}
async createOrder(){
  // for (let index = 0; index < this.order.length; index++) {
  //   const element = this.order[index];
  //   console.log(element.amount)
    
  // }
  this.nav.navigateForward("users")
}


}
