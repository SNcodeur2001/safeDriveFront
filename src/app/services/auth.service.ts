import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) {}

  login(credentials:{email: string, password: string}):Observable<any> {

    // const data = { email, password: password };

    return this.http.post(`${this.apiUrl}/login`,credentials);
  }
}