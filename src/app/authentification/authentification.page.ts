import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {
  email!: string;
  password!: string;
  constructor(
    private authService: AuthService, 
    private navMenu:NavController
    ) { }

  ngOnInit() {
  }
  
  onSubmit() {
    const credentials = {email:this.email,password:this.password}
    if(this.email && this.password){

      this.authService.login(credentials).subscribe(
        (response) => {
          const monRole = response.data.role;
          // Traitez la réponse de l'API ici
          console.log(monRole);
          console.log(response);
          // this.navMenu.navigateRoot("utilisateur");
          if(monRole=="utilisateur"){
          this.navMenu.navigateRoot("utilisateur");

          }else if(monRole == "gestionnaire"){
             this.navMenu.navigateRoot("modifier-utilisateur");

          }else{
            alert("Mettre un role valide");

          }
          
        },
        (error) => {
          // Gérez les erreurs ici
          console.error(error);
          alert("Addresse email ou mot de passe incorrect");
        }
      );
    } else {
      console.error('Email ou mot de passe non défini.');
      alert(3);
    }
  }

}
