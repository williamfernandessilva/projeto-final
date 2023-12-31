import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from './../professor.service';
import { Professor } from '../professor';


@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {


  formGroupClient : FormGroup;
  submitted: boolean = false;
  isEditing : boolean = false;




  constructor( private formBuilder: FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    private professorService: ProfessorService



    ) {
      this.formGroupClient = formBuilder.group({
      id : [''],
      name : ['', [Validators.required]],
      rg : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      telefone : ['', [Validators.required]],

      });
      }
        ngOnInit(): void {
          const id = Number(this.route.snapshot.paramMap.get("id"));
          this.getProfessorById(id);
        }


        getProfessorById(id: number) {
          this.professorService.getProfessor(id).subscribe({
            next: data =>{ this.formGroupClient.setValue(data);
              this.isEditing = true;
            }
          })

        }


      save(){
          this.submitted = true;
          if(this.formGroupClient.value){
            if(this.isEditing){
            this.professorService.update(this.formGroupClient.value).subscribe({
              next: () =>{
                    this.router.navigate(['home']);

              }
            })

          }
          else{
            this.professorService.save(this.formGroupClient.value).subscribe({
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
        return this.formGroupClient.get("name");
      }

      get email( ) : any {
        return this.formGroupClient.get("email");
      }

      get rg( ) : any {
        return this.formGroupClient.get("rg");
      }
      get telefone( ) : any {
        return this.formGroupClient.get("telefone");
      }





      }


