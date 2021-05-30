import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImoveisListaComponent } from './imoveis-lista/imoveis-lista.component';
import { ImovelCardComponent } from './imovel-card/imovel-card.component';
import { ImovelDetalhesComponent } from './imovel-detalhes/imovel-detalhes.component';
import { AgendarComponent } from './agendar/agendar.component';
import { FilterComponent } from './filter/filter.component';
import { FavoritasComponent } from './favoritas/favoritas.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { CadastrarImovelComponent } from './cadastrar-imovel/cadastrar-imovel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ImoveisListaComponent,
    ImovelCardComponent,
    ImovelDetalhesComponent,
    AgendarComponent,
    FilterComponent,
    FavoritasComponent,
    LoginComponent,
    RegistrarComponent,
    CadastrarImovelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  entryComponents: [
    NavbarComponent,
    ImoveisListaComponent,
    ImovelCardComponent,
    FilterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
