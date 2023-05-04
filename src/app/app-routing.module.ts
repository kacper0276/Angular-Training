import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from '../app/nav/nav.component';
import { InputNauka } from './inputNauka/inputNauka.component';
import { InterakcjaKomponentow } from './interakcjaKomponentow/interakcjaKomponentow.component';
import { CyklZyciaKomponentuComponent } from './cyklZyciaKomponetu/cyklZyciaKomponetu.component';
import { StylizacjaKomponentow } from './stylizacjaKomponentow/stylizacjaKomponentow.component';
import { SerwisyNauka } from './serwisyNaukaIDyrektywy/serwisyNauka.components';
import { zapytaniaHTTPComponent } from './zapytaniaHTTP/zapytaniaHTTP.component';

const routes: Routes = [
  { path: 'komponenty', component: NavComponent },
  { path: 'input', component: InputNauka },
  { path: 'interakcjakomponentow', component: InterakcjaKomponentow },
  { path: 'cyklzyciakomponentu', component: CyklZyciaKomponentuComponent },
  { path: 'stylizacjakomponentu', component: StylizacjaKomponentow },
  { path: 'serwisynauka', component: SerwisyNauka },
  { path: 'zapytaniahttp', component: zapytaniaHTTPComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
