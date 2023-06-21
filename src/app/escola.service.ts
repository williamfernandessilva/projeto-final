import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escola } from './escola';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {
  url = "http://localhost:3000/aluno";
  constructor (private http: HttpClient){ }


  getEscola(): Observable<Escola[]>{
   return this.http.get<Escola[]>(this.url)
  }


  save(escola:Escola):Observable<Escola>{
   return this.http.post<Escola>(this.url,escola);

  }
  update(escola:Escola): Observable<Escola>
 {
   return this.http.put<Escola>(`${this.url}/${escola.id}`, escola);
 }
  delete(escola:Escola):Observable<void>{
   return this.http.delete<void>(`${this.url}/${escola.id}`);

  }
 }
