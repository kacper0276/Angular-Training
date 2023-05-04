import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { InputNauka } from './inputNauka/inputNauka.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './interakcjaKomponentow/child/child.component';
import { InterakcjaKomponentow } from './interakcjaKomponentow/interakcjaKomponentow.component';
import { NgContentComponent } from './interakcjaKomponentow/ngContent/ngContent.component';
import { CyklZyciaKomponentuComponent } from './cyklZyciaKomponetu/cyklZyciaKomponetu.component';
import { StylizacjaKomponentow } from './stylizacjaKomponentow/stylizacjaKomponentow.component';
import { SerwisyNauka } from './serwisyNaukaIDyrektywy/serwisyNauka.components';
import { CheckedDirective } from './dyrektywyNauka/checked.directive';
import { DateDirective } from './dyrektywyNauka/date.directive';
import { TransformTextPipe } from './pipe/transformtext.pipe';
import { SortNamePipe } from './pipe/sort-name.pipe';
import { zapytaniaHTTPComponent } from './zapytaniaHTTP/zapytaniaHTTP.component';
import { ZapytaniaHTTPService } from './zapytaniaHTTP/service/zapytaniaHTTP.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InputNauka,
    ChildComponent,
    InterakcjaKomponentow,
    NgContentComponent,
    CyklZyciaKomponentuComponent,
    StylizacjaKomponentow,
    SerwisyNauka,
    CheckedDirective,
    DateDirective,
    TransformTextPipe,
    SortNamePipe,
    zapytaniaHTTPComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ZapytaniaHTTPService],
  bootstrap: [AppComponent],
})
export class AppModule {}
