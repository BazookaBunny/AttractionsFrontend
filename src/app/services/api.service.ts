import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private base = environment.apiBaseUrl;

  // Example endpoints inferred from React code:
  // - /api/authApi
  // - /api/restaurantsApi
  // - http://localhost:5263/api
  // - http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name
  // - https://bit.ly/CRA-vitals
  // - https://github.com/testing-library/jest-dom
  // - https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

  get<T>(path: string) {
    return this.http.get<T>(`${this.base}${path}`);
  }

  post<T>(path: string, body: any) {
    return this.http.post<T>(`${this.base}${path}`, body);
  }

  put<T>(path: string, body: any) {
    return this.http.put<T>(`${this.base}${path}`, body);
  }

  delete<T>(path: string) {
    return this.http.delete<T>(`${this.base}${path}`);
  }
}
