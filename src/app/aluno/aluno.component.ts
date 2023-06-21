import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Escola } from '../escola';
import { EscolaService } from '../escola.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {


  isEditing : Boolean = false;
  formGroupClient : FormGroup;
  Escola: Escola[] = [];


  constructor(private escolaService: EscolaService,
    private formBuilder: FormBuilder) {
this.formGroupClient = formBuilder.group({
id : [''],
name : [''],
email : [''],
rg : [''],
telefone : ['']

});
}

ngOnInit(): void {
this.loadClients();

}
loadClients() {
this.escolaService.getEscola().subscribe(
{
next : data => this.Escola = data
}
);

}

save(){
if(this.isEditing)

{
this.escolaService.update(this.formGroupClient.value).subscribe(
{
next: data => {
  this.loadClients();
  this.formGroupClient.reset();
  this.isEditing = false;

}
}
)

}
else{
this.escolaService.save(this.formGroupClient.value).subscribe(
{
next: data => {
this.Escola.push(data);
this.formGroupClient.reset();
}
}

);
}



}
edit(escola: Escola){
  this.formGroupClient.setValue(escola);
  this.isEditing = true;




}

delete(escola: Escola){
  this.escolaService.delete(escola).subscribe({
    next: ()=> this.loadClients()
  })


}



}


