import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
import { HomeComponent } from './home/home.component';
import { ProfessorComponent } from './professor/professor.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'aluno', component: AlunoComponent},
  {path : 'professor', component: ProfessorComponent},
  {path: 'professorDatails/:id', component : ProfessorComponent},
  {path: 'createprofessor', component : ProfessorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
