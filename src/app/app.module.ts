import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GmailComponent } from './components/gmail/gmail.component';
import { ImagensComponent } from './components/imagens/imagens.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { PublicidadeComponent } from './components/publicidade/publicidade.component';
import { NegociosComponent } from './components/negocios/negocios.component';
import { ComoFuncionaComponent } from './components/como-funciona/como-funciona.component';
import { PrivacidadeComponent } from './components/privacidade/privacidade.component';
import { TermosComponent } from './components/termos/termos.component';
import { DefinicoesComponent } from './components/definicoes/definicoes.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GmailComponent,
    ImagensComponent,
    SobreComponent,
    PublicidadeComponent,
    NegociosComponent,
    ComoFuncionaComponent,
    PrivacidadeComponent,
    TermosComponent,
    DefinicoesComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
