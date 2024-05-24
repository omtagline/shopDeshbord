import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todofilter',
  standalone: true,
})
export class TodofilterPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(args);
    return null;
  }
}
