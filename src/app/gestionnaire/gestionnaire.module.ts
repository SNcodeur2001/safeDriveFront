import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionnairePageRoutingModule } from './gestionnaire-routing.module';

import { GestionnairePage } from './gestionnaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionnairePageRoutingModule
  ],
  declarations: [GestionnairePage]
})
export class GestionnairePageModule {}
