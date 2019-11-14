import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "@ionic/angular";
import { ActivatedRoute, Router } from '@angular/router';
import { ExtrasService } from 'src/app/services/extras.service';

@Component({
  selector: "app-information",
  templateUrl: "./information.page.html",
  styleUrls: ["./information.page.scss"]
})
export class InformationPage implements OnInit {
  data:any;
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public navExtras: ExtrasService
    ) {

  }

  ngOnInit() {
    // let dataRec = this.activatedRoute.snapshot.paramMap.get('id_data')
    // this.data = dataRec
    // console.log(dataRec)
    this.data = this.navExtras.getExtras()
    console.log(this.navExtras)

  }

  goPayment() {
    let jsonData = JSON.stringify(this.data);
    this.router.navigate(["payment", jsonData]);

    // this.navCtrl.navigateForward(["information"]);
  }
}
