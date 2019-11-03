import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "@ionic/angular";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-information",
  templateUrl: "./information.page.html",
  styleUrls: ["./information.page.scss"]
})
export class InformationPage implements OnInit {
  data:any;
  constructor(public activatedRoute: ActivatedRoute,    public router: Router
    ) {

  }

  ngOnInit() {
    let dataRec = this.activatedRoute.snapshot.paramMap.get('data')
    this.data = dataRec
    console.log(dataRec)
  }

  goPayment() {
    let jsonData = JSON.stringify(this.data);
    this.router.navigate(["payment", jsonData]);

    // this.navCtrl.navigateForward(["information"]);
  }
}
