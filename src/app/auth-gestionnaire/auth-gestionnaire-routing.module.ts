import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGestionnairePage } from './auth-gestionnaire.page';

const routes: Routes = [
  {
    path: '',
    component: AuthGestionnairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthGestionnairePageRoutingModule {}
