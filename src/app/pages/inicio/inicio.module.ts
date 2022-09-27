import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';

import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';



 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule

  ],
  declarations: [InicioPage,TabsComponent,MenuComponent],
  exports: [TabsComponent,MenuComponent]
})
export class InicioPageModule {}
