import { Component } from '@angular/core';

@Component({
  selector: 'app-naukainterakcji',
  templateUrl: './interakcjaKomponentow.component.html',
})
export class InterakcjaKomponentow {
  constructor() {}

  tasks = ['Tak', 'Nie', 'Cos'];

  selected(task: string): void {
    console.log(task);
  }
}
