import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login {
  // private fbuilder = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  // form = this.fbuilder.group({
  //   username: [''],
  //   password: ['']
  // });
  username = '';
  password = '';

  handleLogin() {
    if (!this.username || !this.password) alert("One or more fields are missing!");

    // Când faci subscribe, Angular trimite efectiv cererea HTTP
    this.auth.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => alert('Invalid credentials')
    });
  }

}
