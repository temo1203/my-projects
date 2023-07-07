import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'checker' })
export class PipeTestPipe2 implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return value.substring(0, value.length - 3);
  }
}
