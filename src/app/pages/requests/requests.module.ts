import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestsPageRoutingModule } from './requests-routing.module';

import { RequestsPage } from './requests.page';

import { MenuComponent } from 'src/app/components/menu/menu.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestsPageRoutingModule
  ],
  declarations: [RequestsPage],

})
export class RequestsPageModule {}
