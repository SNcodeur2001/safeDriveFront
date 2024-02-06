import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartageReseauxSociauxPageRoutingModule } from './partage-reseaux-sociaux-routing.module';

import { PartageReseauxSociauxPage } from './partage-reseaux-sociaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartageReseauxSociauxPageRoutingModule
  ],
  declarations: [PartageReseauxSociauxPage]
})
export class PartageReseauxSociauxPageModule {}
