import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ClickService {
  private sumClick = 0;
  private sum = new Subject<number>();
  constructor() {}

  addClick(): void {
    this.sumClick += 1;
    this.sum.next(this.sumClick); // rxJS informuje że wartość się zmieniła
    console.log(`Service: ${this.sumClick}`);
  }

  getSum(): Observable<number> {
    return this.sum.asObservable();
  }
}
