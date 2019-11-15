import { Component, OnInit, TemplateRef } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ExtrasService } from 'src/app/services/extras.service';

@Component({
  selector: "app-information",
  templateUrl: "./information.page.html",
  styleUrls: ["./information.page.scss"]
})
export class InformationPage implements OnInit {
  data: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public navExtras: ExtrasService
  ) {

  }

  ngOnInit() {

    this.data = this.navExtras.getExtras()
    console.log(this.navExtras)

  }

  goPayment() {
    let jsonData = JSON.stringify(this.data);
    this.router.navigate(["payment", jsonData]);

  }


  register(form) {
    console.log(form.value)
    console.log(this.data)
  }
}
