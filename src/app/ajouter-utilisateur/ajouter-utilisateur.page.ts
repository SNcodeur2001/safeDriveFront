import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.page.html',
  styleUrls: ['./ajouter-utilisateur.page.scss'],
})
export class AjouterUtilisateurPage implements OnInit {

  nom: string = '';
  email: string = '';
  motDePasse: string = '';
  role: string = '';

  constructor(private http: HttpClient, private navController: NavController) { }


  ngOnInit() {
  }

  login() {
    const credentials = {
      name: this.nom,
      email: this.email,
      password: this.motDePasse,
      role: this.role
    };

    this.http.post('http://localhost:8000/api/inscription', credentials)
    .subscribe(
      (response: any) => {
        alert("Inscription réussie");
        console.log(response);
        // Redirection ou autre action après inscription réussie
        this.navController.navigateRoot('/modifier-utilisateur');
      },
      (error) => {
        // Gestion des erreurs de l'API
        console.error(error);
        // Affichage d'une alerte ou autre action en cas d'erreur
      }
    );
}
}
