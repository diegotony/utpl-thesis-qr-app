import { Component, OnInit, TemplateRef } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ExtrasService } from 'src/app/services/extras.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: "app-information",
  templateUrl: "./information.page.html",
  styleUrls: ["./information.page.scss"]
})
export class InformationPage implements OnInit {
  data: any;
  myForm;
  private todo: FormGroup;
  order = []
  amount = 0

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public navExtras: ExtrasService,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    public nav: NavController,
  ) {
    this.todo = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      address: ['', Validators.required],
      dni: ['', Validators.compose([Validators.maxLength(10), Validators.minLength(10)])]

    });

  }

  ngOnInit() {
  }

  goPayment() {
    let jsonData = JSON.stringify(this.data);
    this.router.navigate(["payment", jsonData]);

  }

  logForm() {
    console.log(this.todo.value)
    this.orderService.createUser(this.todo.value)
      .subscribe((data) => {
        this.navExtras.setClient(data._id)
        this.order = this.navExtras.getOrder()
        this.order.forEach((value) => {
          this.amount = this.amount + value.amount
        })

        let client = this.navExtras.getClient()
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
          this.nav.navigateForward("payment")
        })

      })
  }


}
