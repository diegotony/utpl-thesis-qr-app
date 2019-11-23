import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

declare let paypal: any;

@Component({
  selector: "app-payment",
  templateUrl: "./payment.page.html",
  styleUrls: ["./payment.page.scss"]
})
export class PaymentPage implements AfterViewChecked {

  data: Object;
  constructor(private payPal: PayPal, public activatedRoute: ActivatedRoute, public router: Router) {

  }

  addScript: boolean = false;
  paypalLoad: boolean = true;

  finalAmount: number = 1;

  paypalConfig = {
    env: 'sandbox',
    commit: true,
    payment: (data, actions) => {
      return actions.request.post(' http://c264a2cf.ngrok.io/create-payment', {
        total: "5.3",
        order_id: "id_order",
        client_id: "fdfas",
      })
        .then(function (res) {
          // 3. Return res.id from the response
          return res.paymentID;
        });
    },
    onAuthorize: (data, actions) => {
      return actions.request.post(' http://c264a2cf.ngrok.io/execute', {
        paymentID: data.paymentID,
        payerID: data.payerID,
        ID: data.ID
      })
        .then(function (res) {
          console.log(data)
        });
    }

  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }


}
