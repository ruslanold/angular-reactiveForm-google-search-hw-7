import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPage'
})
export class SearchPagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
