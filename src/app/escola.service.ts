import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {
  url = " http://localhost:3000/aluno";
  constructor() { }
}
