import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://192.168.2.24:8000/api';

  constructor(private http: HttpClient) {}

  login(credentials:{email: string, password: string}):Observable<any> {

    // const data = { email, password: password };

    return this.http.post(`${this.apiUrl}/login`,credentials);
  }


  updateScore(): Observable<any> {
    return this.http.put<any>('http://localhost:8000/api/update-score', {});
  }



  deleteUsers(id: number): Observable<any> {
    const url = `http://localhost:8000/api/supprimer/${id}`;
    return this.http.delete<any>(url);
  }

  getUsersId(id: number): Observable<any> {
    const url = `http://localhost:8000/api/getusers-by-id/${id}`;
    return this.http.get<any>(url);
  }
}
