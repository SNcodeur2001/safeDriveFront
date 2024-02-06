import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionnairePage } from './gestionnaire.page';

const routes: Routes = [
  {
    path: '',
    component: GestionnairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionnairePageRoutingModule {}
