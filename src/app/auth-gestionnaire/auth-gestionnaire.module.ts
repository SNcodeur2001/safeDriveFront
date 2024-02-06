import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthGestionnairePageRoutingModule } from './auth-gestionnaire-routing.module';

import { AuthGestionnairePage } from './auth-gestionnaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthGestionnairePageRoutingModule
  ],
  declarations: [AuthGestionnairePage]
})
export class AuthGestionnairePageModule {}
