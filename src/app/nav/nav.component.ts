import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor() {}

  title = 'Tytuł';

  data = new Date();

  pi = Math.PI;

  tablica = [
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
    'Niedziela',
  ];

  switchTest = [1, 2, 3, 4, 5, 1];
}
