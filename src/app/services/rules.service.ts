// src/app/services/rules.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RulesService {
  private apiUrl = 'http://localhost:8000/api/rules';

  constructor(private http: HttpClient) {}

  getRules(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
