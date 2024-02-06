import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierFormPage } from './modifier-form.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierFormPageRoutingModule {}
