import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContenuEducatifPageRoutingModule } from './contenu-educatif-routing.module';

import { ContenuEducatifPage } from './contenu-educatif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenuEducatifPageRoutingModule,
    
  ],
  declarations: [ContenuEducatifPage]
})
export class ContenuEducatifPageModule {}
