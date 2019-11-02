import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Item} from "../../interfaces/item";
import { InformationPage } from '../information/information.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private orderServiece: OrderService, private navCtrl: NavController) { }
  items: any;

  ngOnInit() {
    this.orderServiece.getItems().subscribe(response => {
      // this.items.push(response)
      this.items= response
    } 
    )
    
  }

  goUserInformation(){
    this.navCtrl.navigateForward(['information'])
  }

}
