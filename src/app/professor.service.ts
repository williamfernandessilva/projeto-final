import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  url = " http://localhost:3000/professor";
  constructor(private http: HttpClient) { }

  getProfessor(): Observable<Professor[]>{
    return this.http.get<Professor[]>(this.url)

   }
   getprofessor(id: number): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.url}/${id}`);
   }



   savep(Professor:Professor):Observable<Professor>{
    return this.http.post<Professor>(this.url,Professor);

   }
   updatep(Professor:Professor): Observable<Professor>
  {
    return this.http.put<Professor>(`${this.url}/${Professor.id}`, Professor);
  }
   deletep(Professor:Professor):Observable<void>{
    return this.http.delete<void>(`${this.url}/${Professor.id}`);

   }
}
