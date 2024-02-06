import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatistiquesEtClassementPageRoutingModule } from './statistiques-et-classement-routing.module';

import { StatistiquesEtClassementPage } from './statistiques-et-classement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatistiquesEtClassementPageRoutingModule
  ],
  declarations: [StatistiquesEtClassementPage]
})
export class StatistiquesEtClassementPageModule {}
