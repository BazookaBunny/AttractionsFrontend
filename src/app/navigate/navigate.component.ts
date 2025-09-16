import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgIf], // ← RouterOutlet aici
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})

export class Navigate {
  router = inject(Router);
  auth = inject(AuthService);

  isAuthed(): boolean {
    return this.auth.isAuthenticated();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
