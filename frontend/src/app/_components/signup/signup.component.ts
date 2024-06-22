import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../_services/api.service';
import { SignupDto } from '../../_models/authTypes';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  estudante: SignupDto = { nome: '', email: '', senha: '', idade: 0, curso: '' };

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    this.apiService.signup(this.estudante).subscribe(
      (response) => {
        console.log('Signup successful:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Signup failed:', error);
      }
    );
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
