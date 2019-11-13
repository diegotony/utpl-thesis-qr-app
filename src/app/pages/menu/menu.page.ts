import { Component, OnInit, TemplateRef } from "@angular/core";
import { OrderService } from "src/app/services/order.service";
import { Item } from "../../interfaces/item";

import { ToastController } from "@ionic/angular";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"]
})
export class MenuPage implements OnInit {
  modalRef: BsModalRef;
  items: any;
  numbers: [];
  quantity;
  public myitems = [];
  choice: Item;
  constructor(
    private modalService: BsModalService,
    public toastController: ToastController,
    private orderServiece: OrderService,
    public router: Router
  ) {}

  ngOnInit() {
    this.orderServiece.getItems().subscribe(response => {
      this.items = response;
    });
    // this.check()

  }


  goUserInformation() {
    console.log(this.myitems);
    let jsonData = JSON.stringify(this.myitems);
    this.router.navigate(["information", jsonData]);

    // this.navCtrl.navigateForward(["information"]);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  add(price, name) {
    const choice = { name, price, quantity: this.quantity };
    this.myitems.push(choice);
    console.log(this.myitems);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Your Item have been saved.",
      duration: 2000
    });
    toast.present();
  }
}
