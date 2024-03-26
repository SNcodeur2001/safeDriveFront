import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-contenu-educatif',
  templateUrl: './contenu-educatif.page.html',
  styleUrls: ['./contenu-educatif.page.scss'],
})
export class ContenuEducatifPage implements OnInit {


  videos = [
    { title: 'Vidéo 1', url: 'assets/videos/video1.mp4' },
    { title: 'Vidéo 2', url: 'assets/videos/video2.mp4' },
    // Ajoutez autant de vidéos que nécessaire
  ];
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onButtonClicked() {
    this.authService.updateScore().subscribe(
      (response) => {
        console.log('Score updated successfully:', response);
        // Ajoutez ici le code pour gérer la réponse, par exemple, afficher un message à l'utilisateur
      },
      (error) => {
        console.error('Failed to update score:', error);
        // Ajoutez ici le code pour gérer l'erreur, par exemple, afficher un message d'erreur à l'utilisateur
      }
    );
  }

}
