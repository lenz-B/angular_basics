import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEven',
  standalone: true
})
export class IsEvenPipe implements PipeTransform {

  transform(value: number): boolean {
    return value % 2 === 0
  }

}
