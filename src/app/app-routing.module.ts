import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarComponent } from './agendar/agendar.component';
import { CadastrarImovelComponent } from './cadastrar-imovel/cadastrar-imovel.component';
import { FavoritasComponent } from './favoritas/favoritas.component';
import { HomeComponent } from './home/home.component';
import { ImovelDetalhesComponent } from './imovel-detalhes/imovel-detalhes.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'imovel', component: ImovelDetalhesComponent },
  { path: 'agendar', component: AgendarComponent },
  { path: 'favoritas', component: FavoritasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'cadastrar', component: CadastrarImovelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
