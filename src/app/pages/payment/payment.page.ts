import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { ExtrasService } from 'src/app/services/extras.service';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';

declare let paypal: any;

@Component({
  selector: "app-payment",
  templateUrl: "./payment.page.html",
  styleUrls: ["./payment.page.scss"]
})
export class PaymentPage implements AfterViewChecked {

  data: Object;
  constructor(private payPal: PayPal, public activatedRoute: ActivatedRoute, public router: Router, private navExtras: ExtrasService, public nav: NavController) {

  }

  addScript: boolean = false;
  paypalLoad: boolean = true;

  finalAmount: number = 1;
  id_payment_return=""
  paypalConfig = {
    env: 'sandbox',
    commit: true,
    payment: (data, actions) => {
      console.log(this.navExtras.getTotal())
      console.log(this.navExtras.getIdOrder())
      console.log(this.navExtras.getClient())
      return actions.request.post(environment.URL_BASE+"/"+environment.URL_PAY+'/paypal/create', {
        total: this.navExtras.getTotal(),
        id_order: this.navExtras.getIdOrder(),
        id_client: this.navExtras.getClient(),
        payType: "Paypal"
      })
        .then((res) =>{
          console.log(res)
          this.id_payment_return= res.id_payment;
          return res.paymentID;
        });
    },
    onAuthorize: (data, actions) => {
      return actions.request.post(environment.URL_BASE+"/"+environment.URL_PAY+'/paypal/execute', {
        paymentID: data.paymentID,
        payerID: data.payerID,
        id_payment: this.id_payment_return
      })
        .then((res) => {
          this.nav.navigateForward("qr")
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
