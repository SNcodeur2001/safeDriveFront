import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartageReseauxSociauxPage } from './partage-reseaux-sociaux.page';

const routes: Routes = [
  {
    path: '',
    component: PartageReseauxSociauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartageReseauxSociauxPageRoutingModule {}
