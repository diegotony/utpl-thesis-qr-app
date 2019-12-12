import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ExtrasService } from 'src/app/services/extras.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-check-users',
  templateUrl: './check-users.page.html',
  styleUrls: ['./check-users.page.scss'],
})
export class CheckUsersPage implements OnInit {
  data: any;
  constructor(
    private orderService: OrderService,
    private navExtras: ExtrasService,
    public nav: NavController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  order = []
  amount = 0
  async register(form) {
    this.orderService.checkUser(form.value.dni).subscribe((data) => {
      if (data.status === "ok") {
        this.navExtras.setClient(data.id_client)
        this.nav.navigateForward("payment")
        this.order = this.navExtras.getOrder()
        this.order.forEach((value) => {
          this.amount = this.amount + value.amount
        })

        let client = this.navExtras.getClient()
        console.log(client)
        let order = this.navExtras.getOrder()
        let table = this.navExtras.getTable()
        let total = this.amount
        this.orderService.createOrder({
          "id_client": client,
          "id_table": table,
          "order": order,
          "pago": "Pendiente",
          "total": total
        }).subscribe((data) => {
          this.navExtras.setTotal(total)
          this.navExtras.setIdOrder(data._id)
          console.log(data['_id'])
        })
      }
      if (data.status === "false") {
        this.presentAlert()
      }
    })

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Esta cedula no se encuentra registrada',
      buttons: ['OK'],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  // async presentAlertConfirm() {
  //   const alert = await this.alertController.create({
  //     header: 'Confirm!',
  //     message: 'Message <strong>text</strong>!!!',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //           console.log('Confirm Cancel: blah');
  //         }
  //       }, {
  //         text: 'Okay',
  //         handler: () => {
  //           console.log('Confirm Okay');
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  //   let result = await alert.onDidDismiss();
  //   console.log(result);
  // }

}
