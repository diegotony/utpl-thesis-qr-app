import { Component, OnInit, TemplateRef } from "@angular/core";
import { OrderService } from "src/app/services/order.service";
import { ToastController, ModalController,NavController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { ExtrasService } from 'src/app/services/extras.service';
import { SecondPage } from 'src/app/modals/second/second.page';
import { OrdersPage } from '../orders/orders.page';

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"]
})
export class MenuPage implements OnInit {

  items: any;
  carrito = [];
  data: any;
  choice = {}
  public dinner: string;

  constructor(
    public toastController: ToastController,
    private orderServiece: OrderService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public navExtras: ExtrasService,
    private modalController: ModalController,

  ) { }

  ngOnInit() {
    this.orderServiece.getItems().subscribe(response => {
      this.items = response;
    });

    this.data = this.navExtras.getExtras()
  }



  async openModal() {
    const modal = await this.modalController.create({
      component: SecondPage
    });
    return await modal.present();
  }
  async openModalWithData(itemData) {
    const modal = await this.modalController.create({
      component: SecondPage,
      componentProps: {
        item: itemData
      }
    });
    modal.onWillDismiss().then(dataReturned => {
      // trigger when about to close the modal
      this.choice = dataReturned.data;
      this.carrito.push(this.choice)
      this.navExtras.setOrder(this.carrito);
      console.log('Receive Choice: ', this.choice);
    });
    return await modal.present().then(_ => {
      // triggered when opening the modal
      // console.log('Sending: ', this.lunch);
    });
  }



  goUserInformation() {
    this.navExtras.setExtras({ "id_table": this.data, "items": this.carrito })
    this.router.navigate(["users"]);
  }

}
