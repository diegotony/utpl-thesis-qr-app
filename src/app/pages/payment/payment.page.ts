import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

@Component({
  selector: "app-payment",
  templateUrl: "./payment.page.html",
  styleUrls: ["./payment.page.scss"]
})
export class PaymentPage implements OnInit {

  data:Object;
  constructor(private payPal: PayPal,public activatedRoute: ActivatedRoute, public router: Router) {
   
  }

  ngOnInit() {
    let dataRec = this.activatedRoute.snapshot.paramMap.get("info");
    console.log("dddd  ",dataRec);
    this.data = JSON.parse(dataRec);
    console.log("dsddd  ",this.data);

  }

}
