import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = "https://localhost:7279/api/Auth";
  private tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem("token"));
  constructor(private http: HttpClient) {}

  login(dadosLogin: any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`, dadosLogin).pipe(
      tap(res => {
        localStorage.setItem("token", res.token);
        this.tokenSubject.next(res.token);
      })
    )
  }

  isAutenticado(): boolean{
    return !!this.tokenSubject.value;
  }

  logout() {
    localStorage.removeItem("token");
    this.tokenSubject.next(null);
  }
}
