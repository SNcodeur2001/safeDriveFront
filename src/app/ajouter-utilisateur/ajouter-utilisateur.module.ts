import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterUtilisateurPageRoutingModule } from './ajouter-utilisateur-routing.module';

import { AjouterUtilisateurPage } from './ajouter-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterUtilisateurPageRoutingModule
  ],
  declarations: [AjouterUtilisateurPage]
})
export class AjouterUtilisateurPageModule {}
