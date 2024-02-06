import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.page.html',
  styleUrls: ['./modifier-utilisateur.page.scss'],
})
export class ModifierUtilisateurPage implements OnInit {
  utilisateurs: any[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUtilisateurs();

  }

  getUtilisateurs() {
    this.userService.getUsers().subscribe(
      (response) => {
        this.utilisateurs = response.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
