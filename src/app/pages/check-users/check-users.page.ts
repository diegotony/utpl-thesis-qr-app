import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ExtrasService } from 'src/app/services/extras.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-check-users',
  templateUrl: './check-users.page.html',
  styleUrls: ['./check-users.page.scss'],
})
export class CheckUsersPage implements OnInit {
  data: any;
  constructor(private orderService: OrderService, private navExtras: ExtrasService, public nav: NavController
  ) { }

  ngOnInit() {
  }

  order = []
  amount = 0
  register(form) {
    console.log(form.value.dni)
    this.orderService.checkUser(form.value.dni).subscribe((data) => {
      if (data.status === "ok") {
        this.navExtras.setClient(data.id_client)
        this.nav.navigateForward("payment")
        this.order = this.navExtras.getOrder()
        this.order.forEach((value)=>{
          this.amount = this.amount + value.amount
        })

        let client = this.navExtras.getClient()
        let order = this.navExtras.getOrder()
        let table =this.navExtras.getTable()
        let total =this.amount
        this.orderService.createOrder({ 
          "id_user": client, 
          "id_table": table, 
          "order": order,
          "pago": "Pendiente",
          "total": total
        }).subscribe((data)=>{
            this.navExtras.setTotal(total)
            this.navExtras.setIdOrder(data._id)
            console.log(data['_id'])
          })
      }
      if (data.status === "false") {
        console.log("no ching")
      }
    })

  }
}
