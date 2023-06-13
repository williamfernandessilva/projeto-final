import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {


  formGroupProfessor!: FormGroup;
  submitted: boolean = false;
  isEditing : boolean = false;
  ProfessorService: any;

  constructor( private formBuilder: FormBuilder,
    private route : ActivatedRoute,
    private router : Router



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
          this.ProfessorService.getClient(id).subscribe({
            next: data =>{ this.formGroupProfessor.setValue(data);
              this.isEditing = true;
            }
          })

        }


      save(){
          this.submitted = true;
          if(this.formGroupProfessor.value){
            if(this.isEditing){
            this.ProfessorService.update(this.formGroupProfessor.value).subscribe({
              next: () =>{
                    this.router.navigate(['clients']);

              }
            })

          }
          else{
            this.ProfessorService.save(this.formGroupProfessor.value).subscribe({
              next: () => {
                this.router.navigate(['clients']);
              }
            })
          }
        }


      }

      cancel(){

        this.router.navigate(['clients']);
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


