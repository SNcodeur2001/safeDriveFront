import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatistiquesEtClassementPage } from './statistiques-et-classement.page';

const routes: Routes = [
  {
    path: '',
    component: StatistiquesEtClassementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatistiquesEtClassementPageRoutingModule {}
