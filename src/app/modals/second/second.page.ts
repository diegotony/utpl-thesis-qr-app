import { Component, OnInit, Input } from '@angular/core';
import { ModalController,ToastController } from '@ionic/angular';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor(private modalController: ModalController, public toastController: ToastController,) { }

  @Input() public item: string;

  myChoice = {}
 
  ngOnInit() {}
  
  
  async closeModal() {
    await this.modalController.dismiss(this.myChoice);
  }

  register(form,item) {
    const finalAmount = Number(form.value.quantity) * Number(item.price)
    const choice= {item:item.name,description:item.description,price:item.price, quantity:form.value.quantity,amount:finalAmount}
    this.myChoice = choice
    console.log(this.myChoice)
    this.presentToast()
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Your Item have been saved.",
      duration: 2000
    });
    toast.present();
    this.closeModal();
  }

  

}
