import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from './models';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
private  apiUrl = "http://localhost:8000/api";
  constructor(private http:HttpClient) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        const user: User = {
          name: response.user.name,
          email: response.user.email,
          role: response.role,
        };
        const token = response.token;
        // Enregistrez les informations utilisateur dans le stockage local
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }
}
