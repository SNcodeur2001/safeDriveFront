import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierUtilisateurPageRoutingModule } from './modifier-utilisateur-routing.module';

import { ModifierUtilisateurPage } from './modifier-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierUtilisateurPageRoutingModule
  ],
  declarations: [ModifierUtilisateurPage]
})
export class ModifierUtilisateurPageModule {}
