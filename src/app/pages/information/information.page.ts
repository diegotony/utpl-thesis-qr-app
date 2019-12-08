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
  private todo : FormGroup;

  validation_messages = {
    'name': [
        { type: 'required', message: 'Username is required.' },
        // { type: 'minlength', message: 'Username must be at least 5 characters long.' },
        // { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
        // { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
        // { type: 'validUsername', message: 'Your username has already been taken.' }
      ],

    }

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
      lastName: ['',Validators.required],
      email:['',Validators.email],
      address:['',Validators.required],
      dni:['' ,Validators.compose([Validators.maxLength(10), Validators.minLength(10)])]

    });

  }

  ngOnInit() {
  }

  goPayment() {
    let jsonData = JSON.stringify(this.data);
    this.router.navigate(["payment", jsonData]);

  }

  logForm(){
    console.log(this.todo.value)
    this.orderService.createUser(this.todo.value)
    .subscribe((data)=>{
      console.log(data)
      this.navExtras.setClient(data._id)
      this.nav.navigateForward("payment")
      // console.log(this.navExtras.getClient())
    })
  }


}
