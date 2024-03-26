import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  utilisateur: any = {};


  constructor(private route: ActivatedRoute,
     private authService: AuthService,
     private http :HttpClient) { }

  ngOnInit() {


  }


  onSubmit() {
    this.http.put(`http://localhost:8000/api/modification/${this.utilisateur.id}`, this.utilisateur)
        .subscribe(response => {
            // Gérer la réponse de l'API
        });
}
}
