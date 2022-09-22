import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComoFuncionaComponent } from './components/como-funciona/como-funciona.component';
import { DefinicoesComponent } from './components/definicoes/definicoes.component';
import { GmailComponent } from './components/gmail/gmail.component';
import { HomeComponent } from './components/home/home.component';
import { ImagensComponent } from './components/imagens/imagens.component';
import { NegociosComponent } from './components/negocios/negocios.component';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PrivacidadeComponent } from './components/privacidade/privacidade.component';
import { PublicidadeComponent } from './components/publicidade/publicidade.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { TermosComponent } from './components/termos/termos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gmail', component: GmailComponent },
  { path: 'imagens', component: ImagensComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'publicidade', component: PublicidadeComponent },
  { path: 'negocios', component: NegociosComponent},
  { path: 'como-funciona', component: ComoFuncionaComponent },
  { path: 'privacidade', component: PrivacidadeComponent },
  { path: 'termos', component: TermosComponent },
  { path: 'definicoes', component: DefinicoesComponent },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
