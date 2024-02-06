import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContenuEducatifPage } from './contenu-educatif.page';

const routes: Routes = [
  {
    path: '',
    component: ContenuEducatifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContenuEducatifPageRoutingModule {}
