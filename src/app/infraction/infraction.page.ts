import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media-service.service';

@Component({
  selector: 'app-infraction',
  templateUrl: './infraction.page.html',
  styleUrls: ['./infraction.page.scss'],
})
export class InfractionPage implements OnInit {

  public message: string = ''; // Variable pour stocker le message à afficher à l'utilisateur


  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }

  // Fonction appelée lorsque le fichier est sélectionné

  onFileChange(event:any) {
    const file = event.target.files[0];
    this.uploadMedia(file);
  }


    // Fonction pour télécharger le fichier
  uploadMedia(file: File) {
    this.mediaService.uploadMedia(file)
      .subscribe(
        response => {
          console.log(response); // Afficher la réponse de l'API
          if (response && response.message) {
            // Le téléchargement du média a réussi
            this.message = 'Le fichier a été téléchargé avec succès !';
          } else {
            // La réponse de l'API ne contient pas de message de succès
            console.error('Erreur lors du téléchargement du fichier');
          }
        },
        error => {
          console.error(error); // Afficher l'erreur s'il y en a une
          // Ajoutez ici le code pour gérer l'erreur, par exemple, afficher un message d'erreur à l'utilisateur
        }
      );
  }


}
