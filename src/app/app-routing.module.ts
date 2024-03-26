import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'scan-qr-code',
    loadChildren: () => import('./scan-qr-code/scan-qr-code.module').then( m => m.ScanQRCodePageModule)
  },
  {
    path: 'rules',
    loadChildren: () => import('./rules/rules.module').then( m => m.RulesPageModule)
  },
  {
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
    path: 'infraction',
    loadChildren: () => import('./infraction/infraction.module').then( m => m.InfractionPageModule)
  },
 
  {
    path: 'auth-gestionnaire',
    loadChildren: () => import('./auth-gestionnaire/auth-gestionnaire.module').then( m => m.AuthGestionnairePageModule)
  },
  {
    path: 'utilisateur',
    loadChildren: () => import('./utilisateur/utilisateur.module').then( m => m.UtilisateurPageModule)
  },
  {
    path: 'gestionnaire',
    loadChildren: () => import('./gestionnaire/gestionnaire.module').then( m => m.GestionnairePageModule)
  },
  {
    path: 'ajouter-utilisateur',
    loadChildren: () => import('./ajouter-utilisateur/ajouter-utilisateur.module').then( m => m.AjouterUtilisateurPageModule)
  },
  {
    path: 'modifier-utilisateur',
    loadChildren: () => import('./modifier-utilisateur/modifier-utilisateur.module').then( m => m.ModifierUtilisateurPageModule)
  },
  {
    path: 'contenu-educatif',
    loadChildren: () => import('./contenu-educatif/contenu-educatif.module').then( m => m.ContenuEducatifPageModule)
  },
  {
    path: 'partage-reseaux-sociaux',
    loadChildren: () => import('./partage-reseaux-sociaux/partage-reseaux-sociaux.module').then( m => m.PartageReseauxSociauxPageModule)
  },
  {
    path: 'statistiques-et-classement',
    loadChildren: () => import('./statistiques-et-classement/statistiques-et-classement.module').then( m => m.StatistiquesEtClassementPageModule)
  },
  {
    path: 'modifier-form',
    loadChildren: () => import('./modifier-form/modifier-form.module').then( m => m.ModifierFormPageModule)
  },
  {
    path: 'edit-user',
    loadChildren: () => import('./edit-user/edit-user.module').then( m => m.EditUserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
