import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'unsenitize',
  standalone: true,
})
export class UnsenitizePipe implements PipeTransform {
  constructor(private unseni: DomSanitizer) {}
  transform(value: string, ...args: unknown[]): unknown {
    return this.unseni.bypassSecurityTrustUrl(value);
  }
}
