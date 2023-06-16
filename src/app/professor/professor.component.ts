import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from './../professor.service';


@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {


  formGroupProfessor: FormGroup;
  submitted: boolean = false;
  isEditing : boolean = false;



  constructor( private formBuilder: FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    private professorService: ProfessorService



    ) {
      this.formGroupProfessor = formBuilder.group({
      id : [''],
      name : ['', [Validators.required]],
      rg : ['', [Validators.required]],
      telefone : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]]

      });
      }
        ngOnInit(): void {
          const id = Number(this.route.snapshot.paramMap.get("id"));
          this.getClientById(id);
        }


        getClientById(id: number) {
          this.professorService.getProfessor(id).subscribe({
            next: data =>{ this.formGroupProfessor.setValue(data);
              this.isEditing = true;
            }
          })

        }


      save(){
          this.submitted = true;
          if(this.formGroupProfessor.value){
            if(this.isEditing){
            this.professorService.update(this.formGroupProfessor.value).subscribe({
              next: () =>{
                    this.router.navigate(['home']);

              }
            })

          }
          else{
            this.professorService.save(this.formGroupProfessor.value).subscribe({
              next: () => {
                this.router.navigate(['home']);
              }
            })
          }
        }


      }

      cancel(){

        this.router.navigate(['home']);
      }

      get name( ) : any {
        return this.formGroupProfessor.get("name");
      }

      get email( ) : any {
        return this.formGroupProfessor.get("email");
      }

      get rg( ) : any {
        return this.formGroupProfessor.get("rg");
      }
      get telefone( ) : any {
        return this.formGroupProfessor.get("telefone");
      }





      }


