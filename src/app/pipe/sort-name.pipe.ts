import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortname',
  pure: true, // <- domyślnie true, false cały czas działa w tle (mało wydajne) inaczej wykrywa jak będzie nowa referencja
})
export class SortNamePipe implements PipeTransform {
  transform(value: Array<string>, ...args: any[]) {
    return value.sort((a, b) => {
      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
