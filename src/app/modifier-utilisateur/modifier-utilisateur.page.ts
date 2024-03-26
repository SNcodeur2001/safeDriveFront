import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { AuthService } from '../services/auth.service';




@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.page.html',
  styleUrls: ['./modifier-utilisateur.page.scss'],
})
export class ModifierUtilisateurPage implements OnInit {
  utilisateurs: any[] = [];


  constructor(private userService: UserService,
  private authService: AuthService,
  ) {}

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



  deleteUser(id: number) {
    this.authService.deleteUsers(id).subscribe(
      response => {
        console.log('User deleted successfully');
        // Traitez la réponse ou effectuez d'autres actions après la suppression
      },
      error => {
        console.error('Error deleting user:', error);
        // Gérez l'erreur
      }
    );
  }

}
