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

  getProfessores(): Observable<Professor[]>{
    return this.http.get<Professor[]>(this.url)
  }
   getProfessor(id: number): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.url}/${id}`);
   }



   save(professor:Professor):Observable<Professor>{
    return this.http.post<Professor>(this.url,professor);

   }
   update(professor:Professor): Observable<Professor>
  {
    return this.http.put<Professor>(`${this.url}/${professor.id}`, professor);
  }
   delete(professor:Professor):Observable<void>{
    return this.http.delete<void>(`${this.url}/${professor.id}`);

   }
}
