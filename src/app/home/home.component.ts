import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
import { Escola } from '../escola';
import { Professor } from '../professor';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  aluno: Escola[] = [];
  professor: Professor[] = [];


  constructor(private professorService: ProfessorService,
    private router : Router       ){

  }


  ngOnInit(): void {
    this.loadProfessor();

  }
  loadProfessor() {
    this.professorService.getProfessor().subscribe(
      {
        next : data => this.professor = data
      }
    );

  }


 create(){
  this.router.navigate(['createProfessor']);
 }



  edit(professor: Professor){
    this.router.navigate(['professorDatails', professor.id]);




  }

  delete(client: Professor){
    this.professorService.deletep(client).subscribe({
      next: ()=> this.loadProfessor()
    })


  }



}


