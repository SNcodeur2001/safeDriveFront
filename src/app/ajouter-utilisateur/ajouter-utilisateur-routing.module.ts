import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterUtilisateurPage } from './ajouter-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterUtilisateurPageRoutingModule {}
