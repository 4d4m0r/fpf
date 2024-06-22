import { Component } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public user: any = '';

  constructor(private apiService: ApiService,private router: Router) {}

  isLoggedIn(): boolean {
    return this.apiService.isLoggedIn();
  }

  getUser(): any {
    return this.user = this.apiService.getUser();
  }

  logout(): void {
    this.apiService.logout();
    this.router.navigate(['/login']);
  }
}
