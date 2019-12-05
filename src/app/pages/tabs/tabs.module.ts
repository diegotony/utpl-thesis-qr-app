import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {path:'menu', loadChildren: '../menu/menu.module#MenuPageModule'},
      {path:'carrito', loadChildren: '../carrito/carrito.module#CarritoPageModule'},
      {path:'orders', loadChildren: '../orders/orders.module#OrdersPageModule'},

    ]
  },
  {
    path:'init',
    redirectTo:'/tabs/menu',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
