import { Component } from '@angular/core';

@Component({
  selector: 'app-inputnauka',
  templateUrl: './inputNauka.component.html',
  styleUrls: ['./inputNauka.component.scss'],
})
export class InputNauka {
  inputText = 'Pole tekstowe';
  inputText2Way = '';
  button = true;
  showClick = '';
  tekst = '';

  zmianaTekstu(event: any) {
    this.tekst = event.target.value;
  }

  click() {
    this.showClick = 'Przycisk aktywy';
    this.button = false;
  }
}
