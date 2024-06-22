import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { LoginDto, SignupDto } from '../_models/authTypes';
import { tap } from 'rxjs/operators';
import { Estudante } from '../_models/studentTypes';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  signup(estudante: SignupDto): Observable<any> {
    return this.http.post(`${this.api}/signup`, estudante, { withCredentials: true });
  }

  login(credentials: LoginDto): Observable<any> {
    return this.http.post(`${this.api}/login`, credentials, { withCredentials: true }).pipe(
      tap((response) => {
        localStorage.setItem('currentUser', JSON.stringify(response));
      })
    );
  }

  getUser(): any {
    return localStorage.getItem('currentUser');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  logout(): Observable<any> {
    localStorage.removeItem('currentUser');
    return this.http.post(`${this.api}/logout`, {}, { withCredentials: true });
  }

  getAllStudents(): Observable<Estudante[]> {
    return this.http.get<Estudante[]>(`${this.api}/estudante`, { withCredentials: true });
  }

  addStudent(estudante: Estudante): Observable<any> {
    return this.http.post(`${this.api}/estudante`, estudante, { withCredentials: true });
  }

  editStudent(estudante: Estudante): Observable<any> {
    return this.http.put(`${this.api}/estudante/${estudante.id}`, estudante, { withCredentials: true });
  }

  showStudent(estudante: string): Observable<any> {
    return this.http.get(`${this.api}/estudante/${estudante}`, { withCredentials: true });
  }

  deleteStudent(estudante: string): Observable<any> {
    return this.http.delete(`${this.api}/estudante/${estudante}`,{ withCredentials: true });
  }
  
}
