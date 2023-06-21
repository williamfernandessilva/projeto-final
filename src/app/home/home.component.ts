import { Professor } from './../professor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
import { Escola } from '../escola';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 professor: Professor[] = [];


  constructor(private professorService: ProfessorService,
    private router : Router       ){

  }


  ngOnInit(): void {
    this.loadProfessor();


  }
  loadProfessor() {
    this.professorService.getProfessores().subscribe(
      {
        next : data => this.professor = data
      }
    );

  }




 create(){
  this.router.navigate(['createprofessor']);
 }



  edit(professor: Professor){
    this.router.navigate(['professorDetails', professor.id]);




  }

  delete(Professor: Professor){
    this.professorService.delete(Professor).subscribe({
      next: ()=> this.loadProfessor()
    })


  }



}


