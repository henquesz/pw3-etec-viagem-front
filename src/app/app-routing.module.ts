import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesComponent } from './heroes/heroes.component';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';


const routes: Routes = [
  { path: 'Listar', component: ListagemViagemComponent },
  { path: 'Excluir/:id', component: ExclusaoViagemComponent },
  { path: 'Detalhes/:id', component: DetalhesViagemComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
