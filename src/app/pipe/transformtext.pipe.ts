import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformtext',
})
export class TransformTextPipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    return value.charAt(0).toUpperCase() + value.slice(1) + args[0];
  }
}
