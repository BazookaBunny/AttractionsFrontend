import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface LoginResponse { token: string;[k: string]: any }

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private api: ApiService) { }

  // .pipe() este metoda prin care aplici operatori RxJS asupra fluxului de date (aici flux = răspunsul HTTP).
  // tap(res => ...) este un side effect: nu modifică valoarea, doar face ceva atunci când vine răspunsul.
  // Gândește-te la Observable ca la o „promisiune de date multiple în timp”
  login(username: string, password: string): Observable<LoginResponse> {
    return this.api.post<LoginResponse>('/auth/login', { username, password }).pipe(
      tap(res => localStorage.setItem('token', res.token))
    );
  }

  logout() { localStorage.removeItem('token'); }

  isAuthenticated(): boolean { return !!localStorage.getItem('token'); }
}
