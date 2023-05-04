import { Component, OnInit } from '@angular/core';
import { ClickService } from './services/click.service';

@Component({
  selector: 'app-serwisy-nauka',
  templateUrl: './serwisyNauka.components.html',
  providers: [ClickService], // Importujesz service do twóch komponentów i można łączyć wartości
})
export class SerwisyNauka implements OnInit {
  click = 0;
  nauka = 'pierwsza litera duża';

  constructor(private clickService: ClickService) {}

  ngOnInit(): void {
    this.clickService.getSum().subscribe((data) => {
      this.click = data;
    });
  }

  add(): void {
    this.click += 1;
    this.clickService.addClick();
  }
}
