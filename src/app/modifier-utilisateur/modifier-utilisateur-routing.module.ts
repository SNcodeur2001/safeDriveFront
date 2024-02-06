import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierUtilisateurPage } from './modifier-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierUtilisateurPageRoutingModule {}
