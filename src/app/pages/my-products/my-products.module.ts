import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProductsPageRoutingModule } from './my-products-routing.module';

import { MyProductsPage } from './my-products.page';

import { MenuComponent } from 'src/app/components/menu/menu.component';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     MyProductsPageRoutingModule
//   ],
//   exports: [MenuComponent],
//   declarations: [MyProductsPage,MenuComponent]
// })
// export class MyProductsPageModule {}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyProductsPageRoutingModule
  ],
  declarations: [MyProductsPage]
})
export class MyProductsPageModule {}
