import { Pipe, PipeTransform } from '@angular/core';

/**
 * Truncate the string value and '...'
 * Usage
 *   value | truncate:lenght
 * Exemple
 *   {{ 'some text' | truncate:4 }}
 *   formats to : some...
 */
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, lenght: number): string {
    return (value.length <= lenght) ? value : value.substr(0, lenght) + '...';
  }
}
