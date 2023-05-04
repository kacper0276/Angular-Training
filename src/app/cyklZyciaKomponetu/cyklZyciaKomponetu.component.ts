import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cyklzyciakomponentu',
  templateUrl: './cyklZyciaKomponetu.component.html',
})
export class CyklZyciaKomponentuComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('Contruktor');
  }

  // Uruchamia się na początku, przed ngOnInit,
  // Sprawdza czy zmieniły się zbindowane pola komponentu
  // Musi zmienić się referenjca
  // Wartość lub tworzona nowa instancja obiektu (nie zmiana pola w obiekcie)
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`${changes} #1 `);
  }

  // Uruchamia się jeden raz podczas inicjalizacji komponentu
  // Uruchomi się po konstruktorze i po ngOnChange
  ngOnInit(): void {
    console.log('ngOnInit #2 - uruchomione');
  }

  // Uruchamia się przy każdej zmianie, wywołaniu eventa etc
  ngDoCheck(): void {
    console.log('ngDoCheck #3 - uruchomione');
  }

  // Uruchamia się po inicjalizacji np <ng-content>
  ngAfterContentInit(): void {
    console.log('#4');
  }

  // Uruchamia się po każdej zmianie np. <ng-content>
  ngAfterContentChecked(): void {
    console.log('#5');
  }

  //  Uruchamia się po inicjalizacji widoku
  ngAfterViewInit(): void {
    console.log('#6');
  }

  // Uruchamia się po każdej zmianie widoku
  ngAfterViewChecked(): void {
    console.log('#7');
  }

  // Uruchamia się po każdej zmianie widoku
  ngOnDestroy(): void {
    console.log('#8');
  }

  select(input: HTMLInputElement) {
    console.log(input.value);
    console.log(this.inputEl.nativeElement.value);
  }

  // Referencje
  // @ViewChild('childRef')
  // childComponent: NgContentComponent;

  @ViewChild('inputText')
  inputEl: ElementRef;
}
