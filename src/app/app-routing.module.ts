import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { ContatoComponent } from './contato/contato.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HistoriaComponent } from './historia/historia.component';
import { CarroselComponent } from './carrosel/carrosel.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'personagens', component: PersonagensComponent },
  { path: 'contato',component:ContatoComponent },
  { path: 'rodape',component:RodapeComponent },
  { path: 'carrosel',component:CarroselComponent },
  { path:'quem-somos', component:QuemSomosComponent },
  { path: 'historia/:id', component: HistoriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }