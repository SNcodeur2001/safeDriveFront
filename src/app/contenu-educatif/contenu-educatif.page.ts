import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
