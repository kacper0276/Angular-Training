import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-stylizacjakomponentow',
  templateUrl: './stylizacjaKomponentow.component.html',
  styleUrls: ['./stylizacjaKomponentow.component.scss'],
  // encapsulation: ViewEncapsulation.None, - style dostępnie glogalnie (lub wrzucenie do style.css (scss)) //  ViewEncapsulation.Emulated - domyślnie, pozwala stosotwać style tylko w obrębie komponentu
})
export class StylizacjaKomponentow {
  zmienna = 5;

  tab = ['jeden', 'dwa', 'trzy', 'cztery'];

  getColor(): string {
    return this.zmienna > 5 ? 'black' : 'green';
  }
}
