import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CtName',
})
export class PipeTestPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == 'new-city') {
      return 'Old City: ' + value;
    } else {
      return 'City name: ' + value;
    }
  }
}
