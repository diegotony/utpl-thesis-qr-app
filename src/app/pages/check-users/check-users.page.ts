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
  constructor(private orderService: OrderService,private navExtras: ExtrasService, public nav: NavController
    ) { }

  ngOnInit() {
  }

  register(form) {
    console.log(form.value.dni)
    this.orderService.checkUser(form.value.dni).subscribe((data)=>{
      if(data.status === "ok"){
        this.navExtras.setClient(data.id_client)
        this.nav.navigateForward("payment")
      }
      if(data.status === "false"){
        console.log("no ching")
      }
    })
    // this.data = form.value

  }
}
