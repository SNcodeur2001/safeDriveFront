import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  uploadMedia(media: File) {
    const formData = new FormData();
    formData.append('media', media);

    return this.http.post<any>('http://localhost:8000/api/upload-media', formData);
  }
}
