import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../_services/api.service';
import { LoginDto } from '../../_models/authTypes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: LoginDto = { email: '', senha: '' };
  errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    this.apiService.login(this.credentials).subscribe(
      (response) => {
        localStorage.setItem('currentUser', JSON.stringify(response));
        console.log('Login successful:', response);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        //Tratamento errado do erro
        console.error('Login falhou:', error);
        this.errorMessage = 'Usuário ou senha inválidos';
      }
    );
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
