import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joia } from '../models/joia';

@Injectable({
  providedIn: 'root',
})
export class JoiaService {
  private apiUrl = "https://localhost:7279/api/Joia";
  constructor(private http: HttpClient) {}

  obterTodos(): Observable<Joia[]>{
    return this.http.get<Joia[]>(this.apiUrl)
  }

  obterPorId(id: number): Observable<Joia>{
    return this.http.get<Joia>(this.apiUrl + `/${id}`)
  }

  criarJoia(joia: Joia): Observable<Joia>{
    return this.http.post<Joia>(this.apiUrl, joia)
  }

  atualizarJoia(joia: Joia): Observable<Joia>{
    return this.http.put<Joia>(this.apiUrl + `/${joia.id}`, joia)
  }

  excluirJoia(id: number): Observable<void>{
    return this.http.delete<void>(this.apiUrl + `/${id}`)
  }
}
