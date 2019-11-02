import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ComponentsCardItemComponent } from './components-card-item/components-card-item.component';
import { ComponentsItemsComponent } from './components-items/components-items.component';
import { ComponentsItemsModalComponent } from './components-items-modal/components-items-modal.component';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ComponentsCardItemComponent,
    ComponentsItemsComponent,
    ComponentsItemsModalComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ModalModule.forRoot(),
    FormsModule
  ], exports:[
    ComponentsItemsComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
